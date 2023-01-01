import Bar from "../../Loader/Bar";
import menu from "../menu.json";
import useData from "../../../Hooks/useContext";
import NavItem from "./NavItem";

const Navbar = () => {
  const { loading } = useData();
  return (
    <nav className="navbar hidden md:block z-40 bg-white border-b sticky top-0 left-0">
      <ul className="flex items-center justify-center gap-10 font-medium font-lg">
        {menu.map((item, i) => {
          const depthLevel = 0;
          return <NavItem item={item} key={i} depthLevel={depthLevel} />;
        })}
      </ul>
      {loading && <Bar />}
    </nav>
  );
};

export default Navbar;
