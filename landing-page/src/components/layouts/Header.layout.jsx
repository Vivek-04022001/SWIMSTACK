import { useState } from "react";
import logo from "../../assets/logo.jpg";
import logo_desktop from "../../assets/horizontal_logo.png";
import logo_mobile from "../../assets/vertical_logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    // <!-- Hero section -->
    <section id="header">
      {/* <!-- hero container --> */}
      <div class="container max-w-6xl mx-auto px-6 py-0 md:py-6 ">
        <nav class=" flex items-center  md:justify-between font-bold  ">
          {/* <!-- Logo --> */}
          <div className="flex flex-1 justify-center md:justify-start">
            {/* desktop logo */}
            <img
              src={logo_desktop}
              alt="logo"
              className="hidden md:block w-[200px]"
            />
            {/* mobile logo */}
            <img
              src={logo_mobile}
              alt="logo"
              className="md:hidden w-[120px] "
            />
          </div>

          {/* <!-- Menu --> */}
          <div class="nav-menu hidden h-10 md:flex md:space-x-14 uppercase tracking-wider text-secondary">
            <div class="group">
              <a href="#home" className="">
                Home
              </a>
            </div>
            <div class="group">
              <a href="#about">About</a>
            </div>
            <div class="group">
              <a href="#internship">Internships</a>
            </div>
            <div class="group">
              <a href="#verify">Verify</a>
            </div>
            <div class="group">
              <a href="#contact">Contact</a>
            </div>
          </div>

          {/* <!-- @todo Hamburger Button --> */}
          <div class="md:hidden">
            <button
              id="menu-btn"
              class={`${
                isMobileMenuOpen && "open"
              } z-50 block hamburger md:hidden focus:outline-none  `}
              onClick={handleToggle}
            >
              <span class="hamburger-top"></span>
              <span class="hamburger-middle"></span>
              <span class="hamburger-bottom"></span>
            </button>
          </div>
        </nav>
        {/* <!-- @todo - Mobile menu --> */}

        <div
          id="menu"
          class={`absolute top-0 bottom-0 left-0 ${
            isMobileMenuOpen ? "flex" : "hidden"
          } flex-col  self-end  w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg  uppercase bg-accent text-secondary z-40`}
        >
          <a href="#home" class="hover:text-primary">
            Home
          </a>
          <a href="#about" class="hover:text-primary">
            About
          </a>
          <a href="#internship" class="hover:text-primary">
            Internship
          </a>
          <a href="#verfiy" class="hover:text-primary">
            Verfiy
          </a>
          <a href="#contact" class="hover:text-primary">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
