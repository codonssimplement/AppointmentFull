import React from 'react';
import logo from '../assets/images/RVS 1.png';
import { useNavigate } from 'react-router-dom';

const HeaderPage = () => {

  const navigate = useNavigate();

  const handleLoginPageClick = () => {
    navigate('/login'); 
  };




  return (
    <header className="bg-neutral-50 w-full h-auto">
      <nav className="flex flex-col md:flex-row justify-between items-center h-20 px-6">
        <div className="flex items-center justify-center md:justify-start">
          <a href="/home">
            <img src={logo} alt="logo-compagny" className="w-36 h-auto cursor-pointer" />
          </a>
        </div>

        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 space-x-0 md:space-x-6 mt-4 md:mt-0 ml-0 md:ml-20 text-center md:text-left">
          <li>
            <a href="/home" className="font-inter font-normal text-base md:text-lg text-colorLinkHeader">ACCUEIL</a>
          </li>
          <li>
            <a href="#" className="font-inter font-normal text-base md:text-lg text-colorLinkHeader">MES RENDEZ-VOUS</a>
          </li>
          <li>
            <a href="#" className="font-inter font-normal text-base md:text-lg text-colorLinkHeader">MON COMPTE</a>
          </li>
        </ul>

        <div className="flex space-x-2 mt-4 md:mt-0">
          <div className="bg-bcButtonHeader  w-36 h-10 text-center rounded-md hover:bg-blue-800">
            <button className="w-full h-full font-inter text-sm font-normal text-colorButtonHeader  " onClick={handleLoginPageClick}>Se connecter</button>
          </div>
          <div className="bg-colorLinkHeader  hover:bg-black w-36 h-10 text-center rounded-md">
            <button className="w-full h-full font-inter text-sm font-normal text-colorButtonHeader">Déconnexion</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderPage;
