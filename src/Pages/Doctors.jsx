import React, { useEffect, useState } from "react";
import Heading from "../Components/BodyComponent/Heading";
import Section from "../Components/BodyComponent/Section";
import Card from "../Components/Card";
import PageHeader from "../Components/PageHeader";
import api from "../Api/api";
import { BASE_URL } from "../config";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await api.get("/doctors?populate=*");
        setDoctors(data.data);
        console.log(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDoctors();
  }, []);

  return (
    <>
      <PageHeader>Doctors</PageHeader>
      <Section>
        <Heading text1={"Doctors"} className={"mb-10"} />
        <div className="flex flex-wrap">
          {doctors &&
            doctors.map((item) => {
              return (
                <>
                  <div className="lg:w-1/3 sm:w-1/2 w-full">
                    <div className="card sm:m-4 mb-4 sm:h-[450px] shrink-0">
                      <div className="img sm:h-[350px] h-[250px] w-full bg-gray-200">
                        <img
                          src={
                            BASE_URL + item.attributes.img.data.attributes.url
                          }
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
                </>
              );
            })}
        </div>
      </Section>
    </>
  );
};

export default Doctors;
