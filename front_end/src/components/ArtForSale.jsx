import QuantityButton from "../components/QuantityButton";
import {useNavigate} from 'react-router-dom';

function ArtForSale(){

    const navigate = useNavigate();

    const navigateToCheckout = () => {
        // 👇️ navigate to /
        navigate("../test2");
      };

    return(
        <>
            <div className="artWrapper">
                <div className="art">
                    <img src="#" alt="#" />
                </div>

                <div className="descriptionOfArt">
                    <p>
                        This is an artwork!
                    </p>
                </div>
                    <p>Quantity:</p>
                    <QuantityButton></QuantityButton>
                    <button className="artButton" onClick={navigateToCheckout}>Buy</button>
            </div>
        </>
    );
}
export default ArtForSale;