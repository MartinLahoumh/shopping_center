import PropTypes from "prop-types";
import "../css/DisplayImage.css";

function DisplayImage({ imgURL, name, price, description, url }) {
  return (
    <div className="display-image-wrapper">
      <div className="image-container">
        <img
          src={imgURL}
          alt={name}
          onClick={() => {
            window.location = `${window.location.href}${url}`;
          }}
        />
        <div className="description">{description}</div>
      </div>
      <p className="img-info">
        {name} <br /> ${price}
      </p>
    </div>
  );
}

DisplayImage.propTypes = {
  imgURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default DisplayImage;
