import React from "react";
import "./Result.scss";

const Result = (props) => {
  const {
    city,
    sunrise,
    sunset,
    temp,
    pressure,
    wind,
    err,
    description,
    icon,
    humidity,
  } = props.weather;

  let content = null;

  if (!err && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    content = (
      <>
        <div className="weather-wrapper">
          <div className="weather">
            <p className="city">{city}</p>
            <img
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              alt=""
            />
            <p className="description">{description}</p>
            <p className="temp">{Math.round(temp)} &deg;C </p>
          </div>
          <div className="column">
            <p className="pressure">Ciśnienie: {pressure} hPa</p>
            <p className="wind">Prędkość wiatru: {wind} m/s</p>
            <p className="humidity">Wilgotność: {humidity}%</p>
          </div>
        </div>
        <div className="sun">
          <p className="sunrise">Wchód słońca: {sunriseTime}</p>
          <p className="sunset">Zachód słońca: {sunsetTime}</p>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="result">
        {err ? <h1>Brak w bazie miasta {city}</h1> : content}
      </div>
    </>
  );
};

export default Result;
