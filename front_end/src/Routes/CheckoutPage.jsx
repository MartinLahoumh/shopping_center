function CheckoutPage() {
    // function checkoutDone
    return (
      <>
        <div className="checkoutContainer">
          <div className="itemList">
            <h1>Your Items</h1>
            <li>1234</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </div>
          <div>
            <h1>Credit Card Information</h1>
            <form>
              <label>Card Number</label>
              <input type="text" name="cardNumber" id="cardNumber"></input>
              <br />
              <label>Full Address</label>
              <input type="text" name="fullAddress" id="fullAddress"></input>
              <br />
              <button type="submit">Submit Information</button>
            </form>
          </div>
        </div>
      </>
    );
  }
  export default CheckoutPage;