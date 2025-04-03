import { createContext } from "react";

interface Props {
  theme: string;
  toggleTheme: (theme: string) => void;
}

export const ThemeContext = createContext<Props>({
  theme: "light",
  toggleTheme: () => {},
});
