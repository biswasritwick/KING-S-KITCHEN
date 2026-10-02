import { Clock3, Mail, MapPin, Phone } from 'lucide-react';
import Map from '../Map/Map';
import Button from '../Button/Button';
import { RESTAURANT_ADDRESS, restaurantConfig } from '../../config/restaurantConfig';
import './LocationSection.css';

function LocationSection() {
  return (
    <section className="location-section section-shell">
      <div className="container location-grid">
        <div className="location-map-wrap">
          <Map address={RESTAURANT_ADDRESS} />
        </div>

        <div className="location-content">
          <p className="section-heading__eyebrow">COME FIND US</p>
          <h2>Find your next favourite table.</h2>

          <div className="location-details">
            <div className="info-row">
              <MapPin size={18} />
              <div>
                <p>Address</p>
                <strong>{RESTAURANT_ADDRESS}</strong>
              </div>
            </div>

            <div className="info-row">
              <Clock3 size={18} />
              <div>
                <p>Opening hours</p>
                <strong>Mon – Thu 11:30 AM – 10:00 PM</strong>
                <strong>Fri – Sun 11:30 AM – 11:00 PM</strong>
              </div>
            </div>

            <div className="info-row">
              <Phone size={18} />
              <div>
                <p>Call</p>
                <strong>{restaurantConfig.phone}</strong>
              </div>
            </div>

            <div className="info-row">
              <Mail size={18} />
              <div>
                <p>Email</p>
                <strong>{restaurantConfig.email}</strong>
              </div>
            </div>
          </div>

          <div className="location-actions">
            <Button to="/contact" variant="primary">
              Book a Table →
            </Button>
            <Button href={restaurantConfig.googleMapsUrl || 'https://maps.google.com'} variant="secondary">
              Get Directions ↗
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
