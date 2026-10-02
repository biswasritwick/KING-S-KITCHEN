import { useEffect } from 'react';
import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from 'lucide-react';
import Map from '../../components/Map/Map';
import Button from '../../components/Button/Button';
import { restaurantConfig, RESTAURANT_ADDRESS } from '../../config/restaurantConfig';
import './Contact.css';

const infoCards = [
  {
    icon: MapPin,
    title: 'Address',
    detail: RESTAURANT_ADDRESS,
  },
  {
    icon: Phone,
    title: 'Phone',
    detail: restaurantConfig.phone,
  },
  {
    icon: Mail,
    title: 'Email',
    detail: restaurantConfig.email,
  },
  {
    icon: Clock3,
    title: 'Opening Hours',
    detail: 'Mon–Thu 11:30 AM – 10:00 PM\nFri–Sun 11:30 AM – 11:00 PM',
  },
];

function Contact() {
  useEffect(() => {
    document.title = 'Contact | KING\'S KITCHEN';
  }, []);

  return (
    <>
      <section className="page-hero contact-hero">
        <div className="container ">
          <div class>
            <p className="eyebrow">Visit us</p>
            <h1>We’ll be happy to welcome you.</h1>
          </div>
        </div>
      </section>

      <section className="section-shell contact-section">
        <div className="container contact-layout">
          <div className="contact-info-panel">
            <div className="contact-info-grid">
              {infoCards.map(({ icon: Icon, title, detail }) => (
                <div key={title} className="contact-info-card">
                  <div className="contact-icon">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3>{title}</h3>
                    <p>{detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              href={restaurantConfig.googleMapsUrl || 'https://maps.google.com'}
              variant="primary"
              className="directions-button"
            >
              Get Directions <ArrowUpRight size={16} />
            </Button>
          </div>

          <div className="contact-map-panel">
            <Map address={RESTAURANT_ADDRESS} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
