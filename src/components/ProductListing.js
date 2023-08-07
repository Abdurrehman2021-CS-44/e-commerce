import Product from "./Product";
import products from "../products";
import { useState } from "react";

const ProductListing = () => {

    const [search, setSearch] = useState("");
    const [availableProducts, setAvailableProducts] = useState(products);
    const [isPrice, setIsPrice] = useState(false);

    const handleChange = (e) => {
        const inputValue = e.target.value;
        setSearch(inputValue);
    }

    const handleClick = () => {
        const searchedItems = products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()));
        setAvailableProducts(searchedItems);
    }

    const handlePriceFilter = (e) => {
        setIsPrice((prevVal) => !prevVal);
        if (e.target.checked){
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
                <h2>Filters</h2>
                <div className="price-filter">
                    <label>Price</label>
                    <input type="checkbox" onClick={handlePriceFilter}/>
                </div>
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