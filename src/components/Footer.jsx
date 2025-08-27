import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Codefest 2025</h3>
            <p className="text-zinc-400">
              Building the future, one hackathon at a time.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-zinc-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#schedule" className="text-zinc-400 hover:text-white transition-colors">Schedule</a></li>
              <li><a href="#rules" className="text-zinc-400 hover:text-white transition-colors">Rules</a></li>
              <li><a href="#register" className="text-zinc-400 hover:text-white transition-colors">Register</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="mailto:codefest2025@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
                📧
              </a>
              <a href="https://instagram.com/codefest2025" className="text-zinc-400 hover:text-white transition-colors">
                📱
              </a>
              <a href="https://linkedin.com/company/codefest2025" className="text-zinc-400 hover:text-white transition-colors">
                💼
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 mt-8 pt-8 text-center">
          <p className="text-zinc-400">
            © 2025 Codefest. All rights reserved. Made with ❤️ for the coding community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
