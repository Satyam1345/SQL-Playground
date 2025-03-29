import React, { useState } from "react";
import { List, ListItem, ListItemText, Typography, Paper } from "@mui/material";
import { predefinedQueries } from "../data/query-data";

const Queries = ({setId , id}) => {
  const [isOpen, setIsOpen] = useState(true);
  const PassId = (e) => {
    setId(e);
  }
  return (
    <>
      {isOpen ? (
        <Paper
          elevation={3}
          sx={{
            height: "25vh",
            width: "35vw",
            overflowY: "scroll",
            padding: "20px",
            margin: "4px",
            borderRadius: "12px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "8px 0",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                margin: "8px 0",
                fontWeight: "bold",
              }}
              gutterBottom
            >
              Predefined Queries
            </Typography>
            <div
              style={{
                marginTop: "8px",
                padding: "2px",
                cursor: "pointer",
              }}
              onClick={() => setIsOpen(false)}
            >
              ❌
            </div>
          </div>

          <List>
            {predefinedQueries.map((query) => (
              <ListItem
                button
                key={query.id}
                onClick={() => PassId(query.id)}
                sx={{
                  backgroundColor: id === query.id ? "#cce5ff" : "white",
                  borderBottom: "1px solid #ddd",
                  cursor: "pointer",
                  "&:hover": { backgroundColor: "#f0f0f0" },
                }}
              >
                <ListItemText primary={query.title} secondary={query.query} />
              </ListItem>
            ))}
          </List>
        </Paper>
      ) : (
        <div
          style={{
            cursor: "pointer",
            padding: "16px",
            backgroundColor: "#ddd",
            borderRadius: "8px",
            width: "fit-content",
            margin: "10px",
            fontSize: "1.2rem",
          }}
          onClick={() => setIsOpen(true)}
        >
          Open Predefined Queries
        </div>
      )}
    </>
  );
};

export default Queries;
