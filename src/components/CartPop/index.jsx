import { useDispatch, useSelector } from "react-redux";
import {
  decrementAmount,
  incrementAmount,
  removeProduct,
  selectSelectedProducts,
} from "../../app/redux/cartSlice";
import "./Cart-pop.scss";
const CartPop = ({ isShown }) => {
  const selectedProducts = useSelector(selectSelectedProducts);
  const dispatch = useDispatch();
  const handleIncrement = (event) => {
    event.preventDefault();
    dispatch(incrementAmount(event.target.parentElement.parentElement.id));
  };
  const handleDecrement = (event) => {
    event.preventDefault();
    dispatch(decrementAmount(event.target.parentElement.parentElement.id));
  };
  const handleRemove = (event) => {
    event.preventDefault();
    dispatch(removeProduct(event.target.parentElement.id));
  };
  return (
    <div className={`cart-pop cart-pop_${isShown ? "shown" : "hidden"}`}>
      {selectedProducts.map((product) => (
        <div className="cart-pop__card" key={product.id} id={product.id}>
          <div className="cart-pop-card-info">
            <p>{product.title}</p>
            <p>{product.price}$</p>
            <p>{product.amount}</p>
          </div>
          <div className="amount-change">
            <a onClick={handleIncrement}>+</a>
            <a onClick={handleDecrement}>-</a>
          </div>
          <a onClick={handleRemove}>x</a>
        </div>
      ))}
    </div>
  );
};

export default CartPop;
