import { Link } from "react-router-dom";
import Section from "../Components/Main/Section";
import PageHeader from "../Components/Main/PageHeader";
import { BASE_URL } from "../config";
import useFetch from "../Hooks/useFetch";
import PageTitle from "../Components/Main/PageTitle";

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

const Procedures = () => {
  const { data } = useFetch("/procedures?populate=*");
  console.log(data);
  return (
    <>
      <PageTitle>Procedures</PageTitle>
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

export default Procedures;
