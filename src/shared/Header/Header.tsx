import Select from "react-select";
import s from "./Header.module.scss";
import { HeaderLogoSvg } from "../../assets/icons/svg/HeaderLogoSvg";
import { HeaderThemeChangerSvg } from "../../assets/icons/svg/HeaderThemeChangerSvg";
import { colourStyles } from "./customStyles";

export const Header = () => {
  const options = [
    { value: "Санкт-Петербург", label: "Санкт-Петербург" },
    { value: "Москва", label: "Москва" },
    { value: "Екатеринбург", label: "Екатеринбург" },
    { value: "Новосибирск", label: "Новосибирск" },
    { value: "Казань", label: "Казань" },
    { value: "Челябинск", label: "Челябинск" },
    { value: "Омск", label: "Омск" },
    { value: "Самара", label: "Самара" },
  ];

  return (
    <header className={s.header}>
      <div className={s.header__wrapper}>
        <div className={s.header__logo}>
          <HeaderLogoSvg />
        </div>
        <div className={s.header__title}>React weather</div>
      </div>
      <div className={s.header__wrapper}>
        <div className={s.header__theme}>
          <HeaderThemeChangerSvg />
        </div>
        <Select
          options={options}
          styles={colourStyles}
          defaultValue={options[0]}
        />
      </div>
    </header>
  );
};
