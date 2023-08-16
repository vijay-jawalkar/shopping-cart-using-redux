import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
import "./CartCard.css";

export const CartCard = ({ product }) => {
  const dispatch = useDispatch();
  const { title, price, image } = product;

  return (
    <div className="cartCard">
      <img src={image} alt={title} />
      <p className="productName">{title}</p>
      <p className="productPrice">${Math.floor(price)}</p>
      <button onClick={() => dispatch(remove(product))}>Remove</button>
    </div>
  );
};
