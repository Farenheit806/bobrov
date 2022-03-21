import "./card.scss";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../../app/redux/cartSlice";
export const Card = ({ img, title, price, id }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addProductToCart({ img, title, price, id }));
  };

  return (
    <div className="card">
      <img onClick={addToCart} src={`./img/catalog/${img}`} alt="photo" />
      <div className="card__info">
        <h3>{title}</h3>
        <p>{price} $</p>
      </div>
    </div>
  );
};
