import { Link } from 'react-router-dom';
import { restaurantConfig } from '../../config/restaurantConfig';
import './Footer.css';

const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-column footer-column--brand">
          <h3>{restaurantConfig.name}</h3>
          <p>
            A warm neighbourhood restaurant serving fresh ingredients, honest cooking and unforgettable table moments.
          </p>
        </div>

        <div className="footer-column">
          <h4>Explore</h4>
          <ul>
            {footerLinks.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h4>Visit</h4>
          <ul>
            <li>{restaurantConfig.phone}</li>
            <li>{restaurantConfig.email}</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Follow</h4>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Google</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom__inner">
          <p>© 2026 {restaurantConfig.name}. All rights reserved.</p>
          <div className="footer-bottom__links">
            <a href="/">Privacy Policy</a>
            <a href="/">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
