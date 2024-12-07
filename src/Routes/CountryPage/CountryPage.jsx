import React from "react";
import { useContext } from "react";


import {CountryContext } from "../../Context/CountryContext";


const CountryPage = () => {

  const {Country} = useContext(CountryContext);
  const { flags, name, population, region, capital } = Country;
  return (
    <div
      className=" bg-slate-50 shadow-lg justify-center items-center m-2 max-w-sm p-6 bg-gray border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      onClick={CountryPage}
    >
      <img className=" lg:w-48 bg-cover lg:rounded-l " src={flags.png} />
      <h4 className="text-gray-900 font-bold text-xl mb-2">{name}</h4>
      <p className="text-gray-700 text-base">{region}</p>
      <div className="text-sm">
        <p className="text-gray-900 leading-none">{capital}</p>
        <p className="text-gray-600">{population}</p>
      </div>
    </div>
  );
};

export default CountryPage;
