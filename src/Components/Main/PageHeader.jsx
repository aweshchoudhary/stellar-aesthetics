import { Link, useLocation } from "react-router-dom";

const PageHeader = ({ children }) => {
  const { pathname } = useLocation();
  const location = pathname.split("/");
  return (
    <header className="bg-primary py-14 px-10">
      <h1 className="lg:text-6xl md:text-5xl text-4xl font-medium text-white">
        {children}
      </h1>
      <div className="mt-5 text-white flex gap-2">
        <Link aria-label="link" to={"/"} className="text-white no-underline">
          Home
        </Link>
        {location.map((item, i) => {
          return (
            <Link
              aria-label="link"
              to={"/" + item}
              className="text-white no-underline"
            >
              {item} /
            </Link>
          );
        })}
      </div>
    </header>
  );
};

export default PageHeader;
