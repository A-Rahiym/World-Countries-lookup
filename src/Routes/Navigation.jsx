import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { Outlet } from "react-router";

const Navigation = () => {
  const [mode, setMode] = useState(false);

  const [a , setA] = useState([])
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all").then(response => response.json()).then(data => setA(data))
    console.log(a)
  }
  , [])
  
  const changeMode = () => {
    setMode((prev) => !prev);
  };

  return (
    <>
    <div className="flex relative p-5 justify-between align-middle shadow-lg mb-2">
      <h3 className="  pl-3 font-bold ">World Countries</h3>
      <div className="flex space-x-4 align-middle justify-between py-1 text-">
        <span className="text-xs cursor-pointer" onClick={changeMode}>
          {mode ? <>light mode</> : <>dark mode</>}
        </span>
        {mode ? <FiSun size={18} /> : <FiMoon size={18} />}
      </div>
    </div>
    <Outlet/>
    </>
  );
};

export default Navigation;
