import React from "react";

const LoadingOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black opacity-50">
      <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin" />
    </div>
  );
};

export default LoadingOverlay;
