import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Switch, Box, Container } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <AppBar
      position="static"
      color="primary"
      sx={{
        width: "100vw",
        left: 0,
        right: 0,
        top: 0,
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            SQL Playground
          </Typography>


          <Box>
            <IconButton color="inherit" onClick={toggleDarkMode}>
               {isDarkMode ? <DarkMode /> : <LightMode />}
            </IconButton>
            <Switch checked={isDarkMode} onChange={toggleDarkMode} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
