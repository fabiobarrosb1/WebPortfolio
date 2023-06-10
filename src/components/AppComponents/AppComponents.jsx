import React, { useEffect } from 'react';
import { createContext, useState } from 'react';

const AppContext = createContext();

function AppProvider(props) {
  const [theme, setTheme] = useState("light");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(prefersDark.matches ? "dark" : "light");
    setIsLoading(false);

    // Listen for changes in the system's theme
    const handleChangeTheme = (event) => {
      setTheme(event.matches ? "dark" : "light");
    };

    prefersDark.addListener(handleChangeTheme);

    // Cleanup the listener when the component is unmounted
    return () => {
      prefersDark.removeListener(handleChangeTheme);
    };
  }, []);

  if (isLoading) {
    return null;
  }

  function setThemeMode(theme) {
    setTheme(theme);
  }

  function toggleTheme() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  const value = {
    theme: theme,
    setThemeMode: setThemeMode,
    toggleTheme: toggleTheme,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };