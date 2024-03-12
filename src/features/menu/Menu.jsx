import { useLoaderData, useNavigation } from "react-router-dom";
import { getMenu } from "../../service/apiRestaurant";
import MenuItem from "./MenuItem";
import Loader from "../../ui/Loader";

export function loader() {
  const data = getMenu();
  return data;
}

function Menu() {
  const menu = useLoaderData();

  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export default Menu;
