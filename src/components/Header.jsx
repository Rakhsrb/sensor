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

  document.body.style.overflowY = activateNav ? "hidden" : "auto";

  return (
    <header className="h-[80px] bg-sky-50 p-4 sticky top-0 left-0 w-full z-[999999] shadow-md">
      <div className="container h-full flex items-center justify-between">
        <Link className="text-sky-900 text-2xl font-medium">Analysis-AI</Link>
        <ul className={`flex gap-7 ${activateNav ? "" : "active"}`}>
          {Links.map((item, index) => (
            <li key={index + 1}>
              <Link className="font-semibold" to={item.to}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <Link
            to={"/login"}
            className="bg-sky-900 text-sky-50 border-2 border-sky-900 transition-all hover:border-sky-900 hover:bg-transparent hover:text-sky-900 py-2 px-6 rounded-xl font-bold"
          >
            LOGIN
          </Link>
          {activateNav ? (
            <TextIndent
              onClick={() => setActivateNav(false)}
              className="text-3xl removechi"
            />
          ) : (
            <TextOutdent
              onClick={() => setActivateNav(true)}
              className="text-3xl removechi"
            />
          )}
        </div>
      </div>
    </header>
  );
};
