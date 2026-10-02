import './SectionHeading.css';

function SectionHeading({ eyebrow, title, subtitle, align = 'left', className = '' }) {
  return (
    <div className={`section-heading section-heading--${align} ${className}`.trim()}>
      {eyebrow && <p className="section-heading__eyebrow">{eyebrow}</p>}
      {title && <h2 className="section-heading__title">{title}</h2>}
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </div>
  );
}

export default SectionHeading;
