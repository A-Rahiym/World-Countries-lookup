import { createContext, useState } from "react";

export const CountryContext = createContext({
  Country: {},
});

export const CountryProvider = ({ children }) => {
  const [Country, setCountry] = useState({});
  const value = { Country, setCountry };
  return (
    <CountryContext.Provider value={value}>{children}</CountryContext.Provider>
  );
};
