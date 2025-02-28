import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

interface Card {
  title: string;
  fullDescription: string;
  skills: string[];
}

interface CardDetailPanelProps {
  activeCard?: Card;
}

const CardDetailPanel: React.FC<CardDetailPanelProps> = ({ activeCard }) => {
  const nav = useNavigate();
  if (!activeCard) return null;

  // const generatePage = async () => {
  //   await axios
  //     .post(API_URL + "/page?prof=" + activeCard.title)
  //     .then((resp) => {
  //       const page = JSON.stringify(resp.data);
  //       localStorage.setItem("aiPage", page);
  //     })
  //     .finally(() => {
  //       nav("/career/description");
  //     });
  // };

  const generatePage =async (): Promise<Career> => {
    const APIKEY =
      "b116edccd7faa07443f4610fa7c44182936a40ce54deb73de9c458c4e72b3289";

    const asd = `Generate structured JSON for a given career. The JSON must strictly follow this format:
    
json

{
    "title": "",
    "description": "",
    "responsibilities": [],
    "skills": [],
    "tasks": [
        { "description": "", "difficulty": "" },
        { "description": "", "difficulty": "" },
        { "description": "", "difficulty": "" }
    ],
    "quiz": [
        { "question": "", "options": ["", "", "", ""], "answer": "" },
        { "question": "", "options": ["", "", "", ""], "answer": "" }
    ]
}
Include:

title: Name of the career.
description: A short explanation of the career.
responsibilities: A list of key duties.
skills: A list of required skills.
tasks: Three example tasks, each with a difficulty level ('easy', 'medium', or 'hard').
quiz: Two multiple-choice questions with four answer options each and the correct answer specified.
Return ONLY JSON, with no additional text. Generate it for: ${activeCard.title}`;

    // Escape newlines and quotes to avoid invalid JSON
    const safeAsd = asd.replace(/\n/g, "\\n").replace(/"/g, '\\"');

    return await axios
      .post(
        "https://api.together.xyz/v1/chat/completions",
        {
          model: "meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo",
          temperature: 1.0,
          context_length_exceeded_behavior: "error",
          messages: [
            {
              role: "user",
              content: safeAsd,
            },
          ],
        },
        {
          headers: {
            accept: "application/json",
            "content-type": "application/json",
            authorization: `Bearer ${APIKEY}`,
          },
        }
      )
      .then((response) => {
        // Extract the nested JSON string from AI's message content
        const careerJson = response.data.choices[0].message.content;

        // Parse the actual career data
        const page = careerJson
        localStorage.setItem("aiPage", page);
        return JSON.parse(careerJson) as Career;
      })
      .catch((error) => {
        throw new Error(`Failed to parse AI response: ${error.message}`);
      })
      .finally(() => {
        nav("/career/description");
      });
  };

  // Type definition for the Career object
  interface Career {
    title: string;
    description: string;
    responsibilities: string[];
    skills: string[];
    tasks: {
      description: string;
      difficulty: string;
    }[];
    quiz: {
      question: string;
      options: string[];
      answer: string;
    }[];
  }

  // Type definition for the API response structure (not needed with axios)

  return (
    <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 h-full">
      <h2 className="text-4xl font-bold text-[#07273c] mb-6">
        {activeCard.title}
      </h2>

      <p className="text-gray-700 mb-6">{activeCard.fullDescription}</p>

      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-[#07273c] mb-3">
          You will have to know:
        </h3>
        <ul className="space-y-3">
          {activeCard.skills.map((skill, index) => (
            <li key={index} className="flex items-start">
              <div className="bg-[#3fe881] p-2 rounded-full mr-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-[#07273c]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-gray-700">{skill}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <button
          onClick={generatePage}
          className="px-8 py-3 bg-[#07273c] text-white font-medium rounded-lg hover:opacity-90 transition-colors shadow-lg"
        >
          Try This Career
        </button>
      </div>
    </div>
  );
};

export default CardDetailPanel;
