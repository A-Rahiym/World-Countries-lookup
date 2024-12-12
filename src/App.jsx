import Home from "./Routes/Home";
import CountryPage from "./Routes/CountryPage";
import { Route, Routes } from "react-router";
import Navigation from "./Routes/Navigation";

const App = () => {
  return (
    <div className="content-container">
      <Routes>
        <Route path="/" element={<Navigation/>}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="countryPage" element={<CountryPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
