import Heading from "../Components/Main/Heading";
import Section from "../Components/Main/Section";
import PageHeader from "../Components/Main/PageHeader";
import { BASE_URL } from "../config";
import useFetch from "../Hooks/useFetch";
import { Icon } from "@iconify/react";
import PageTitle from "../Components/Main/PageTitle";

const Doctors = () => {
  const { data } = useFetch("/doctors?populate=*");

  return (
    <>
      <PageTitle>Doctors</PageTitle>
      <PageHeader>Doctors</PageHeader>
      <Section>
        <Heading text1={"Doctors"} className={"mb-10"} />
        <div className="flex flex-wrap">
          {data &&
            data.map((item, i) => {
              return (
                <div key={i} className="lg:w-1/3 sm:w-1/2 w-full">
                  <div className="card sm:m-4 mb-4 sm:h-[550px] shrink-0">
                    <div className="img sm:h-[350px] h-[250px] w-full bg-gray-200">
                      <img
                        src={BASE_URL + item.attributes.img.data.attributes.url}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="caption mt-3">
                      <h5 className="text-lg font-medium">
                        <strong>{item.attributes.name}</strong> <br />
                        {item.attributes.profession}{" "}
                      </h5>

                      <p
                        className="text-body"
                        dangerouslySetInnerHTML={{
                          __html: item.attributes.description,
                        }}
                      ></p>
                      <div className="btns flex items-center text-3xl gap-1 text-gray-500 mt-3">
                        {item.attributes.socialLinks.map((item) => {
                          return (
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noreferrer"
                              className="text-h-primary transition"
                            >
                              <Icon icon={item.icon} />
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </Section>
    </>
  );
};

export default Doctors;
