import { useContext } from "react";
import { Card } from "./Card";
import s from "./Days.module.scss";
import { Tabs } from "./Tabs";
import { CurrentWeatherContext } from "../../Home";

export interface Day {
  day: string;
  day_info: string;
  icon_id: string;
  temp_day: number;
  temp_night: number;
  info: string;
}

export const Days = () => {
  const currentWeather = useContext(CurrentWeatherContext);
  const items = getDays();

  return (
    <>
      <Tabs />
      <div className={s.days}>
        {items.map((dayItem: Day) => (
          <Card dayItem={dayItem} key={dayItem.day_info} />
        ))}
      </div>
    </>
  );

  function getDays() {
    const todayDate = new Date(currentWeather.list[0].dt);

    const todayWeekDay = todayDate.getDay();

    const weekDays = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

    const monthNames = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ];

    const days: Day[] = [];

    interface listWeatherElement {
      dt: string;
      main: {
        feels_like: number;
        pressure: number;
        temp: number;
      };
      weather: { main: string; description: string }[];
      wind: { speed: number; deg: number };
      rain: string;
    }

    type dynamicKeysObject = {
      [key: number]: listWeatherElement[];
    };

    const weatherFrequency: dynamicKeysObject = {};

    for (let i = 0, j = -1; i < currentWeather.list.length; i++) {
      const currentDate = new Date(currentWeather.list[i].dt);
      const currentDay = currentDate.getDate();

      if (weatherFrequency[currentDay]) {
        weatherFrequency[currentDay].push(currentWeather.list[i]);

        days[j].temp_day = Math.max(
          currentWeather.list[i].main.temp,
          days[j].temp_day
        );
        days[j].temp_night = Math.min(
          currentWeather.list[i].main.temp,
          days[j].temp_night
        );

        if (
          (currentWeather.list[i].weather[0].main === "Rain" &&
            days[j].icon_id !== "Rain") ||
          (currentWeather.list[i].weather[0].main === "Drizzle" &&
            days[j].icon_id !== "Rain" &&
            days[j].icon_id !== "Drizzle") ||
          (currentWeather.list[i].weather[0].main === "Clouds" &&
            days[j].icon_id !== "Rain" &&
            days[j].icon_id !== "Drizzle" &&
            days[j].icon_id !== "Clouds")
        ) {
          days[j].icon_id = currentWeather.list[i].weather[0].main;
          days[j].info = currentWeather.list[i].weather[0].description;
        }
      } else {
        weatherFrequency[currentDay] = [currentWeather.list[i]];
        ++j;

        days[j] = {
          day: "",
          day_info: "",
          icon_id: "",
          temp_day: 0,
          temp_night: 0,
          info: "",
        };

        switch (j) {
          case 0: {
            days[j].day = "Сегодня";
            break;
          }
          case 1: {
            days[j].day = "Завтра";
            break;
          }
          default: {
            days[j].day =
              weekDays[
                todayWeekDay + j <= 6
                  ? todayWeekDay + j
                  : todayWeekDay - (7 - j)
              ];
            break;
          }
        }

        const currentMonth = currentDate.getMonth();

        days[j].day_info = `${currentDay} ${monthNames[currentMonth]}`;
        currentDate.setDate(currentDay + 1);

        days[j].icon_id = currentWeather.list[i].weather[0].main;
        days[j].temp_day = currentWeather.list[i].main.temp;
        days[j].temp_night = currentWeather.list[i].main.temp;
        days[j].info = currentWeather.list[i].weather[0].description;
      }
    }

    return days;
  }
};
