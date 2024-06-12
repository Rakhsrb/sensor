import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
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
  return (
    <header className="h-[80px] bg-sky-50 p-4">
      <div className="container h-full flex items-center justify-between">
        <Link className="text-sky-900 text-2xl font-medium">Analysis-AI</Link>
        <ul className="flex gap-10">
          {Links.map((item, index) => (
            <li key={index + 1}>
              <Link className="text-sky-900 font-semibold" to={item.to}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <Link className="bg-sky-900 text-sky-50 border-2 border-sky-900 transition-all hover:border-sky-900 hover:bg-sky-50 hover:text-sky-900 py-2 px-6 rounded-xl font-bold">
          LOGIN / REGISTER
        </Link>
      </div>
    </header>
  );
};
