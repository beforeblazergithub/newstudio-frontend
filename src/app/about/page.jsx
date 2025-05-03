// app/about/page.jsx  (or wherever your About route lives)
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../globals.css';
import './about.css';
import Image from 'next/image';

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="about">
        <h1>About: <span><img src="/images/icons/logo.svg" alt="logo" /> NewStudio</span></h1>

        <p>
          NewStudio is a free Chrome extension that completely transforms YouTube Studio into a fully customizable, modular, updated dashboard. As of now there are many easy of use features and most notably the bring back Engaged views feature. More updates soon!</p>
        <p>
          All processing happens locally in your browser or extension — there&apos;s no login, no accounts (yet), and we never collect or store your data. Your settings (themes, layout, filters) are currently saved on your machine only.
        </p>

        <p>
          We aim to ship new features roughly 1-3 times a month. To stay in the
          loop on releases, beta tests, and roadmap discussions, join our{' '}
          <a
            href="https://discord.newstudio.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord
          </a>
          .
        </p>

        <p>
           If you ever run into an issue or have an idea for how we can make NewStudio even
           better, please reach out at{' '}
           <a href="mailto:support@newstudio.app">support@newstudio.app</a>. We&rsquo;re always
           listening!
         </p>
      </div>
      <Footer />
    </div>
  );
}