import Select from "react-select";
import s from "./Header.module.scss";
import { HeaderLogoSvg } from "../../assets/icons/svg/HeaderLogoSvg";
import { HeaderThemeChangerSvg } from "../../assets/icons/svg/HeaderThemeChangerSvg";
import { useTheme } from "../../hooks/useTheme";
import { Theme } from "../../context/ThemeContext";

export const Header = () => {
  const theme = useTheme();

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

  const isLightTheme = theme.theme === Theme.LIGHT;

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: isLightTheme ? "rgba(71, 147, 255, 0.2)" : "#4f4f4f",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: "100",
      fontSize: "14px",
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: isLightTheme ? "#000" : "#fff",
    }),
  };

  function changeTheme() {
    theme.toggleTheme(isLightTheme ? Theme.DARK : Theme.LIGHT);
  }

  return (
    <header className={s.header}>
      <div className={s.header__wrapper}>
        <div className={s.header__logo}>
          <HeaderLogoSvg />
        </div>
        <div className={s.header__title}>React weather</div>
      </div>
      <div className={s.header__wrapper}>
        <div className={s.header__theme} onClick={changeTheme}>
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
