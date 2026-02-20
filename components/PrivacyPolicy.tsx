import React from 'react';
import { Link } from 'react-router-dom';
import PixelFlower from './PixelFlower';

const PixelTrafficLight: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 12 16" className={`w-full h-full ${className}`} style={{ imageRendering: 'pixelated', shapeRendering: 'crispEdges' }}>
    <rect x="4" y="0" width="4" height="4" fill="#FF3333"></rect>
    <rect x="4" y="4" width="4" height="4" fill="#FFD700"></rect>
    <rect x="4" y="8" width="4" height="4" fill="#228B22"></rect>
  </svg>
);

const PrivacyPolicy: React.FC = () => {
  return (
    <main className="relative z-10 flex-grow px-6 py-12 md:py-24">
      <div className="max-w-3xl mx-auto">
        <header className="mb-16 text-center">
          <h1 className="font-serif-italic text-6xl md:text-8xl mb-4">Privacy Policy</h1>
          <p className="text-xs font-bold tracking-widest opacity-60 uppercase">Last Updated: July 24, 2024</p>
        </header>

        <div className="space-y-12 text-sm md:text-base leading-relaxed opacity-90">
          <section>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
              <span className="text-yellow-300">01.</span> INTRODUCTION
            </h2>
            <p>
              This Privacy Policy describes how your personal information is collected, used, and shared when you visit my portfolio. As a creative developer, I value your privacy and transparency in how data is handled. This site is designed to showcase creative work with minimal data footprint.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
              <span className="text-yellow-300">02.</span> DATA COLLECTION
            </h2>
            <p className="mb-4">
              When you visit the site, I automatically collect certain information about your device, including information about your web browser, IP address, and time zone. Additionally, as you browse the site, I collect information about the individual web pages or projects that you view.
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4 opacity-80">
              <li>Log Files: Track actions occurring on the site.</li>
              <li>Web Beacons: Electronic files used to record information about how you browse.</li>
              <li>Cookies: Data files that are placed on your device or computer.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
              <span className="text-yellow-300">03.</span> USE OF INFORMATION
            </h2>
            <p>
              I use the Device Information that I collect to help me screen for potential risk and fraud, and more generally to improve and optimize my site (for example, by generating analytics about how visitors browse and interact with the portfolio, and to assess the success of my creative projects).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
              <span className="text-yellow-300">04.</span> THIRD PARTY SERVICES
            </h2>
            <p>
              I may share your Personal Information with third parties to help me use your Personal Information, as described above. For example, I use Google Analytics to help me understand how visitors use the site. You can read more about how Google uses your Personal Information here.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
              <span className="text-yellow-300">05.</span> CONTACT ME
            </h2>
            <p>
              For more information about my privacy practices, if you have questions, or if you would like to make a complaint, please contact me by e-mail at hello@stephanie.design.
            </p>
          </section>
        </div>

        <div className="mt-20 pt-12 border-t border-white/10 flex flex-col items-center">
          <div className="w-12 h-12 mb-6 pixel-art">
            <PixelTrafficLight />
          </div>
          <Link to="/" className="text-xs font-bold tracking-widest hover:text-yellow-300 transition-colors">
            BACK TO HOME
          </Link>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
