import React, { useEffect } from "react";
import { useContext } from "react";

import {
  RegionContext,
  FilteredRegionContext,
} from "../../Context/CountryContext";

const SelectedRegion = ({ countryArray }) => {
  const { FilteredRegion, setfilteredRegion } = useContext(
    FilteredRegionContext,
  );

  const { Selectedregion: SelectedRegion, setSelectedregion } = useContext(RegionContext);

  useEffect(() => {
    setfilteredRegion([
      ...new Set(
        countryArray.map((country) => {
          return country.region;
        }),
      ),
    ]);
  }, []);

  const getRegion = (e) => {
    setSelectedregion(e.target.value);
    console.log(SelectedRegion);
  };

  return (
    <div className="flex-row justify-center align-middle space-x-2 mr-4 border-spacing-4 my-2 p-1  ">
      <span className="font-bold pl-3"> Filter by region: </span>
      <select
        onChange={getRegion}
        className="my-4 relative p-1"
      >
        <option value="" disabled></option>
        {FilteredRegion.map((region) => (
          <option value={region} key={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectedRegion;
