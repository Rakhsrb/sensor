import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  MapPinArea,
  PhoneCall,
  TwitterLogo,
} from "@phosphor-icons/react";
import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const Links = [
    {
      to: "/",
      title: "HOME",
    },
    {
      to: "/about",
      title: "ABOUT",
    },
    {
      to: "/blog",
      title: "BLOG",
    },
    {
      to: "/contact",
      title: "CONTACT",
    },
  ];

  const SocialLinks = [
    {
      to: "https://www.facebook.com",
      icon: <FacebookLogo size={24} />,
      title: "@Analysis_AI",
    },
    {
      to: "https://www.twitter.com",
      icon: <TwitterLogo size={24} />,
      title: "@Analysis_AI",
    },
    {
      to: "https://www.instagram.com",
      icon: <InstagramLogo size={24} />,
      title: "@Analysis_AI",
    },
    {
      to: "https://www.linkedin.com",
      icon: <LinkedinLogo size={24} />,
      title: "@Analysis_AI",
    },
  ];

  return (
    <footer className="bg-sky-50 py-10 px-4 w-full shadow-inner">
      <div className="container flex flex-col md:flex-row justify-between items-baseline gap-5">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
          <Link className="text-sky-900 text-2xl font-medium ">
            Analysis-AI
          </Link>
        </div>
        <div className="flex flex-col gap-5">
          {Links.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="text-sky-900 hover:text-sky-700 transition-all font-medium"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex gap-5 flex-col md:items-end">
          <h3 className="text-sky-900 flex items-center gap-2">
            <MapPinArea size={32} /> Наманган, Наманганская Область, Узбекситан
          </h3>
          <a
            href="tel: 998905353553"
            className="text-sky-900 flex items-center gap-2"
          >
            <PhoneCall size={32} /> +998 (90) 535 35 53
          </a>
          {SocialLinks.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-900 hover:text-sky-700 transition-all flex items-center gap-5"
            >
              {item.icon}
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="container">
        <hr className="bg-sky-600 h-1 my-7" />
        <div className="flex flex-col md:flex-row md:items-center justify-between text-sky-900 gap-3">
          <span>Analysis AI © все права защищены</span>
          <span>Сайт создан компанией UITC</span>
        </div>
      </div>
    </footer>
  );
};
