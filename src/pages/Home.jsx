import { CheckSquareOffset, FloppyDisk, Scan } from "@phosphor-icons/react";
import React from "react";
import { Link } from "react-router-dom";
import about_serv from "../assets/about_service.jpg";
import brain from "../assets/brain.jpg";
import breast from "../assets/grud.jpg";
import liver from "../assets/liver.png";
import lungs from "../assets/lungs.jpg";

export const Home = () => {
  const services = [
    {
      id: 1,
      title: "Analysis Liver",
      description:
        "The liver is a critical organ in the human body responsible for an array of functions that help support metabolism, immunity, digestion, detoxification, and vitamin storage, among other functions.",
      preview: liver,
      link: "/analysis-liver",
    },
    {
      id: 2,
      title: "Analysis Brain",
      description:
        "The brain is a complex organ that controls thought, memory, emotion, touch, motor skills, vision, breathing, temperature, hunger and every process that regulates our body.",
      preview: brain,
      link: "/analysis-brain",
    },
    {
      id: 3,
      title: "Analysis Lungs",
      description:
        "The lungs are the central organs of the respiratory system in humans and most other animals, including some snails and a small number of fish. In mammals and most other vertebrates, two lungs are located near the backbone on either side of the heart. Their function in the respiratory system is to extract oxygen from the air and transfer it into the bloodstream, and to release carbon dioxide from the bloodstream into the atmosphere, in a process of gas exchange.",
      preview: lungs,
      link: "/analysis-lungs",
    },
    {
      id: 4,
      title: "Analysis Breast",
      description:
        "Glandular organ located on the chest. The breast is made up of connective tissue, fat, and breast tissue that contains the glands that can make milk. Also called mammary gland.",
      preview: breast,
      link: "/analysis-breast",
    },
  ];

  const whatwedo = [
    {
      id: 1,
      title: "Send your X-Ray",
      icon: <FloppyDisk size={40} color="#0c4a6e" weight="regular" />,
    },
    {
      id: 2,
      title: "Our AI scan your X-Ray",
      icon: <Scan size={40} color="#0c4a6e" weight="regular" />,
    },
    {
      id: 3,
      title: "And get results instantly!",
      icon: <CheckSquareOffset size={40} color="#0c4a6e" weight="regular" />,
    },
  ];
  return (
    <main>
      <section className="first p-4">
        <div className="container flex flex-col gap-4 text-5xl md:text-7xl font-medium justify-center items-center h-screen text-white px-7 text-center">
          <h1>
            Analysis your X-Rays, <br /> with our Analysis-AI
          </h1>
        </div>
      </section>
      <section className="py-12 md:py-20 flex flex-col gap-10 px-4">
        <div className="container flex flex-col gap-2">
          <h1 className="text-3xl text-sky-900 font-semibold">Our Services</h1>
          <span className="text-sky-600 font-medium">Analysis your X-Rays</span>
          <span className="w-24 h-2 bg-sky-500 block rounded-full"></span>
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
                <button className="uppercase bg-sky-900 text-sky-50 border-2 border-sky-900 transition-all hover:border-sky-900 hover:bg-sky-50 hover:text-sky-900 py-2 px-6 rounded-xl font-bold">
                  Check X-Ray Analysis
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="py-12 md:py-20 px-4 flex flex-col gap-12">
        <div className="container flex flex-col gap-3">
          <h1 className="text-xl text-sky-900 font-semibold md:text-4xl">
            About Us
          </h1>
          <span className="text-sky-600">What we do</span>
          <span className="w-24 h-2 bg-sky-500 block rounded-full"></span>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <figure>
            <img src={about_serv} alt="" className="rounded-md" />
          </figure>
          <div className="flex flex-col justify-between gap-5">
            <p className="text-sm text-sky-600 text-justify xl:text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
              non, tenetur iusto quia hic praesentium deserunt ratione ducimus
              necessitatibus, voluptates officiis quo ad a nobis aspernatur,
              facere ab. Hic fugiat, reprehenderit rem amet eaque qui id dolorem
              excepturi dolorum, pariatur iste neque expedita temporibus non
              quam facilis doloribus quisquam labore dolores reiciendis sequi
              iusto voluptatum.
            </p>
            <div className="flex flex-col gap-10 justify-between p-5 sm:flex-row">
              {whatwedo?.map(({ icon, id, title }) => (
                <span
                  className="capitalize text-center text-sky-600 flex flex-col items-center justify-center gap-3"
                  key={id}
                >
                  {icon} {title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
