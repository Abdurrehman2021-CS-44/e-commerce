import ProductListing from "./ProductListing";
import "../App.css";
import { BrowserRouter as Main, Routes, Route} from 'react-router-dom';
import Cart from "./Cart"
import ProductState from "../context/ProductState";
import Header from "./Header";
import ProductDetails from "./ProductDetails";
import AddProduct from "./AddProduct";

const App = () => {
    return (<>
        <ProductState>
        <Main>
            <Header />
            <Routes>
                <Route exact path="/" element={<ProductListing />} />
                <Route exact path="/cart" element={<Cart />} />
                <Route exact path="/details/:id" element={<ProductDetails />} />
                <Route exact path="/add" element={<AddProduct />} />
            </Routes>
        </Main>
        </ProductState>
    </>)
}

export default App;