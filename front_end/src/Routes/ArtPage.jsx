import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import MagnifyingGlass from "../components/MagnifyingGlass";
import QuantityButton from "../components/QuantityButton";

import "../css/ArtPage.css";

export default function ArtPage() {
  const [info, setInfo] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();

  const navigateToCheckout = () => {
    if (quantity === 0) {
      return;
    }
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

        <MagnifyingGlass imageUrl={info.imgURL} />

        <div>
          <div className="descriptionOfArt">
            <h1>{info.name}</h1>
            <h3>Credit: {info.credit}</h3>
            <p>{info.description}</p>
          </div>
          <div className="purchaseArt">
            <p>Quantity:</p>
            <QuantityButton quantity={quantity} setQuantity={setQuantity} />
            <button className="artButton" onClick={navigateToCheckout}>
              Buy
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
