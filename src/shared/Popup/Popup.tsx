import { PopupSvg } from "../../assets/icons/svg/PopupSvg";
import { WeatherSvgSelector } from "../../assets/icons/svg/WeatherSvgSelector";
import { Item } from "../../pages/Home/components/ThisDayInfo/ThisDayInfo";
import { ThisDayItem } from "../../pages/Home/components/ThisDayInfo/ThisDayItem";
import s from "./Popup.module.scss";

export const Popup = () => {
  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value: "20° - ощущается как 17°",
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value: "765 мм ртутного столба - нормальное",
    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      value: "Без осадков",
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: "3 м/с юго-запад - легкий ветер",
    },
  ];

  return (
    <>
      <div className={s.blur}>
        <div className={s.popup}>
          <div className={s.popup__day}>
            <div className={s.day__temperature}>20°</div>
            <div className={s.day__name}>Сегодня</div>
            <div className={s.day__icon}>
              <WeatherSvgSelector id={"sun"} />
            </div>
            <div className={s.day__time}>
              Время: <span>21:54</span>
            </div>
            <div className={s.day__city}>Санкт-Петербург</div>
          </div>
          <div className={s.day_info}>
            {items.map((item: Item) => (
              <ThisDayItem key={item.icon_id} item={item} />
            ))}
          </div>
          <div className={s.close}>
            <PopupSvg />
          </div>
        </div>
      </div>
    </>
  );
};
