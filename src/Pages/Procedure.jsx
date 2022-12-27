import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Heading from "../Components/BodyComponent/Heading";
import Section from "../Components/BodyComponent/Section";
import LinkBtn from "../Components/LinkBtn";
import useFetch from "../Hooks/useFetch";
import parser from "html-react-parser";
import Bar from "../Components/Loader/Bar";

const Procedure = () => {
  const [procedure, setProcedure] = useState();
  const { data, loading } = useFetch("/procedures?populate=*");
  const { name } = useParams();
  console.count(procedure);
  useEffect(() => {
    data &&
      data.forEach((item) => {
        if (item.attributes.title === name) {
          setProcedure(item);
        }
      });
  }, [data, setProcedure, name]);

  return procedure?.attributes && !loading ? (
    <>
      <section className="hero-slider relative flex items-center justify-center md:min-h-[500px] w-full">
        <div className="bg h-full w-full absolute inset-0 -z-10 bg-primary">
          <img
            src={
              "https://stellaraesthetics.in/wp-content/uploads/2022/11/group-image.jpg.webp"
            }
            className="opacity-20 blur w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="content lg:px-10 px-4 py-14 text-center  text-white">
            <h2 className="md:text-7xl sm:text-5xl text-3xl font-semibold mb-3">
              Be YOUR BEST Version
            </h2>
            <p className="text-lg">
              With Stellar Aesthetics’ Facial Cosmetic Procedures you can bring
              out your true beauty, for the world to see.
            </p>
            <div>
              <div className="flex gap-5 justify-center mt-4">
                <LinkBtn varaint={"filled"} white={true} label={"Book Call"} />
                <LinkBtn
                  varaint={"outlined"}
                  white={true}
                  label={"Whatsapp Us"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Section>
        <Heading
          text1={procedure?.attributes?.title}
          text2="Procedures"
          brNone={true}
        />
        <div className="mt-5">{parser(procedure?.attributes?.description)}</div>
      </Section>
    </>
  ) : (
    <Bar />
  );
};

export default Procedure;
