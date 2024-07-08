import "./navbar.css";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

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
                    <CiSearch className="navSearchIcon" />
                </div>

                <div className="navCart">
                    <PiShoppingCartSimpleLight className="cart" />
                    <label className="cartLabel">1</label>
                </div>

                
            </div>


        </div>
    )
}