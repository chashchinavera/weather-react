import s from "./Days.module.scss";
import { Day } from "./Days";
import { WeatherSvgSelector } from "../../../../assets/icons/svg/WeatherSvgSelector";

interface Props {
  dayItem: Day;
}

export const Card = ({ dayItem }: Props) => {
  const { day, day_info, icon_id, temp_day, temp_night, info } = dayItem;

  return (
    <div className={s.card}>
      <div className={s.day}>{day}</div>
      <div className={s.day__info}>{day_info}</div>
      <div className={s.day___icon}>
        <WeatherSvgSelector id={icon_id} />
      </div>
      <div className={s.day__temp_day}>{temp_day}</div>
      <div className={s.day__temp_night}>{temp_night}</div>
      <div className={s.day__info}>{info}</div>
    </div>
  );
};
