import { Star } from 'lucide-react';
import './TestimonialCard.css';

function TestimonialCard({ item }) {
  return (
    <article className="testimonial-card">
      <div className="testimonial-stars" aria-label={`Rated ${item.rating} out of 5`}>
        {Array.from({ length: item.rating }).map((_, index) => (
          <Star key={index} size={16} fill="currentColor" />
        ))}
      </div>

      <p className="testimonial-quote">“{item.quote}”</p>

      <div className="testimonial-meta">
        <strong>{item.name}</strong>
        <span>
          {item.role} • {item.location}
        </span>
      </div>
    </article>
  );
}

export default TestimonialCard;
