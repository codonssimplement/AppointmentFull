import React from "react";
import logoCompagny from "../assets/images/RVS 1.png";
import profil from "../assets/images/profil.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faTableList,
  faUser,
  faCalendar,
  faCircleUser,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

export default function Menu() {
  return (
    <div className="w-[300px] bg-[#8EDBFF] min-h-screen flex flex-col justify-between">
      <div>
        <Link to="/dashboard">
          <img
            src={logoCompagny}
            className="mx-auto my-8 h-20 bg-white"
            width={150}
            alt="Logo compagny"
          />
        </Link>
        <Link to="/dashboard">
          <button className="flex items-center justify-center mb-5 gap-3 p-5 w-full bg-white">
            <FontAwesomeIcon
              icon={faTableList}
              className="text-sky-900 text-3xl"
            />
            <span className="font-semibold text-sky-900">Tableau de bord</span>
          </button>
        </Link>
        <img
          src={profil}
          className="mx-auto mb-4 w-24 h-24 rounded-full"
          alt="Profil photo"
        />
        <ul className="flex flex-col gap-3 text-lg font-semibold items-center p-4">
          <li className="flex items-center w-full mb-4 ml-32">
            <FontAwesomeIcon
              icon={faHouse}
              className="text-[#1998D3] text-[16px]"
            />
            <Link className="text-white text-[16px] ml-2" to="/dashboard">
              Accueil
            </Link>
          </li>
          <li className="flex items-center w-full mb-4 ml-32">
            <FontAwesomeIcon
              icon={faCalendar}
              className="text-[#1998D3] text-[16px]"
            />
            <Link className="text-white ml-2 text-[16px]" to="/dashboard/my-appointments">
              Mes rendez-vous
            </Link>
          </li>
          <li className="flex items-center w-full mb-4 ml-32">
            <FontAwesomeIcon
              icon={faUser}
              className="text-[#1998D3] text-[16px]"
            />
            <Link className="text-white text-[16px] ml-2" to="/dashboard/my-patients">
              Mes patients
            </Link>
          </li>
          <li className="flex items-center w-full mb-4 ml-32">
            <FontAwesomeIcon
              icon={faCircleUser}
              className="text-[#1998D3] text-[16px]"
            />
            <Link className="text-white text-[16px] ml-2" to="/dashboard/my-account">
              Mon compte
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center mb-5">
        <FontAwesomeIcon
          icon={faRightToBracket}
          className="text-[#1998D3] mb-1 text-lg mt-4"
        />
        <Link to="/Home" className="text-white">
          Déconnexion
        </Link>
      </div>
    </div>
  );
}
