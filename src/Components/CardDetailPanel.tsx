import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config";

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

  const generatePage = async () => {
    await axios
      .post(API_URL + "/page?prof=" + activeCard.title)
      .then((resp) => {
        const page = JSON.stringify(resp.data)
        localStorage.setItem("aiPage", page);
      })
      .finally(() => {
        nav("/career/description");
      });
  };

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
