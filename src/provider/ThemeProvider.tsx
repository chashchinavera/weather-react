import { ReactNode, useState } from "react";
import { Theme, ThemeContext } from "../context/ThemeContext";
import { changeCssRootVariables } from "../model/ChangeCssRootVariables";

interface Props {
  children: ReactNode;
}

export const ThemeProvider = ({ children, ...props }: Props) => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  function toggleTheme(theme: Theme) {
    setTheme(theme);
    changeCssRootVariables(theme);
  }

  return (
    <div>
      <ThemeContext.Provider value={{ theme, toggleTheme }} {...props}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
};
