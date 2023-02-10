import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "Tailwind CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "React Native" },
  { skill: "Next.js" },
  { skill: "Java" },
  { skill: "Sql" },
  { skill: "NoSql" },
  { skill: "Wordpress" },
  { skill: "Git" },
  { skill: "GitHub" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Sobre mim
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Um pouco sobre mim
            </h1>
            <p>
              Olá, meu nome é André Mendes e sou um Desenvolvedor Full Stack
              altamente ambicioso e motivado, atualmente moro em Belém do Pará.
            </p>
            <br />
            <p>
              Eu me formei na Universidade UNIP em Tecnologia da Informação e
              atualmente estou cursando Análise Desenvolvimento de Sistemas na
              Universidade Estácio. Atualmente Trabalho com projetos freelancer, no
              desenvolvimento de aplicações Web Full-stack.
            </p>
            <br />
            <p>
              Tenho uma ampla gama de hobbies e paixões. Desde ler, praticar
              esportes, viajar, jogar videogame, entre outros. Estou sempre em
              busca de novas experiências e aprendendo coisas novas.
            </p>
            <br />
            <p>
              Acredito que{" "}
              <span className="font-bold text-teal-500">
                nunca se deve parar de crescer
              </span>{" "}
              e é isso que me esforço para fazer, tenho paixão por tecnologia e
              vontade de sempre ultrapassar os limites do que é possível. Estou
              animado para ver onde minha carreira me levará. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
