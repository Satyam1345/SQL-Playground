import React, { useState } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Queries from "./components/Queries";
import SexyEditor from "./components/ReactEditor";
import SimpleEditor from "./components/ReactEditor";
import ReactEditor from "./components/ReactEditor";
import TiptapEditor from "./components/ReactEditor";

function App() {
  const [isQuerySelected , setIsQuerySelected] = React.useState(-1);

  return (
      <>

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

      <div 
        style = {{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          marginTop: "10vh",
        }}
      >
        <div style={{ width: "40vw", height: "100vh", alignContent:"flex-start"}}>
        <Queries  isQuerySelected={isQuerySelected} setIsQuerySelected={setIsQuerySelected} />
        <TiptapEditor/>
        </div>
        <div>

          <h1 style={{ color: "white", fontSize: "2rem", textAlign: "center" }}>
            AI-Powered Report Generation
          </h1>

        </div>
      </div>

      </>
  );
}

export default App;
