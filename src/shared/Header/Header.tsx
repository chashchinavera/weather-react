import Select from "react-select";
import s from "./Header.module.scss";
import { HeaderLogoSvg } from "../../assets/icons/svg/HeaderLogoSvg";
import { HeaderThemeChangerSvg } from "../../assets/icons/svg/HeaderThemeChangerSvg";

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

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: "rgba(71, 147, 255, 0.2)",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: "100",
      fontSize: "14px",
    }),
  };

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
