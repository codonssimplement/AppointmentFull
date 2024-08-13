import React from "react";
import { FaBell } from "react-icons/fa";
import profil from "../assets/images/profil.png";
import Menu from "./Menu";

export default function NewAppointmentPage() {
  return (
    <div className="flex min-h-screen">
      {/* Barre de navigation verticale */}
      <Menu />

      {/* Contenu principal */}
      <div className="flex-1 flex flex-col">
        <div className="flex justify-end items-center px-12 py-5">
          <FaBell className="text-2xl text-red-600 mx-4 font-bold" />
          <img className="w-16 rounded-full" src={profil} alt="profil photo" />
        </div>

        <div className="px-12">
          <h2 className="text-3xl my-10">Fill in the appointment informations</h2>
          
          <div className="border-collapse w-full my-5 border-slate-500">
            <div>
              <input
                className="border rounded-xl my-3 p-5 h-12 w-full border-slate-400"
                type="text"
                placeholder="Reason for appointment"
              />
            </div>
            <div>
              <input
                className="border rounded-xl my-3 p-5 h-12 w-full border-slate-400"
                type="text"
                placeholder="With which doctor"
              />
            </div>
            <div>
              <input
                className="border rounded-xl my-3 p-5 h-12 w-full border-slate-400"
                type="date"
                placeholder="Date of appointment"
              />
            </div>
            <div>
              <input
                className="border rounded-xl my-3 p-5 h-12 w-full border-slate-400"
                type="time"
                placeholder="Hours of appointment"
              />
            </div>
            <div>
              <input
                className="border rounded-xl my-3 p-5 h-12 w-full border-slate-400"
                type="text"
                placeholder="Where"
              />
            </div>
            <div className="flex justify-center mt-8">
              <button className="w-2/5 py-3 text-white duration-150 bg-sky-500 rounded-lg hover:bg-sky-900 active:shadow-lg">
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
