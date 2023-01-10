import { Link } from "react-router-dom";
import { BASE_URL } from "../config";
import useFetch from "../Hooks/useFetch";
import { Helmet } from "react-helmet";

// Components Import
import { PageHeader, Section, Heading } from "../../Components/Main";

const Procedures = () => {
  const { data } = useFetch("/procedures?populate=*");
  return (
    <>
      <Helmet>
        <title>Procedures</title>
      </Helmet>
      <PageHeader>Procedures</PageHeader>
      <Section className={"Cards"}>
        <div className="flex flex-wrap">
          {data?.map((item) => {
            return (
              <Card
                link={item.attributes.title}
                title={item.attributes.title}
                img={item.attributes.img.data.attributes.url}
              />
            );
          })}
        </div>
      </Section>
    </>
  );
};

const Card = ({ img, title, link }) => {
  return (
    <div className=" sm:w-1/2 w-full">
      <div className="card sm:m-4 mb-4 sm:h-[500px] h-[300px] shrink-0">
        <Link to={"/procedures/" + link}>
          <div className="img sm:h-[400px] h-[200px] w-full bg-gray-200">
            {img && (
              <img
                src={BASE_URL + img}
                alt=""
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="caption mt-3">
            <h5 className="text-xl capitalize font-medium">
              {title} Procedures
            </h5>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Procedures;
