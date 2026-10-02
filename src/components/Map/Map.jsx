import './Map.css';

function Map({ address }) {
  const encodedAddress = encodeURIComponent(address || 'Kolkata, India');
  const mapSrc = `https://maps.google.com/maps?q=${encodedAddress}&z=13&output=embed`;

  return (
    <div className="map-card" aria-label="Map showing restaurant location">
      <iframe
        title="Restaurant location map"
        src={mapSrc}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
