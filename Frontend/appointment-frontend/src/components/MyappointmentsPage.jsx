import React from "react";
import { FaArrowCircleRight, FaBell } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import profil from "../assets/images/profil.png";
import Menu from "./Menu";

export default function MyAppointmentsPage() {
  const datas = [
    {
      firstName: "OUSSEYNOU",
      lastName: "DIOP",
      role: "CEO",
      date: "30/06/2024",
    },
    // Add new object later
  ];

  return (
    <div className="flex min-h-screen">
      {/* Barre de navigation verticale */}
      <Menu />

      {/* Contenu principal */}
      <div className="flex-1">
        <div className="flex justify-between px-12 py-5 items-center ">
          <div className="relative w-2/4">
            <input
              type="text"
              placeholder="Recherche"
              className="w-full h-14 pl-12 pr-4 bg-sky-900 text-white rounded-full border-2 border-sky-700 focus:outline-none focus:border-white"
            />
            <CiSearch className="absolute top-1/2 transform -translate-y-1/2 left-4 text-2xl text-white font-bold" />
          </div>

          <div className="flex items-center">
            <FaBell className="text-2xl text-red-600 mx-10 font-bold" />
            <img
              className="w-16  rounded-full"
              src={profil}
              alt="profil photo"
            />
          </div>
        </div>

        <div className="flex justify-between px-12 items-center">
          <h2 className="text-3xl my-10">Mes Rendez-vous</h2>
          <Link to="/dashboard/new-appointment">
            <button
              title="Add New"
              className="group cursor-pointer outline-none hover:rotate-90 duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                className="stroke-blue-400 fill-none group-hover:fill-blue-800 group-active:stroke-blue-200 group-active:fill-blue-600 group-active:duration-0 duration-300"
              >
                <path
                  d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                  stroke-width="1.5"
                ></path>
                <path d="M8 12H16" stroke-width="1.5"></path>
                <path d="M12 16V8" stroke-width="1.5"></path>
              </svg>
            </button>
          </Link>
        </div>

        <table className="border-collapse w-11/12 mx-auto my-5 border-t-2 border-slate-500">
          <tbody>
            {datas.map((item, index) => (
              <tr key={index}>
                <td className="border-b-2 border-slate-700 p-2">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="font-bold text-sky-500">
                        {item.firstName} {item.lastName}
                      </span>
                      <span className="text-sky-400">{item.role}</span>
                      <span className="text-black font-bold">{item.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Link to="/dashboard/appointment">
                        <FaArrowCircleRight className="text-xl text-sky-700" />
                      </Link>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
