import elephantImg from "@/assets/images/Elephant--Streamline-Twemoji.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
export const HeroSection = () => {
<<<<<<< HEAD
  return (
    <div>
      <div className="container py-32">
        <div>
          <div className="flex flex-col items-center justify-center">
            <Image
              className="size-[35px]"
              src={elephantImg}
              alt="Cute elephant"
            ></Image>
            <div className="bg-gray-900 border border-gray-700 px-4 py-1.5 inline-flex items-center gap-2 rounded-lg">
              <div className="bg-green-500 rounded-full size-2.5"></div>
              <div className="text-sm font-medium">Available for projects</div>
            </div>
          </div>

          <h1 className="font-serif text-3xl text-center mt-8 tracking-wide">
            Building Exceptional User Experience
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            ich habe Technische Informatik in Regelstudienzeit abgeschloßenund
            in den letzten zwei Jahren als Werkstudentin und Praktikantin in der
            Softwareentwicklung gearbeitet. In dieser Zeit habe ich praktische
            Erfahrung mit JavaScript, React, HTML5, CSS3 und MySQL/MariaDB
            gesammelt. Zusätzlich bringe ich Kenntnisse in Java, Spring Boot,
            Git, CI/CD, Scrum/Kanban und Linux mit. Ich arbeite strukturiert,
            dokumentiere meine Aufgaben sauber und lerne sehr schnell. Neue
            Technologien reizen mich – besonders das Konzept von PWAs finde ich
            spannend. Ich arbeite gern im Team und schätze den direkten
            Austausch. Obwohl Homeoffice möglich war, habe ich bisher lieber im
            Büro gearbeitet – der Kontakt mit Kollegen motiviert mich. Ich
            spreche fließend Deutsch (ohne Akzent) und Englisch.
          </p>
        </div>
        <div className="flex flex-col ">
          <button className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/35 transition duration-300 px-4 py-2 rounded-sm border border-white/65">
            <span>Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button>
            <span>😎</span>
            <span>Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
=======
  return <div className="border border-white">Hero Section</div>;
>>>>>>> 4c0c6db91b63fc18ad60380beb3c9c7704374804
};
