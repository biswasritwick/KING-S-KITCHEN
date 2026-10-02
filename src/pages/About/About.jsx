import { useEffect } from 'react';
import { Award, Coffee, HeartHandshake } from 'lucide-react';
import Button from '../../components/Button/Button';
import { galleryData } from '../../data/galleryData';
import './About.css';

const philosophy = [
  {
    icon: Award,
    title: 'Quality',
    description: 'We choose ingredients carefully and keep our standards exacting.',
  },
  {
    icon: Coffee,
    title: 'Craft',
    description: 'Every dish is created with instinct, technique and attention to detail.',
  },
  {
    icon: HeartHandshake,
    title: 'Community',
    description: 'Our restaurant is built around people, stories and everyday gathering.',
  },
];

function About() {
  useEffect(() => {
    document.title = 'About Us | KING\'S KITCHEN';
  }, []);

  return (
    <>
      <section className="page-hero about-hero">
        <div className="container about-hero__inner">
          <div className="about-hero__copy">
            <p className="eyebrow">About us</p>
            <h1>Food is better when there is a story behind it.</h1>
          </div>
          <div className="about-hero__image">
            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80"
              alt="Elegant restaurant dining room"
            />
          </div>
        </div>
      </section>

      <section className="section-shell about-story-section">
        <div className="container about-story">
          <div className="about-story__image">
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80"
              alt="Chef preparing dishes in kitchen"
            />
          </div>
          <div className="about-story__copy">
            <p className="eyebrow">Our story</p>
            <h2>We cook for comfort, conversation and connection.</h2>
            <p>
              KING&apos;S KITCHEN grew from a love of honest food and unhurried hospitality. We wanted a place where meals felt personal and the room felt familiar from the first welcome to the final dessert.
            </p>
            <p>
              Our menu balances comfort and curiosity, bringing together classic favourites, spontaneous creativity and a focus on ingredients that are flavourful and fresh.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell philosophy-section">
        <div className="container">
          <div className="centered-header">
            <p className="eyebrow">Our philosophy</p>
            <h2>How we cook, serve and gather.</h2>
          </div>

          <div className="about-philosophy__grid">
            {philosophy.map(({ icon: Icon, title, description }) => (
              <div key={title} className="philosophy-card">
                <div className="feature-icon">
                  <Icon size={20} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell chef-section">
        <div className="container chef-grid">
          <div className="chef-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80"
              alt="Chef standing in a kitchen"
            />
          </div>

          <div className="chef-copy">
            <p className="eyebrow">Chef's note</p>
            <blockquote>
              “Our kitchen is driven by curiosity, simplicity and respect for ingredients.”
            </blockquote>
            <h3>Rahul Mukherjee</h3>
            <p className="chef-role">Head Chef</p>
            <p>
              Rahul brings together local ingredients and layered flavour traditions to create food that feels comforting, elegant and deeply personal.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell stats-section">
        <div className="container stats-grid">
          <div>
            <strong>12+</strong>
            <span>Seasonal menus</span>
          </div>
          <div>
            <strong>1500+</strong>
            <span>Meals served</span>
          </div>
          <div>
            <strong>4.9/5</strong>
            <span>Guest rating</span>
          </div>
        </div>
      </section>

      <section className="section-shell gallery-section">
        <div className="container">
          <div className="centered-header">
            <p className="eyebrow">Gallery</p>
            <h2>A look inside the room, the plate and the kitchen.</h2>
          </div>

          <div className="gallery-grid">
            {galleryData.map((image) => (
              <figure key={image.id} className="gallery-item">
                <img src={image.src} alt={image.alt} />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell cta-section">
        <div className="container cta-box">
          <div className="cta-copy">
            <p className="eyebrow light">Come by for a meal</p>
            <h2>Fresh plates, warm company.</h2>
          </div>
          <div className="cta-actions">
            <Button to="/contact" variant="primary">Reserve now</Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
