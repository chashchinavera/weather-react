import React, { useContext, useEffect, useState } from "react";

import s from "./Home.module.scss";
import { ThisDay } from "./components/ThisDay/ThisDay";
import { ThisDayInfo } from "./components/ThisDayInfo/ThisDayInfo";
import { Days } from "./components/Days/Days";
import { API_KEY } from "../../utils/constants";
import { createContext } from "react";

interface Props {}

interface listWeatherElement {
  dt: string;
  main: {
    feels_like: number;
    pressure: number;
    temp: number;
    temp_day: number;
    temp_night: number;
  };
  weather: [{ main: string; description: string }];
  wind: { speed: number; deg: number };
  rain: string;
}

export const CurrentWeatherContext = createContext({
  city: "",
  list: [
    {
      dt: "",
      main: {
        feels_like: 0,
        pressure: 0,
        temp: 0,
        temp_day: 0,
        temp_night: 0,
      },
      weather: [{ main: "", description: "" }],
      wind: { speed: 0, deg: 0 },
      rain: "",
    },
  ],
});

export const Home = (props: Props) => {
  const [loading, setLoading] = useState(true);
  const [currentWeather, setCurrentWeather] = useState(
    useContext(CurrentWeatherContext)
  );

  const lat = "59.2187";
  const lon = "39.8886";
  const lang = "ru";

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=${lang}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();

        let currentWeatherList: listWeatherElement[] = [
          {
            dt: "",
            main: {
              feels_like: 0,
              pressure: 0,
              temp: 0,
              temp_day: 0,
              temp_night: 0,
            },
            weather: [{ main: "", description: "" }],
            wind: { speed: 0, deg: 0 },
            rain: "",
          },
        ];

        for (let i = 0; i < jsonData.list.length; i++) {
          currentWeatherList[i] = {
            dt: jsonData.list[i].dt_txt,
            main: {
              feels_like: Math.floor(jsonData.list[i].main.feels_like - 270),
              pressure: jsonData.list[i].main.pressure,
              temp: Math.floor(jsonData.list[i].main.temp - 270),
              temp_day: Math.floor(jsonData.list[i].main.temp_day),
              temp_night: Math.floor(jsonData.list[i].main.temp_night),
            },
            weather: [
              {
                main: jsonData.list[i].weather[0].main,
                description: jsonData.list[i].weather[0].description,
              },
            ],
            wind: {
              speed: jsonData.list[i].wind.speed,
              deg: jsonData.list[i].wind.deg,
            },
            rain: jsonData.list[i].rain?.["1h"],
          };
        }

        setCurrentWeather(() => ({
          ...currentWeather,

          city: jsonData.city.name,
          list: currentWeatherList,
        }));
        setLoading(false);
      } catch (err) {
        console.log("function error: ", err);
      }
    })();
  });

  return (
    <div className={s.home}>
      {loading ? (
        <>LOADER</>
      ) : (
        <CurrentWeatherContext.Provider value={currentWeather}>
          <div className={s.home__wrapper}>
            <ThisDay />
            <ThisDayInfo />
          </div>
          <Days />
        </CurrentWeatherContext.Provider>
      )}
    </div>
  );
};
