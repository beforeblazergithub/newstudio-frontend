// src/app/wip/page.jsx
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../globals.css';
import './wip.css';

export default function WIP() {
  return (
    <div className="wip-page">
      <Navbar />
      <div className="wip-container">
        <h1>🚧 Work In Progress</h1>
        <p>This feature is coming soon. Stay tuned!</p>
        <p>Join the <a href="https://discord.newstudio.app">Discord</a></p>
      </div>
      <Footer />
    </div>
  );
}