import { useContext, useReducer } from "react";
import products from "../products";
import productContext from "../context/productContext";
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();
    const {reinitializeCart} = useContext(productContext);

    const initialState = {
        title: "",
        brand: "",
        price: "",
        image: null,
        description: ""
    }
    const [product, dispatch] = useReducer(actionOnData, initialState);

    const handleChange = (e) => {
        if (e.target.type === "file") {
            let file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                    dispatch({type:"ENTER_DATA", field: e.target.name, payload: reader.result})
                }
            }
        } else {
            dispatch({type:"ENTER_DATA", field: e.target.name, payload: e.target.value})
        }
        
        console.log(product);
    }

    const handleClick = () => {
        let isNotValid = false;
        const fields = Object.keys(product);
        for(let i = 0; i < Object.keys(product).length; i++){
            if (product[fields[i]] === "" || product[fields[i]] === null) {
                isNotValid = true;
                break;
            }
        }
        if (isNotValid){
            alert("Please enter all the inputs.")
        } else {
            product.ratings = [];
            product.id = products.length;
            products.push(product);
            reinitializeCart();
            navigate("/");
        }
    }

    return (
        <>
            <div className="add-product">
                <h1 className="display-4 text-center">Add Product</h1>

                <div className="my-3">
                    <label htmlFor="title" className="form-label">Title/Name *</label>
                    <input name="title" type="text" className="form-control text-left" id="title" placeholder="Title" value={product.title} onChange={handleChange}/>
                </div>
                <div className="my-3">
                    <label htmlFor="brand" className="form-label">Brand *</label>
                    <input name="brand" type="text" className="form-control" id="brand" placeholder="Brand" value={product.brand} onChange={handleChange}/>
                </div>
                <div className="my-3">
                    <label htmlFor="price" className="form-label">Price *</label>
                    <input name="price" type="number" className="form-control" id="price" placeholder="Price" value={product.price} onChange={handleChange}/>
                </div>

                <div className="my-3">
                    <label htmlFor="image" className="form-label">Image *</label>
                    <input name="image" type="file" className="form-control" id="image" onChange={handleChange}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description *</label>
                    <textarea name="description" className="form-control" id="description" rows="3" value={product.description} onChange={handleChange}></textarea>
                </div>
                <button className="btn btn-outline-dark btn-lg w-100" onClick={handleClick} >Add Product</button>
            </div>
        </>
    )
};

export default AddProduct;