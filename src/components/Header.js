import { Link} from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AddIcon from '@mui/icons-material/Add';

const Header = () => {

    const styling = {
        fontSize: "2rem",
        color: "white",
        margin: "0 10px"
    }

    const linkStyling = {
        textDecoration:"none",
        color: "white"
    }

    return (
        <>
            <nav className="navbar fixed-top bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 ms-auto text-light"><Link to="" style={linkStyling}>Shop</Link></span>
                    <Link to="/add"><AddIcon style={styling} /></Link>
                    <Link to="/cart"><ShoppingCartOutlinedIcon style={styling}/></Link>
                </div>
            </nav>
        </>
    )
}

export default Header;