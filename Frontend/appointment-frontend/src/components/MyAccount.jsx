import React from "react";
import profil from "../assets/images/profil.png";
import Menu from "../components/Menu";
import { BiSolidUserPin } from "react-icons/bi";
import { LuPencilLine } from "react-icons/lu";

export default function MyAccount() {
  return (
    <div className="flex min-h-screen">
      <Menu />
      <div className="flex-1 p-10 ">
        <h1 className="text-4xl text-center text-sky-600 mb-10">My account</h1>
        <div className="flex items-center mb-10">
          <img
            src={profil}
            className="bg-sky-600 p-3 rounded-full"
            width={150}
            alt="profil photo"
          />
          <h4 className="bg-sky-600 ml-[-7px] font-bold text-2xl h-16 w-full flex items-center text-white pl-5">
          Doctor Xalara Academy
          </h4>
        </div>
        <div className="p-3 flex justify-between items-center border rounded-xl border-slate-400 mb-5 w-3/5 mx-auto">
          <p className="flex flex-col">
            <span className="text-2xl font-semibold text-sky-600">Doctor Xalara Academy</span>
            <span>Digital Doctor</span>
          </p>
          <BiSolidUserPin className="text-5xl text-sky-600" />
        </div>
        <div className="p-3 flex justify-between items-center border rounded-xl border-slate-400 mb-5 w-3/5 mx-auto">
          <p>
            <span className="block">Address :</span>
            <span>Nord foire</span>
          </p>
          <LuPencilLine className="text-2xl text-sky-600" />
        </div>
        <div className="p-3 flex justify-between items-center border rounded-xl border-slate-400 mb-5 w-3/5 mx-auto">
          <p>
            <span className="block">Tel :</span>
            <span>+221 77 860 60 64</span>
          </p>
          <LuPencilLine className="text-2xl text-sky-600" />
        </div>
        <div className="p-3 flex justify-between items-center border rounded-xl border-slate-400 mb-5 w-3/5 mx-auto">
          <p>
            <span className="block">E-mail :</span>
            <span>contact@xarala.co</span>
          </p>
          <LuPencilLine className="text-2xl text-sky-600" />
        </div>
        <div className="p-3 flex justify-between items-center border rounded-xl border-slate-400 mb-5 w-3/5 mx-auto">
          <p>
            <span className="block">Mot de passe :</span>
            <span>**********************</span>
          </p>
          <LuPencilLine className="text-2xl text-sky-600" />
        </div>
        <div className="flex justify-center">
          <button className="w-3/5 py-3 text-white bg-sky-500 rounded-lg hover:bg-sky-900 active:shadow-lg transition duration-150">
            Enregistrer
          </button>
        </div>
      </div>
    </div>
  );
}
