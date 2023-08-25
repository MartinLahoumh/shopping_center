import PropTypes from "prop-types";
import "../css/QuantityButton.css";

function QuantityButton({ quantity, setQuantity }) {
  const qtyIncrement = () => {
    setQuantity(prevQuantity => ++prevQuantity);
  };

  const qtyDecrement = () => {
    if (quantity > 0) {
      setQuantity(prevQuantity => --prevQuantity);
    }
  };

  return (
    <>
      <div className="quantity">
        <button className="minus" onClick={qtyDecrement}>
          -
        </button>
        <input className="qty" type="text" value={quantity} readOnly />
        <button className="plus" onClick={qtyIncrement}>
          +
        </button>
      </div>
    </>
  );
}

QuantityButton.propTypes = {
  quantity: PropTypes.number.isRequired,
  setQuantity: PropTypes.func.isRequired,
};

export default QuantityButton;
