import { useContext } from "react";
import { countries } from "../data";
import { CountryContext } from "../Context/CountryContext";
import { Link } from "react-router";
import { FiArrowLeft } from "react-icons/fi";

const CountryPage = () => {
  const { Country, setCountry } = useContext(CountryContext);
  const { flags, name, population, region, capital, borders, alpha3Code } =
    Country;

  const setCountryByCode = (event) => {
    setCountry(() => {
      return countries.find(
        (country) => country.alpha3Code === event.target.value,
      );
    });
  };

  return (
    <div className="max-h-svh h-full flex flex-col">
      <Link to={"/home"}>
        <button className="flex  justify-between m-5 py-2 px-4 space-x-2 bg-white shadow hover:bg-slate-200 rounded">
          <FiArrowLeft size={20}></FiArrowLeft>
          <span>back</span>
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
              <span className="font-bold text-2xl text-slate-800 space-x-10">
                Region:
              </span>
              <p className="text-gray-600 text-xl">{region}</p>
            </div>
            <div className="text-sm space-x-2">
              <span className="font-bold text-2xl text-slate-800">
                Capital:
              </span>
              <p className="text-gray-600 leading-none text-xl">{capital}</p>
            </div>
            <div className="text-sm space-x-2">
              <span className="font-bold text-2xl text-slate-800">
                Population:
              </span>
              <p
                className="text-gray-600 text-xl
              "
              >
                {population}
              </p>
            </div>

            <div className="text-sm space-x-2">
              <span className="font-bold text-2xl text-slate-800">Code:</span>
              <p
                className="text-gray-600 text-xl
              "
              >
                {alpha3Code}
              </p>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="font-bold text-xl text-slate-800">
              Borders countries:{" "}
            </h3>
            <div className="flex w-1/4  justify-between space-x-3">
              {borders && borders.length > 0 ? (
                borders.map((border) => (
                  <button
                    className="items-start my-2 py-2 px-10 bg-white shadow"
                    key={border}
                    value={border}
                    onClick={setCountryByCode}
                  >
                    {border}
                  </button>
                ))
              ) : (
                <p className="text-gray-800">Loading...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
