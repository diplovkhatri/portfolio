import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Image
        src="/images/logo.jpg"
        alt="user avatar"
        height="128px"
        width="128px"
        layout="intrinsic"
        quality="100"
        className="mx-auto rounded-full"
      />
      <h3 className="my-4 font-medium taxt-3xl tarcking-wider">
        <span className="text-green bold">Sandeep </span>
        Chandra
        <span className="text-green"> Sharma</span>
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        Networking
      </p>
      <a
        className="flex justify-center items-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200"
        href="/assets/diplov khatri Resume.pdf"
        download="Diplov Khatri Resume.pdf"
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>
      {/* //social icons */}
      <div className="flex justify-around mx-auto my-5 text-green md:w-full">
        <a href="">
          <AiFillLinkedin className="w-8 h-8" cursor-pointer />
        </a>
        <a href="">
          <AiFillGithub className="w-8 h-8" cursor-pointer />
        </a>
      </div>
      {/* //Address */}

      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex justify-center items-center space-x-2">
          <GoLocation />
          <span>Pokhara,Nepal</span>
        </div>
        <p className="my-2">diplovkhatri@gmail.com</p>
        <p className="my-2">9856003121 / 9840603121</p>
      </div>
      {/* Email button */}
      <button
        className="px-5 py-2 my-4 w-8/12 text-white bg-black bg-gradient-to-r to-blue-400 rounded-full from-green focus:outline-none"
        onClick={() => window.open("mailto:diplovkhatri99@gmail.com")}
      >
        Email me
      </button>
      <button
        className="px-5 py-2 my-4 w-8/12 text-white bg-black bg-gradient-to-r to-blue-400 rounded-full from-green"
        onClick={changeTheme}
      >
        toggele
      </button>
    </>
  );
};

export default Sidebar;
