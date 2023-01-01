import { Link } from "react-router-dom";
import NavItem from "./NavItem";

function BigSubmenu({ submenu, isDisplay, depthLevel }) {
  depthLevel++;
  console.log(depthLevel);
  const submenuStyle = `absolute border p-3 h-fit bg-white shadow-xl ${
    depthLevel > 1 ? "left-full ml-3 top-0 w-[350px]" : "top-full w-[250px]"
  }`;
  return (
    <ul className={submenuStyle}>
      {submenu.map((item, i) => {
        return item.heading ? (
          <NavItem depthLevel={depthLevel} item={item} key={i} />
        ) : (
          <li
            className="list-none py-2 px-3 hover:bg-gray-50 text-h-primary transition"
            key={i}
          >
            <Link to={item.link}>{item.label}</Link>
          </li>
        );
      })}
      {/* {submenu.map((item, i) => {
        return <MenuItem item={item} key={i} />;
      })} */}
    </ul>
  );
}

export default BigSubmenu;
