import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import styled from "styled-components";
import digiftLogo from "../../Assets/images/digift_logo.svg"
import searchicon from "../../Assets/images/search_icon.svg"
import navmenuarrow from "../../Assets/images/nav_menu_arrow.svg"
import lightmode from "../../Assets/images/light_mode.svg"
import darkmode from "../../Assets/images/dark_mode.svg"
import Button from "../Button";
import signupicon from "../../Assets/images/signup_icon.svg"

const StyledHamburger = styled.div`
  position: relative;
  flex-direction: column;
  padding: 16px 2px;
  opacity: 0;
  display: none;
  @media screen and (max-width: 700px) {
    opacity: 1;
    display: flex;
  }
  .hamburger-btn {
    width: 28px;
    height: 2px;
    background-color: #000000;
    box-shadow: 0 2px rgba(255, 101, 47, 0.2);
    transition: all 0.5s cubic-bezier(0.42, 0.01, 0, 1.04);
    opacity: ${({ menuOpen }) => (menuOpen ? "0" : "1")};
  }
  ::before,
  ::after {
    content: "";
    position: absolute;
    width: 28px;
    height: 2px;
    background-color: #000000;
    box-shadow: 0 2px rgba(255, 101, 47, 0.2);
    transition: all 0.5s cubic-bezier(0.42, 0.01, 0, 1.04);
  }
  ::before {
    transform: ${({ menuOpen }) => (menuOpen ? "" : "translateY(-7px)")};
    transform: ${({ menuOpen }) => (menuOpen ? "rotate(45deg)" : "")};
  }
  ::after {
    transform: translateY(7px);
    transform: ${({ menuOpen }) => (menuOpen ? "rotate(-45deg)" : "")};
  }
`;
const StyledHamburgerMenu = styled.div`
  background: #ffffff;
  top: 70px;
  position: fixed;
  width: 100vw;
  transition: all 0.5s ease-in-out;
  transform: ${({ menuOpen }) => (!menuOpen ? "translateY(-500px)" : "")};
  transition: all 0.5s cubic-bezier(0.42, 0.01, 0, 1.04);
  border-bottom: 1px solid #000000;
  z-index: 49;
`;

export default function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [deviceSize, changeDeviceSize] = useState(window.innerWidth);
  const [darkMode, setDarkMode] = useState(false)

  const lightToggle = () => {
    setDarkMode(false)
  }

  const darkToggle = (mode) => {
    setDarkMode(true)
  }

  useEffect(() => {
    const handleResize = () => {
      if (deviceSize > 700) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [deviceSize]);

  const setMenuState = () => {
    if (!menuOpen) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  };
  return (
    <div className="navbarContainer text-arrivalfilters" id="navbar">
      <div className="navbar justify-between fixed top-0 bg-white z-[50] overflow-hidden w-[100%]">
        <div className="flex flex-row items-center max-w-[167px]">
          <a href="#navbar"><img src={digiftLogo} alt="digift Logo" /></a>
        </div>
        <div className="links">
          <div className="deskop-links flex flex-row justify-between">
            <div className="flex flex-row gap-x-8 align-items content-center justify-center">
              <Link to="/">
                <div className="flex flex-row content-center items-center gap-x-3">
                  <span> Personal</span> <span><img src={navmenuarrow} alt="" /></span>
                </div>
              </Link>
              <Link to="/business">
                <div className="flex flex-row content-center items-center gap-x-3">
                  Business <span><img src={navmenuarrow} alt="" /></span>
                </div>
              </Link>

            </div>
            <div className="relative">
              <input type="search" className="bg-inputbg p-4 rounded outline-0 navsearch" placeholder="Find cards anywhere" />
              <img src={searchicon} className="absolute searchicon p-4" alt=""/>
            </div>
            <div className="bg-inputbg mode-container flex flex-row justify-between items-center">
              <div onClick={lightToggle} className={`img-div cursor-pointer ${!darkMode ? 'bg-white' : ''}`}><img src={lightmode} alt="" /> </div> <div onClick={darkToggle} className={`img-div cursor-pointer ${darkMode ? 'bg-white' : ''}`}><img src={darkmode} alt="" /></div>
            </div>
            <div className="flex flex-row items-center gap-x-7">
              <div>Login</div>
              <Button className="gap-x-[18px] bg-btnblue py-3.5 px-4 text-white" text="Get started" icon={signupicon} />
            </div>
          </div>

          <StyledHamburger onClick={setMenuState} menuOpen={menuOpen}>
            <div className="hamburger-btn"></div>
          </StyledHamburger>
        </div>
      </div>
      <StyledHamburgerMenu menuOpen={menuOpen}>
        <div className="mobile-links flex flex-col gap-[10px] p-[15px]">
          <Link to="/">
            <div className="flex flex-row content-center items-center gap-x-3">
              <span> Personal</span> <span><img src={navmenuarrow} alt="" /></span>
            </div>
          </Link>
          <Link to="/business">
            <div className="flex flex-row content-center items-center gap-x-3">
              Business <span><img src={navmenuarrow} alt="" /></span>
            </div>
          </Link>
          <div className="bg-inputbg mode-container flex flex-row justify-between items-center">
            <div onClick={lightToggle} className={`img-div cursor-pointer ${!darkMode ? 'bg-white' : ''}`}><img src={lightmode} alt="" /> </div> <div onClick={darkToggle} className={`img-div cursor-pointer ${darkMode ? 'bg-white' : ''}`}><img src={darkmode} alt="" /></div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div>Login</div>
            <Button className="gap-x-[18px] bg-btnblue py-3.5 px-4 text-white" text="Get started" icon={signupicon} />
          </div>
        </div>
      </StyledHamburgerMenu>
    </div>
  );
}
