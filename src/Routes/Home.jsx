import { useEffect, useState, useContext } from "react";
import CountryCard from "../assets/components/countryCard";
import Search from "../assets/components/Search";
import { countries } from "../data";
import SelectedRegion from "../assets/components/SelectedRegion";

import { RegionContext, CountryContext } from "../Context/CountryContext";

const Home = () => {
  const { Selectedregion } = useContext(RegionContext);
  const { Countries, setCountries } = useContext(CountryContext);

  const [searchedCountry, setSearchedcountry] = useState("");
  const [setFilteredRegion] = useState([]);

  useEffect(() => {
    setCountries(countries);
  }, []);

  useEffect(() => {
    const filtered = countries.filter((country) => {
      return country.name.toLowerCase().includes(searchedCountry);
    });
    setCountries(filtered);
    // console.log(Countries);
  }, [searchedCountry]);

  useEffect(() => {
    const filtered = countries.filter((country) => {
      return country.region === Selectedregion;
    });
    Selectedregion && setCountries(filtered);
    console.log(Countries);
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
          {Countries.map((country) => (
            <CountryCard country={country} key={country.name} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
