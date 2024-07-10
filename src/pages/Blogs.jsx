import React, { useState } from "react";
import firstBlog from "../assets/blogs/blog_1.webp";

// blogs images
import { Link } from "react-router-dom";
import images_1 from "../assets/blogs/blog_imgs_1.jpg";
import images_2 from "../assets/blogs/blog_imgs_2.png";
import images_3 from "../assets/blogs/blog_imgs_3.jpg";

export const Blogs = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Blog 1",
      description:
        "This is our First blog, where we will talk about the most interesting and relevant news in the world of medicine. Our articles will help you stay updated on the latest achievements and discoveries, as well as provide useful health tips.",
      preview: firstBlog,
      images: [images_1, images_2, images_3],
      moreInformation: [
        {
          id: 1,
          title: "Topic of the Month",
          description:
            "This month, we will dedicate our articles to the prevention of cardiovascular diseases. You will learn about modern diagnostic and treatment methods, as well as receive recommendations for a healthy lifestyle.",
          images: [],
        },
        {
          id: 2,
          title: "Interviews with Experts",
          description:
            "In our interviews, leading doctors and scientists share their knowledge and experience. Stay tuned for interesting conversations with professionals.",
          images: [],
        },
        {
          id: 3,
          title: "Feedback",
          description:
            "We always welcome your feedback and questions. Write to us in the comments or via email, and we will try to respond as quickly as possible.",
          images: [],
        },
      ],
    },
    {
      id: 2,
      title: "Blog 2",
      description:
        "This is our Second blog, where we will talk about the most interesting and relevant news in the world of medicine. Our articles will help you stay updated on the latest achievements and discoveries, as well as provide useful health tips.",
      preview: firstBlog,
      images: [images_1, images_2, images_3],
      moreInformation: [
        {
          id: 1,
          title: "Topic of the Month",
          description:
            "This month, we will dedicate our articles to the prevention of cardiovascular diseases. You will learn about modern diagnostic and treatment methods, as well as receive recommendations for a healthy lifestyle.",
          images: [],
        },
        {
          id: 2,
          title: "Interviews with Experts",
          description:
            "In our interviews, leading doctors and scientists share their knowledge and experience. Stay tuned for interesting conversations with professionals.",
          images: [],
        },
        {
          id: 3,
          title: "Feedback",
          description:
            "We always welcome your feedback and questions. Write to us in the comments or via email, and we will try to respond as quickly as possible.",
          images: [],
        },
      ],
    },
    {
      id: 3,
      title: "Blog 3",
      description:
        "This is our Third blog, where we will talk about the most interesting and relevant news in the world of medicine. Our articles will help you stay updated on the latest achievements and discoveries, as well as provide useful health tips.",
      preview: firstBlog,
      images: [images_1, images_2, images_3],
      moreInformation: [
        {
          id: 1,
          title: "Topic of the Month",
          description:
            "This month, we will dedicate our articles to the prevention of cardiovascular diseases. You will learn about modern diagnostic and treatment methods, as well as receive recommendations for a healthy lifestyle.",
          images: [],
        },
        {
          id: 2,
          title: "Interviews with Experts",
          description:
            "In our interviews, leading doctors and scientists share their knowledge and experience. Stay tuned for interesting conversations with professionals.",
          images: [],
        },
        {
          id: 3,
          title: "Feedback",
          description:
            "We always welcome your feedback and questions. Write to us in the comments or via email, and we will try to respond as quickly as possible.",
          images: [],
        },
      ],
    },
    {
      id: 4,
      title: "Blog 4",
      description:
        "This is our Fourth blog, where we will talk about the most interesting and relevant news in the world of medicine. Our articles will help you stay updated on the latest achievements and discoveries, as well as provide useful health tips.",
      preview: firstBlog,
      images: [images_1, images_2, images_3],
      moreInformation: [
        {
          id: 1,
          title: "Topic of the Month",
          description:
            "This month, we will dedicate our articles to the prevention of cardiovascular diseases. You will learn about modern diagnostic and treatment methods, as well as receive recommendations for a healthy lifestyle.",
          images: [],
        },
        {
          id: 2,
          title: "Interviews with Experts",
          description:
            "In our interviews, leading doctors and scientists share their knowledge and experience. Stay tuned for interesting conversations with professionals.",
          images: [],
        },
        {
          id: 3,
          title: "Feedback",
          description:
            "We always welcome your feedback and questions. Write to us in the comments or via email, and we will try to respond as quickly as possible.",
          images: [],
        },
      ],
    },
  ]);
  return (
    <main>
      <section className="blogs_bg h-[20vh] flex justify-center items-center px-4">
        <h1 className="text-5xl font-medium text-white">Blogs</h1>
      </section>
      <section className="py-12 md:py-20 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {blogs.length > 0 ? (
            blogs?.map(({ description, id, preview, title }) => (
              <article
                key={id}
                className="bg-sky-50 rounded-md p-2 hover:scale-[1.03] transition duration-200"
              >
                <Link>
                  <img src={preview} alt={title} className="rounded-sm" />
                  <div className="p-3 flex flex-col gap-3">
                    <h1 className="text-xl font-medium text-sky-900">{title}</h1>
                    <p className="text-xs md:text-base text-justify text-sky-600">
                      {description}
                    </p>
                  </div>
                </Link>
              </article>
            ))
          ) : (
            <div>
              <h1 className="uppercase text-2xl text-sky-900">
                there is no blog
              </h1>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};
