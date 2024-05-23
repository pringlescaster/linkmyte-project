// Splashscreen.js
import React, { useEffect } from 'react';

function Splashscreen() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
    script.type = "module";
    document.body.appendChild(script);
  }, []);

  return (
    <div className="grid justify-center gap-y-10 relative bg-white min-h-screen pb-20 overflow-x-hidden">
      <dotlottie-player 
        src="https://lottie.host/20a20c7a-216e-4292-ae96-3677beccda06/TxiAo6kk3A.json" 
        background="transparent" 
        speed="1" 
        loop 
        autoplay>
      </dotlottie-player>
    </div>
  );
}

export default Splashscreen;
