import React, { lazy, Suspense } from "react";

// Lazy load weather components
const CurrentWeather = lazy(() => import("./CurrentWeather"));
const Forecast = lazy(() => import("./Forecast"));

function Proj3() {
  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Mini Project 3: Weather App </h2>

      <Suspense fallback={<p>Loading Current Weather...</p>}>
        <CurrentWeather />
      </Suspense>

      <hr />

      <Suspense fallback={<p>Loading Forecast...</p>}>
        <Forecast />
      </Suspense>
    </div>
  );
}

export default Proj3;
