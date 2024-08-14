import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <hr className="border-t-2 border-gray-300 dark:border-slate-600 mb-8" />
      <footer className="footer footer-center p-10 bg-black dark:bg-slate-900 dark:text-white text-white-800 rounded-lg shadow-md">
        <div className="container mx-auto grid md:grid-cols-3 gap-10">
          {/* Company Description */}
          <div className="text-left">
            <h2 className="text-xl font-bold text-sky-500 mb-4">About Fantastic Birthdays </h2>
            <p className="text-gray-400 mb-4">
            We believe that every birthday is unique, and thus, every celebration should be one-of-a-kind. Our approach is highly personalized; we take the time to understand your preferences, themes, and ideas. We meticulously plan every detail, from the invitations to the decorations, entertainment, and catering, ensuring that your birthday celebration surpasses all expectations.
            </p>
            <p className="text-gray-400">
              We are committed to sustainability and excellence, driving success for our clients worldwide.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col md:items-center">
            <h2 className="text-xl font-bold text-sky-500 mb-4">Quick Links</h2>
            <ul className="grid grid-flow-col gap-8 text-lg font-semibold">
              <li>
                <Link
                  to="/about"
                  className="link link-hover hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="link link-hover hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/venues"
                  className="link link-hover hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-300"
                >
                  Book
                </Link>
              </li>
              <li>
                <Link
                  to="/service"
                  className="link link-hover hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact Information and Social Media */}
          <div className="text-left md:text-center">
            <h2 className="text-xl font-bold text-sky-500 mb-4">Contact Us</h2>
            <p className="text-gray-400 mb-4">
              Phone: <a href="tel:+123456789" className="hover:text-sky-500">8248097917</a>
            </p>
            <p className="text-gray-400 mb-4">
              Email: <a href="mailto:info@acme.com" className="hover:text-sky-500">fb123@gmail.com</a>
            </p>
            <div className="flex justify-center mt-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-300 mx-2"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-300 mx-2"
                aria-label="YouTube"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-300 mx-2"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <aside className="mt-6 text-sm font-medium text-gray-500 dark:text-gray-400 text-center">
          <p>Copyright © 2024 - All rights reserved </p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
