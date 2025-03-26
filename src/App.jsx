import React, { useState } from 'react'
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./components/Navbar";

function App() {

  const [isDarkMode , setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={isDarkMode} />
      </ThemeProvider>
    </>
  )
}

export default App
