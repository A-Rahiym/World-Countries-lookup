import { useEffect, useState, useContext } from "react";
import CountryCard from "../../assets/components/countryCard";
import Search from "../../assets/components/Search";
import { Countries } from "../../data";

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
      <div className="flex relative mb-3 bg-zinc-600 justify-between text-center">
        <h3 className="text-4xl mt-4">World</h3>
      <Search Onchange={handlesearch} />
      </div>
      <div className=" grid grid-cols-5">
        {filteredsearch.map((country) => (
          <CountryCard country={country} key={country.name} />
        ))}
      </div>
    </div>
  );
};
export default Home;
