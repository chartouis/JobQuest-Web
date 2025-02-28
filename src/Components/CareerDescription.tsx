import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const CareerDetailPage: React.FC = () => {
  // This would normally be fetched from an API based on the ID
  const [careerDetail, setCareer] = useState({
    title: "",
    description: "",
    responsibilities: [],
    skills: [],
    tasks: [
      { description: "", difficulty: "" },
      { description: "", difficulty: "" },
      { description: "", difficulty: "" },
    ],
    quiz: [
      { question: "", options: ["", "", "", ""], answer: "" },
      { question: "", options: ["", "", "", ""], answer: "" },
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    const storedData = localStorage.getItem("aiPage");

    if (storedData) {
      setCareer(JSON.parse(storedData));
    }
  }, []);

  // Function to determine difficulty badge color
  const getDifficultyColor = (difficulty: string): string => {
    switch (difficulty.toLowerCase()) {
      case "beginner":
        return "bg-green-100 text-green-800";
      case "intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  const [quiz, setquiz] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main content with padding for fixed header */}
      <div className="pt-16">
        {/* Hero Section */}
        <div className="bg-[#3fe881] bg-opacity-20 py-12">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl font-bold text-[#07273c] mb-4 text-center">
              {careerDetail.title}
            </h1>
            <p className="text-[#07273c] text-xl max-w-3xl mx-auto text-center">
              {careerDetail.description}
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-12">
          {/* Responsibilities Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#07273c] mb-6">
              Key Responsibilities
            </h2>
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <ul className="space-y-4">
                {careerDetail.responsibilities.map(
                  (responsibility: any, index: any) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-[#3fe881] p-2 rounded-full mr-4 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-[#07273c]"
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
                      <span className="text-gray-700 text-lg">
                        {responsibility}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#07273c] mb-6">
              Required Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {careerDetail.skills.map((skill: any, index: any) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-md border border-gray-100 flex items-center"
                >
                  <div className="bg-[#3fe881] bg-opacity-20 p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#07273c]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tasks Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#07273c] mb-6">
              Real life tasks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {careerDetail.tasks.map((task: any, index: any) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-[#07273c]">
                        Task {index + 1}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(
                          task.difficulty
                        )}`}
                      >
                        {task.difficulty}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-6">{task.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quiz Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#07273c] mb-6">
              Knowledge Check
            </h2>
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <div className="space-y-8">
                {careerDetail.quiz.map((quizItem: any, index: any) => (
                  <div
                    key={index}
                    className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0"
                  >
                    <h3 className="text-xl font-bold text-[#07273c] mb-4">
                      Question {index + 1}: {quizItem.question}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {quizItem.options.map((option: any, optIndex: any) => (
                        <div
                          key={optIndex}
                          className="flex items-center space-x-3"
                        >
                            <div>{optIndex+1}</div>
                          <input
                            type="radio"
                            id={`q${index}-opt${optIndex}`}
                            name={`question-${index}`}
                            className="h-5 w-5 text-[#3fe881] focus:ring-[#3fe881]"
                          />
                          <label
                            htmlFor={`q${index}-opt${optIndex}`}
                            className="text-gray-700"
                          >
                            {option}
                          </label>
                        </div>
                      ))}

                      <h1 className="text-[#3fe881] text-3xl">
                        {quiz ? careerDetail.quiz[index].answer : ""}
                      </h1>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <button
                  onClick={() => {
                    setquiz(!quiz);
                  }}
                  className="px-8 py-3 bg-[#07273c] text-white font-medium rounded-lg hover:opacity-90 transition-colors shadow-lg"
                >
                  Submit Answers
                </button>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="text-center py-8">
            <h2 className="text-2xl font-bold text-[#07273c] mb-4">
              Ready to go further?
            </h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Now that you've explored the basics of becoming a{" "}
              {careerDetail.title}, try out one of our interactive tasks to get
              hands-on experience!
            </p>
            <Link to="/game">
                <button className="px-8 py-3 bg-[#3fe881] text-[#07273c] font-bold rounded-lg hover:opacity-90 transition-colors shadow-lg">
                  Begin Interactive Experience
                </button>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-100 py-6">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <span className="text-[#07273c] font-bold text-xl">
              Job<span className="text-[#3fe881]">Quest</span>
            </span>
            <p className="text-gray-600">
              © 2025 JobQuest. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CareerDetailPage;
