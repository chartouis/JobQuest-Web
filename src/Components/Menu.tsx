import { Link } from "react-router-dom";
import Header from "./Header";

import { useEffect } from "react";

const Menu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

//   const generatePage = async (career: string) => {
//     localStorage.setItem("wait", "true");
//     await axios
//       .post(API_URL + "/page?prof=" + career)
//       .then((resp) => {
//         const page = JSON.stringify(resp.data);
//         localStorage.setItem("aiPage", page);
//       })
//       .finally(() => {
//         nav("/career/description");
//       });
//   };
  return (
    <div className="min-h-screen bg-white">
      {/* Header is now imported as a component */}
      <Header />

      {/* Hero Section */}
      <div className="bg-[#3fe881] bg-opacity-95 py-20">
        <br />
        <br />
        <div className="container mx-auto px-6">
          <h1 className="text-6xl font-bold text-[#07273c] mb-6 text-center">
            Find Your Perfect Career Path
          </h1>
          <p className="text-[#07273c] text-xl max-w-3xl mx-auto text-center">
            Explore various career options and get hands-on experience with
            real-world tasks before making your decision.
          </p>
          <div className="mt-10 flex justify-center">
            <Link to="/career">
              <button className="px-8 py-3 bg-[#07273c] text-white font-medium rounded-lg hover:opacity-80 transition-colors shadow-lg">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#07273c] mb-6">
              How It Works
            </h2>
            <p className="text-gray-700 mb-4">
              Our platform allows you to experience different careers through
              simulated tasks and challenges that mirror real-world
              responsibilities.
            </p>
            <p className="text-gray-700 mb-4">
              By completing these tasks, you'll gain valuable insights into the
              day-to-day activities of various professions before committing to
              a career path.
            </p>
            <p className="text-gray-700">
              Each simulation is designed by industry experts to provide an
              authentic experience of what the job entails.
            </p>
          </div>
          <div className="bg-[#3fe881] bg-opacity-20 p-8 rounded-xl border border-[#3fe881]">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-[#3fe881] p-2 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#07273c]"
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
                <div>
                  <h3 className="font-semibold text-[#07273c] text-lg">
                    Explore
                  </h3>
                  <p className="text-gray-600">
                    Browse through various career options
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#3fe881] p-2 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#07273c]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#07273c] text-lg">
                    Select
                  </h3>
                  <p className="text-gray-600">
                    Choose a career that interests you
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#3fe881] p-2 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#07273c]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#07273c] text-lg">
                    Experience
                  </h3>
                  <p className="text-gray-600">
                    Complete tasks to experience the job
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#3fe881] p-2 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#07273c]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#07273c] text-lg">
                    Decide
                  </h3>
                  <p className="text-gray-600">
                    Make informed career decisions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Career Options Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#07273c] mb-12 text-center">
            Explore Career Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Bartender Card */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100">
              <div className="h-48 bg-[#3fe881] bg-opacity-30 flex items-center justify-center">
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
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#07273c] mb-2">
                  Bartender
                </h3>
                <p className="text-gray-600 mb-4">
                  Master the art of mixology and create delicious cocktails
                  while providing excellent customer service.
                </p>
              </div>
            </div>

            {/* Web Developer Card */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100">
              <div className="h-48 bg-[#3fe881] bg-opacity-30 flex items-center justify-center">
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
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#07273c] mb-2">
                  Web Developer
                </h3>
                <p className="text-gray-600 mb-4">
                  Build and maintain websites and applications using the latest
                  web technologies and frameworks.
                </p>
              </div>
            </div>

            {/* Nurse Card */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100">
              <div className="h-48 bg-[#3fe881] bg-opacity-30 flex items-center justify-center">
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
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#07273c] mb-2">
                  Nurse
                </h3>
                <p className="text-gray-600 mb-4">
                  Provide essential healthcare services and compassionate
                  patient care in various medical settings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-[#07273c]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Discover Your Ideal Career?
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto mb-10">
            Start exploring different careers today and find the path that
            aligns with your skills, interests, and goals.
          </p>
          <Link to="/career">
            <button className="px-8 py-3 bg-[#3fe881] text-[#07273c] font-bold rounded-lg hover:opacity-80 transition-colors shadow-lg">
              Get Started Now
            </button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <span className="text-[#07273c] font-bold text-xl">
            Job<span className="text-[#3fe881]">Quest</span>
          </span>
          <p className="text-gray-600">© 2025 JobQuest. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Menu;
