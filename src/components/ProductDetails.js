import { useParams } from 'react-router-dom';
import products from '../products';
import { useContext } from 'react';
import productContext from '../context/productContext';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ProductDetails = () => {
    const cart = useContext(productContext);

    const { id } = useParams()

    const productClicked = products.filter((product)=>product.id==id);

    console.log(productClicked);

    const styling ={
        fontSize: "0.9rem",
    }

    const handleChange = (event) => {
        let newValue = parseInt(event.target.value);
        if (newValue => 1 && newValue <= 10){
            cart.addToCartWithValue(id, newValue)
        }
    }

    const details = `Introducing the XYZ Pro Model Z Camera, the ultimate tool for capturing life's most precious moments with unparalleled precision and clarity. Engineered with cutting-edge technology and professional-grade features, this camera is a game-changer for photographers and videographers alike.

    Key Features:

    1. Crystal-Clear Image Quality: Equipped with a high-resolution 24MP full-frame sensor and advanced image processing, the XYZ Pro Model Z delivers stunning, true-to-life images with rich colors and exceptional detail.
    2. 4K Ultra-HD Video: Capture breathtaking videos in 4K resolution at 60 frames per second, allowing you to relive your memories with cinematic quality.
    3. Precision Autofocus: Our fast and accurate autofocus system ensures you never miss a moment. With intelligent subject tracking and eye-detection technology, every shot is sharp and in focus.
    4. Versatile Lens Compatibility: The XYZ Pro Model Z is compatible with a wide range of lenses, offering endless creative possibilities for various shooting scenarios, from landscape photography to portrait sessions.
    5. Intuitive Touchscreen Display: The large 3-inch LCD touchscreen provides a user-friendly interface, making it effortless to navigate settings and review shots.
    6. Dual Memory Card Slots: With two memory card slots, you can expand storage capacity and backup your precious memories for added peace of mind.
    7. Weather-Sealed Construction: Built to withstand the elements, the camera's rugged design ensures reliable performance even in challenging environments.
    8. Extended Battery Life: The powerful battery offers extended shooting sessions, allowing you to focus on capturing the perfect shot without worrying about running out of power.
    9. Wi-Fi and Bluetooth Connectivity: Easily transfer images and videos to your smartphone or tablet for quick sharing with friends and family.
    10. Professional Ergonomics: The XYZ Pro Model Z's ergonomic design provides a comfortable grip and intuitive button layout, ensuring effortless handling during extended photo sessions.`

    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <img src={productClicked[0].image} />
            <h1>{productClicked[0].title}</h1>
            <p>${productClicked[0].price}.00</p>
            <p>Rating: {productClicked[0].ratings.length}</p>
            <div className="input-elements">
                <button onClick={() => {
                    cart.removeFromCart(id);
                }}><RemoveIcon style={styling} /></button>
                <input type="text" value={cart.cartElement[id]} style={{border: "2px solid black"}} onChange={handleChange}/>
                <button onClick={() => {
                    cart.addToCart(id);
                }}><AddIcon style={styling} /></button>
            </div>
            <p style={{ whiteSpace: 'pre-line' }}>{productClicked[0].description}</p>

        </>
    );
}

export default ProductDetails;