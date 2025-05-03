"use client";
import './Footer.css';
import Image from 'next/image';

function Footer() {
  return (
    <footer>
      <div className="footer_left">
        <div className="logo">
          <a href="/">
            <img
              src="/assets/logo_text.svg"
              alt="Site Logo"
              className="site_logo"
              draggable="false"
            />
          </a>
        </div>
        <h3>Better YouTube Analytics</h3>
        <div className="social_medias">
          <a href="https://www.youtube.com/@shkeffy" target="_blank">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="https://www.tiktok.com/@newstudioapp" target="_blank">
            <i className="fa-brands fa-tiktok"></i>
          </a>
          <a href="https://discord.newstudio.app" target="_blank">
            <i className="fa-brands fa-discord"></i>
          </a>
          <a href="https://www.instagram.com/newstudioapp/" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="mailto:support@newstudio.app" target="_blank">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
        <div className="mini version">
          <i className="fa-solid fa-code-branch"></i>
          <h2>v1.0.0</h2>
        </div>
        <div className="mini users">
          <i className="fa-solid fa-user"></i>
          <h2>0 Users!</h2>
        </div>
        <div className="grid-based">
          <a href="/about"><h2>About</h2></a>
          <a href="mailto:support@newstudio.app"><h2>Contact</h2></a>
          <a href="/tos"><h2>Terms</h2></a>
          <a href="/privacy-policy"><h2>Privacy Policy</h2></a>
        </div>
        <p className='cc'>© 2025 NewStudio. All rights reserved.</p>
      </div>
      <div className="footer_right">
        <div className="grid left">
          <h3>Home:</h3>
          <a href="https://extension.newstudio.app"><h2>Download</h2></a>
          <a href="/about"><h2>About</h2></a>
          <a href="mailto:support@newstudio.app"><h2>Contact</h2></a>
        </div>
        <div className="grid right">
          <h3>Legal:</h3>
          <a href="/tos"><h2>Terms</h2></a>
          <a href="/privacy-policy"><h2>Privacy policy</h2></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
