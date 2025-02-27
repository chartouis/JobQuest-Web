import React from 'react';

interface ScoreTrackerProps {
  score: number;
  maxScore: number;
  isComplete: boolean;
}

const ScoreTracker: React.FC<ScoreTrackerProps> = ({ score, maxScore, isComplete }) => {
  const percentage = Math.round((score / maxScore) * 100);
  
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
      <h3 className="text-xl font-bold text-[#07273c] mb-4">Your Progress</h3>
      
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-[#07273c]">Score</span>
          <span className="text-sm font-medium text-[#07273c]">{percentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-[#3fe881] h-2.5 rounded-full" 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
      
      <div className="text-3xl font-bold text-[#07273c]">{score}/{maxScore}</div>
      
      {isComplete && (
        <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg">
          <span className="font-bold">Congratulations!</span> You've completed the challenge.
        </div>
      )}
      
      {!isComplete && score > 0 && (
        <div className="mt-4 p-3 bg-blue-100 text-blue-800 rounded-lg">
          <span className="font-bold">Keep going!</span> You're making progress.
        </div>
      )}
    </div>
  );
};

export default ScoreTracker;
