// Header.jsx
"use client";
import { useState, useRef, useEffect } from "react";
import "./Header.css";
import "./Header_content.css";
import NotifyForm from './NotifyForm'

const Header = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const animatingRef = useRef(true);
  const containerRef = useRef(null);
  const hasResetRef = useRef(false);

  // Track mouse/touch move & end
  useEffect(() => {
    const onUp = () => setDragging(false);
    const onMove = (clientX) => {
      if (!dragging || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      let pct = ((clientX - rect.left) / rect.width) * 100;
      pct = Math.min(100, Math.max(0, pct));
      setSliderPos(pct);
    };

    const onMouseMove = (e) => onMove(e.clientX);
    const onTouchMove = (e) => onMove(e.touches[0].clientX);

    document.addEventListener("mouseup", onUp);
    document.addEventListener("touchend", onUp);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("touchend", onUp);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("touchmove", onTouchMove);
    };
  }, [dragging]);

  useEffect(() => {
    let startTime = null;
    let direction = 1;
    const amplitude = 30; // max ±2% swing
    const base = 50;
    const duration = 10000; // full cycle in ms (2s for back and forth)
  
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
  
      if (animatingRef.current && containerRef.current) {
        const progress = (elapsed % duration) / duration; // 0 to 1
        const angle = progress * 2 * Math.PI; // full sine wave
        const offset = Math.sin(angle) * amplitude;
        setSliderPos(base + offset);
      }
  
      if (animatingRef.current) {
        requestAnimationFrame(animate);
      }
    };
  
    requestAnimationFrame(animate);
  }, []);  

  return (
    <div className="header-wrapper">
      <div className="header">
        <h3 className="pill">
          <i className="fa-solid fa-rocket-launch"></i>
          Version 1.0 launching in may
        </h3>
        <div className="slogan">
          <h2>
            Customize your YouTube Studio<br />
            with <span>creator-first</span> tools.
          </h2>
        </div>
        <div className="description">
          <h5>
            <i className="fa-solid fa-check"></i>
            <div>Bring back <b>engaged</b> views</div>
          </h5>
          <h5>
            <i className="fa-solid fa-check"></i>
            <div>More <b>detailed</b> statistics</div>
          </h5>
          <h5>
            <i className="fa-solid fa-check"></i>
            <div><b>Ease-of-use</b> changes</div>
          </h5>
        </div>

        {/* ← insert slider here ↓ */}
        <div
  className="slider-container"
  ref={containerRef}
  /* compute how much of the 220%-wide before-layer to clip off on the right */
  style={{
    "--mask": `${(110 - sliderPos) / 2.2}%`
  }}
>
  {/* after layer: full oversized background */}
  <div
    className="after-layer"
    style={{ backgroundImage: "url('/assets/after-s.png')" }}
  />

  {/* before layer: same oversized background, but clipped by --mask */}
  <div
    className="before-layer"
    style={{
      backgroundImage: "url('/assets/before-s.png')",
      clipPath: "inset(0 var(--mask) 0 0)"
    }}
  />
          <div
            className="separator"
            style={{ left: `${sliderPos}%` }}
            onMouseDown={() => {
              setDragging(true);
              animatingRef.current = false;
            }}
            
            onTouchStart={(e) => {
              e.preventDefault();
              setDragging(true);
              animatingRef.current = false;
            }}
          >
            <div className="line" />
            <i className="fa-sharp-duotone fa-regular fa-arrows-to-line" 
              onMouseDown={() => {
                setDragging(true);
                animatingRef.current = false;
              }}
              
              onTouchStart={(e) => {
                e.preventDefault();
                setDragging(true);
                animatingRef.current = false;
              }}/>
          </div>
      </div>
        {/* ↑ slider ends here */}

        <div className="buttons">
          <a href="/wip" target="_blank">
            <button className="download-free">
              <i className="fa-solid fa-arrow-down-to-line" />
              Install free
            </button>
          </a>
          <a href="https://www.youtube.com/@shkeffy" target="_blank">
            <button className="demo-btn">Watch demo</button>
          </a>
        </div>
        <NotifyForm />
        <div className="main-content">
          <div className="how_it_works" id='how-it-works'>
            <h3>What it offers?</h3>
            <h1>How it upgrades your <span><b><i className="fa-brands fa-youtube"></i></b>Studio</span></h1>
            <hr/>
            <div className="works">
              <div className="works_content">
                <div className="image-container">
                  <img src="/assets/screen-1.png" className="image-one" alt="" />
                  <div className="image-overlay" />
                </div>
                <div className="feature">
                  <h2>Brings back Engaged views</h2>
                  <p>After YouTube&rsquo;s latest update, actual views, now named engaged views, are buried, making real-time actual views impossible to view.<br/><br/>NewStudio adds a toggle directly into your YouTube Studio to switch between views and engaged views.</p>
                </div>
              </div>
              <div className="works_content" id="works_content_middle">
                <div className="feature">
                  <h2>Confirmation to sign-out</h2>
                  <p>Don't you just hate it when you accidentally click the sign out button, and you end up signed out of all of your Google accounts?<br/><br/>With NewStudio Confirm-Click, signing out requires a confirmation, saving you from having to log back in with all your Google accounts after a pesky misclick.</p>
                </div>
                <div className="image-container">
                  <img src="/assets/screen-2.png" className="image-two" alt="" />
                  <div className="image-overlay" />
                </div>
              </div>
              <div className="works_content" id="works_content_middle_mobile">
                <div className="image-container">
                  <img src="/assets/screen-2.png" className="image-two" alt="" />
                  <div className="image-overlay" />
                </div>
                <div className="feature">
                  <h2>Confirmation to sign-out</h2>
                  <p>Don't you just hate it when you accidentally click the sign out button, and you end up signed out of all of your Google accounts?<br/><br/>With NewStudio Confirm-Click, signing out requires a confirmation, saving you from having to log back in with all your Google accounts after a pesky misclick.</p>
                </div>
              </div>
              <div className="final_content_works">
                <div className="buttons">
                  <a href="/wip" target="_blank">
                    <button className="download-free">
                      <i className="fa-solid fa-arrow-down-to-line" />
                      Get all features — free install
                    </button>
                  </a>
                </div>
                <div className="single-review">
                  <img src="/assets/Gyro.webp" alt="Gyro" />
                  <div className="review-content">
                    <h2>“Setting up NewStudio took just a few seconds, and it works perfectly. The community is insanely helpful, and I'm looking forward to not being duped out of my real views.”</h2>
                    <h3>- Gyro, beta tester of NewStudio</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Header;