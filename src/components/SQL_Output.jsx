import React, { useState, useEffect } from "react";
import Papa from "papaparse";

const SQL_Output = ({ id }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const rowsPerPage = 10000;
  const [filename, setFilename] = useState("employees.csv");
  console.log("ID in SQL Output:", id);

const assignFilePath = (id) => {
  if (id === 3 || id === 4) 
  setFilename("Iris.csv");
  else if (id === 5 || id === 6) 
  setFilename("order_details.csv");
  else if (id === 7 || id === 8) 
  setFilename("KNNAlgorithmDataset.csv");
  else if (id === 9 || id === 10) 
  setFilename("suppliers.csv");
  else if (id != 0 && id!= 1) {
    var num = Math.floor(Math.random() * 10) + 1;
    console.log("Random ID:", num);
    if(num == id){
      num = id + 2;
    }
    assignFilePath(num);
  }

};

useEffect(() => {
  assignFilePath(id);
}, [id]); 


  useEffect(() => {
    fetch(`/${filename}`)
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
  }, [filename]);

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
