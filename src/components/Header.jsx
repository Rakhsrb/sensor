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
    <header className="h-[80px] bg-sky-600">
      <div className="container h-full flex items-center justify-between">
        <Link className="text-white text-2xl">LOGO</Link>
        <ul className="flex gap-10">
          {Links.map((item) => (
            <li>
              <Link className="text-white font-semibold" to={item.to}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <Link className="bg-white text-sky-600 border-2 border-white transition-all hover:border-white-700 hover:bg-sky-600 hover:text-white py-2 px-6 rounded-xl font-bold">
          LOGIN / REGISTER
        </Link>
      </div>
    </header>
  );
};
