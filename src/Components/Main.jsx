import React, { useState } from 'react';
import imagee from "./Assets/Logo2.svg";
import editicon from "./Assets/editicon.svg";
import arrow from "./Assets/Arrow.svg";
import barcode from "./Assets/barcode.svg";
import profilepicture from "./Assets/profile image.svg";
import profileIcon from "./Assets/Profile Icon.svg";
import shareYourContact from "./Assets/Share Contact Icon.svg";
import createYourOwnCard from "./Assets/create icon.svg";
import instagramIcon from "./Assets/Instagram Logo.svg";
import linkedInIcon from "./Assets/LinkedIn Logo.svg";
import facebookIcon from "./Assets/Facebook Logo.svg";
import xLogo from "./Assets/X Logo.svg";
import youTubeLogo from "./Assets/Youtube.svg";
import snapChatLogo from "./Assets/Snapchat.svg";
import linkmyteBackground from "./Assets/linnkyy.png";
import Contact from "./Contact";
import Share from "./Share";
import Barcode from "./Barcode";

function Main() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isBarCodeOpen, setIsBarCodeOpen] = useState(false);

  function toggleContactOptions() {
    setIsContactOpen(!isContactOpen);
  }

  function toggleShareOptions() {
    setIsShareOpen(!isShareOpen);
  }

  function toggleBarcodeOptions() {
    setIsBarCodeOpen(!isBarCodeOpen);
  }

  function closeOverlay() {
    setIsContactOpen(false);
    setIsShareOpen(false);
    setIsBarCodeOpen(false);
  }

  console.log("Rendering Main component");

  return (
    <div
      className="grid justify-center gap-y-10 relative bg-[#F1F1F1] min-h-screen pb-20 overflow-x-hidden"
      style={{
        backgroundImage: `url(${linkmyteBackground})`,
        backgroundPosition: "bottom right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "140%",
      }}
    >
      <div>
        <div
          className="h-[150px] sm:h-[200px] bg-cover bg-center pt-10 w-full"
          style={{ backgroundImage: `url(${imagee})` }}
        >
          <div className="px-6 flex justify-between">
            <div className="px-2 bg-violet-700 flex items-center gap-x-2 py-1 w-[76px] rounded-[15px] opacity-70">
              <img src={editicon} className="" alt="Edit Icon" />
              <p className="text-white font-sourceSans font-medium text-center">
                Edit
              </p>
            </div>
            <div className="flex gap-x-4">
              <div className="bg-violet-700 rounded-[91.43px] w-8 h-8 flex justify-center items-center opacity-70">
                <img src={arrow} className="items-center" alt="Arrow Icon" />
              </div>
              <div onClick={toggleBarcodeOptions} className="bg-violet-700 rounded-[91.43px] w-8 h-8 flex justify-center items-center opacity-70">
                <img src={barcode} className="items-center" alt="Barcode Icon" />
              </div>
            </div>
          </div>
          <img
            src={profilepicture}
            className="relative left-1/2 transform -translate-x-1/2 grid items-center justify-center pt-10"
            alt="Profile Picture"
          />
        </div>
      </div>

      <div className="pt-0">
        <div className="grid justify-center px-4 gap-y-[2px]">
          <h1 className="text-center text-violet-700 text-lg font-semibold font-sourceSans">
            Ayantoye David
          </h1>
          <h1 className="text-[#878787] font-semibold text-center font-sourceSans text-base">
            Senior Technology Consultant
          </h1>
          <h1 className="text-[#878787] text-center text-sm font-sourceSans px-2">
            Expert in software development using web - Mobile apps - Artificial
            intelligence - Blockchain
          </h1>
        </div>
      </div>
      <div className="px-8">
        <div className="">
          <div className="grid px-4 py-6 bg-white bg-opacity-60 gap-y-[19px] rounded-[20px]">
            <div
              className="flex justify-start items-center gap-x-4 bg-white opacity-100 py-[11px] pl-[27px] rounded-[13px]"
              onClick={toggleContactOptions}
            >
              <img src={profileIcon} alt="Profile Icon" />
              <p className="text-[#A4A4A4] text-sm font-sourceSans font-semibold">
                Contacts Options
              </p>
            </div>
            <div className="flex justify-start items-center gap-x-4 bg-white opacity-100 py-[11px] pl-[27px] rounded-[13px]" onClick={toggleShareOptions}>
              <img src={shareYourContact} alt="Share Contact Icon" />
              <p className="text-[#A4A4A4] text-sm font-sourceSans font-semibold">
                Send Your Contact Info
              </p>
            </div>
            <div className="flex justify-start items-center gap-x-4 bg-white opacity-100 py-[11px] pl-[27px] rounded-[13px]">
              <img src={createYourOwnCard} alt="Create Your Own Card Icon" />
              <p className="text-[#A4A4A4] text-sm font-sourceSans font-semibold">
                Create Your Own Card
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-5">
              <img src={instagramIcon} alt="Instagram Icon" />
              <img src={linkedInIcon} alt="LinkedIn Icon" />
              <img src={facebookIcon} alt="Facebook Icon" />
              <img src={xLogo} alt="X Logo" />
              <img src={youTubeLogo} alt="YouTube Logo" />
              <img src={snapChatLogo} alt="Snapchat Logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="px-20 justify-center items-center" onClick={toggleShareOptions}>
        <div className="bg-[#5E0DD3] justify-center rounded-[26px] py-4 shadow">
          <p className="text-center text-white text-base font-semibold font-sourceSans">
            Add to Contacts
          </p>
        </div>
      </div>
      {isContactOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <div>
            <Contact closeOverlay={closeOverlay} />
          </div>
        </div>
      )}

      {isShareOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <div>
            <Share closeOverlay={closeOverlay} />
          </div>
        </div>
      )}

      {isBarCodeOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <div>
            <Barcode closeOverlay={closeOverlay} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
