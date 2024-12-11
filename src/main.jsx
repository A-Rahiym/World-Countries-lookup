import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import {
  CountryProvider,
  FilteredRegionProvider,
  RegionProvider,
} from "./Context/CountryContext.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <FilteredRegionProvider>
        <RegionProvider>
          <CountryProvider>
            <App />
          </CountryProvider>
        </RegionProvider>
      </FilteredRegionProvider>
    </BrowserRouter>
  </StrictMode>,
);
