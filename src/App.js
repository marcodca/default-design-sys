import React from "react";
import ThemeProvider from "./ui/CustomThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <div>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <p>Text content in here coming just like nothing</p>
      </div>
    </ThemeProvider>
  );
}
