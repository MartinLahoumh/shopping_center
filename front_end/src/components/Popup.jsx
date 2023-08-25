import React, { useState } from "react";

import "../css/CheckoutPage.css";
const Popup = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const openPopup = () => {
    
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    
    setIsPopupVisible(false);
  };

  return (
    <div className="PopUpContainer">
      <button className="OpenBtn" onClick={openPopup}>
        
        Finalize
      </button>
      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            
            <div className="center-content">
              <div className="CreditCardContainer">
                <p>Thank You for shopping with us!</p>
              </div>
            </div>
            <button className="submit-button" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
