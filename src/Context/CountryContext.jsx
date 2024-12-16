import { createContext, useState } from "react";
import { countries } from "../data";


export const CountryContext = createContext({
  Countries: countries,
  Country: {}
});


export const CountriesContext = createContext({
  Country: {},
});


export const RegionContext = createContext({
  Selectedregion: "",
});

export const FilteredRegionContext = createContext({
  FilteredRegion: [],
});

export const CountryProvider = ({ children }) => {
  const [Country, setCountry] = useState(
    () => {
      const savedCountry = localStorage.getItem("country");
      return savedCountry ? JSON.parse(savedCountry) : null ;
    }
  );
  
  const [Countries, setCountries] = useState(countries);

  const value = { Country, Countries, setCountry, setCountries };
  return (
    <CountryContext.Provider value={value}>{children}</CountryContext.Provider>
  );
};

export const RegionProvider = ({ children }) => {
  const [Selectedregion, setSelectedregion] = useState("");
  const value = { Selectedregion, setSelectedregion };
  return (
    <RegionContext.Provider value={value}>{children}</RegionContext.Provider>
  );
};


export const FilteredRegionProvider = ({ children }) => {
  const [FilteredRegion, setfilteredRegion] = useState([]);
  const value = { FilteredRegion, setfilteredRegion };
  return (
    <FilteredRegionContext.Provider value={value}>
      {children}
    </FilteredRegionContext.Provider>
  );
};
