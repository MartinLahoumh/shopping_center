import { useState } from "react";
import "../css/CheckoutPage.css";
import Popup from "../components/Popup";

import ObjectList from "../components/Objectlist";

const CheckoutPage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleFormSubmit = event => {
    if (objectArray.length !== 0) {
      setObjectArray([]);
    }
    event.preventDefault();
    setShowPopup(true);
  };

  //Item array
  const [objectArray, setObjectArray] = useState([
    { id: 1, name: "Item 1", price: 10 },
    { id: 2, name: "Item 2", price: 20 },
    // Add more proper object.
  ]);

  return (
    <div className="listAndCard">
      <div>
        <h1>Object List</h1>
        <ObjectList objectArray={objectArray} />
      </div>

      <div className="CreditCardContainer">
        <h1>Credit Card Information</h1>

        <form className="checkout-form" onSubmit={handleFormSubmit}>
          <label className="checkout-label">Card Number</label>
          <input
            type="number"
            name="cardNumber"
            id="cardNumber"
            className="checkoutinput"
          />
          <br />
          <label className="checkout-label">Full Address</label>
          <input
            type="text"
            name="fullAddress"
            id="fullAddress"
            className="checkoutinput"
          />
          <br />
          <button onSubmit="submit" className="checkout-button">
            Submit Information
          </button>
          {showPopup && <Popup onClose={() => setShowPopup(false)} />}
        </form>
      </div>
      <div className="filler"></div>
    </div>
  );
};

export default CheckoutPage;
