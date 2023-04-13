import { ThemeProvider } from "styled-components";

export const getTheme = () => {
  return {
    colors: {
      themeContrast0: "#121212",
      themeBodyBg: "#18061f",
      themeBodyTxt: "#f3f3f3",
      brandColor1: "#00ff99",
      brandColor2: "#00ccff",
      brandColor3: "#9933ff",
      brandColor4: "tomato",
      brandColor5: "#fff35c",
      brandColor6: "#8429de",
      brandColor7: "#ECE6F5",
      brandColor8: "#ffffff",
    },
    paddings: {
      xs: "4px",
      s: "8px",
      m: "16px",
      l: "32px",
    },
  };
};

const AppThemeProvider = ({ children }) => (
  <ThemeProvider theme={getTheme()}>{children}</ThemeProvider>
);

export default AppThemeProvider;
