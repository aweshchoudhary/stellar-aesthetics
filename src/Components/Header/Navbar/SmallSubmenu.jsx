import { Link, useNavigate } from "react-router-dom";

function SmallSubmenu({ arr, w }) {
  const navigate = useNavigate();
  const handleScroll = (url) => {
    navigate(url, { replace: true });
    document.body.scrollTop = 0;
  };
  return (
    <ul
      className={
        "sub-menu absolute top-full min-w-[200px] z-10 bg-white py-5 shadow-xl border flex flex-col px-5 left-1/2 translate-x-[-50%] justify-center"
      }
    >
      {arr &&
        arr.map((menuItem, i) => {
          return (
            <li key={i} className="list-none py-2 text-h-primary">
              <Link to={menuItem.link}>
                <div onClick={handleScroll}>{menuItem.label}</div>
              </Link>
            </li>
          );
        })}
    </ul>
  );
}

export default SmallSubmenu;
