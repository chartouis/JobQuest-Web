import React from "react";
import { Link } from "react-router-dom";

const MenuPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="bg-[#07273c] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Job<span className="text-[#3fe881]">Quest</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Explore different careers by playing one of the games. They show easy but similar tasks that you will encounter on the way to your dreamjob
          </p><Link to="/career">
            
            <button className="px-8 py-3 bg-[#3fe881] text-[#07273c] font-bold rounded-lg hover:opacity-80 transition-colors shadow-lg">
              Get Started
            </button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#07273c] text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-md border border-gray-100 text-center">
              <div className="bg-[#3fe881] bg-opacity-20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-[#07273c]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#07273c] mb-2">
                Explore Careers
              </h3>
              <p className="text-gray-600">
                Browse through different career options and learn what each job entails.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-md border border-gray-100 text-center">
              <div className="bg-[#3fe881] bg-opacity-20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-[#07273c]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#07273c] mb-2">
                Try Interactive Tasks
              </h3>
              <p className="text-gray-600">
                Complete hands-on simulations and challenges to experience real job tasks.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-md border border-gray-100 text-center">
              <div className="bg-[#3fe881] bg-opacity-20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-[#07273c]"
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
              <h3 className="text-xl font-bold text-[#07273c] mb-2">
                Build Skills
              </h3>
              <p className="text-gray-600">
                Learn valuable skills and gain confidence in your career choices.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Career Categories */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#07273c] text-center mb-12">
            Popular Career Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Category 1 */}
            <Link to="/game/webdev" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center hover:shadow-lg transition-all">
                <div className="bg-[#3fe881] bg-opacity-20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-[#07273c]"
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
                </div>
                <h3 className="text-xl font-bold text-[#07273c] mb-2">
                  Technology
                </h3>
                <p className="text-gray-600">Web Development, Data Science, IT</p>
              </div>
            </Link>

            {/* Category 2 */}
            <Link to="/career" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center hover:shadow-lg transition-all">
                <div className="bg-[#3fe881] bg-opacity-20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-[#07273c]"
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
                </div>
                <h3 className="text-xl font-bold text-[#07273c] mb-2">
                  Healthcare
                </h3>
                <p className="text-gray-600">Nursing, Medical Tech, Therapy</p>
              </div>
            </Link>

            {/* Category 3 */}
            <Link to="/career" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center hover:shadow-lg transition-all">
                <div className="bg-[#3fe881] bg-opacity-20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-[#07273c]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#07273c] mb-2">
                  Hospitality
                </h3>
                <p className="text-gray-600">Chef, Bartender, Hotel Management</p>
              </div>
            </Link>

            {/* Category 4 */}
            <Link to="/career" className="block">
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center hover:shadow-lg transition-all">
                <div className="bg-[#3fe881] bg-opacity-20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-[#07273c]"
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
                </div>
                <h3 className="text-xl font-bold text-[#07273c] mb-2">
                  Creative
                </h3>
                <p className="text-gray-600">Graphic Design, Writing, Photography</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-[#07273c] mt-auto">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Find Your Perfect Career?
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto mb-8">
            Start exploring different careers today and discover what you're passionate about.
          </p>
          <Link to="/career">
            <button className="px-8 py-3 bg-[#3fe881] text-[#07273c] font-bold rounded-lg hover:opacity-80 transition-colors shadow-lg">
              Explore All Careers
            </button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-6 border-t border-gray-200">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <span className="text-[#07273c] font-bold text-xl mb-4 md:mb-0">
            Job<span className="text-[#3fe881]">Quest</span>
          </span>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-[#07273c]">About Us</a>
            <a href="#" className="text-gray-600 hover:text-[#07273c]">Contact</a>
            <a href="#" className="text-gray-600 hover:text-[#07273c]">Privacy Policy</a>
          </div>
          <p className="text-gray-600 mt-4 md:mt-0">
            © 2025 JobQuest. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MenuPage;
