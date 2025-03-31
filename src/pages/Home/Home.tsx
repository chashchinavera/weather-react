import React from "react";

import s from "./Home.module.scss";
import { ThisDay } from "./components/ThisDay/ThisDay";
import { ThisDayInfo } from "./components/ThisDayInfo/ThisDayInfo";

interface Props {}

export const Home = (props: Props) => {
  return (
    <div className={s.home}>
      <ThisDay />
      <ThisDayInfo />
    </div>
  );
};
