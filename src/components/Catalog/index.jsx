import { Search } from "./Bar/Search";
import Bar from "./Bar";
import { List } from "./List";

import "./catalog.scss";

const Catalog = () => {
  return (
    <main className="wrapper">
      <Bar />
      <List />
    </main>
  );
};

export default Catalog;
