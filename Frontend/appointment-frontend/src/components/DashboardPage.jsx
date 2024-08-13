import React from "react";
import Menu from "./Menu";
import { FaBell } from "react-icons/fa";

import profil from "../assets/images/profil.png";
import logoCmpagny from "../assets/images/RVS 1.png";
import { Link } from "react-router-dom";

import axios from "axios";
import toast from "react-hot-toast";

import { useEffect } from "react";




export default function Dashboard() {

  //
  const getData = async () => {
    try {
     
      const response = await axios.post("http://localhost:5000/users/user-infos",{}, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
    
      if (response.data.success) {
      
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    getData();
  }, [])


  return (
    <div className="flex min-h-screen">
      {/* Barre de navigation verticale */}
      <Menu />

      {/* Contenu principal */}
      <div className="py-5 px-20">
        <div className="flex justify-between gap-5 ">
          <div className="w-1/2">
            <h2 className="text-3xl font-bold mt-2 text-sky-600">
              Bienvenu! Docteur
            </h2>
            <p className="w-[600px] mt-8 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatem, aspernatur error! Nisi voluptatum omnis, a unde soluta
              perferendis nam iste alias nulla tempore in eligendi ?
            </p>
          </div>
          <div className="flex items-center gap-3 ml-36  mt-[-20px] ">
          <FaBell className="text-2xl text-red-600 mx-10 font-bold" />
            <img className="w-16 ml-[-20px]" src={profil} alt="profil photo " />
          </div>
        </div>

        <h2 className="text-6xl my-5 text-sky-400">Rendez-Vous</h2>
        <div className="grid grid-cols-2 gap-5">
          <div className="  w-[390px] h-[150px]  bg-[#2F2F2F]">
            <div className="  mt-7 flex items-center justify-center">
              <div className=" absolute mt-7 w-[55px] h-[45px] bg-[#FFFFFF]">
                <h2 className="text-center p-2 font-bold">98</h2>
              </div>
              <div className=" relative top-1 left-8 mt-4 items-center w-[34px] h-[34px] rounded-full bg-[#FFFFFF] ">
                <img className="w-9 h-9 mt-1 " src={logoCmpagny} alt="" />
              </div>
            </div>
            <div className="text-center mt-5">
              <Link to="/dashboard/my-appointments">
                {" "}
                <h1 className="text-white text-2xl">Listes des rendez-vous</h1>
              </Link>
            </div>
          </div>

          <div className="  w-[390px] h-[150px]  bg-green-950">
            <div className="  mt-7 flex items-center justify-center">
              <div className=" absolute mt-7 w-[55px] h-[45px] bg-[#FFFFFF]">
                <h2 className="text-center p-2 font-bold">98</h2>
              </div>
              <div className=" relative top-1 left-8 mt-4 items-center w-[34px] h-[34px] rounded-full bg-[#FFFFFF] ">
                <img className="w-9 h-9 mt-1 " src={logoCmpagny} alt="" />
              </div>
            </div>
            <div className="text-center mt-5">
              <Link to="/dashboard/my-appointments">
                {" "}
                <h1 className="text-white text-2xl">Listes des rendez-vous</h1>
              </Link>
            </div>
          </div>

          <div className="  w-[390px] h-[150px] bg-green-950">
            <div className="  mt-7 flex items-center justify-center">
              <div className=" absolute mt-7 w-[55px] h-[45px] bg-[#FFFFFF]">
                <h2 className="text-center p-2 font-bold">98</h2>
              </div>
              <div className=" relative top-1 left-8 mt-4 items-center w-[34px] h-[34px] rounded-full bg-[#FFFFFF] ">
                <img className="w-9 h-9 mt-1 " src={logoCmpagny} alt="" />
              </div>
            </div>
            <div className="text-center mt-5">
              <Link to="/dashboard/my-appointments">
                {" "}
                <h1 className="text-white text-2xl">Listes des rendez-vous</h1>
              </Link>
            </div>
          </div>
          <div className="  w-[390px] h-[150px]  bg-sky-600">
            <div className="  mt-7 flex items-center justify-center">
              <div className=" absolute mt-7 w-[55px] h-[45px] bg-[#FFFFFF]">
                <h2 className="text-center p-2 font-bold">98</h2>
              </div>
              <div className=" relative top-1 left-8 mt-4 items-center w-[34px] h-[34px] rounded-full bg-[#FFFFFF] ">
                <img className="w-9 h-9 mt-1 " src={logoCmpagny} alt="" />
              </div>
            </div>
            <div className="text-center mt-5">
              <Link to="/dashboard/my-appointments">
                {" "}
                <h1 className="text-white text-2xl">Listes des rendez-vous</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
