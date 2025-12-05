import { createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => { }
});


export default function ThemeContextProvider({ children }) {

  const [theme, setTheme] = useState('dark');
  // Todo: Add the component code (incl. dynamic context value)
  function handleToggleTheme() {
    setTheme((theme) => theme == 'dark' ? 'light' : 'dark');
  }
  const themeValue = {
    theme: theme,
    toggleTheme: handleToggleTheme
  }
  return <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
}