import React from "react";
import GlobalStyle from "./styles";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#f38181",
    accent: "#fce38a",
    success: "#88c459",
    error: "#f5414f",
    warning: "#ffd137"
  },
  fonts: {
    primary: "sans-serif",
    secondary: "serif"
  }
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </ThemeProvider>
  );
}
