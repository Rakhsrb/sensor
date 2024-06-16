import React from "react";
import { Link } from "react-router-dom";
import brain from "../assets/brain.jpg";
import breast from "../assets/grud.jpg";
import liver from "../assets/liver.png";
import lungs from "../assets/lungs.jpg";

export const About = () => {
  const services = [
    {
      id: 1,
      title: "Analyze Liver",
      description:
        "The liver is a critical organ in the human body responsible for an array of functions that help support metabolism, immunity, digestion, detoxification, and vitamin storage, among other functions.",
      preview: liver,
      link: "/upload",
    },
    {
      id: 2,
      title: "Analyze Brain",
      description:
        "The brain is a complex organ that controls thought, memory, emotion, touch, motor skills, vision, breathing, temperature, hunger and every process that regulates our body.",
      preview: brain,
      link: "/upload",
    },
    {
      id: 3,
      title: "Analyze Lungs",
      description:
        "The lungs are the central organs of the respiratory system in humans and most other animals, including some snails and a small number of fish. In mammals and most other vertebrates, two lungs are located near the backbone on either side of the heart. Their function in the respiratory system is to extract oxygen from the air and transfer it into the bloodstream, and to release carbon dioxide from the bloodstream into the atmosphere, in a process of gas exchange.",
      preview: lungs,
      link: "/upload",
    },
    {
      id: 4,
      title: "Analyze Breast",
      description:
        "Glandular organ located on the chest. The breast is made up of connective tissue, fat, and breast tissue that contains the glands that can make milk. Also called mammary gland.",
      preview: breast,
      link: "/upload",
    },
  ];
  return (
    <main>
      <section className="py-12 md:py-20 px-4 about_bg">
        <div className="container">
          <h1 className="text-center uppercase text-4xl font-medium text-white">
            About Us
          </h1>
        </div>
      </section>
      <section className="px-4 py-12">
        <div className="container flex flex-col gap-5">
          <p className="text-xs md:text-base text-sky-600 text-justify">
            In the realm of medical advancements, our AI-powered analysis tools
            for liver, brain, and lung X-rays stand out as pioneering
            innovations. The liver, a vital organ, is responsible for numerous
            essential functions including metabolism, immunity, and
            detoxification. Accurate analysis of liver X-rays is crucial for
            diagnosing conditions like cirrhosis, hepatitis, and liver cancer.
            Our AI technology enhances the precision and speed of these
            diagnoses, potentially saving lives through early detection.
          </p>
          <div className="text-xs md:text-sm text-sky-600 text-justify flex gap-5 md:gap-10 flex-col md:flex-row">
            <p>
              Similarly, the brain, which governs all bodily functions and
              cognitive processes, requires meticulous examination to identify
              issues such as tumors, aneurysms, or traumatic injuries. AI
              facilitates a more detailed and quicker analysis, providing
              doctors with the critical information they need to make informed
              decisions. This capability is particularly beneficial in
              emergencies where time is of the essence.
            </p>
            <p>
              The lungs, essential for respiration and gas exchange, are
              susceptible to various diseases including pneumonia, tuberculosis,
              and lung cancer. Our AI tools excel in detecting even the subtlest
              abnormalities in lung X-rays, enabling early intervention and
              treatment. By leveraging advanced algorithms and vast datasets,
              our AI systems continuously improve their accuracy and
              reliability, offering unparalleled support to healthcare
              professionals.
            </p>
          </div>
          <p className="text-xs md:text-base text-sky-600 text-justify">
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
      </section>
      <section className="py-12 md:py-20 px-4">
        <div className="container flex flex-col gap-10">
          <h1 className="text-center uppercase text-4xl font-medium text-sky-900">
            Our Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
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
                  <h2 className="text-lg text-sky-900 font-semibold">
                    {title}
                  </h2>
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
        </div>
      </section>
    </main>
  );
};
