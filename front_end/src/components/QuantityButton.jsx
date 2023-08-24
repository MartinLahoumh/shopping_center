import { useState } from "react";

function QuantityButton() {
  const [quantity, setQuantity] = useState(0);

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

export default QuantityButton;
