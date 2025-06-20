const Forecast = () => {
  const data = [
    { day: "Mon", temp: 31, cond: "Sunny" },
    { day: "Tue", temp: 29, cond: "Cloudy" },
    { day: "Wed", temp: 27, cond: "Rain" },
  ];

  return (
    <div className="card p-3 shadow-sm">
      <h5>3-Day Forecast</h5>
      <ul className="list-group list-group-flush">
        {data.map((item, index) => (
          <li key={index} className="list-group-item">
            {item.day}:  {item.temp}°C, {item.cond}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Forecast;
