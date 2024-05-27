import { useState, useEffect } from "react";
import Main from "./Components/Main";
import Splashscreen from "./Components/Splashscreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time for the main content
    const timer = setTimeout(() => {
      console.log("Loading complete, hiding splash screen");
      setIsLoading(false);
    }, 3800); // Adjust the time based on your needs

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#F1F1F1]">
      {isLoading ? <Splashscreen /> : <Main />}
    </div>
  );
}

export default App;
