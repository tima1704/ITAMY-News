import React from "react";

export const useTheme = () => {
  
  const isDarkTheme = window?.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const defaultTheme = isDarkTheme ? "dark" : "light";

  const [theme, setTheme] = React.useState(
    JSON.parse(localStorage.getItem("data-theme")) || defaultTheme
  );

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("data-theme", JSON.stringify(theme));
  });

  return { setTheme };
};
