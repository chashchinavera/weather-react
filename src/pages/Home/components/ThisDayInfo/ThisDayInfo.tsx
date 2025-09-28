import React, { useContext } from "react";

import s from "./ThisDayInfo.module.scss";
import cloud from "../../../../assets/images/cloud.png";
import { ThisDayItem } from "./ThisDayItem";
import { CurrentWeatherContext } from "../../Home";

export interface Item {
  icon_id: string;
  name: string;
  value: string;
}

export const ThisDayInfo = () => {
  const currentWeather = useContext(CurrentWeatherContext);

  return (
    <div className={s.this__day_info}>
      <img className={s.this__cloud} src={cloud} alt="облако" />
      {getItems().map((item: Item) => (
        <ThisDayItem key={item.icon_id} item={item} />
      ))}
    </div>
  );

  function getItems() {
    return [
      {
        icon_id: "temp",
        name: "Температура",
        value: `${currentWeather.list[0].main.temp}° - ощущается как ${currentWeather.list[0].main.feels_like}°`,
      },
      {
        icon_id: "pressure",
        name: "Давление",
        value: getPressure(),
      },
      {
        icon_id: "precipitation",
        name: "Осадки",
        value: getRain(),
      },
      {
        icon_id: "wind",
        name: "Ветер",
        value: `${
          currentWeather.list[0].wind.speed
        } м/с ${getWindDirection()} - ${getWindForce()}`,
      },
    ];
  }

  function getPressure() {
    const pressure = Math.floor(
      (currentWeather.list[0].main.pressure * 100) / 133.33
    );
    return `${pressure} мм ртутного столба - ${
      pressure < 750
        ? "пониженное"
        : pressure > 765
        ? "повышенное"
        : "нормальное"
    }`;
  }

  function getRain() {
    const rain = currentWeather.list[0].rain;
    return rain !== "" && rain !== undefined
      ? `В ближайшие 24 часа ожидается ${Math.floor(+rain * 10)} мм осадков`
      : "Без осадков";
  }

  function getWindDirection() {
    const deg = currentWeather.list[0].wind.deg;
    return deg > 337.5 && deg <= 22.5
      ? "северный"
      : deg > 22.5 && deg <= 67.5
      ? "северо-восточный"
      : deg > 67.5 && deg <= 112.5
      ? "восточный"
      : deg > 112.5 && deg <= 157.5
      ? "юго-восточный"
      : deg > 157.5 && deg <= 202.5
      ? "южный"
      : deg > 202.5 && deg <= 247.5
      ? "юго-западный"
      : deg > 247.5 && deg <= 292.5
      ? "западный"
      : "северо-западный";
  }

  function getWindForce() {
    const speed = currentWeather.list[0].wind.speed;
    return speed < 2
      ? "штиль"
      : speed < 3
      ? "легкий ветер"
      : speed < 5.5
      ? "слабый ветер"
      : speed < 6.5
      ? "умеренный ветер"
      : speed < 14.5
      ? "сильный ветер"
      : speed < 30
      ? "шторм"
      : "ураган";
  }
};
