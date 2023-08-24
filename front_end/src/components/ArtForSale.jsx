import QuantityButton from './QuantityButton';
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
                    <img src="https://ids.si.edu/ids/deliveryService?id=NPG-86T0028A_2&max=500" alt="#" />
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