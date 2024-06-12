import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const services = [
    {
      id: 1,
      title: "Analysis Liver",
      description:
        "The liver is a critical organ in the human body responsible for an array of functions that help support metabolism, immunity, digestion, detoxification, and vitamin storage, among other functions.",
      preview: "src/assets/liver.png",
      link: "/analysis-liver",
    },
    {
      id: 2,
      title: "Analysis Brain",
      description:
        "The brain is a complex organ that controls thought, memory, emotion, touch, motor skills, vision, breathing, temperature, hunger and every process that regulates our body.",
      preview: "src/assets/brain.jpg",
      link: "/analysis-brain",
    },
    {
      id: 3,
      title: "Analysis Lungs",
      description:
        "The lungs are the central organs of the respiratory system in humans and most other animals, including some snails and a small number of fish. In mammals and most other vertebrates, two lungs are located near the backbone on either side of the heart. Their function in the respiratory system is to extract oxygen from the air and transfer it into the bloodstream, and to release carbon dioxide from the bloodstream into the atmosphere, in a process of gas exchange.",
      preview: "src/assets/lungs.jpg",
      link: "/analysis-lungs",
    },
    {
      id: 4,
      title: "Analysis Breast",
      description:
        "Glandular organ located on the chest. The breast is made up of connective tissue, fat, and breast tissue that contains the glands that can make milk. Also called mammary gland.",
      preview: "src/assets/grud.jpg",
      link: "/analysis-breast",
    },
  ];
  return (
    <>
      <section className="first p-4">
        <div className="container flex flex-col gap-4 text-5xl md:text-7xl font-medium justify-center h-screen text-white px-7">
          <h1>
            Analysis your X-Rays, <br /> with our Analysis-AI
          </h1>
        </div>
      </section>
      <section className="py-12 md:py-20 flex flex-col gap-10 px-4">
        <div className="container flex flex-col gap-2">
          <h1 className="text-3xl text-sky-900 font-semibold">Our Services</h1>
          <p className="text-sky-600 font-medium">Analysis your X-Rays</p>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map(({ description, id, link, preview, title }) => (
            <Link to={link} key={id} className="rounded-md">
              <div className="h-[400px] overflow-hidden rounded-t-md">
                <div
                  className="bg-no-repeat bg-cover bg-top h-[400px] hover:scale-[1.15] transition duration-500"
                  style={{
                    backgroundImage: `url(${preview})`,
                  }}
                ></div>
              </div>
              <div className="p-5 flex flex-col gap-3 bg-sky-50 rounded-b-md">
                <h2 className="text-lg text-sky-900 font-semibold">{title}</h2>
                <p>
                  {description.length > 90
                    ? `${description.slice(0, 90)}...`
                    : description}
                </p>
                <Link className="uppercase bg-sky-900 text-sky-50 border-2 border-sky-900 transition-all hover:border-sky-900 hover:bg-sky-50 hover:text-sky-900 py-2 px-6 rounded-xl font-bold">
                  Check X-Ray Analysis
                </Link>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};
