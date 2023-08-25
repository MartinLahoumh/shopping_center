import PropTypes from "prop-types";
import "../css/DisplayImage.css";
import { useNavigate } from "react-router-dom";

function DisplayImage({ imgURL, name, price, description, id }) {
  const navigate = useNavigate();
  return (
    <div className="display-image-wrapper">
      <div className="image-container">
        <img src={'http://localhost:5000'+imgURL} alt={name} />
        <div
          className="description"
          onClick={() => {
            navigate(`/ArtPage?id=${id}`);
          }}
        >
          {description}
        </div>
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
  id: PropTypes.string.isRequired,
};

export default DisplayImage;
