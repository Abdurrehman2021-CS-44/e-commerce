import { useContext } from "react";
import ProductContext from "../context/productContext";
import { Link } from 'react-router-dom';

const Product = (props) => {
    const cart = useContext(ProductContext)

    const handleClick = (e) => {
        console.log("Added to Cart")
        cart.addToCart(props.id);
        e.preventDefault();
    }

    const styling = {
        textDecoration: "none",
        color: "black"
    }

    return (
        <>
            <Link to={`/details/${props.id}`} style={styling}><div className="card text-center" style={{border: "0"}}>
                <div className="image-wrapper">
                    <img src={props.image} alt="..."/>
                </div>
                <div className="card-body">
                    <hr />
                    <h5 className="card-title"> <b>{props.title}</b> </h5>
                    <p className="card-text">$ {props.price}.00</p>
                    <button className="btn btn-outline-dark" onClick={handleClick}>Add to Cart {cart.cartElement[props.id] > 0 && `(${cart.cartElement[props.id]})`}</button>
                </div>
            </div></Link>
        </>
    )
}

export default Product;