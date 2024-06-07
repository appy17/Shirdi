import React, { useState } from "react";
import { IoLogoAndroid } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Logo from "../assets/images/logo.gif";
import NavbarItems from "./NavbarItems";
import items from "../Data/navlist.json";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <section>
      <div className="header">
        <div className="download">
          <div className="social-btn nav-btn">
            <IoLogoAndroid /> <span>Android</span>
          </div>

          <div className="social-btn nav-btn">
            <FaApple /> <span>IOS</span>
          </div>
        </div>
        <Link to="/" className="logo"> {/* Use href="/" if not using react-router */}
      <img src={Logo} alt="Logo" width={70} />
      <span>Shri Sai Sansthan Trust, Shirdi</span>
    </Link>

        <div
          className="humburger"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <div className="social-btn nav-btn wid">
            {open ? <IoClose /> : <GiHamburgerMenu />}
          </div>
        </div>
      </div>

      <div className={open ? "navbar" : "none"}>
        {items.map((item, index) => (
          <NavbarItems key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Navbar;
