import React from "react";
import { Link } from "react-router-dom";
import about_serv from "../assets/about_service.jpg";
import brain from "../assets/brain.jpg";
import breast from "../assets/grud.jpg";
import liver from "../assets/liver.png";
import lungs from "../assets/lungs.jpg";
//team members
import member3 from "../assets/member_3.png";
import member4 from "../assets/member_4.png";
import { Contact } from "./Contact";
import { ArrowLineDown } from "@phosphor-icons/react";

export const Home = () => {
  const services = [
    {
      id: 1,
      title: "Analyze Liver",
      description:
        "The liver is a critical organ in the human body responsible for an array of functions that help support metabolism, immunity, digestion, detoxification, and vitamin storage, among other functions.",
      preview: liver,
      link: "/upload-liver",
    },
    {
      id: 2,
      title: "Analyze Brain",
      description:
        "The brain is a complex organ that controls thought, memory, emotion, touch, motor skills, vision, breathing, temperature, hunger and every process that regulates our body.",
      preview: brain,
      link: "/upload-brain",
    },
    {
      id: 3,
      title: "Analyze Lungs",
      description:
        "The lungs are the central organs of the respiratory system in humans and most other animals, including some snails and a small number of fish. In mammals and most other vertebrates, two lungs are located near the backbone on either side of the heart. Their function in the respiratory system is to extract oxygen from the air and transfer it into the bloodstream, and to release carbon dioxide from the bloodstream into the atmosphere, in a process of gas exchange.",
      preview: lungs,
      link: "/upload-lungs",
    },
    {
      id: 4,
      title: "Analyze Breast",
      description:
        "Glandular organ located on the chest. The breast is made up of connective tissue, fat, and breast tissue that contains the glands that can make milk. Also called mammary gland.",
      preview: breast,
      link: "/upload-breast",
    },
  ];

  const ourTeam = [
    {
      id: 1,
      fullname: "Shukurjon Nuraliyev",
      position: "Neurosurgeon",
      image:
        "https://symbiosisuniversityhospital.com/images/doctors/abhishek.jpg",
    },
    {
      id: 2,
      fullname: "Botir Aliyev",
      position: "Okulist",
      image:
        "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/01/11/USAT/72191800007-good-doctor.jpg?crop=5333,3999,x600,y0",
    },
    {
      id: 3,
      fullname: "Jaloliddin Xalilov",
      position: "Vrach",
      image:
        "https://www.telegraph.co.uk/content/dam/health-fitness/2023/04/14/TELEMMGLPICT000332075420_trans_NvBQzQNjv4BqSdnVs1xxx3yeSXN55W0GtK1UDbDdk-JPjedL466dDsg.jpeg?imwidth=680",
    },
    {
      id: 4,
      fullname: "Sardorbek Gulomjonov",
      position: "Okulist",
      image:
        "https://hackensackmeridianhealth.org/-/media/project/hmh/hmh/public/healthu-images/patient-perspectives/20220826-ofer-avi-werthaim-md.png",
    },
  ];

  return (
    <main>
      <section className="first p-4">
        <div className="container flex flex-col gap-4 text-5xl md:text-7xl font-medium justify-center items-center h-screen text-white px-7 text-center">
          <h1>
            Analyze your X-Rays, <br /> with our Analysis-AI
          </h1>
        </div>
      </section>
      <section className="py-12 md:py-20 flex flex-col gap-10 px-4">
        <div className="container flex flex-col gap-2">
          <h1 className="text-3xl text-sky-900 font-semibold">Our Services</h1>
          <span className="text-sky-600 font-medium">Analyze your X-Rays</span>
          <span className="w-24 h-2 bg-sky-500 block rounded-full"></span>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map(({ description, id, link, preview, title }) => (
            <Link to={link} key={id} className="rounded-md shadow-md">
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
                <button className="flex items-center gap-3 uppercase bg-sky-900 text-sky-50 border-2 border-sky-900 transition-all hover:border-sky-900 hover:bg-sky-50 hover:text-sky-900 py-2 px-6 rounded-xl font-bold">
                  Check X-Ray Analysis <ArrowLineDown size={20} />
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="py-12 md:py-20 px-4 flex flex-col gap-12 about">
        <div className="container flex flex-col gap-3">
          <h1 className="text-xl text-sky-900 font-semibold md:text-4xl">
            About Us
          </h1>
          <span className="text-sky-600">What we do</span>
          <span className="w-24 h-2 bg-sky-500 block rounded-full"></span>
        </div>
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <figure className="w-full h-full">
            <img
              src={about_serv}
              alt=""
              className="rounded-md w-full h-full object-cover"
            />
          </figure>
          <div className="flex flex-col justify-between gap-5">
            <p className="text-sm text-sky-600 text-justify">
              In the realm of medical advancements, our AI-powered analysis
              tools for liver, brain, and lung X-rays stand out as pioneering
              innovations. The liver, a vital organ, is responsible for numerous
              essential functions including metabolism, immunity, and
              detoxification. Accurate analysis of liver X-rays is crucial for
              diagnosing conditions like cirrhosis, hepatitis, and liver cancer.
              Our AI technology enhances the precision and speed of these
              diagnoses, potentially saving lives through early detection.
            </p>
            <p className="text-sm text-sky-600 text-justify">
              Similarly, the brain, which governs all bodily functions and
              cognitive processes, requires meticulous examination to identify
              issues such as tumors, aneurysms, or traumatic injuries. AI
              facilitates a more detailed and quicker analysis, providing
              doctors with the critical information they need to make informed
              decisions. This capability is particularly beneficial in
              emergencies where time is of the essence.
            </p>
            <p className="text-sm text-sky-600 text-justify">
              The lungs, essential for respiration and gas exchange, are
              susceptible to various diseases including pneumonia, tuberculosis,
              and lung cancer. Our AI tools excel in detecting even the subtlest
              abnormalities in lung X-rays, enabling early intervention and
              treatment. By leveraging advanced algorithms and vast datasets,
              our AI systems continuously improve their accuracy and
              reliability, offering unparalleled support to healthcare
              professionals.
            </p>
            <p className="text-sm text-sky-600 text-justify">
              The integration of AI in medical imaging not only streamlines the
              diagnostic process but also significantly enhances the accuracy of
              diagnoses. As we continue to refine these technologies, we are
              committed to providing cutting-edge solutions that support medical
              practitioners and improve patient outcomes. Our mission is to
              harness the power of AI to revolutionize healthcare, ensuring that
              patients receive timely and accurate diagnoses for better health
              management.
            </p>
          </div>
        </div>
      </section>
      <section className="px-4 py-12 md:py-20 flex flex-col gap-14">
        <div className="container flex flex-col gap-3 pb-5">
          <h1 className="text-3xl md:text-4xl text-sky-950 font-semibold">
            Our Team
          </h1>
          <span className="w-24 h-2 bg-sky-500 block rounded-full"></span>
        </div>
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {ourTeam.map(({ fullname, id, image, position }) => (
            <div key={id} className="text-center flex flex-col gap-5">
              <figure className="w-[300px] h-[300px] rounded-full overflow-hidden">
                <img
                  src={image}
                  alt=""
                  className="h-full w-full object-cover bg-sky-50"
                />
              </figure>
              <div className="flex flex-col gap-3">
                <span className="text-base text-sky-600">{position}</span>
                <h3 className="text-2xl text-sky-900 font-medium">
                  {fullname}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Contact />
    </main>
  );
};
