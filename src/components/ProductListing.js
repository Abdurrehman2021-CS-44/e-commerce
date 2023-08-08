import Product from "./Product";
import products from "../products";
import { useState } from "react";

const ProductListing = () => {

    const [search, setSearch] = useState("");
    const [availableProducts, setAvailableProducts] = useState(products);

    const handleChange = (e) => {
        const inputValue = e.target.value;
        setSearch(inputValue);
    }

    const handleClick = () => {
        const searchedItems = products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()));
        setAvailableProducts(searchedItems);
    }

    const handlePriceFilter = (e) => {
        console.log(e.target.value);
        const value = e.target.value;
        if (value === "Asc"){
            setAvailableProducts(availableProducts.sort((a,b)=>{
                return b.price - a.price
            }));
        } else {
            setAvailableProducts(availableProducts.sort((a,b)=>{
                return a.id - b.id
            }));
        }
    }

    return (
        <>
            <h1 className="title">Abdur Rehman's Shop</h1>
            <div className="container">
                <div class="input-group input-group-lg">
                    <input
                        type="text"
                        class="form-control search-bar"
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder="Search products"
                        value={search}
                        onChange={handleChange}
                    />
                    <button className="btn btn-secondary px-4" onClick={handleClick}> <i class="bi bi-search"></i> </button>
                </div>
            </div>
            <div className="container mt-3 filters">
                <span className="ms-3">Sort By: </span>
                <select class="form-select price-filter ms-2" aria-label="Default select example">
                    <option value="1">Best Match</option>
                    <option value="2">Price low to high</option>
                    <option value="3">Price high to low</option>
                </select>
            </div>
            <div className="container my-5">
                <div className="row">
                    {
                        availableProducts.map((product, index) => {
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