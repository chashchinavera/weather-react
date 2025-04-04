import { ReactNode, useState } from "react";
import { changeCssRootVariables } from "../model/ChangeCssRootVariables";

interface Props {
  children: ReactNode;
}

export const ThemeProvider = ({ children, ...props }: Props) => {

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
