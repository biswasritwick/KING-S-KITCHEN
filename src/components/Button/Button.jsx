import { Link } from 'react-router-dom';
import './Button.css';

function Button({ children, variant = 'primary', to, href, onClick, type = 'button', className = '', ariaLabel }) {
  const classes = `button button--${variant} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
}

export default Button;
