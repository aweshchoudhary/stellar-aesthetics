import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import procedures from "../../data/procedures.json";
import { lazy } from "react";

// Components Import

const PageHeader = lazy(() => import("../../Components/Main/PageHeader"));
const Section = lazy(() => import("../../Components/Main/Section"));
const Img = lazy(() => import("../../Components/Main/Img"));

const Procedures = () => {
  return (
    <>
      <Helmet>
        <title>Procedures</title>
      </Helmet>
      <PageHeader>Procedures</PageHeader>
      <Section className={"Cards"}>
        <div className="flex flex-wrap">
          {procedures?.map((item) => {
            return (
              <Card
                link={item.attributes.title}
                title={item.attributes.title}
                img={"/assets/img/" + item.attributes.img.data.attributes.name}
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
        <Link aria-label="link" to={"/procedures/" + link}>
          <div className="img sm:h-[400px] h-[200px] w-full bg-gray-200">
            {img && (
              <Img
                src={img}
                alt="procedure"
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
