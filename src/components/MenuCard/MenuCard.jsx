import { Sparkles } from 'lucide-react';
import './MenuCard.css';

function MenuCard({ item, onSelect }) {
  return (
    <article className="menu-card" onClick={() => onSelect(item)} role="button" tabIndex={0} onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onSelect(item);
      }
    }}>
      <div className="menu-card__image-wrap">
        <img src={item.image} alt={item.name} className="menu-card__image" />
        {item.vegetarian && <span className="menu-card__badge">Veg</span>}
      </div>

      <div className="menu-card__content">
        <div className="menu-card__meta">
          <span>{item.category}</span>
          <span>{item.price !== null && item.price !== undefined ? `₹${item.price}` : 'Price not listed'}</span>
        </div>

        <h3>{item.name}</h3>
        <p>{item.description}</p>

        <div className="menu-card__footer">
          <div className="menu-card__tags">
            {item.spicy && (
              <span className="menu-card__tag">
                <Sparkles size={12} /> Spicy
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default MenuCard;
