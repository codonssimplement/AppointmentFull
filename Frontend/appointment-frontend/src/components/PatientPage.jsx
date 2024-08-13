import React from "react";
import { FaBell } from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";
import profil from "../assets/images/profil.png";
import Menu from "./Menu";
import { FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function PatientPage() {
  return (
    <div className="flex min-h-screen">
      {/* Barre de navigation verticale */}
      <Menu />

      {/* Contenu principal */}
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between px-12 py-5 items-center">
          <div></div>
          <div className="flex items-center gap-4">
            <FaBell className="text-2xl text-red-600 font-bold" />
            <img className="w-16  rounded-full" src={profil} alt="profil photo" />
          </div>
        </div>

        <div className="px-12">
          <h2 className="text-3xl my-10">The patient informations</h2>
          <FaUserFriends className="bg-sky-100 text-9xl p-5 mx-auto rounded-full" />
          <div className="border-collapse w-11/12 mx-auto my-5 border-slate-500">
            <div className="w-full">
              <div className="my-5 p-5 w-3/5 mx-auto border rounded-xl border-slate-400">
                {[
                  { label: "First Name", value: "OUSSEYNOU" },
                  { label: "Last Name", value: "DIOP" },
                  { label: "Age", value: "33ans" },
                  { label: "City", value: "Dakar" },
                ].map((item, index) => (
                  <div key={index} className="flex my-4 justify-between items-center">
                    <p>
                      <span>{item.label} : </span>
                      <span className="font-bold">{item.value}</span>
                    </p>
                    <LuPencilLine />
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <button className="w-3/5 py-3 text-white duration-150 bg-sky-500 rounded-lg hover:bg-sky-900 active:shadow-lg">
                  Enregistrer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
