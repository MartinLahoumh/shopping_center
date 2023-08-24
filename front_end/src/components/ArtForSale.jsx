import QuantityButton from "./QuantityButton";
import { useNavigate } from "react-router-dom";

function ArtForSale() {
  // assume pulled from DB using
  const info = {
    name: "Michael Jackson",
    credit: "Andy Warhol, 1984",
    description: "Description of the Art!",
    imgURL: "https://ids.si.edu/ids/deliveryService?id=NPG-86T0028A_2&max=500",
    price: 69,
    url: "asdf", //a unique id
  };
  const navigate = useNavigate();

  const navigateToCheckout = () => {
    // 👇️ navigate to /
    navigate("../test2");
  };

  return (
    <>
      <div className="artWrapper">
        <div className="art pop-out">
          <img src={info.imgURL} alt={info.description} />
        </div>

        <div className="descriptionOfArt">
          <h1>{info.name}</h1>
          <h3>Credit: {info.credit}</h3>
          <p>{info.description}</p>
        </div>
        <div className="purchaseArt">
          <p>Quantity:</p>
          <QuantityButton></QuantityButton>
          <button className="artButton" onClick={navigateToCheckout}>
            Buy
          </button>
        </div>
      </div>
    </>
  );
}
export default ArtForSale;
