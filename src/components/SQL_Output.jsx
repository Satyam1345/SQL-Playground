import React, { useState, useEffect } from "react";
import Papa from "papaparse";

const SQL_Output = ({ id }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const rowsPerPage = 10;
  console.log("ID in SQL Output:", id);
  useEffect(() => {
    fetch("/employees.csv")
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            setData(result.data);
            setLoading(false);
          },
        });
      })
      .catch((error) => console.error("Error fetching CSV:", error));
  }, []);

  if (loading) return <p>Loading CSV data...</p>;

  return (
    <div
      style={{
        width: "90vw",
        maxWidth: "1200px",
        minHeight: "200px",
        maxHeight: "500px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        backdropFilter: "blur(10px)",
        background: "rgba(255, 255, 255, 0.1)",
        borderRadius: "15px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        color: "#fff",
      }}
    >
      <h2 style={{ marginBottom: "10px" }}>SQL Query Output</h2>

      {id !=0  ? (
        <>
      <div
          style={{
            width: "100%",
            height: "400px",
            overflowX: "auto",
            overflowY: "auto",
          }}
        >
          <table
            style={{
              width: "100%",
              minWidth: "800px",
              borderCollapse: "collapse",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <thead>
              <tr style={{ background: "rgba(0, 0, 0, 0.3)", color: "#fff" }}>
                {data.length > 0 &&
                  Object.keys(data[0]).map((key) => (
                    <th
                      key={key}
                      style={{
                        padding: "12px",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        textAlign: "left",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {key}
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {data
                .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
                .map((row, idx) => (
                  <tr
                    key={idx}
                    style={{
                      background: idx % 2 === 0 ? "rgba(255, 255, 255, 0.1)" : "transparent",
                    }}
                  >
                    {Object.values(row).map((val, i) => (
                      <td
                        key={i}
                        style={{
                          padding: "10px",
                          border: "1px solid rgba(255, 255, 255, 0.2)",
                          textAlign: "left",
                          whiteSpace: "nowrap",
                          color: "#fff",
                        }}
                      >
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        </>
      ) : (
        <div>Enter a query or select a query to get the Output here</div>
      )}
    </div>
    
  );
};

export default SQL_Output;
