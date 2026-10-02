import { ArrowRight } from 'lucide-react';
import Button from '../Button/Button';
import './FoodCard.css';

function FoodCard({ item }) {
  return (
    <article className="food-card">
      <div className="food-card__image-wrap">
        <img src={item.image} alt={item.name} className="food-card__image" />
      </div>

      <div className="food-card__content">
        <div className="food-card__topline">
          <span>{item.category}</span>
          <strong>₹{item.price}</strong>
        </div>

        <h3>{item.name}</h3>
        <p>{item.description}</p>

        <div className="food-card__actions">
          <Button to="/menu" variant="primary" className="food-card__button">
            View <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </article>
  );
}

export default FoodCard;
