const AddProduct = () => {
    return (
        <>
            <div className="add-product">
                <h1 className="display-4 text-center">Add Product</h1>
                <div className="my-3">
                    <label for="title" className="form-label">Title/Name *</label>
                    <input type="text" className="form-control text-left" id="title" placeholder="Title"/>
                </div>
                <div className="my-3">
                    <label for="brand" className="form-label">Brand </label>
                    <input type="text" className="form-control" id="brand" placeholder="Brand"/>
                </div>
                <div className="my-3">
                    <label for="price" className="form-label">Price *</label>
                    <input type="text" className="form-control" id="price" placeholder="Price"/>
                </div>

                <p>Image *</p>
                <div class="input-group mb-3">
                    {/* <label class="input-group-text" for="inputGroupFile01">Upload</label> */}
                    <input type="file" class="form-control" id="image" />
                </div>
                
                <div className="mb-3">
                    <label for="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" rows="3"></textarea>
                </div>
            </div>
        </>
    )
};

export default AddProduct;