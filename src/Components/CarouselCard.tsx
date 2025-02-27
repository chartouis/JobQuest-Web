import React from "react";
import { Link } from "react-router-dom";

interface CarouselCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  isActive: boolean;
  resLink:string;
}

const CarouselCard: React.FC<CarouselCardProps> = ({
  title,
  icon,
  description,
  isActive,
  resLink
}) => {
  return (
    <div
      className={`bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 ${
        isActive ? "scale-100 opacity-100 shadow-xl" : "scale-90 opacity-70"
      }`}
    >
      <div className="h-48 bg-[#3fe881] bg-opacity-30 flex items-center justify-center">
        {icon}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#07273c] mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link to={resLink}>
          <button className="w-full py-2 bg-[#3fe881] text-[#07273c] font-medium rounded-lg hover:opacity-80 transition-colors">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CarouselCard;
