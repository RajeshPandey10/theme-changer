const React = require("react");

const ThemeContext = React.createContext(undefined);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState("light");

  React.useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return React.createElement(
    ThemeContext.Provider,
    { value: { theme, toggleTheme } },
    children
  );
};

const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

module.exports = { ThemeProvider, useTheme };
