import Heading from "../Components/Main/Heading";
import Section from "../Components/Main/Section";
import PageHeader from "../Components/Main/PageHeader";
import { BASE_URL } from "../config";
import useFetch from "../Hooks/useFetch";

const Doctors = () => {
  const { data } = useFetch("/doctors?populate=*");

  return (
    <>
      <PageHeader>Doctors</PageHeader>
      <Section>
        <Heading text1={"Doctors"} className={"mb-10"} />
        <div className="flex flex-wrap">
          {data &&
            data.map((item, i) => {
              return (
                <div key={i} className="lg:w-1/3 sm:w-1/2 w-full">
                  <div className="card sm:m-4 mb-4 sm:h-[450px] shrink-0">
                    <div className="img sm:h-[350px] h-[250px] w-full bg-gray-200">
                      <img
                        src={BASE_URL + item.attributes.img.data.attributes.url}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="caption mt-3">
                      <h5 className="text-md font-medium">
                        <strong>{item.attributes.name}</strong> <br />
                        {item.attributes.profession}{" "}
                      </h5>

                      <p
                        className="text-body"
                        dangerouslySetInnerHTML={{
                          __html: item.attributes.description,
                        }}
                      ></p>
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
