import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../images/shoppingLogo.jpg";
import "./Header.css";

export const Header = () => {
  const productLength = useSelector((state) => state.cartState.cartList.length);
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="Shopmate Logo" />
        <span>Shopping Cart</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        <NavLink to="/cart" className="link">
          Cart
        </NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span>Cart: {productLength}</span>
      </Link>
    </header>
  );
};
