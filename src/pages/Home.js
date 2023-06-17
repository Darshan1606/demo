import React, { useState } from "react";
import { Link } from "react-router-dom";
import { VscListSelection } from "react-icons/vsc";
import { RxCross1 } from "react-icons/rx";

const navMenu = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Product", link: "/" },
  { id: 3, title: "Service", link: "/" },
  { id: 4, title: "Contact", link: "/" },
];

const Home = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <>
      <header>
        <VscListSelection
          className="hamburger"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
          size={30}
        />

        <nav>
          <h1 className="logo">Logo</h1>
          <div className={isNavExpanded ? "nav-expand " : "nav-menu"}>
            <ul className="header-tabs">
              {navMenu.map((menu) => {
                return (
                  <li key={menu.id}>
                    <a href={menu.link}>{menu.title}</a>
                  </li>
                );
              })}

              <Link to={"/login"}>
                <span className="btn-login">Login</span>
              </Link>
            </ul>
            <RxCross1
              style={{ color: "black" }}
              className="hamburger"
              onClick={() => setIsNavExpanded(!isNavExpanded)}
              size={30}
            />
          </div>
        </nav>

        <section className="hero">
          <div className="hero-content">
            <div className="circle-container fade-in-down">
              <div className="first-circle"></div>
              <div className="second-circle"></div>
            </div>
            <h1>
              “Learn Anytime, Anywhere,
              <br />
              and Accelerate Future”
            </h1>
            <div className="border">
              <div className="border-1"></div>
              <div className="border-2"></div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Home;
