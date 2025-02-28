import React, { useState, useRef } from "react";
import Header from "./Header";
import CarouselCard from "./CarouselCard";
import CardDetailPanel from "./CardDetailPanel";

interface Career {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  skills: string[];
  icon: React.ReactNode;
  resLink: string;
}

const careerData: Career[] = [
  {
    id: 1,
    title: "Bartender",
    description: "Master the art of mixology and create delicious cocktails.",
    fullDescription:
      "As a bartender, you'll learn to craft exceptional drinks while providing outstanding customer service in a fast-paced environment. You'll develop skills in mixology, ingredient knowledge, and creating memorable experiences for customers.",
    skills: [
      "Mixology techniques and cocktail recipes",
      "Customer service and communication",
      "Speed and efficiency in a high-pressure environment",
      "Menu development and innovation",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-24 w-24 text-[#07273c]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    resLink:"https://en.wikipedia.org/wiki/Bartender"
  },
  {
    id: 2,
    title: "Web Developer",
    description:
      "Build and maintain websites and applications using modern technologies.",
    fullDescription:
      "Web developers create and maintain websites and web applications. You'll learn to write code, solve problems, and build digital experiences that are both functional and visually appealing.",
    skills: [
      "Frontend development with HTML, CSS, and JavaScript",
      "Backend programming and database management",
      "Responsive design principles",
      "Testing and debugging techniques",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-24 w-24 text-[#07273c]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    resLink:"https://en.wikipedia.org/wiki/Web_developer"
  },
  {
    id: 3,
    title: "Nurse",
    description:
      "Provide essential healthcare services and compassionate patient care.",
    fullDescription:
      "Nurses are the backbone of healthcare systems, providing critical care and support to patients. You'll develop skills in patient assessment, treatment administration, and empathetic communication.",
    skills: [
      "Patient assessment and vital signs monitoring",
      "Medication administration and management",
      "Wound care and treatment procedures",
      "Patient education and advocacy",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-24 w-24 text-[#07273c]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    resLink:"https://en.wikipedia.org/wiki/Nursing"
  },
  {
    id: 4,
    title: "Chef",
    description: "Create culinary masterpieces and manage kitchen operations.",
    fullDescription:
      "Chefs combine creativity with technical skill to prepare delicious meals. You'll learn cooking techniques, ingredient selection, menu planning, and kitchen management.",
    skills: [
      "Culinary techniques and food preparation",
      "Menu planning and recipe development",
      "Food safety and sanitation protocols",
      "Kitchen management and team coordination",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-24 w-24 text-[#07273c]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
        />
      </svg>
    ),
    resLink:"https://en.wikipedia.org/wiki/Chef"
  },
  {
    id: 5,
    title: "Graphic Designer",
    description:
      "Create visual concepts to communicate ideas that inspire and inform.",
    fullDescription:
      "Graphic designers use visual elements to communicate ideas and messages. You'll develop skills in design software, typography, color theory, and visual communication.",
    skills: [
      "Design software proficiency (Adobe Creative Suite)",
      "Typography and layout principles",
      "Brand identity development",
      "Visual communication and problem-solving",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-24 w-24 text-[#07273c]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        />
      </svg>
    ),
    resLink:"https://en.wikipedia.org/wiki/Graphic_design"
  },
];

const CarouselPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  // Calculate which items to show based on active index
  const visibleItems = () => {
    const items: any[] = [];

    // Previous item (if exists)
    if (activeIndex > 0) {
      items.push({
        ...careerData[activeIndex - 1],
        position: "prev",
        isActive: false,
      });
    }

    // Current active item
    items.push({
      ...careerData[activeIndex],
      position: "active",
      isActive: true,
    });

    // Next item (if exists)
    if (activeIndex < careerData.length - 1) {
      items.push({
        ...careerData[activeIndex + 1],
        position: "next",
        isActive: false,
      });
    }

    return items;
  };

  // Function to navigate to the previous card
  const goToPrevious = () => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  // Function to navigate to the next card
  const goToNext = () => {
    if (activeIndex < careerData.length - 1) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main content with padding to account for fixed header */}
      <div className="pt-16">
        {/* Title Section */}
        <div className="bg-[#3fe881] bg-opacity-20 py-12">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl font-bold text-[#07273c] mb-6 text-center">
              Explore Career Paths
            </h1>
            <p className="text-[#07273c] text-xl max-w-3xl mx-auto text-center">
              Discover and experience different careers before making your
              decision. Use the navigation buttons to browse options.
            </p>
          </div>
        </div>

        {/* Carousel and Detail Section */}
        <div
          ref={carouselRef}
          className="min-h-screen flex flex-col md:flex-row"
        >
          {/* Left side - Card Carousel */}
          <div className="w-full md:w-1/2 flex items-center justify-center relative py-20">
            <div className="relative h-96 w-full max-w-md flex items-center justify-center">
              {visibleItems().map((item: any) => {
                let positionClass = "absolute transition-all duration-500";

                if (item.position === "prev") {
                  positionClass += " -translate-y-40 z-10";
                } else if (item.position === "next") {
                  positionClass += " translate-y-40 z-10";
                } else if (item.position === "active") {
                  positionClass += " z-20"; // Active card gets a higher z-index.
                }

                return (
                  <div key={item.id} className={positionClass}>
                    <CarouselCard
                      title={item.title}
                      icon={item.icon}
                      description={item.description}
                      isActive={item.isActive}
                      resLink={item.resLink}
                    />
                  </div>
                );
              })}
            </div>

            {/* Improved navigation controls for mobile and desktop */}
            <div className="flex items-center justify-center w-full mt-8">
              <div className="flex flex-row space-x-6 items-center">
                <button
                  onClick={goToPrevious}
                  className={`p-4 rounded-full flex items-center justify-center ${
                    activeIndex > 0
                      ? "bg-[#3fe881] hover:bg-opacity-80 text-[#07273c]"
                      : "bg-gray-200 cursor-not-allowed text-gray-400"
                  }`}
                  disabled={activeIndex === 0}
                  aria-label="Previous card"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <div className="text-lg font-medium text-[#07273c]">
                  {activeIndex + 1} / {careerData.length}
                </div>

                <button
                  onClick={goToNext}
                  className={`p-4 rounded-full flex items-center justify-center ${
                    activeIndex < careerData.length - 1
                      ? "bg-[#3fe881] hover:bg-opacity-80 text-[#07273c]"
                      : "bg-gray-200 cursor-not-allowed text-gray-400"
                  }`}
                  disabled={activeIndex === careerData.length - 1}
                  aria-label="Next card"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right side - Details Panel */}
          <div className="w-full md:w-1/2 p-8 bg-gray-50">
            <CardDetailPanel activeCard={careerData[activeIndex]} />
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

export default CarouselPage;