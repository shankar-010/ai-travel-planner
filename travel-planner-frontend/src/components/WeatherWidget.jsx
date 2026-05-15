import { useEffect, useState } from "react";

function WeatherWidget({ city }) {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!city) return;

   fetch(`${process.env.REACT_APP_API_URL}/api/weather/${encodeURIComponent(city)}`)
      .then(res => {
        if (!res.ok) throw new Error("Weather error");
        return res.json();
      })
      .then(data => {
        setWeather(data);
        setError(false);
      })
      .catch(() => setError(true));
  }, [city]);

return (
  <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">

    <div className="flex items-center gap-3 mb-5">

      <div className="w-11 h-11 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center text-xl">
        🌦️
      </div>

      <div>
        <h2 className="text-xl font-black text-slate-900">
          Weather
        </h2>

        <p className="text-slate-500 text-sm">
          Live destination forecast
        </p>
      </div>

    </div>

    {error && (
      <p className="text-red-500 text-sm">
        Weather not available
      </p>
    )}

    {!error && !weather && (
      <p className="text-slate-500 text-sm">
        Loading weather...
      </p>
    )}

    {weather && (
      <div className="flex items-center justify-between">

        <div>

          <h3 className="text-2xl font-black text-slate-900 mb-1">
            {weather.city}
          </h3>

          <p className="text-3xl font-black text-slate-900">
            {Math.round(weather.temperature)}°C
          </p>

          <p className="text-slate-500 capitalize mt-1">
            {weather.description}
          </p>

        </div>

        <img
          src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt="weather"
          className="w-24 h-24"
        />

      </div>
    )}

  </div>
);
}

export default WeatherWidget;
