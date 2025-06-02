import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sun, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Youtube, 
  Twitter 
} from 'lucide-react';
import '../styles/Layout.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <div className="footer-logo">
              <Sun size={24} />
              <span>KON Sun Energy</span>
            </div>
            <p>Rooftop solar made simple. We don't just sell solar — we give you peace of mind.</p>
            <div className="social-links">
              <a href="https://facebook.com" className="social-link" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" className="social-link" aria-label="YouTube">
                <Youtube size={20} />
              </a>
              <a href="https://twitter.com" className="social-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Our Solutions</h4>
            <ul>
              <li><Link to="/solutions#residential">Homes</Link></li>
              <li><Link to="/solutions#commercial">Commercial</Link></li>
              <li><Link to="/solutions#housing">Housing Society</Link></li>
              <li><Link to="/solutions#on-grid">On-Grid Solar</Link></li>
              <li><Link to="/solutions#off-grid">Off-Grid Solar</Link></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/solutions">Solar Solutions</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/sitemap">Sitemap</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>
              <Phone size={16} />
              <span>+91 9600 13 0810</span>
            </p>
            <p>
              <Mail size={16} />
              <span>tellus@konsunenergy.in</span>
            </p>
            <p>
              <Mail size={16} />
              <span>kon.thesunenergysolutions@gmail.com</span>
            </p>
            <p>
              <MapPin size={16} />
              <span>NAVANEETHAN NILAYAM 02/192<br />Chennai - 600023</span>
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>We are present here: <Link to="/tamil-nadu">Solar in Tamil Nadu</Link> | <Link to="/chennai">Solar in Chennai</Link></p>
          <p className="mt-2">Proudly FROM TAMIL NADU & TAMIL BRAINS ❤️</p>
          <p className="mt-2">© {new Date().getFullYear()} KON Sun Energy Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;