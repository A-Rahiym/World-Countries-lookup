import { React, useContext } from "react";
import { Link } from "react-router";
import { CountryContext } from "../../Context/CountryContext";

const CountryCard = ({ country }) => {
  const { setCountry } = useContext(CountryContext);

  const CountryPage = () => {
    setCountry(country);
  };
  const { flags, name, population, region, capital } = country;
  return (
    <>
      <Link to={"/countryPage"}>
        <div
          className=" bg-slate-50 shadow-lg justify-center items-center m-2 max-w-sm  bg-gray border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          onClick={CountryPage}
        >
          <img className="w-full" src={flags.png} />
          <div className="p-2">
            <p className=" text-xl font-bold text-center py-1 text-wrap">
              {name}
            </p>
            <span className="font-semibold text-gray-700 text-wrap">
              population:{" "}
            </span>
            <span className="text-gray-700 text-base ">{population}</span>
            <div>
              <span className=" font-semibold text-gray-700 text-wrap ">
                Region:{" "}
              </span>
              <span className="text-gray-700 text-base">{region}</span>
            </div>

            <div>
              <span className=" font-semibold text-gray-700 text-wrap">
                Capital:{" "}
              </span>
              <span className="text-gray-700 text-base text-wrap">
                {capital}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
export default CountryCard;
