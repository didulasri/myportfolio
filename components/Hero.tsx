// "use client";

// import { useEffect, useState } from "react";
// import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
// import { useTheme } from "./ThemeProvider";
// import Button from "./Button";
// import Starfield from "./Starfield";

// export default function Hero() {
//   const { theme } = useTheme();
//   const [displayText, setDisplayText] = useState("");
//   const fullText = "Software Engineer";

//   useEffect(() => {
//     let index = 0;
//     const timer = setInterval(() => {
//       if (index <= fullText.length) {
//         setDisplayText(fullText.slice(0, index));
//         index++;
//       } else {
//         clearInterval(timer);
//       }
//     }, 100);

//     return () => clearInterval(timer);
//   }, []);

//   const scrollToSection = (href: string) => {
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section
//       id="home"
//       className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
//         theme === "dark" ? "bg-dark-bg" : "bg-white"
//       }`}
//     >
//       {/* Starfield Background */}
//       <Starfield />

//       {/* Tech Background */}
//       <div className="tech-bg absolute inset-0">
//         <div className="absolute inset-0 grid-pattern"></div>
//         {/* Floating Tech Icons */}
//         <div className="absolute top-20 left-10 opacity-20 animate-float">
//           <div
//             className={`text-8xl ${theme === "dark" ? "text-primary" : "text-gray-300"}`}
//           >
//             {"{ }"}
//           </div>
//         </div>
//         <div
//           className="absolute bottom-20 right-10 opacity-20 animate-float"
//           style={{ animationDelay: "1s" }}
//         >
//           <div
//             className={`text-8xl ${theme === "dark" ? "text-accent-cyan" : "text-gray-300"}`}
//           >
//             {"</>"}
//           </div>
//         </div>
//         <div
//           className="absolute top-1/2 left-1/4 opacity-10 animate-float"
//           style={{ animationDelay: "2s" }}
//         >
//           <div
//             className={`text-6xl ${theme === "dark" ? "text-accent-purple" : "text-gray-300"}`}
//           >
//             {"[ ]"}
//           </div>
//         </div>
//         <div
//           className="absolute top-1/3 right-1/4 opacity-10 animate-float"
//           style={{ animationDelay: "3s" }}
//         >
//           <div
//             className={`text-6xl ${theme === "dark" ? "text-accent-pink" : "text-gray-300"}`}
//           >
//             {"( )"}
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         <div className="text-center space-y-8 animate-fade-in">
//           {/* Greeting */}
//           <div className="space-y-2">
//             <p
//               className={`font-mono text-lg md:text-xl ${
//                 theme === "dark" ? "text-primary" : "text-gray-600"
//               }`}
//             >
//               Hello, I&apos;m
//             </p>
//             <h1
//               className={`font-display text-5xl md:text-7xl lg:text-8xl font-bold ${
//                 theme === "dark" ? "text-white" : "text-dark-bg"
//               }`}
//             >
//               Didula Sri Lakpriya
//             </h1>
//             <div className="font-mono text-2xl md:text-4xl text-primary h-12 flex items-center justify-center">
//               {displayText}
//               <span className="animate-pulse ml-1">|</span>
//             </div>
//           </div>

//           {/* Description */}
//           <p
//             className={`font-mono text-base md:text-lg max-w-3xl mx-auto leading-relaxed ${
//               theme === "dark" ? "text-gray-300" : "text-gray-700"
//             }`}
//             style={{ animationDelay: "0.2s" }}
//           >
//             {/* Early-career full-stack developer passionate about building scalable, production-ready applications.
//             4th year IT undergraduate at University of Moratuwa, specializing in modern web technologies
//             and clean code practices. */}
//           </p>

//           {/* CTA Buttons */}
//           <div
//             className="flex flex-wrap items-center justify-center gap-4"
//             style={{ animationDelay: "0.4s" }}
//           >
//             <Button
//               variant="primary"
//               size="lg"
//               onClick={() => scrollToSection("#projects")}
//             >
//               View My Work
//             </Button>
//             <Button
//               variant="secondary"
//               size="lg"
//               onClick={() => scrollToSection("#connect")}
//             >
//               Get In Touch
//             </Button>
//           </div>

//           {/* Social Links */}
//           <div
//             className="flex items-center justify-center gap-6 pt-8"
//             style={{ animationDelay: "0.6s" }}
//           >
//             <a
//               href="https://github.com/didulasri"
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`p-3 rounded-lg border-2 transition-all hover:scale-110 ${
//                 theme === "dark"
//                   ? "border-dark-border hover:border-primary text-gray-400 hover:text-primary"
//                   : "border-gray-300 hover:border-dark-bg text-gray-600 hover:text-dark-bg"
//               }`}
//             >
//               <Github size={24} />
//             </a>
//             <a
//               href="https://linkedin.com/in/didulasri"
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`p-3 rounded-lg border-2 transition-all hover:scale-110 ${
//                 theme === "dark"
//                   ? "border-dark-border hover:border-primary text-gray-400 hover:text-primary"
//                   : "border-gray-300 hover:border-dark-bg text-gray-600 hover:text-dark-bg"
//               }`}
//             >
//               <Linkedin size={24} />
//             </a>
//             <a
//               href="mailto:diduladdsl@gmail.com"
//               className={`p-3 rounded-lg border-2 transition-all hover:scale-110 ${
//                 theme === "dark"
//                   ? "border-dark-border hover:border-primary text-gray-400 hover:text-primary"
//                   : "border-gray-300 hover:border-dark-bg text-gray-600 hover:text-dark-bg"
//               }`}
//             >
//               <Mail size={24} />
//             </a>
//             <a
//               href="https://medium.com/@diduladdsl"
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`p-3 rounded-lg border-2 transition-all hover:scale-110 ${
//                 theme === "dark"
//                   ? "border-dark-border hover:border-primary text-gray-400 hover:text-primary"
//                   : "border-gray-300 hover:border-dark-bg text-gray-600 hover:text-dark-bg"
//               }`}
//             >
//               <svg
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//               >
//                 <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
//               </svg>
//             </a>
//           </div>

