import { Card } from "./Card";
import s from "./Days.module.scss";
import { Tabs } from "./Tabs";

export interface Day {
  day: string;
  day_info: string;
  icon_id: string;
  temp_day: string;
  temp_night: string;
  info: string;
}

export const Days = () => {
  const days: Day[] = [
    {
      day: "Сегодня",
      day_info: "1 апреля",
      icon_id: "sun",
      temp_day: "+10",
      temp_night: "+5",
      info: "Облачно",
    },
    {
      day: "Завтра",
      day_info: "2 апреля",
      icon_id: "rain",
      temp_day: "+10",
      temp_night: "+5",
      info: "Небольшой дождь",
    },
    {
      day: "Чт",
      day_info: "3 апреля",
      icon_id: "small-rain&sun",
      temp_day: "+10",
      temp_night: "+5",
      info: "Облачно",
    },
    {
      day: "Пт",
      day_info: "4 апреля",
      icon_id: "small-rain&sun",
      temp_day: "+10",
      temp_night: "+5",
      info: "Облачно",
    },
    {
      day: "Сб",
      day_info: "5 апреля",
      icon_id: "cloudy",
      temp_day: "+10",
      temp_night: "+5",
      info: "Облачно",
    },
    {
      day: "Вс",
      day_info: "6 апреля",
      icon_id: "small-rain&sun",
      temp_day: "+10",
      temp_night: "+5",
      info: "Облачно",
    },
    {
      day: "Пн",
      day_info: "7 апреля",
      icon_id: "small-rain&sun",
      temp_day: "+10",
      temp_night: "+5",
      info: "Облачно",
    },
  ];

  return (
    <>
      <Tabs />
      <div className={s.days}>
        {days.map((dayItem: Day) => (
          <Card dayItem={dayItem} key={dayItem.day_info} />
        ))}
      </div>
    </>
  );
};
