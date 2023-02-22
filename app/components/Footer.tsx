import React from "react"
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai"

const Footer = () => {
  
  const CurrentYear = () => {
    const year = new Date().getFullYear();
    return <span>© {year}</span>
  };

  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
          <CurrentYear /><a className="hover:text-violet-600 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300"><span className="text-grey">&lt;</span> DevisceralCorp / <span className="text-grey">&gt;</span></a><a href="/" className="hover:underline"></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer