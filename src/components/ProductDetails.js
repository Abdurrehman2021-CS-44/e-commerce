import { useParams } from 'react-router-dom';
import products from '../products';
import { useContext, useState } from 'react';
import productContext from '../context/productContext';
import { Link} from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Preview } from '@mui/icons-material';

const ProductDetails = () => {
    const cart = useContext(productContext);
    const { id } = useParams()
    const [count, setCount] = useState(cart.cartElement[id]);

    
    const productClicked = products.filter((product)=>product.id==id);

    let rating = 0;

    for (let i = 0; i < productClicked[0].ratings.length; i++){
        rating += productClicked[0].ratings[i].rating;
    }

    const fullStars = Math.floor(rating/productClicked[0].ratings.length);
    const hasHalfStar = rating - fullStars >= 0.5;

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
        stars.push(<span key={i}>&#9733;</span>); // Full star (Unicode: ★)
    }

    if (hasHalfStar) {
        stars.push(<span key={fullStars}>&#189;</span>); // Half star (Unicode: ★½)
    }

    const styling ={
        fontSize: "0.9rem",
    }

    const handleChange = () => {
        setCount((preValue) => {
            return preValue + 1;
        })
    }

    const handleCart = () => {
        cart.addToCartWithValue(id, count)
    }

    const getStars = (rating) => {
        const fStars = Math.floor(rating);
        const hStar = rating - fStars >= 0.5;

        let s = []
        for (let i = 0; i < fStars; i++){
            s.push(<span key={i}>&#9733;</span>);
        }

        if(hStar){
            s.push(<span key={fullStars}>&#189;</span>);
        }

        return s;
    }

    const individualRatings = productClicked[0].ratings;
    

    return (
        <>
            <div className='product-details'>
                <div className="image-wrapper detail-img-positioning">
                    <img src={productClicked[0].image} />
                </div>
                <div className="basic-details">
                    <h1>{productClicked[0].title}</h1>
                    <p>Brand: {productClicked[0].hasOwnProperty("brand") ? productClicked[0].brand : "No Brand"}</p>
                    <p>Price: ${productClicked[0].price}.00</p>
                    <p>{stars} | {productClicked[0].ratings.length} Ratings</p>
                </div>
                <div className="input-elements">
                    <button onClick={() => {
                        setCount((preValue) => {
                            return preValue === 0 ? preValue : preValue - 1;
                        })
                    }}><RemoveIcon style={styling} /></button>
                    <input type="text" value={count} style={{border: "2px solid black"}} onChange={handleChange}/>
                    <button onClick={() => {
                        setCount((preValue) => {
                            return preValue + 1;
                        })
                    }}><AddIcon style={styling} /></button>
                </div>
                <div className="btn-positioning product-details-btn">
                    <a className="btn btn-dark"><ShoppingBagOutlinedIcon /> Buy Now</a>
                    <a className="btn btn-dark" onClick={handleCart}><AddShoppingCartIcon /> Add to cart</a>
                </div>
                <p style={{ whiteSpace: 'pre-line' }} className="product-desc">
                    <h2>Description</h2>
                    {productClicked[0].description}
                </p>
                <div className="rating-section">
                    <h2>Reviews</h2>
                    {
                        productClicked[0].ratings.map((rat)=>{
                            return (
                                <>
                                    <div className="reviews">
                                        <p className="name">{rat.name}</p>
                                        <p className="review">{rat.review}</p>
                                        <div className="individual-stars">
                                            {getStars(rat.rating)}
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>

            </div>

        </>
    );
}

export default ProductDetails;