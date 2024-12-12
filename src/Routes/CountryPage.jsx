import React from "react";
import { useContext } from "react";

import { CountryContext } from "../Context/CountryContext";
import { Link } from "react-router";


const CountryPage = () => {
  const { Country } = useContext(CountryContext);
  const { flags, name, population, region, capital } = Country;
  return (
    <div className=" flex w-full h-full bg-slate-100 flex-row items-start justify-center m-2">
      <Link to={"/home"}>
        <button className="items-start">Back</button>
      </Link>
      <div className=" w-2/4 mt-10 flex flex-col justify-center  items-center text-center">
        <img className=" lg:w-48 bg-cover lg:rounded-l " src={flags.png} />
        <h4 className="text-gray-900 font-bold text-xl mb-2">{name}</h4>
        <p className="text-gray-700 text-base">{region}</p>
        <div className="text-sm">
          <p className="text-gray-900 leading-none">{capital}</p>
          <p className="text-gray-600">{population}</p>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
