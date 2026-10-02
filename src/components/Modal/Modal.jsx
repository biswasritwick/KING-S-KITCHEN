import { useEffect } from 'react';
import { X } from 'lucide-react';
import './Modal.css';

function Modal({ isOpen, onClose, item }) {
  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="modal__close" onClick={onClose} aria-label="Close menu item details">
          <X size={18} />
        </button>

        <div className="modal__image-wrap">
          <img src={item.image} alt={item.name} className="modal__image" />
        </div>

        <div className="modal__content">
          <span className="modal__category">{item.category}</span>
          <h3 id="modal-title">{item.name}</h3>
          <p>{item.description}</p>

          <div className="modal__details">
            <div>
              <span>Ingredients</span>
              <strong>{item.ingredients?.join(', ')}</strong>
            </div>
            <div>
              <span>Dietary</span>
              <strong>{item.vegetarian ? 'Vegetarian' : 'Non-vegetarian'}</strong>
            </div>
            <div>
              <span>Price</span>
              <strong>{item.price !== null && item.price !== undefined ? `₹${item.price}` : 'Price not listed'}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
