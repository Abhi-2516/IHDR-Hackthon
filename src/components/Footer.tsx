
import { Heart, Database, Twitter, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-health-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Database className="h-6 w-6 text-health-500" />
              <span className="font-semibold text-xl text-health-900">IHDR</span>
            </div>
            <p className="text-health-600 mb-6 max-w-md">
              India Health Data Repository is a pioneering initiative to create a centralized platform for healthcare data, 
              enabling AI innovation and medical research for India's unique healthcare challenges.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-health-400 hover:text-health-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-health-400 hover:text-health-600 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-health-400 hover:text-health-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-health-400 hover:text-health-600 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-health-900 mb-4">Platform</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-health-600 hover:text-health-900 transition-colors">Data Repository</a></li>
              <li><a href="#" className="text-health-600 hover:text-health-900 transition-colors">API Access</a></li>
              <li><a href="#" className="text-health-600 hover:text-health-900 transition-colors">Data Upload</a></li>
              <li><a href="#" className="text-health-600 hover:text-health-900 transition-colors">Health Analytics</a></li>
              <li><a href="#" className="text-health-600 hover:text-health-900 transition-colors">Research Integration</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-health-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-health-600 hover:text-health-900 transition-colors">About</a></li>
              <li><a href="#" className="text-health-600 hover:text-health-900 transition-colors">Team</a></li>
              <li><a href="#" className="text-health-600 hover:text-health-900 transition-colors">Careers</a></li>
              <li><a href="#" className="text-health-600 hover:text-health-900 transition-colors">Contact</a></li>
              <li><a href="#" className="text-health-600 hover:text-health-900 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-health-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-health-500 text-sm">
            © {new Date().getFullYear()} India Health Data Repository. All rights reserved.
          </p>
          <div className="flex items-center mt-4 md:mt-0 text-sm text-health-500">
            <span>Built for India Powered by Data</span>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
