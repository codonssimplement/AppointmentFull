import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderPage from './HeaderPage';
import googleLogo from '../assets/images/google.png';
import grp4 from '../assets/images/Group 4.png';
import grp3 from '../assets/images/Group 3.png';
import rectangle5 from '../assets/images/Rectangle 5.png';
import rectangle6 from '../assets/images/Rectangle 6.png';
import rectangle7 from '../assets/images/Rectangle 7.png';
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {
    const navigate = useNavigate();

    //Function navigation to registration
    const handleSignUpPageClick = () => {
      navigate('/registration'); 
    };

    //function navigate to dashbord
    const handleDashboardPageClick = () => {
      navigate('/dashboard'); 
    };

     //Use the api 
     const handleFormSubmit = async (e) => {
      e.preventDefault();

      const formData = {
        email: e.target.email.value,
        password: e.target.password.value,
      }
      try {
          const response = await axios.post("http://localhost:5000/users/login", formData);
      
          if (response.data.success) {
            toast.success(response.data.message);
            localStorage.setItem("token", response.data.data);
            //Go to Home page (Dashboard patient)
           navigate("/dashboard");
          } else{
            toast.error(response.data.message);
          }
          
        } catch (error) {
        toast.error("Something went wrong. Please try again.");
      }
    };
  

  return (
    <>
      <HeaderPage />
      <main className="flex flex-col items-center justify-center min-h-screen bg-white p-1 relative">
        <h1 className="mb-6 text-[27px] font-inter font-bold leading-lh text-colorTitleLoginPage  text-center ml-7 mt-12 ">Se connecter</h1>
        
        <form className="w-full max-w-sm relative" onSubmit ={handleFormSubmit}>
          <div className="mb-4">
            <input
              className="shadow items-center appearance-none border rounded-7px w-[500px] h-[48px] -ml-6 py-2 px-3 bg-bcInputField leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Adresse e-mail"
              required
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded-7px w-[500px] h-[48px] py-2 px-3 -ml-6 bg-bcInputField leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Mot de passe"
              required
            />
          </div>
          <div className='mb-4'>
            <button
              className="bg-blue-500 text-white px-3 py-2 rounded-7px hover:bg-blue-700 focus:outline-none focus:shadow-outline w-[500px] h-[50px] -ml-6"
              type="submit"
              //onClick={handleDashboardPageClick}
            >
              Se connecter
            </button>
          </div>
          <div className='mb-4'>
            <button
              className="bg-colorLinkHeader text-white px-3 py-2 rounded-7px hover:bg-black focus:outline-none focus:shadow-outline w-[500px] h-[50px] flex items-center justify-center -ml-6"
              type="button "
             // onClick={handleDashboardPageClick}
            >
              Continuer avec Google
              <img src={googleLogo} alt="google logo" className="ml-2 w-[24px] h-[24px]" />
            </button>
          </div>
          <div className="flex flex-row items-center justify-center  mb-4 mt-16 ">
            <p className="inline-block align-baseline font-inter font-normal text-[16px] ml-9 mt-2 pr-4">
              Mot de passe oublié ?
            </p>
            <a className="inline-block align-baseline font-inter cursor-pointer	 font-normal text-[16px] text-blue-500 hover:text-blue-800 mt-2" onClick={handleSignUpPageClick}>
              S’inscrire
            </a>
          </div>
        </form>
        <img src={grp3} alt="group 3" className="absolute top-[50%] left-0 transform -translate-y-1/2" />
      </main>
      <div className="flex justify-center mt-4">
        <img src={rectangle6} alt="rectangle 6" className="mx-5" />
        <img src={rectangle7} alt="rectangle 7" className="mx-5" />
        <img src={rectangle5} alt="rectangle 5" className="mx-5" />
      </div>
      <div className="flex justify-end mt-4">
        <img src={grp4} alt="group 4" className="-mt-[190px]" />
      </div>
    </>
  );
}

