import { CheckSquareOffset, FloppyDisk, Scan } from "@phosphor-icons/react";
import React, { useState } from "react";
import { AutoFocus } from "../../components/AutoFocus";

export const UploadLungs = () => {
  const [dragActive, setDragActive] = useState(false);
  const [image, setImage] = useState(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      const file = files[0];
      setImage(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    const files = e.target.files;
    if (files && files[0]) {
      const file = files[0];
      setImage(URL.createObjectURL(file));
    }
  };

  const whatwedo = [
    {
      id: 1,
      title: "Send your X-Ray",
      icon: <FloppyDisk size={40} color="#0c4a6e" weight="regular" />,
    },
    {
      id: 2,
      title: "our AI will analyze your x-ray",
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
      <AutoFocus />
      <section className="px-4 py-20 min-h-screen flex items-center justify-center flex-col gap-10">
        <h1 className="text-4xl capitalize text-sky-900 font-semibold">
          Analyze Lungs
        </h1>
        <div className="flex flex-col gap-10 justify-center items-center p-5 sm:flex-row">
          {whatwedo?.map(({ icon, id, title }) => (
            <div
              className="capitalize text-center text-sky-600 flex flex-col items-center justify-center gap-3"
              key={id}
            >
              {icon} {title}
            </div>
          ))}
        </div>
        <div
          className={`container max-w-md h-auto border-4 border-dashed flex flex-col justify-center items-center gap-5 rounded-lg p-5 transition-all duration-300 ${
            dragActive ? "border-sky-600 bg-sky-100" : "border-slate-400"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <h1 className="text-2xl font-semibold text-sky-800">
            Upload Your X-RAY Photo Here
          </h1>
          <p className="text-slate-500 text-center">
            Click to select, copy and paste or drag files anywhere
          </p>
          <input
            type="file"
            id="fileUpload"
            className="hidden"
            onChange={handleChange}
          />
          <label
            htmlFor="fileUpload"
            className="cursor-pointer bg-sky-600 text-white py-2 px-4 rounded hover:bg-sky-700 transition-all duration-300"
          >
            Choose a file
          </label>
          {image && (
            <div className="mt-4">
              <img
                src={image}
                alt="Uploaded X-Ray"
                className="max-w-[450px] h-auto rounded"
              />
            </div>
          )}
        </div>
      </section>
    </main>
  );
};
