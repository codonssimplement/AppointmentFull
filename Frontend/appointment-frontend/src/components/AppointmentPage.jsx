import React from "react";
import { FaBell } from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";
import profil from "../assets/images/profil.png";
import Menu from "./Menu";
import { FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AppointmentPage() {
  return (
    <div className="flex min-h-screen">
      {/* Barre de navigation verticale */}
      <Menu />

      {/* Contenu principal */}
      <div className="flex-1 p-10">
        <div className="flex justify-end items-center mb-10">
          <FaBell className="text-2xl text-red-600 mx-4" />
          <img className="w-16  rounded-full" src={profil} alt="profil photo" />
        </div>

        <h2 className="text-3xl mb-10">The appointment informations</h2>
        <div className="flex justify-center mb-10">
          <FaUserFriends className="bg-sky-100 text-9xl p-5 rounded-full" />
        </div>

        <div className="border w-3/4 mx-auto border-slate-500 rounded-xl p-5">
          <div className="my-4 flex justify-between items-center">
            <p>
              <span>First Name: </span>
              <span className="font-bold">OUSSEYNOU</span>
            </p>
            <LuPencilLine />
          </div>
          <div className="my-4 flex justify-between items-center">
            <p>
              <span>Last Name: </span>
              <span className="font-bold">DIOP</span>
            </p>
            <LuPencilLine />
          </div>
          <div className="my-4 flex justify-between items-center">
            <p>
              <span>Role: </span>
              <span className="font-bold">CEO XARALA</span>
            </p>
            <LuPencilLine />
          </div>
          <div className="my-4 flex justify-between items-center">
            <p>
              <span>Date: </span>
              <span className="font-bold">30/06/2024</span>
            </p>
            <LuPencilLine />
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button className="w-3/5 py-3 text-white bg-sky-500 rounded-lg hover:bg-sky-900 active:shadow-lg">
            Enregistrer
          </button>
        </div>
      </div>
    </div>
  );
}
