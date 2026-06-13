import { Link } from "react-router-dom"
import AddToCart from "./AddToCart"

const Header = ()=> {
    return(
        <header className="header">
            <div className="logo">
                ShopEase
            </div>

            <nav className="nav">
                <Link to="/">Home</Link>
                {/* <a href="#">Products</a> */}
                {/* <a href="#">About</a>
                <a href="#">Contact</a> */}
            </nav>
            <AddToCart />
        </header>
    )
}

export default Header