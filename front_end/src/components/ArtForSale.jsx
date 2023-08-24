import { useEffect, useState } from "react";
import QuantityButton from "./QuantityButton";
import { useNavigate } from "react-router-dom";

function ArtForSale() {
  const [info, setInfo] = useState(0);
  const navigate = useNavigate();

  const navigateToCheckout = () => {
    // 👇️ navigate to /
    navigate("../test2");
    // TODO: before redirect set users cart with db
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get("id");

    //at this point pull from the db and setInfo to json pulled from db using id
    console.log(id);
    setInfo({
      name: "Michael Jackson",
      credit: "Andy Warhol, 1984",
      description: "Description of the Art!",
      imgURL:
        "https://ids.si.edu/ids/deliveryService?id=NPG-86T0028A_2&max=500",
      price: 69,
      url: "asdf", //a unique id
    });
  }, []);

  return (
    <>
      <div className="artWrapper">
        <div className="art pop-out">
          <img src={info.imgURL} alt={info.description} />
        </div>

        <div>
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
      </div>
    </>
  );
}
export default ArtForSale;
