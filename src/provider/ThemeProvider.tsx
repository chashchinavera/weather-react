import { ReactNode, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

interface Props {
  children: ReactNode;
}

export const ThemeProvider = ({ children, ...props }: Props) => {
  const [theme, setTheme] = useState("light");

  function toggleTheme(theme: string) {
    setTheme(theme);
  }

  return (
    <div>
      <ThemeContext.Provider value={{ theme, toggleTheme }} {...props}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
};
