import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MagnifyingGlass from "../components/MagnifyingGlass";
import QuantityButton from "../components/QuantityButton";

import "../css/ArtPage.css";

export default function ArtPage() {
  const [info, setInfo] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [postInfo, setPostInfo] = useState([]);

  const fetchPost = async (id)=>{
    const config = {headers:{'Content-Type': 'application/json'}};
    const response = await axios.get(`http://localhost:5000/PostId/${id}`);
    setPostInfo(response.data);
  }

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
    fetchPost(id);
  }, []);

  return (
    <>
      <div className="artWrapper">
        <div className="art-img">
          <MagnifyingGlass imageUrl={'http://localhost:5000'+postInfo.img} />
        </div>
        <div>
          <div className="descriptionOfArt">
            <h1>{postInfo.title}</h1>
            <h3>Credit: {postInfo.credit}</h3>
            <p>{postInfo.description}</p>
          </div>
          <div className="purchaseArt">
            <p>Quantity: </p>
            <QuantityButton quantity={quantity} setQuantity={setQuantity} />
            <button className="artButton" onClick={navigateToCheckout}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
