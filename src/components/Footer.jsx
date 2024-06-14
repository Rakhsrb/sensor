import React from "react";
import { Link } from "react-router-dom";
import {
  FacebookLogo,
  TwitterLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

export const Footer = () => {
  const SocialLinks = [
    {
      to: "https://www.facebook.com",
      icon: <FacebookLogo size={24} />,
    },
    {
      to: "https://www.twitter.com",
      icon: <TwitterLogo size={24} />,
    },
    {
      to: "https://www.instagram.com",
      icon: <InstagramLogo size={24} />,
    },
    {
      to: "https://www.linkedin.com",
      icon: <LinkedinLogo size={24} />,
    },
  ];

  return (
    <footer className="bg-sky-50 p-4 w-full shadow-inner mt-8">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
          <Link className="text-sky-900 text-2xl font-medium mb-4 md:mb-0">
            Analysis-AI
          </Link>
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          {SocialLinks.map((item, index) => (
            <a
              key={index}
              href={item.to}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-900 hover:text-sky-700 transition-all"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
