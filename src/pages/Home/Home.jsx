import { useEffect } from 'react';
import { ArrowRight, Clock3, Leaf, MapPin, Sparkles, Star, UtensilsCrossed } from 'lucide-react';
import Button from '../../components/Button/Button';
import FoodCard from '../../components/FoodCard/FoodCard';
import LocationSection from '../../components/LocationSection/LocationSection';
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import { featuredMenuData, menuData } from '../../data/menuData';
import { testimonials } from '../../data/testimonials';
import './Home.css';

const homeFeatures = [
  {
    icon: Leaf,
    title: 'Fresh Ingredients',
    description: 'Locally sourced ingredients prepared daily for honest, vibrant flavour.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Open Kitchen',
    description: 'Watch our chefs bring each dish to life with care and precision.',
  },
  {
    icon: Sparkles,
    title: 'Warm Hospitality',
    description: 'A relaxed space tailored around good food and easy conversations.',
  },
  {
    icon: Star,
    title: 'Private Events',
    description: 'Celebrate birthdays, dinners and meaningful moments with us.',
  },
];

function Home() {
  useEffect(() => {
    document.title = "KING'S KITCHEN | Fresh Food & Great Moments";
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute(
        'content',
        'A modern restaurant serving fresh, handcrafted food in a warm and welcoming atmosphere.',
      );
    }
  }, []);

  const signatureDish = menuData.find((item) => item.name === 'Chicken Biryani') || menuData[0];

  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="hero-banner">
            <p className="hero-banner__eyebrow">Come by for a meal</p>

            <div className="hero-banner__row">
              <h1>Fresh plates, warm company.</h1>

              <div className="hero-banner__actions">
                <Button to="/menu" variant="light" className="hero-banner__button hero-banner__button--outline">
                  Explore menu
                </Button>
                <Button to="/contact" variant="primary" className="hero-banner__button hero-banner__button--solid">
                  Reserve now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell feature-menu">
        <div className="container">
          <SectionHeading
            eyebrow="From our kitchen"
            title="A few favourites worth coming back for."
            align="center"
          />

          <div className="featured-grid">
            {featuredMenuData.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>

          <div className="section-cta-row">
            <Button to="/menu" variant="primary">
              View Full Menu →
            </Button>
          </div>
        </div>
      </section>

      <section className="section-shell story-section">
        <div className="container story-grid">
          <div className="story-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80"
              alt="Warm restaurant interior with dining tables"
            />
          </div>

          <div className="story-copy">
            <p className="eyebrow">Our story</p>
            <h2>From a small kitchen to your favourite table.</h2>
            <p>
              KING&apos;S KITCHEN began with a simple idea: make every meal feel generous, thoughtful and memorable.
            </p>
            <p>
              What started as a neighbourhood food passion evolved into a dining room centred on seasonal flavours,
              familiar comforts and warm hospitality.
            </p>

            <div className="story-stats">
              <div>
                <strong>8+</strong>
                <span>Years of craft</span>
              </div>
              <div>
                <strong>25+</strong>
                <span>Signature dishes</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Fresh ingredients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="signature-band">
        <div className="container signature-section__inner">
          <div className="signature-image-wrap">
            <img src={signatureDish.image} alt={signatureDish.name} />
          </div>

          <div className="signature-copy">
            <p className="eyebrow">The house special</p>
            <h2>{signatureDish.name}</h2>
            <p>
              A rich, aromatic spread of flavour layered with slow-cooked spice, fragrant rice and the warmth of a classic kitchen favourite.
            </p>
            <div className="signature-bottom">
              <span>₹{signatureDish.price}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell experience-section">
        <div className="container">
          <SectionHeading
            eyebrow="The experience"
            title="Thoughtful details, every single visit."
            subtitle="Everything from the ingredients to the pacing of service is designed to feel effortless and welcoming."
            align="center"
          />

          <div className="feature-grid">
            {homeFeatures.map(({ icon: Icon, title, description }) => (
              <div key={title} className="feature-card">
                <div className="feature-icon">
                  <Icon size={22} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LocationSection />

      <section className="section-shell testimonial-section">
        <div className="container">
          <SectionHeading
            eyebrow="Good food, good words"
            title="People keep coming back for more."
            align="center"
          />

          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell cta-section">
        <div className="container cta-box">
          <div className="cta-copy">
            <p className="eyebrow light">Your table is waiting</p>
            <h2>Come hungry. Leave happy.</h2>
          </div>
          <div className="cta-actions">
            <Button to="/contact" variant="primary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
