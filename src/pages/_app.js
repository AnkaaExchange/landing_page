import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";

export const theme = {
  colors: {
    primary: "#00FF94",
    primary_2: "#00FF9450",
    primary_3: "#00FF9425",
    primary_4: "#00FF9415",
    secondary: "#fc5185",
    secondary_2: "#fc518520",
    background: "#000004",
    secondBg: "#020206",
    white: "#fff",
  },
  fonts: {
    body: "Geo, sans-serif",
  },
  fontSizes: {
    xxSmall: "14px",
    xSmall: "16px",
    small: "18px",
    medium: "24px",
    large: "28px",
    xLarge: "36px",
    xxLarge: "48px",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
