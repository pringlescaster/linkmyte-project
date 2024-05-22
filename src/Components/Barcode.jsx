import React from 'react'
import cancelIcon from "./Assets/Delete Icon.svg";
import profilepicture from "./Assets/profile image.svg";
import barcodeimg from './Assets/barcode image.svg'



function Barcode({ closeOverlay}) {
  return (
    <div className='px-8'>
    <div className='bg-white grid items-center gap-y-10 rounded-[22px] pb-20 min-w-96'>
    <div className='grid pt-10 px-8 justify-end' onClick={closeOverlay}>
            <img src={cancelIcon} alt="Close Icon" />
        </div>
        <div className="grid justify-center items-center gap-y-4">
        <div className='grid justify-center'>
  <div> 
    <img
      src={profilepicture}
      className="rounded-full border-2 border-[#f1f1f1] w-28"
      alt="Profile"
    />
  </div>
</div>

  <div className="grid justify-center gap-y-1">
    <h1 className="text-violet-700 text-center  text-lg font-semibold font-sourceSans">
      Ayantoye David
    </h1>
    <h1 className="text-[#878787] text-center font-semibold font-sourceSans text-lg">
      Senior Technology Consultant
    </h1>
  </div>
  <div className='grid justify-center'>
  <div>
    <img
      src={barcodeimg}
      alt="Barcode"
    />
  </div>
</div>


    
</div>


        
                   
            
        
        </div>
        
    </div>
  )
}

export default Barcode
