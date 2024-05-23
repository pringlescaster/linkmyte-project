import { useState, useEffect } from "react";
import Main from "./Components/Main";
import Share from "./Components/Share";
import Barcode from "./Components/Barcode";
import Splashscreen from "./Components/Splashscreen";

function App() {
const [showSplash, setshowSplash] = useState(true)

useEffect(() => {
  const timer = setTimeout(()=> {setshowSplash(false);}, 5000);
  return () => clearTimeout(timer);},[]);




  return (
    <div className="bg-[#F1F1F1]">
      {showSplash ? <Splashscreen /> : <Main />}
    </div>
  );
}



export default App;
