import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
          <a href="/" className="text-blue-500 hover:text-blue-700 underline">Return to Home</a>
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div>
                <h3 className="text-lg font-bold mb-2">
                  <span className="text-vision-yellow">Vision Accounting</span>
                  <span className="text-white"> - Tally Training & Accounting Services</span>
                </h3>
                <p className="text-gray-400">Your Success is Our Vision</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-400 hover:text-vision-yellow transition-colors">Home</a></li>
                <li><a href="/#courses" className="text-gray-400 hover:text-vision-yellow transition-colors">Courses</a></li>
                <li><a href="/schedule" className="text-gray-400 hover:text-vision-yellow transition-colors">Schedule</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-vision-yellow transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <p className="text-gray-400 text-sm">
                3rd Floor, Advocate Chamber, 301,
                <br />6 Sikh Mohalla Main Road,
                <br />Near Central Camera Repairing,
                <br />Indore GPO, Indore - 452007
              </p>
              <div className="mt-6">
                <h4 className="font-semibold mb-3">Follow Us</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://www.instagram.com/vision_accounting_?igsh=MXF2czJoZDZ6OGp6aA==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-vision-yellow transition-colors">Instagram</a></li>
                  <li><a href="https://jsdl.in/DT-294R6EWLIUV" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-vision-yellow transition-colors">Justdial</a></li>
                  <li><a href="https://www.sulekha.com/profile/vision-accounting-tally-classes-mg-road-indore?utm_medium=copyLink" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-vision-yellow transition-colors">Sulekha</a></li>
                  <li><a href="https://www.linkedin.com/in/vision-accounting?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-vision-yellow transition-colors">LinkedIn</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 Vision Accounting - Tally Training & Accounting Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;
