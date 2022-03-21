import { useSelector } from "react-redux";
import { selectSearchList } from "../../app/redux/searchSlice";
import { Card } from "./Card";

export const List = () => {
  const searchList = useSelector(selectSearchList);
  return (
    <div className="card-box">
      {searchList.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          img={product.img}
          price={product.price}
          title={product.title}
        />
      ))}
    </div>
  );
};
