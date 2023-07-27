import { useReducer } from "react";

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

const AddProduct = () => {
    const initialState = {
        title: "",
        brand: "",
        price: 0,
        image: null,
        description: ""
    }
    const [product, dispatch] = useReducer(actionOnData, initialState);

    const handleChange = (e) => {
        
    }


    return (
        <>
            <div className="add-product">
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
                    <input name="price" type="text" className="form-control" id="price" placeholder="Price" value={product.price} onChange={handleChange}/>
                </div>

                <p>Image *</p>
                <div class="input-group mb-3">
                    {/* <label class="input-group-text" for="inputGroupFile01">Upload</label> */}
                    <input name="image" type="file" class="form-control" id="image" value={product.image} onChange={handleChange}/>
                </div>

                <div className="mb-3">
                    <label for="description" className="form-label">Description</label>
                    <textarea name="description" className="form-control" id="description" rows="3" value={product.description} onChange={handleChange}></textarea>
                </div>
            </div>
        </>
    )
};

export default AddProduct;