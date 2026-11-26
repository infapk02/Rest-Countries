import { use } from "react";
import Country from "./Country";

const CountriesContainer = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  console.log(countriesData);
  return (
    <>
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-4">
        {countriesData.map((country, index) => (
          <Country key={index} country={country}></Country>
        ))}
      </div>
    </>
  );
};

export default CountriesContainer;
