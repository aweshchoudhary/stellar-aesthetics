import { Icon } from "@iconify/react";
import { Helmet } from "react-helmet";
import doctors from "../../data/doctors.json";

// Components Import
import { Section, Heading } from "../../Components/Main";

const Doctors = () => {
  return (
    <>
      <Helmet>
        <title>Doctors</title>
      </Helmet>
      <Section>
        <Heading text1={"Doctors"} className={"mb-10"} />
        <div className="flex flex-wrap">
          {doctors &&
            doctors.map((item, i) => {
              return (
                <div key={i} className="lg:w-1/3 sm:w-1/2 w-full">
                  <div className="card sm:m-4 mb-4 sm:h-[550px] shrink-0">
                    <div className="img sm:h-[350px] h-[250px] w-full bg-gray-200">
                      <img
                        src={item.attributes.img.data.attributes.name}
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
                              href={item.name}
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
