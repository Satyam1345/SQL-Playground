import React from "react";
import { AppBar, Toolbar, Typography, Box, Container } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      color="transparent"
      sx={{
        width: "100%",
        top: 0,
        left: 0,
        backdropFilter: "blur(10px)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h4" sx={{ flexGrow: 1 }} style ={{
            cursor: "pointer",
          }} >
            SQL Playground
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Type your query and play around with data.</Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}></Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
