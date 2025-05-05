import { Instagram, Twitter, Facebook, Youtube, Music, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-purple-200">
      {/* Top Wave Decoration */}
      <div className="w-full">
        <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="w-full h-12 text-indigo-800 fill-current">
          <path d="M0,0 C300,100 600,0 1200,100 L1200,100 L0,100 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:pl-16 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Column 1 - About */}
          <div>
            <h3 className="font-bold text-white text-xl mb-4">Event Hive</h3>
            <p className="mb-8">
                Join us to attend your favorite events and concerts. We are dedicated to bringing you the best experiences in music, art, and culture. Stay tuned for our upcoming events and festivals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-purple-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-purple-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-purple-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-purple-300 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="font-bold text-white text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="inline-block text-purple-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="inline-block text-purple-300 hover:text-white transition-colors">
                  Lineup
                </a>
              </li>
              <li>
                <a href="#" className="inline-block text-purple-300 hover:text-white transition-colors">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#" className="inline-block text-purple-300 hover:text-white transition-colors">
                  Tickets
                </a>
              </li>
              <li>
                <a href="#" className="inline-block text-purple-300 hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>


          {/* Column 3 - Contact */}
          <div>
            <h3 className="font-bold text-white text-xl mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin size={18} className="mr-2 flex-shrink-0 text-purple-400" />
                <span>Dhaka-100, Bangladesh</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0 text-purple-400" />
                <span>+880 1555 123-456</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0 text-purple-400" />
                <span>info@event-hive.com</span>
              </li>
            </ul>
          </div>
        </div>


        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-purple-800 text-center">
          <p className="text-sm">© 2025 Event Hive. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4 text-sm">
            <a href="#" className="text-purple-300 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-purple-300 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-purple-300 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
