import { useParams } from 'react-router-dom';
import products from '../products';
import { useContext } from 'react';
import productContext from '../context/productContext';
import { Link} from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

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
            <div className='product-details'>
                <div className="image-wrapper detail-img-positioning">
                    <img src={productClicked[0].image} />
                </div>
                <div className="basic-details">
                    <h1>{productClicked[0].title}</h1>
                    <p>Price: ${productClicked[0].price}.00</p>
                    <p>Rating: {productClicked[0].ratings.length}</p>
                </div>
                <div className="input-elements">
                    <button onClick={() => {
                        cart.removeFromCart(id);
                    }}><RemoveIcon style={styling} /></button>
                    <input type="text" value={cart.cartElement[id]} style={{border: "2px solid black"}} onChange={handleChange}/>
                    <button onClick={() => {
                        cart.addToCart(id);
                    }}><AddIcon style={styling} /></button>
                </div>
                <div className="btn-positioning product-details-btn">
                    <a className="btn btn-dark"><ShoppingBagOutlinedIcon /> Buy Now</a>
                    <a className="btn btn-dark"><AddShoppingCartIcon /> Add to cart</a>
                </div>
                <p style={{ whiteSpace: 'pre-line' }} className="product-desc">
                    <h2>Description</h2>
                    {productClicked[0].description}
                </p>
            </div>

        </>
    );
}

export default ProductDetails;