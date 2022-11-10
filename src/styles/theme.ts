import { extendTheme } from "@chakra-ui/react";

export const projectTheme = extendTheme({
  colors: {
    black: {
      50: "rgba(0, 0, 0, 0.5)",
      100: "#000",
    },
    white: "#FFFFFF",
    blue: {
      light: "#2C7AED",
      dark: "#3580EE",
    },
    cyan: "#2CEDE0",
    violet: "#4552CE",
  },
  fonts: {
    heading: "'Inter', sans-serif",
    Text: "'Inter', sans-serif",
  },
  breakpoints: { 
    sm: "320px", 
    smHome: "430px",
    md: "768px", 
    lg: "960px", 
    xl: "1200px",
    xlHome: "1361px",
    '2xl': '1500px',
  },
});
