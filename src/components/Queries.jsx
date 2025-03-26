import React from "react";
import { List, ListItem, ListItemText, Typography, Paper } from "@mui/material";
import {predefinedQueries} from "../data/query-data"


const Queries = ({ onSelectQuery }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        height: "40vh",
        width: "25vw",
        overflowY: "scroll",
        padding: 2,
        margin:4,
        borderRadius: "12px",
      }}
    >
      <Typography variant="h6" 
        style = {{
            textAlign: "center",
            margin: "8px 0",
            text:"bold 40px 'Roboto', sans-serif",
        }}
      gutterBottom>
        Predefined Queries
      </Typography>
      <List>
        {predefinedQueries.map((query) => (
          <ListItem
            button
            key={query.id}
            onClick={() => onSelectQuery(query.query)}
            sx={{
              "&:hover": { backgroundColor: "#f0f0f0" },
              borderBottom: "1px solid #ddd",
            }}
          >
            <ListItemText primary={query.title} secondary={query.query} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default Queries;
