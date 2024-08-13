import React from 'react';
import bcImage from '../assets/images/Confirmed attendance-amico 1.png';
import grp4 from '../assets/images/Group 4.png';
import rectangle5 from '../assets/images/Rectangle 5.png';
import rectangle6 from '../assets/images/Rectangle 6.png';
import rectangle7 from '../assets/images/Rectangle 7.png';
import { useNavigate } from 'react-router-dom';


const MainSection = () => {

  const navigate = useNavigate();

  const handleSignUpPageClick = () => {
    navigate('/registration'); 
  };

  return (
    <>
      <main className="bg-white flex flex-col md:flex-row w-full h-[650px]">
        <div className="order-2 md:order-1 text-left max-w-[500px] px-5 pl-[50px] flex flex-col justify-center">
          <h1 className="text-[4.7rem] mb-7 text-[rgb(3,1,12)]">Rendez-vous</h1>
          <p className="text-[1.2rem] mb-7 w-[460px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <button className="bg-[#007bff] text-white text-[1.6rem] cursor-pointer rounded-[7px] py-2 px-5 border-none" onClick={handleSignUpPageClick}>
            Commencer
          </button>
        </div>
        <div className="order-1 md:order-2 flex-grow flex flex-col items-end justify-between h-full">
          <img src={bcImage} alt="bcImage" className="bg-contain" />
          <img src={grp4} alt="group 4" className="-mt-80" />
        </div>
      </main>
      <div className="flex justify-center -mt-20">
        <img src={rectangle5} alt="rectangle 5" className="mx-2" />
        <img src={rectangle6} alt="rectangle 6" className="mx-2" />
        <img src={rectangle7} alt="rectangle 7" className="mx-2" />
      </div>
    </>

  );
};

export default MainSection;
