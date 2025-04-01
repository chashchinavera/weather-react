import React from "react";

import s from "./Home.module.scss";
import { ThisDay } from "./components/ThisDay/ThisDay";
import { ThisDayInfo } from "./components/ThisDayInfo/ThisDayInfo";
import { Days } from "./components/Days/Days";

interface Props {}

export const Home = (props: Props) => {
  return (
    <div className={s.home}>
      <div className={s.home__wrapper}>
        <ThisDay />
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  );
};
