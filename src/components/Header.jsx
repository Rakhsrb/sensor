import { TextIndent, TextOutdent } from "@phosphor-icons/react";
import React, { useState } from "react";
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

  const [activateNav, setActivateNav] = useState(false);

  document.body.style.overflowY = activateNav ? "hidden" : "scroll";

  return (
    <header className="h-[80px] bg-sky-50 p-4 sticky top-0 left-0 w-full z-[999999] shadow-md">
      <div className="container h-full flex items-center justify-between">
        <Link className="text-sky-900 text-2xl font-medium">Analysis-AI</Link>
        <ul
          className={`flex flex-col gap-7 fixed top-[80px] md:static bg-sky-50 w-full h-full p-4 bg-opacity-50 backdrop-blur-md transition-all ease-linear duration-200 ${
            activateNav ? "right-0" : "-right-full"
          } md:gap-10 md:flex-row md:w-auto md:h-auto`}
        >
          {Links.map((item, index) => (
            <li key={index + 1}>
              <Link className="text-sky-900 font-semibold" to={item.to}>
                {item.title}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to={"/login"}
              className="bg-sky-900 text-sky-50 border-2 border-sky-900 transition-all hover:border-sky-900 hover:bg-transparent hover:text-sky-900 py-2 px-6 rounded-xl font-bold md:hidden"
            >
              LOGIN / REGISTER
            </Link>
          </li>
        </ul>
        <Link
          to={"/login"}
          className="bg-sky-900 text-sky-50 border-2 border-sky-900 transition-all hover:border-sky-900 hover:bg-transparent hover:text-sky-900 py-2 px-6 rounded-xl font-bold md:block hidden"
        >
          LOGIN / REGISTER
        </Link>

        <span
          onClick={() =>
            activateNav ? setActivateNav(false) : setActivateNav(true)
          }
          className="md:hidden "
        >
          {activateNav ? (
            <TextIndent size={32} color="#0c4a6e" />
          ) : (
            <TextOutdent size={32} color="#0c4a6e" />
          )}
        </span>
      </div>
    </header>
  );
};
