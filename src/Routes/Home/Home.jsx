import { useEffect, useState, useContext } from "react";
import CountryCard from "../../assets/components/countryCard";
import Search from "../../assets/components/Search";
import { Countries } from "../../data";
import { FiSun, FiMoon } from "react-icons/fi";

const Home = () => {
  const [searchedCountry, setSearchedcountry] = useState("");
  const [filteredsearch, setFilteredSearch] = useState(Countries);

  useEffect(() => {
    const filtered = Countries.filter((country) => {
      return country.name.toLowerCase().includes(searchedCountry);
    });
    setFilteredSearch(filtered);
  }, [searchedCountry]);

  const handlesearch = (e) => {
    setSearchedcountry(e.target.value);
  };
  return (
    <div>
      <div className="flex relative p-5  bg-slate-100 justify-between align-middle shadow-slate-300">
        <h3 className="  pl-3 font-bold ">World Countries</h3>
        <div className="flex space-x-4 align-middle justify-between py-1 text-">
          <span className="text-xs">light mode</span>
          <FiSun size={18} />
        </div>
      </div>
      <div className="flex flex-col ">
        <div className="flex justify-end ">
          <Search Onchange={handlesearch} />
        </div>
        <div className=" grid grid-cols-4">
          {filteredsearch.map((country) => (
            <CountryCard country={country} key={country.name} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
