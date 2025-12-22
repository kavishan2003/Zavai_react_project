import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-100 shadow h-45">
      <div className="container mx-auto px-4">
        <div className="flex justify-between  px-4 h-10  text-sm text-gray-600">
          <div className="top-bar-left flex items-center justify-center w-120 gap-6 ">
            <span>English ▾</span>
            <div className="h-5 w-px bg-gray-200 mt-1"></div>
            <span>LKR ▾</span>
            <div className="h-5 w-px bg-gray-200 mt-1"></div>
            <span className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-phone-icon lucide-phone"
              >
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
              </svg>{" "}
              Helpline : (+94) 714653150
            </span>
          </div>

          <div className="top-bar-right flex w-90 items-center justify-center gap-4 font-semibold ">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
            <div className="h-5 w-px bg-gray-200 mt-1"></div>
            <div className="cart-total">🛒 Rs. 1,650.00</div>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-gray-100 "></div>

      <a
        className="absolute left-1/2 -translate-x-1/2 lg:transition-all lg:duration-700 lg:ease-in-out"
        href=""
      >
        <img
          className="h-16 mt-2"
          src="./public/zavai-logo.png"
          alt="Company Logo"
        />
      </a>

      <div className="w-full flex items-end h-35 bg-gray-100 border border-gray-200 ">
        <nav className="container mx-auto px-4 h-10 flex items-center justify-center">
          <ul className="flex space-x-8 font-small text-gray-700 gap-6 text-sm font-medium  hover:text-gray-900 transition-colors">
            <Link to="/Home">
              <li>
                <a href="/">Home</a>
              </li>
            </Link>
            <Link to="/Mens">
              <li>
                <a href="">Men's</a>
              </li>
            </Link>
            <Link to="/Womens">
              <li>
                <a href="/">Women's</a>
              </li>
            </Link>
            <Link to="/Unisex">
              <li>
                <a href="/">Unisex</a>
              </li>
            </Link>
            <Link to="/Kids">
              <li>
                <a href="/">Kids</a>
              </li>
            </Link>
            <Link to="/AboutUS">
              <li>
                <a href="/about">About Us</a>
              </li>
            </Link>
            <Link to="/ContactUs">
              <li>
                <a href="/">Contact Us</a>
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
