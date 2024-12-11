import { createContext, useState } from "react";

export const CountryContext = createContext({
  Country: {},
});

export const RegionContext = createContext({
  Selectedregion: "",
});

export const FilteredRegionContext = createContext({
  FilteredRegion: [],
});

export const CountryProvider = ({ children }) => {
  const [Country, setCountry] = useState({});
  const value = { Country, setCountry };
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
