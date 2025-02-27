// ReferenceDesign.tsx
import React from 'react';

interface ReferenceDesignProps {
  targetDesign: any;
}

const ReferenceDesign: React.FC<ReferenceDesignProps> = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100">
      <h3 className="text-xl font-bold text-[#07273c] mb-4">Reference Design</h3>
      <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
        {/* This would be an actual rendering of the target design */}
        <div className="bg-blue-100 text-blue-800 p-4 text-2xl font-bold mb-4">
          My First Website
        </div>
        
        <div className="mb-4">
          <img src="/api/placeholder/500/200" alt="Hero image" className="w-full rounded-lg" />
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <div className="bg-gray-100 text-gray-800 p-4 mb-4">
              Welcome to my website! This is where I showcase my projects and share my thoughts on web development.
            </div>
            
            <button className="bg-green-100 text-green-800 py-2 px-4 rounded-lg inline-block">
              Learn More
            </button>
          </div>
          
          <div className="bg-purple-100 text-purple-800 p-4 h-full">
            <h4 className="font-bold mb-2">Links</h4>
            <ul className="space-y-2">
              <li>Home</li>
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferenceDesign;
