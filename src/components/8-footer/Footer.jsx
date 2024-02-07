import React from 'react'
import './footer.css'
export default function Footer() {
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
        <li>
          <a href="">Skills</a>
        </li>
        <li>
          <a href="">Projrects</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
      <div className="copy-right">
        <p>Copyright © 2023. All rights reserved.</p>
        <div className='developed'>
          Designed by Frenify Developed by <span>Eng.Nashaat</span>
        </div>
      </div>
    </footer>
  );
}
