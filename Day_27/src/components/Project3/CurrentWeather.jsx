const CurrentWeather = () => {
  const weather = {
    location: "Chennai",
    temperature: 32,
    condition: "Sunny",
  };

  return (
    <div className="card p-3 shadow-sm">
      <h4>{weather.location}</h4>
      <p>
         {weather.temperature}°C | ☀️ {weather.condition}
      </p>
    </div>
  );
};

export default CurrentWeather;
