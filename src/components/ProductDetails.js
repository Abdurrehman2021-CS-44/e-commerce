import { useParams } from 'react-router-dom';
import products from '../products';
import { useContext } from 'react';
import productContext from '../context/productContext';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ProductDetails = () => {
    const cart = useContext(productContext);

    const { id } = useParams()

    const productClicked = products.filter((product)=>product.id==id);

    console.log(productClicked);

    const styling ={
        fontSize: "0.9rem",
    }

    const handleChange = (event) => {
        let newValue = parseInt(event.target.value);
        if (newValue => 1 && newValue <= 10){
            cart.addToCartWithValue(id, newValue)
        }
    }

    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <img src={productClicked[0].image} />
            <h1>{productClicked[0].title}</h1>
            <p>${productClicked[0].price}.00</p>
            <div className="input-elements">
            
            <button onClick={() => {
                cart.removeFromCart(id);
            }}><RemoveIcon style={styling} /></button>
            <input type="text" value={cart.cartElement[id]} style={{border: "2px solid black"}} onChange={handleChange}/>
            <button onClick={() => {
                cart.addToCart(id);
            }}><AddIcon style={styling} /></button>
        </div>

        </>
    );
}

export default ProductDetails;