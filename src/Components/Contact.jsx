import React from 'react';
import cancelIcon from "./Assets/Delete Icon.svg";
import phoneIcon from "./Assets/Phone Icon.svg";
import emailIcon from "./Assets/Email Icon.svg";
import whatsappIcon from "./Assets/Whatsapp Icon.svg";
import internetIcon from "./Assets/Internet Icon.svg";

function Contact({ closeOverlay }) {
    return (
        <div className='px-8 w-screen'>
            <div className='bg-white grid gap-y-8 rounded-[20px] pb-20'>
                <div className='grid pt-10 px-8 justify-end' onClick={closeOverlay}>
                    <img src={cancelIcon} alt="Close Icon" />
                </div>
                <h1 className='text-[#555555] text-center text-lg font-sourceSans font-semibold'>Contacts Options</h1>
                <div className='flex flex-wrap justify-center px-4 gap-8'>
                    <img src={phoneIcon} alt="Phone Icon" />
                    <img src={emailIcon} alt="Email Icon" />
                    <img src={whatsappIcon} alt="Whatsapp Icon" />
                    <img src={internetIcon} alt="Internet Icon" />
                </div>
            </div>
        </div>
    );
}

export default Contact;
