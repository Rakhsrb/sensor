import { EnvelopeSimple, HouseLine, PhoneList } from "@phosphor-icons/react";
import React from "react";
import { useLocation } from "react-router-dom";

export const Contact = () => {
  const thisPage = useLocation();
  return (
    <>
      {thisPage.pathname == "/" ? (
        <div className="container flex flex-col gap-3 pt-10">
          <h1 className="text-xl text-sky-900 font-semibold md:text-4xl">
            Contact Us
          </h1>
          <span className="text-sky-600">Send Us Your Messages</span>
          <span className="w-24 h-2 bg-sky-500 block rounded-full"></span>
        </div>
      ) : (
        <section className="py-12 md:py-20 px-4 contact_bg text-4xl text-white">
          <div className="container">
            <h1 className="text-center uppercase font-medium">Contact Us</h1>
          </div>
        </section>
      )}
      <section className="py-20 px-4">
        <div className="container grid grid-contact gap-10">
          <form className="w-full flex flex-col gap-5">
            <div className="w-full flex gap-5 *:bg-sky-50 *:w-full *:rounded-md *:p-2 *:outline-sky-600">
              <input type="text" placeholder="Fullname" name="fullname" />
              <input
                type="email"
                placeholder="Enter email address"
                name="email"
              />
            </div>
            <input
              type="text"
              placeholder="Phone number"
              className="rounded-md p-2 outline-sky-600 bg-sky-50 w-full"
              name="phone"
            />
            <textarea
              name="message"
              rows={10}
              cols={30}
              placeholder="Send message"
              className="rounded-md p-2 outline-sky-600 bg-sky-50 w-full resize-y"
            ></textarea>
            <button
              type="submit"
              className="text-lg rounded-md bg-sky-600 hover:bg-sky-900 py-2 text-white transition duration-200"
            >
              Send
            </button>
          </form>
          <div className="flex flex-col gap-5 text-sky-600 bg-sky-50 p-5 rounded-md">
            <span className="text-sm flex items-center gap-3">
              <HouseLine size={24} color="#0c4a6e" /> Наманган, Наманганская
              Область, Узбекситан
            </span>
            <span className="flex gap-3">
              <PhoneList size={24} color="#0c4a6e" />
              <div className="flex flex-col gap-2  text-sm">
                <a href="tel: 998905353553">+998 (90) 535 35 53</a>
                <a href="tel: 998905353553">+998 (90) 535 35 53</a>
                <a href="tel: 998905353553">+998 (90) 535 35 53</a>
                <a href="tel: 998905353553">+998 (90) 535 35 53</a>
              </div>
            </span>
            <span className="flex gap-2 text-sm items-center">
              <EnvelopeSimple size={24} color="#0c4a6e" />
              AnalysisAI@gmail.com <br />
              Istalgan vaqtda xabar jo'natish!
            </span>
          </div>
        </div>
      </section>
    </>
  );
};
