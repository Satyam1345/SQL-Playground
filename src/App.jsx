import React, { useState } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Queries from "./components/Queries";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Navbar />

    {/* Framer Motion on Screen */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "linear-gradient(45deg, #4facfe, #00f2fe, #4facfe)",
          backgroundSize: "200% 200%",
          zIndex: -1,
        }}
      ></motion.div>

      <Queries/>
    </ThemeProvider>
  );
}

export default App;
