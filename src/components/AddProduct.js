import { useContext, useReducer } from "react";
import products from "../products";
import productContext from "../context/productContext";
import { Link } from "react-router-dom";

const actionOnData = (currentState, action) => {
    switch (action.type){
        case "ENTER_DATA":
            return {
                ...currentState,
                [action.field]: action.payload
            }
        default :
            return {
                ...currentState
            }
    }
}

const AddProduct = (props) => {
    const {reinitializeCart} = useContext(productContext);

    const initialState = {
        title: "",
        brand: "",
        price: null,
        image: null,
        description: ""
    }
    const [product, dispatch] = useReducer(actionOnData, initialState);

    const handleChange = (e) => {
        dispatch({type:"ENTER_DATA", field: e.target.name, payload: e.target.value})
        console.log(product);
    }

    const handleClick = () => {
        product.ratings = [];
        product.id = products.length;
        products.push(product);
        reinitializeCart();
    }

    return (
        <>
            <div className="add-product">
                <form>
                    <h1 className="display-4 text-center">Add Product</h1>

                    <div className="my-3">
                        <label for="title" className="form-label">Title/Name *</label>
                        <input name="title" type="text" className="form-control text-left" id="title" placeholder="Title" value={product.title} onChange={handleChange}/>
                    </div>
                    <div className="my-3">
                        <label for="brand" className="form-label">Brand </label>
                        <input name="brand" type="text" className="form-control" id="brand" placeholder="Brand" value={product.brand} onChange={handleChange}/>
                    </div>
                    <div className="my-3">
                        <label for="price" className="form-label">Price *</label>
                        <input name="price" type="number" className="form-control" id="price" placeholder="Price" value={product.price} onChange={handleChange}/>
                    </div>

                    <p>Image *</p>
                    <div className="my-3">
                        <input name="image" type="text" className="form-control" id="link" placeholder="Add link" onChange={handleChange}/>
                    </div>

                    <div className="mb-3">
                        <label for="description" className="form-label">Description</label>
                        <textarea name="description" className="form-control" id="description" rows="3" value={product.description} onChange={handleChange}></textarea>
                    </div>
                    <Link to="/"><button className="btn btn-outline-dark btn-lg w-100" onClick={handleClick} >Add Product</button></Link>
                </form>
            </div>
        </>
    )
};

export default AddProduct;