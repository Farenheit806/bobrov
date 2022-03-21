import { useDispatch } from "react-redux";
import { clearFilter, setFilter } from "../../../app/redux/searchSlice";
import { sizes, colors, categories } from "../../../app/products/chars";
export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = (event) => {
    event.preventDefault();
    const selected = [
      document.getElementById("size-select").value,
      document.getElementById("color-select").value,
      document.getElementById("category-select").value,
    ];
    dispatch(setFilter(selected));
  };
  const handleClear = (event) => {
    event.preventDefault();
    document.getElementById("size-select").value = "any";
    document.getElementById("color-select").value = "any";
    document.getElementById("category-select").value = "any";
    dispatch(clearFilter());
  };
  const getOptions = (selector) =>
    selector.map((value) => (
      <option value={value.toLowerCase()}>{value}</option>
    ));
  return (
    <form className="filter">
      <label htmlFor="size">Size</label>
      <select name="size" id="size-select">
        <option value="any">-</option>
        {getOptions(sizes)}
      </select>
      <label htmlFor="color">Color</label>
      <select name="color" id="color-select">
        <option value="any">-</option>
        {getOptions(colors)}
      </select>
      <label htmlFor="category">Category</label>
      <select name="category" id="category-select">
        <option value="any">-</option>
        {getOptions(categories)}
      </select>
      <input type="submit" value="Filter" onClick={handleFilter} />
      <input type="submit" value="Clear Filter" onClick={handleClear} />
    </form>
  );
};
