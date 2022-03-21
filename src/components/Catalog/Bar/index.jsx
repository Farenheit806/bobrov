import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCounter } from "../../../app/redux/cartSlice";
import CartPop from "../../CartPop";
import { Filter } from "./Filter";
import { Search } from "./Search";
const Bar = () => {
  const counter = useSelector(selectCounter);
  const [isShown, setIsShown] = useState(false);
  const handleClick = () => {
    setIsShown(!isShown);
  };

  return (
    <div className="catalog-bar">
      <Search />
      <Filter />
      <div className="cart">
        <p className="cart__counter">{counter}</p>
        <img
          onClick={handleClick}
          className="cart__img"
          src="./img/cart.svg"
          alt="cart"
        />
        <CartPop isShown={isShown} />
      </div>
    </div>
  );
};
export default Bar;
