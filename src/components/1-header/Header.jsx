import React, { useEffect, useState } from "react";
import "./header.css";
import Cookie from 'cookie-universal'
import { motion } from "framer-motion";


export default function Header({theme, toggleTheme}) {
  const cookie = Cookie();
  const [showMenu, setshowMenu] = useState(false);
  

  useEffect(() => {
    if(theme === "light"){
      document.body.classList.remove("dark")
       document.body.classList.add("light");
    } else {
       document.body.classList.remove("light")
       document.body.classList.add("dark");
    }
   
  }
  , [theme])
  return (
    <motion.header
      className="flex"
      initial={{
        opacity: 0,
        // if odd index card,slide from right instead of left
        x: 100,
        y: -100,
      }}
      whileInView={{
        opacity: 1,
        x: 0, // Slide in to its original position
        y: 0,
        transition: {
          duration: 1, // Animation duration
        },
      }}
    >
      <button className="menu icon-menu" onClick={() => setshowMenu(true)} />

      
      <nav>
        <ul className="flex">
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#main">Projects</a>
          </li>
          <li>
            <a href="#skills-section">Skills</a>
          </li>
          <li>
            <a href="#contact-us">Contact Us</a>
          </li>
        </ul>
      </nav>

      <button
      
        className="btn-mode flex "
        onClick={() => {
          toggleTheme();
          
        }}
      >
        {theme === "light" ? (
          <span className="icon-sun"></span>
        ) : (
          theme === "dark" && <span className="icon-moon"></span>
        )}
      </button>

      {showMenu && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button
                className="icon-close"
                onClick={() => setshowMenu(false)}
              />
            </li>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Skills</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </motion.header>
  );
}
