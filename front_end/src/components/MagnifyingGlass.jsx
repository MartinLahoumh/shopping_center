import { useState } from "react";
import PropTypes from "prop-types";
import "../css/MagnifyingGlass.css";

function MagnifyingGlass({ imageUrl }) {
  const [magnified, setMagnified] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = e => {
    setMagnified(true);
    updatePosition(e);
  };

  const handleMouseMove = e => {
    updatePosition(e);
  };

  const handleMouseLeave = () => {
    setMagnified(false);
  };

  const updatePosition = e => {
    const rect = e.target.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    setPosition({ x, y });
  };

  return (
    <div
      className="magnifying-glass-container"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`magnifying-glass ${magnified ? "magnified" : ""}`}
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: `${position.x * 100}% ${position.y * 100}%`,
        }}
      ></div>
      <img src={imageUrl} alt="Original" className="original-image" />
    </div>
  );
}

export default MagnifyingGlass;

MagnifyingGlass.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};
