import { useEffect, useState, useContext } from "react";
import CountryCard from "../assets/components/countryCard";
import Search from "../assets/components/Search";
import { Countries } from "../data";
import { FiSun, FiMoon } from "react-icons/fi";
import SelectedRegion from "../assets/components/SelectedRegion";
import {
  RegionContext,
  FilteredRegionContext,
} from "../Context/CountryContext";
import Navigation from "./Navigation";

const Home = () => {
  const { Selectedregion } = useContext(RegionContext);

  const [searchedCountry, setSearchedcountry] = useState("");
  const [countries, setCountries] = useState(Countries);

  const [filteredRegion, setFilteredRegion] = useState([]);

  useEffect(() => {
    const filtered = Countries.filter((country) => {
      return country.name.toLowerCase().includes(searchedCountry);
    });
    setCountries(filtered);
  }, [searchedCountry]);

  useEffect(() => {
    const filtered = Countries.filter((country) => {
      return country.region === Selectedregion;
    });
    Selectedregion && setCountries(filtered);
  }, [Selectedregion]);

  useEffect(() => {
    setFilteredRegion([
      ...new Set(
        Countries.map((country) => {
          return country.region;
        }),
      ),
    ]);
  }, []);

  const handlesearch = (e) => {
    setSearchedcountry(e.target.value);
  };

  return (
    <div>
      <div className="flex flex-col  w-full">
        <div className="flex justify-between">
          <Search Onchange={handlesearch} />
          <SelectedRegion countryArray={countries} />
        </div>
        <div className=" grid lg:grid-cols-4 gap-0 sm:grid-cols-2">
          {countries.map((country) => (
            <CountryCard country={country} key={country.name} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
