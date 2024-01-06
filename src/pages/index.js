import React, { useState } from "react";
import { Link } from "react-scroll";
import { Link as Link2 } from "react-router-dom";

import LogoLight from "../assets/images/darklog3.svg";
import LogoDark from "../assets/images/logolight.svg";
import BackgroudImage from "../assets/images/bg/2.jpg";
import Services from "../component/Services";
import About from "../component/About";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import Portfolio from "../component/Projects";
import Switcher from "../component/Switcher";

/**
 * Index Component
 */
export default function HomePage() {

  const [isOpen, setMenu] = useState(true);
  window.addEventListener("scroll", windowScroll);

  const toggleMenu = () => {
    setMenu(!isOpen)
  }

  /**
   * Window scroll
   */
  function windowScroll() {
    const navbar = document.getElementById("navbar");
    if (
      document.body.scrollTop >= 50 ||
      document.documentElement.scrollTop >= 50
    ) {
      navbar.classList.add("is-sticky");
    } else {
      navbar.classList.remove("is-sticky");
    }
  }

  return (
    <>
      <div>
        <nav className="navbar" id="navbar">
          <div className="container flex flex-wrap items-center justify-end">
            <a className="navbar-brand" href="/">
              <span className="inline-block dark:hidden">
                <img src={LogoDark} className="l-dark" alt="" />
                <img src={LogoLight} className="l-light" alt="" />
              </span>
              <img
                src={LogoLight}
                className="hidden dark:inline-block"
                alt=""
              />
            </a>

            <div className="nav-icons flex items-center lg_992:order-2 ms-auto">
              <ul className="list-none menu-social mb-0">
                <li className="inline ms-1">
                  <Link2 to="https://www.instagram.com/luliconstructionltd/">
                    <span className="login-btn-primary">
                      <span className="btn btn-sm btn-icon rounded-full bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white">
                        <i className="uil uil-instagram"></i>
                      </span>
                    </span>
                    <span className="login-btn-light">
                      <span className="btn btn-sm btn-icon rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700">
                        <i className="uil uil-instagram"></i>
                      </span>
                    </span>
                  </Link2>
                </li>
              </ul>
              <button
                type="button"
                className="collapse-btn inline-flex items-center ms-3 text-dark dark:text-white lg_992:hidden"
                onClick={toggleMenu}
              >
                <span className="sr-only">Navigation Menu</span>
                <i className="mdi mdi-menu mdi-24px"></i>
              </button>
            </div>

            <div
              className={`${isOpen === true ? 'hidden' : 'block'} navigation lg_992:order-1 lg_992:flex`}
              id="menu-collapse"
            >
              <ul className="navbar-nav nav-light" id="navbar-navlist">
                <Link
                  className="nav-item"
                  to="home"
                  activeclassname="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <span className="nav-link">Home</span>
                </Link>
                <Link
                  className="nav-item"
                  activeclassname="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  to="about"
                >
                  <span className="nav-link">About us</span>
                </Link>
                <Link
                  className="nav-item"
                  to="features"
                  activeclassname="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <span className="nav-link">Services</span>
                </Link>
                <Link
                  className="nav-item"
                  to="portfolio"
                  activeclassname="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <span className="nav-link">Projects</span>
                </Link>
                <Link
                  className="nav-item"
                  to="contact"
                  activeclassname="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <span className="nav-link">Contact us</span>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
        <section
          style={{ backgroundImage: `url(${BackgroudImage})` }}
          className="py-36 lg:py-30 w-full table relative bg-center bg-cover"
          id="home"
        >
          <div className="absolute inset-0 bg-black opacity-80"></div>
          <div className="container relative">
            <div className="grid grid-cols-1 mt-12">
              <h4 className="text-white lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative">
              Excellence in Construction - Right Here in London.
              </h4>

              <p className="text-[#fff] opacity-80 mb-0 max-w-2xl text-lg">
              Welcome to <span className="text-xl font-bold">Luli Construction Ltd</span>, where we bring your construction dreams to life. Specializing in full renovations, extensions, loft conversions, and more, our expert team ensures every project shines from plumbing to plastering, kitchens to roofs. Experience seamless craftsmanship and style with London's construction specialists.
              </p>

              <div className="relative mt-10">
                <Link
                  to="contact"
                  activeclassname="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md"
                >
                  Let's Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About section */}
        <About />

        {/* Service section */}
        <Services />

        {/* Portfolio section */}
        <Portfolio />

        {/* Contact section */}
        <Contact />

        {/* Footer section */}
        <Footer />

        {/* Switcher section */}
        <Switcher />
      </div>

    </>
  );

}

