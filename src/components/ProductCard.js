import "./ProductCard.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/cartSlice";

export const ProductCard = ({ product }) => {
  const [isInCart, setIsInCart] = useState(false);
  const products = useSelector((state) => state.cartState.cartList);
  const disPatch = useDispatch();
  const { id, title, price, image } = product;

  useEffect(() => {
    const productInCart = products.find((cartItem) => cartItem.id === id);

    if (productInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [products, id]);

  return (
    <div className="productCard">
      <img src={image} alt={title} />
      <p className="title">{title}</p>
      <div className="action">
        <p>${Math.floor(price)}</p>

        {isInCart ? (
          <button className="remove" onClick={() => disPatch(remove(product))}>
            Remove
          </button>
        ) : (
          <button className="add" onClick={() => disPatch(add(product))}>
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};
