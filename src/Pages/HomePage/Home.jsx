import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import LandingPage from './../../assets/images/landing-page.webp'
import Logo from './../../assets/images/Logo.png'
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Header */}
      <header className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img className="w-10" src={Logo} alt="Logo" />
          <h1 className="text-[30px] font-bold">Note App</h1>
        </div>
        <nav className="flex">
          <ul className="space-x-6 flex items-center w-full">
            <li className="text-[18px] text-[#2C3338] hover:text-[#5576FA]">
              <Link
                to="/AboutUs"
                className="bg-[#5576FA] py-2.5 px-8 text-white rounded-[8px] hover:bg-[#3b5ce5]"
              >
                AboutUs
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex-1 container mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-20 px-4 py-6 md:px-0">
        <div className="info md:w-[700px] text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-5 text-[#2C3338]">
            Simplify Your Workflow
          </h1>
          <p className="mb-5 text-gray-600">
            Manage your notes easily with a modern and secure platform. To
            access and manage your notes, you must log in to your account.
          </p>
          <div className="space-x-3">
            <Link
              to="/SignIn"
              className="bg-[#5576FA] py-2.5 px-8 text-white rounded-[8px] hover:bg-[#3b5ce5]"
            >
              Login
            </Link>
            <Link
              to="/SignUp"
              className="bg-[#F25D26] py-2.5 px-8 text-white rounded-[8px] hover:bg-[#d24d1e]"
            >
              Register
            </Link>
          </div>
        </div>
        <div className="image mb-10 md:mb-0">
          <img
            className="w-[300px] md:w-[500px]"
            src={LandingPage}
            alt="Landing Page"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#E6ECFF] text-gray-700 text-center text-sm py-3 mt-auto shadow-inner font-inter">
        <p>
          © 2025 Notes App. Built with{" "}
          <span className="font-semibold">React</span> &{" "}
          <span className="font-semibold">TailwindCSS</span>
        </p>
        <p className="mt-2 text-xs font-medium">
          Made with <span className="text-red-500">❤</span> by:
        </p>
        <p className="mt-1 text-xs font-medium">
          Mohamed Samir, Hassna Nageh, Dina Reda, Batool Elgohary, Ahmed Adel
        </p>
      </footer>
    </div>
  );
}
