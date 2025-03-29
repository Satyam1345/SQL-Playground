import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Queries from "./components/Queries";
import TiptapEditor from "./components/ReactEditor";
import SQL_Output from "./components/SQL_Output";

function App() {
  const [id , setId] = useState(0);

  return (
    <>
      <Navbar />

      {/* Background Animation */}
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
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          marginTop: "10vh",
          gap: "2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "80vw",
            gap: "5rem",
          }}
        >
          {/* Left: Queries */}
          <div style={{ width: "50%" }}>
            <Queries setId={setId} id={id}/>
          </div>

          {/* Right: Editor */}
          <div style={{ width: "50%" }}>
            <TiptapEditor  setId={setId} />
          </div>
        </div>

        {/* Second Row - SQL Output */}
        <div
          style={{
            width: "80vw",
            marginTop: "2rem",
          }}
        >
          <SQL_Output  id = {id}/>
        </div>
      </div>
    </>
  );
}

export default App;
