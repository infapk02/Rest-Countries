import { Suspense } from "react";
import CountriesContainer from "./CountriesContainer";
import Navbar from "./Navbar";

const countriesData = async () => {
  const response = await fetch("https://openapi.programming-hero.com/api/all");
  return response.json();
};

const countriesPromise = countriesData();

const Countries = () => {
  return (
    <>
      <Navbar></Navbar>
      <Suspense>
        <CountriesContainer countriesPromise={countriesPromise}></CountriesContainer>
      </Suspense>
    </>
  );
};

export default Countries;
