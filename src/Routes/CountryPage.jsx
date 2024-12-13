import React from "react";
import { useContext, useState, useEffect } from "react";

import { CountryContext } from "../Context/CountryContext";
import { Link } from "react-router";

const CountryPage = () => {
  const [a, setA] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setA(data));
    console.log(a);
  }, []);

  const { Country } = useContext(CountryContext);
  const { flags, name, population, region, capital, borders } = Country;
  return (
    <div className="max-h-svh h-full ">
      <Link to={"/home"}>
        <button className="items-start m-5 py-2 px-10 bg-white shadow">
          Back
        </button>
      </Link>
      <div className=" w-full flex flex-row justify-start ml-5 p-6 pt-20 pb-48 h-11/12">
        <img className=" bg-cover lg:rounded-l mr-10 w-1/2 " src={flags.png} />
        
        <div className="ml-28 flex flex-col  w-full justify-around space-y-5">
          <div className="w-full">
            <h2 className="text-gray-900 font-bold text-3xl mb-2 m-y-8">
              {name}
            </h2>
          </div>
          <div className="flex w-1/12 justify-between space-x-7">
            <div className="flex-col space-x-2">
              <span className="font-bold text-2xl space-x-10">Region:</span>
              <p className="text-gray-600 text-xl">{region}</p>
            </div>
            <div className="text-sm space-x-2">
              <span className="font-bold text-2xl">Capital:</span>
              <p className="text-gray-600 leading-none text-xl">{capital}</p>
            </div>
            <div className="text-sm space-x-2">
              <span className="font-bold text-2xl">Population:</span>
              <p
                className="text-gray-600 text-xl
              "
              >
                {population}
              </p>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="font-bold text-2xl">Borders: </h3>
            <div className="flex w-1/4  justify-between space-x-3">
              {borders.map((border) => (
                <p
                  className="items-start my-2 py-2 px-10 bg-white shadow"
                  key={border}
                >
                  {border}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
