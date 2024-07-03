import "./navbar.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function Navbar() {
    return (
        <div className = "navbar">
            <div className ="logo">
                <img src="./assets/images/WUDO.png" alt="logo" className="navLogo" />
            </div>

            <ul className = "navlist">
                <li className="navLi">Home</li>
                <li className="navLi">Furniture</li>
                <li className="navLi">Product</li>
                <li className="navLi">Store</li>
            </ul>

            <div className="navIcons">
                <div className="navSearch">
                    <SearchOutlinedIcon className="navSearchIcon" />
                </div>

                <div className="navCart">
                    <ShoppingCartOutlinedIcon className="cart" />
                    <label className="cartLabel">1</label>
                </div>

                
            </div>


        </div>
    )
}