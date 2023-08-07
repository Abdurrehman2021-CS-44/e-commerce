import Product from "./Product";
import products from "../products";

const ProductListing = () => {
    return (
        <>
            <h1 className="title">Abdur Rehman's Shop</h1>
            <div className="container">
                <input
                    type="text"
                    name="search"
                    className="form-control search-bar"
                    placeholder="🔎 Search products"
                />
            </div>
            <div className="container my-5">
                <div className="row">
                    {
                        products.map((product, index) => {
                            return (
                                <div className="col-lg-4 col-md-6 my-4" key={index}>
                                    <Product
                                        key={index}
                                        id={product.id}
                                        image={product.image}
                                        title={product.title}
                                        price={product.price}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ProductListing;