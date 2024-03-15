import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">The best Pizza Co.</Link>

      <SearchOrder />

      <p>Alfa sule</p>
    </header>
  );
}

export default Header;
