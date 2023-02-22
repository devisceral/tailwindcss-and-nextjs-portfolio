import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Chat GPT Clone",
    description: "Consumindo a api do chat GPT utilizando Nextjs",
    image: "https://github.com/devisceral/chatgpt-clone-nextjs/blob/main/public/chatgptclone.png?raw=true",
    github: "https://github.com/devisceral/chatgpt-clone-nextjs",
    link: "https://chatgpt-clone-nextjs-cssvo9epo-devisceral.vercel.app/",
  },
  {
    name: "Weather App",
    description: "Projeto Nextjs utilizando a api do openweathermap",
    image: "https://github.com/devisceral/weather-app-nextjs/blob/main/public/weatherapp.png?raw=true",
    github: "https://github.com/devisceral/weather-app-nextjs",
    link: "https://weather-app-nextjs-liard.vercel.app/",
  },
  {
    name: "Food Landing Page",
    description:
      "Simples Landing page em html, css, javascript, design responsivo",
    image:
      "https://github.com/devisceral/landingpage-html-css-js-responsive/blob/main/public/website.png?raw=true",
    github: "https://github.com/devisceral/landingpage-html-css-js-responsive",
    link: "https://devisceral.github.io/landingpage-html-css-js-responsive/",
  },
  {
    name: "Todo List",
    description:
      "Todolist em html, css e javascript, armazenamento no local storage",
    image:
      "https://github.com/devisceral/todolist-localstorage/blob/main/public/todolist.png?raw=true",
    github: "https://github.com/devisceral/todolist-localstorage",
    link: "https://devisceral.github.io/todolist-localstorage",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Alguns Projetos
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              {/* <SlideUp offset="-300px 0px -300px 0px"> */}
              <SlideUp>
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="md:w-1/2">
                    <Link href={project.link} target="_blank">
                      <Image
                        src={project.image}
                        alt="project image"
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
