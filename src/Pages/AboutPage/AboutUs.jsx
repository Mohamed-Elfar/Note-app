import CardsAbout from "./CardsAbout";
import { Link } from "react-router-dom";
import Dina from "./../../assets/images/Dina.jpg";
import Hasnaa from "./../../assets/images/Hasnaa.jpg";
import Mohamed from "./../../assets/images/Mohamed.jpg";
import DefaultImg from "./../../assets/images/BoyImg.jpeg";
export default function AboutUsPage() {
  return (
    <>
      <div className="min-h-screen bg-[#f9f9fb] py-5">
        {" "}
        <header className="container mx-auto p-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              className="w-10"
              src="/src/assets/images/Logo.png"
              alt="Logo"
            />
            <h1 className="text-[30px] font-bold">Note App</h1>
          </div>
          <nav className="flex">
            <ul className="space-x-6 flex items-center w-full">
              <li className="text-[18px] text-[#2C3338] hover:text-[#5576FA]">
                <Link
                  to="/home"
                  className="bg-[#5576FA] py-2.5 px-8 text-white rounded-[8px] hover:bg-[#3b5ce5]"
                >
                  Home
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <section className="flex flex-col items-center justify-center px-4 py-16">
          <h1 className="text-center text-4xl md:text-5xl font-extrabold text-[#2C3338] mb-6">
            Meet Our Team
          </h1>
          <p className="text-center text-lg text-gray-600 max-w-xl">
            We are a group of passionate developers, designers, and innovators
            building a better note-taking experience.
          </p>
        </section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          <div className="flex justify-center">
            <CardsAbout name="Hasnaa Nageh" src={Hasnaa} />
          </div>
          <div className="flex justify-center">
            <CardsAbout name="Dina Reda" src={Dina} />
          </div>

          <div className="flex justify-center">
            <CardsAbout name="Mohamed Elfar" src={Mohamed} />
          </div>
          <div className="flex justify-center">
            <CardsAbout name="Batool Elgohary" src={DefaultImg} />
          </div>
          <div className="flex justify-center">
            <CardsAbout name="Ahmed Adel" src={DefaultImg} />
          </div>
        </div>
      </div>
    </>
  );
}
