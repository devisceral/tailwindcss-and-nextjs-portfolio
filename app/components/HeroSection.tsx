"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <div>
      <section id="home">
        <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
          <div className="md:w-1/2 md:mt-2">
            <Image
              className="rounded-full shadow-2xl"
              src="https://avatars.githubusercontent.com/u/80175873?v=4"
              alt=""
              width={300}
              height={300}
            />
          </div>
          <div className="md:mt-2 md:2-3/5">
            <h1 className="font-bold text-4xl mt-6 md:text-5xl md:mt-0">
              Olá, me chamo André!
            </h1>
            <p className="text-lg mt-4 mb-6 md:text-1xl">
              Sou <span className="font-semibold text-teal-600">Desenvolvedor Full-stack</span>, progredindo diariamente, atuando em
              tecnologias web, entregando trabalhos de qualidade
            </p>
            <Link
              to="projects"
              className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Projetos
            </Link>
          </div>
        </div>
        <div className="flex flex-row items-center text-center justify-center">
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <HiArrowDown size={35} className="animate-bounce" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
