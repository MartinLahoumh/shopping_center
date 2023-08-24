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
                <div className="art pop-out">
                    <img src="https://ids.si.edu/ids/deliveryService?id=NPG-86T0028A_2&max=500" alt="#" />
                </div>

                <div className="descriptionOfArt">
                    <h1>Michael Jackson</h1>
                    <h3>Credit: Andy Warhol, 1984.</h3>
                    <p>
                        Description of the Art!
                    </p>
                </div>
                <div className='purchaseArt'>
                    <p>Quantity:</p>
                    <QuantityButton></QuantityButton>
                    <button className="artButton" onClick={navigateToCheckout}>Buy</button>
                </div>
            </div>
        </>
    );
}
export default ArtForSale;