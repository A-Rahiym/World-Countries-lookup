import Home from "./Routes/Home/Home";
import CountryPage from "./Routes/CountryPage/CountryPage";
import { Route, Routes } from "react-router";


const App = () => {
  return (
    <div className="content-container">
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="countryPage" element={<CountryPage/>}/>
      </Routes>
    </div>
  );
};

export default App;
