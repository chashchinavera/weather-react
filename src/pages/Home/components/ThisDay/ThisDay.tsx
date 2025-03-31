import React from "react";

import s from "./ThisDay.module.scss";
import { WeatherSvgSelector } from "../../../../assets/icons/svg/WeatherSvgSelector";

export const ThisDay = () => {
  return (
    <div className={s.this__day}>
      <div className={s.this__block_top}>
        <div className={s.this__block_wrapper}>
          <div className={s.this__temperature}>20°</div>
          <div className={s.this__day_name}>Сегодня</div>
        </div>
        <WeatherSvgSelector id={"sun"} />
      </div>
      <div className={s.this__block_wrapper}>
        <div className={s.this__time}>
          Время: <span>21:54</span>
        </div>
        <div className={s.this__city}>Санкт-Петербург</div>
      </div>
    </div>
  );
};
