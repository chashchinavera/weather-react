import React, { useContext } from "react";

import s from "./ThisDay.module.scss";
import { WeatherSvgSelector } from "../../../../assets/icons/svg/WeatherSvgSelector";
import { CurrentWeatherContext } from "../../Home";

export const ThisDay = () => {
  const currentWeather = useContext(CurrentWeatherContext);

  return (
    <div className={s.this__day}>
      <div className={s.this__block_top}>
        <div className={s.this__block_wrapper}>
          <div className={s.this__temperature}>
            {currentWeather.list[0].main.temp > 0
              ? `+${currentWeather.list[0].main.temp}`
              : currentWeather.list[0].main.temp}
            °
          </div>
          <div className={s.this__day_name}>
            Сегодня {currentWeather.list[0].weather[0].description}
          </div>
        </div>
        <WeatherSvgSelector id={currentWeather.list[0].weather[0].main} />
      </div>
      <div className={s.this__block_wrapper}>
        <div className={s.this__time}>
          Время: <span>{getTime()}</span>
        </div>
        <div className={s.this__city}>{currentWeather.city}</div>
      </div>
    </div>
  );

  function getTime() {
    const currentDate = new Date();
    const currentHour =
      currentDate.getHours() < 10
        ? `0${currentDate.getHours()}`
        : currentDate.getHours();

    const currentMinutes =
      currentDate.getMinutes() < 10
        ? `0${currentDate.getMinutes()}`
        : currentDate.getMinutes();

    return `${currentHour}:${currentMinutes}`;
  }
};
