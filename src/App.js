import React from "react";
import GlobalStyle from "./styles";
import { ThemeProvider } from "styled-components";
import { theme } from './styles';

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