//           {/* Scroll Indicator */}
//           <button
//             onClick={() => scrollToSection("#about")}
//             className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
//           >
//             <ChevronDown size={32} className="text-primary" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import Button from "./Button";
import Starfield from "./Starfield";

export default function Hero() {
  const { theme } = useTheme();
  const [displayText, setDisplayText] = useState("");
  const fullText = "Software Engineer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-start relative overflow-hidden ${
        theme === "dark" ? "bg-dark-bg" : "bg-white"
      }`}
    >
      {/* Starfield Background */}
      <Starfield />

      {/* Tech Background */}
      <div className="tech-bg absolute inset-0 z-0">
        <div className="absolute inset-0 grid-pattern"></div>

        <div className="absolute top-20 left-10 opacity-20 animate-float">
          <div
            className={`text-8xl ${
              theme === "dark" ? "text-primary" : "text-gray-300"
            }`}
          >
            {"{ }"}
          </div>
        </div>

        <div
          className="absolute bottom-20 right-10 opacity-20 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <div
            className={`text-8xl ${
              theme === "dark" ? "text-accent-cyan" : "text-gray-300"
            }`}
          >
            {"</>"}
          </div>
        </div>

        <div
          className="absolute top-1/2 left-1/4 opacity-10 animate-float"
          style={{ animationDelay: "2s" }}
        >
          <div
            className={`text-6xl ${
              theme === "dark" ? "text-accent-purple" : "text-gray-300"
            }`}
          >
            {"[ ]"}
          </div>
        </div>

        <div
          className="absolute top-1/3 right-1/4 opacity-10 animate-float"
          style={{ animationDelay: "3s" }}
        >
          <div
            className={`text-6xl ${
              theme === "dark" ? "text-accent-pink" : "text-gray-300"
            }`}
          >
            {"( )"}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
        <div className="text-left space-y-8 animate-fade-in max-w-3xl ml-4 md:ml-12">
          {/* Greeting */}
          <div className="space-y-2">
            <p
              className={`font-mono text-lg md:text-xl ${
                theme === "dark" ? "text-primary" : "text-gray-600"
              }`}
            >
              Hello, I&apos;m
            </p>

            <h1
              className={`font-display text-5xl md:text-7xl lg:text-8xl font-bold whitespace-nowrap ${
                theme === "dark" ? "text-white" : "text-dark-bg"
              }`}
            >
              Didula Sri Lakpriya
            </h1>

            <div className="font-mono text-2xl md:text-4xl text-primary h-12 flex items-center">
              {displayText}
              <span className="animate-pulse ml-1">|</span>
            </div>
          </div>

          {/* Description */}
          <p
            className={`font-mono text-base md:text-lg max-w-2xl leading-relaxed ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          ></p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection("#projects")}
            >
              View My Work
            </Button>

            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection("#connect")}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 pt-8">
            <a
              href="https://github.com/didulasri"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-lg border-2 transition-all hover:scale-110 ${
                theme === "dark"
                  ? "border-dark-border hover:border-primary text-gray-400 hover:text-primary"
                  : "border-gray-300 hover:border-dark-bg text-gray-600 hover:text-dark-bg"
              }`}
            >
              <Github size={24} />
            </a>

            <a
              href="https://linkedin.com/in/didulasri"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-lg border-2 transition-all hover:scale-110 ${
                theme === "dark"
                  ? "border-dark-border hover:border-primary text-gray-400 hover:text-primary"
                  : "border-gray-300 hover:border-dark-bg text-gray-600 hover:text-dark-bg"
              }`}
            >
              <Linkedin size={24} />
            </a>

            <a
              href="mailto:diduladdsl@gmail.com"
              className={`p-3 rounded-lg border-2 transition-all hover:scale-110 ${
                theme === "dark"
                  ? "border-dark-border hover:border-primary text-gray-400 hover:text-primary"
                  : "border-gray-300 hover:border-dark-bg text-gray-600 hover:text-dark-bg"
              }`}
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Profile Image */}
      <div className="absolute bottom-0 right-0 z-10 pointer-events-none">
        <Image
          src="/newprofile.png"
          alt="Didula Sri Lakpriya"
          width={650}
          height={780}
          priority
          className="object-contain select-none opacity-95 max-w-[280px] sm:max-w-[340px] md:max-w-[520px] lg:max-w-[680px]"
        />
      </div>

      {/* Scroll */}
      <button
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20"
      >
        <ChevronDown size={32} className="text-primary" />
      </button>
    </section>
  );
}
