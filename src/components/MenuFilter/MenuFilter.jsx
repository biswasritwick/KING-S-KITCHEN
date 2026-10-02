import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './MenuFilter.css';

function MenuFilter({ categories, activeCategory, onChange }) {
  const scrollRef = useRef(null);

  const scrollByAmount = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const amount = Math.max(container.clientWidth * 0.8, 180);
    container.scrollBy({
      left: direction === 'next' ? amount : -amount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="menu-filter-shell" aria-label="Menu categories">
      <button
        type="button"
        className="menu-filter__nav menu-filter__nav--left"
        onClick={() => scrollByAmount('prev')}
        aria-label="Scroll categories left"
      >
        <ChevronLeft size={16} />
      </button>

      <div ref={scrollRef} className="menu-filter" role="tablist" aria-label="Menu categories">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={activeCategory === category}
            className={`menu-filter__button ${activeCategory === category ? 'menu-filter__button--active' : ''}`}
            onClick={() => onChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <button
        type="button"
        className="menu-filter__nav menu-filter__nav--right"
        onClick={() => scrollByAmount('next')}
        aria-label="Scroll categories right"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
}

export default MenuFilter;
