"use client";
import { useState } from "react";
import Image from "next/image";
import "./Navbar.css";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className={mobileOpen ? "open" : ""}>
      <div className="left">
        <a href="/">
          <img
            src="/assets/logo_text.svg"
            alt="Site Logo"
            className="site_logo"
            width={1}
            height={1}
            draggable="false"
          />
        </a>
      </div>

      {/* Desktop links */}
      <div className="list">
        <a href="/wip" target="_blank"><h2>Install</h2></a>
        <a href="/about"><h2>About</h2></a>
        <a href="https://discord.newstudio.app" target="_blank"><h2>Discord</h2></a>
      </div>

      <div className="right">
        <a href="/wip" target="_blank">
          <button className="dashboard">
            <i className="fa-solid fa-right-to-bracket" />
            Download
          </button>
        </a>
      </div>

      {/* burger icon */}
      <i
        className="fa-regular fa-bars"
        id="mobile-menu"
        onClick={() => setMobileOpen((o) => !o)}
      />

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mobile-menu-container">
          <div className="list">
            <a href="/wip" target="_blank"><h2>Install</h2></a>
            <a href="/about"><h2>About</h2></a>
            <a href="https://discord.newstudio.app" target="_blank"><h2>Discord</h2></a>
            <div className="right">
              <a href="/wip" target="_blank">
                <button className="dashboard">
                  <i className="fa-solid fa-right-to-bracket" />
                  Download
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}