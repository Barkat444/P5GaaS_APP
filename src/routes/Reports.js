// import React from "react";

// function Reports() {
//   return (
//     <div className="reports">
//       <h1>Reports</h1>
//     </div>
//   );
// }

// export default Reports;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "../Styles/report-comp.css";
// import json_file from "../server/build_history.json"

// function Reports() {
//   const [inputParam, setInputParam] = useState("");
//   const [output, setOutput] = useState("");
//   const [data, setData] = useState([]); 

//   useEffect(() => {
//     const storedIpAddress = localStorage.getItem("ipAddress");
//     setInputParam(storedIpAddress);
//     runPythonScript(storedIpAddress);
//   }, []);

//   const runPythonScript = (param) => {
//     axios
//       .get(`http://localhost:3001/run-python-script?input_param=${param}`)
//       .then((response) => {
//         setOutput(response.data);
//       })
//       .catch((error) => {
//         console.error("Error calling Python script:", error);
//       });
//   };

//   return (
//     <div className="reports">
//       {json_file.map((item, index) => (
//         <div className="report-card" key={index}>
//           <h2>{item.build_number}</h2>
//           <p>Status: {item.build_status}</p>
//           <p>Timestamp: {item.build_timestamp}</p>
//           <a href={item.build_link} target="_blank" rel="noopener noreferrer">
//             console Log
//           </a>
//           <a href={item.pats_report} target="_blank" rel="noopener noreferrer">
//             PATS Report
//           </a>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Reports;





// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "../Styles/report-comp.css";
// import json_file from "../server/build_history.json";

// function Reports() {
//   const [inputParam, setInputParam] = useState("");
//   const [output, setOutput] = useState("");
//   // const [data, setData] = useState([]);
//   const [showRecords, setShowRecords] = useState(true); // New state

//   useEffect(() => {
//     const storedIpAddress = localStorage.getItem("ipAddress");

//     if (!storedIpAddress) {
//       // If there is no ipAddress in localStorage, set showRecords to false
//       setShowRecords(false);
//       return;
//     }

//     setInputParam(storedIpAddress);
//     runPythonScript(storedIpAddress);
//   }, []);

//   const runPythonScript = (param) => {
//     axios
//       .get(`http://localhost:3001/run-python-script?input_param=${param}`)
//       .then((response) => {
//         setOutput(response.data);
//       })
//       .catch((error) => {
//         console.error("Error calling Python script:", error);
//       });
//   };


//   const getStatusStyle = (status) => {
//     let statusStyle = {
//       color: "black", // Default color
//       fontWeight: "normal",
//       fontSize: "16px", // Default font size
//     };

//     if (status.toLowerCase().includes("success")) {
//       statusStyle.color = "green";
//       statusStyle.fontWeight = "bold";
//       statusStyle.fontSize = "18px";
//     } else if (status.toLowerCase().includes("failed")) {
//       statusStyle.color = "red";
//       statusStyle.fontWeight = "bold";
//       statusStyle.fontSize = "18px";
//     } else if (status.toLowerCase().includes("aborted")) {
//       statusStyle.color = "black";
//       statusStyle.fontWeight = "bold";
//       statusStyle.fontSize = "18px";
//     }

//     return statusStyle;
//   };


//   json_file.sort((a, b) => a.build_number - b.build_number);


//   return (
//     <div className="reports">
//       {showRecords ? (
//         json_file.map((item, index) => (
//           <div className="report-card" key={index}>
//             <h2>{item.build_number}</h2>
//             <p style={getStatusStyle(item.build_status)}>{item.build_status}</p>
//             <p>Timestamp: {item.build_timestamp}</p>
//             <a href={item.build_link} target="_blank" rel="noopener noreferrer">
//               Console Log
//             </a>
//             <a href={item.pats_report} target="_blank" rel="noopener noreferrer">
//               PATS Report
//             </a>
//           </div>
//         ))
//       ) : (
//         <div className="no-records">
//           <p>No Records Available</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Reports;















// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "../Styles/report-comp.css";
// import json_file from "../server/build_history.json";

// function Reports() {
//   const [inputParam, setInputParam] = useState("");
//   const [output, setOutput] = useState("");
//   const [showRecords, setShowRecords] = useState(true); // New state

//   useEffect(() => {
//     const storedIpAddress = localStorage.getItem("ipAddress");
//     if (!storedIpAddress) {
//       setShowRecords(false);
//       return;
//     }
//     setInputParam(storedIpAddress);
//     runPythonScript(storedIpAddress);
//   }, []);

//   const runPythonScript = (param) => {
//     axios
//       .get(`http://localhost:3001/run-python-script?input_param=${param}`)
//       .then((response) => {
//         setOutput(response.data);
//       })
//       .catch((error) => {
//         console.error("Error calling Python script:", error);
//       });
//   };

//   const getStatusStyle = (status) => {
//     let statusStyle = {
//       color: "black", 
//       fontWeight: "normal",
//       fontSize: "16px",
//     };

//     if (status.toLowerCase().includes("success")) {
//       statusStyle.color = "green";
//       statusStyle.fontWeight = "bold";
//       statusStyle.fontSize = "18px";
//     } else if (status.toLowerCase().includes("failed")) {
//       statusStyle.color = "red";
//       statusStyle.fontWeight = "bold";
//       statusStyle.fontSize = "18px";
//     } else if (status.toLowerCase().includes("aborted")) {
//       statusStyle.color = "black";
//       statusStyle.fontWeight = "bold";
//       statusStyle.fontSize = "18px";
//     }
//     return statusStyle;
//   };

//   const hasNoRecordsMessage = (!showRecords || (json_file.length === 1 && json_file[0].message === "No Records Available"));
//   return (
//     <div className="reports">
//       {hasNoRecordsMessage ? (
//         <div className="no-records">
//           <p>No Records Available</p>
//         </div>
//       ) : (
//         json_file.map((item, index) => (
//           <div className="report-card" key={index}>
//             <h2>{item.build_number}</h2>
//             <p style={getStatusStyle(item.build_status)}>{item.build_status}</p>
//             <p>Timestamp: {item.build_timestamp}</p>
//             <a href={item.build_link} target="_blank" rel="noopener noreferrer">
//               Console Log
//             </a>
//             <a href={item.pats_report} target="_blank" rel="noopener noreferrer">
//               PATS Report
//             </a>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default Reports;




// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "../Styles/report-comp.css";
// import json_file from "../server/build_history.json";
// import json_file_regression from "../server/regression_report.json";
// import json_file_deployment from "../server/deployment_report.json";

// function Reports() {
//   const [inputParam, setInputParam] = useState("");
//   const [output, setOutput] = useState("");
//   const [showRecords, setShowRecords] = useState(true);

//   useEffect(() => {
//     const storedIpAddress = JSON.parse(localStorage.getItem("ipAddress")) || [""]; 
//     if (!storedIpAddress[0]) {
//       setShowRecords(false);
//       return;
//     }
//     setInputParam(storedIpAddress[0]);
//     runPythonScript(storedIpAddress[0]);
//   }, []);

//   const runPythonScript = (param) => {
//     axios
//       .get(`http://localhost:3001/run-python-script?input_param=${param}`)
//       .then((response) => {
//         setOutput(response.data);
//       })
//       .catch((error) => {
//         console.error("Error calling Python script:", error);
//       });
//   };

//   const getStatusStyle = (status) => {
//     let statusStyle = {
//       color: "black",
//       fontWeight: "normal",
//       fontSize: "16px",
//     };

//     if (status.toLowerCase().includes("success")) {
//       statusStyle.color = "green";
//       statusStyle.fontWeight = "bold";
//       statusStyle.fontSize = "18px";
//     } else if (status.toLowerCase().includes("failed")) {
//       statusStyle.color = "red";
//       statusStyle.fontWeight = "bold";
//       statusStyle.fontSize = "18px";
//     } else if (status.toLowerCase().includes("aborted")) {
//       statusStyle.color = "black";
//       statusStyle.fontWeight = "bold";
//       statusStyle.fontSize = "18px";
//     }
//     return statusStyle;
//   };

//   const hasNoRecordsMessage = (!showRecords || (json_file.length === 1 && json_file[0].message === "No Records Available"));

//   return (
//     <div className="reports">
//       {hasNoRecordsMessage ? (
//         <div className="no-records">
//           <p>No Records Available</p>
//         </div>
//       ) : (
//         json_file.map((item, index) => (
//           <div className="report-card" key={index}>
//             <h2>{item.build_number}</h2>
//             <p style={getStatusStyle(item.build_status)}>{item.build_status}</p>
//             <p>Timestamp: {item.build_timestamp}</p>
//             <a href={item.build_link} target="_blank" rel="noopener noreferrer">
//               Console Log
//             </a>
//             <a href={item.pats_report} target="_blank" rel="noopener noreferrer">
//               PATS Report
//             </a>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default Reports;









// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "../Styles/report-comp.css";
// import json_file from "../server/build_history.json";
// import json_file_regression from "../server/regression_report.json";
// import json_file_deployment from "../server/deployment_report.json";
// import json_file_system from "../server/system_report.json";

// function Reports() {
//   const [inputParam, setInputParam] = useState("");
//   const [output, setOutput] = useState("");
//   const [showRecords, setShowRecords] = useState(true);

//   useEffect(() => {
//     const storedIpAddress = JSON.parse(localStorage.getItem("ipAddress")) || [""];
//     if (!storedIpAddress[0]) {
//       setShowRecords(false);
//       return;
//     }
//     setInputParam(storedIpAddress[0]);
//     runPythonScript(storedIpAddress[0]);
//   }, []);

//   const runPythonScript = (param) => {
//     axios
//       .get(`http://localhost:3001/run-python-script?input_param=${param}`)
//       .then((response) => {
//         setOutput(response.data);
//       })
//       .catch((error) => {
//         console.error("Error calling Python script:", error);
//       });
//   };

//   const getStatusStyle = (status) => {
//     let statusStyle = {
//       color: "black",
//       fontWeight: "normal",
//       fontSize: "16px",
//     };

//     if (status.toLowerCase().includes("success")) {
//       statusStyle.color = "green";
//       statusStyle.fontWeight = "bold";
//       statusStyle.fontSize = "18px";
//     } else if (status.toLowerCase().includes("failed")) {
//       statusStyle.color = "red";
//       statusStyle.fontWeight = "bold";
//       statusStyle.fontSize = "18px";
//     } else if (status.toLowerCase().includes("aborted")) {
//       statusStyle.color = "black";
//       statusStyle.fontWeight = "bold";
//       statusStyle.fontSize = "18px";
//     }
//     return statusStyle;
//   };

//   const hasNoRecordsMessage = (!showRecords || (json_file.length === 1 && json_file[0].message === "No Records Available"));

//   return (
//     <div className="reports">
//       {hasNoRecordsMessage ? (
//         <div className="no-records">
//           <p>No Records Available</p>
//         </div>
//       ) : (
//         <>
//           <div className="report-section">
//             <h2>Integration Build Report</h2>
//             {json_file.map((item, index) => (
//               <div className="report-card" key={index}>
//                 <h2>{item.build_number}</h2>
//                 <p style={getStatusStyle(item.build_status)}>{item.build_status}</p>
//                 <p>Timestamp: {item.build_timestamp}</p>
//                 <a href={item.build_link} target="_blank" rel="noopener noreferrer">
//                   Console Log
//                 </a>
//                 <a href={item.pats_report} target="_blank" rel="noopener noreferrer">
//                   PATS Report
//                 </a>
//               </div>
//             ))}
//           </div>
          
//           <div className="report-section">
//             <h2>Regression Build Report</h2>
//             {json_file_regression.map((item, index) => (
//               <div className="report-card" key={index}>
//                 <h2>{item.build_number}</h2>
//                 <p style={getStatusStyle(item.build_status)}>{item.build_status}</p>
//                 <p>Timestamp: {item.build_timestamp}</p>
//                 <a href={item.build_link} target="_blank" rel="noopener noreferrer">
//                   Console Log
//                 </a>
//                 <a href={item.pats_report} target="_blank" rel="noopener noreferrer">
//                   PATS Report
//                 </a>
//               </div>
//             ))}
//           </div>

//           <div className="report-section">
//             <h2>Scale Build Report</h2>
//             {json_file_system.map((item, index) => (
//               <div className="report-card" key={index}>
//                 <h2>{item.build_number}</h2>
//                 <p style={getStatusStyle(item.build_status)}>{item.build_status}</p>
//                 <p>Timestamp: {item.build_timestamp}</p>
//                 <a href={item.build_link} target="_blank" rel="noopener noreferrer">
//                   Console Log
//                 </a>
//                 <a href={item.pats_report} target="_blank" rel="noopener noreferrer">
//                   PATS Report
//                 </a>
//               </div>
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default Reports;






import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/report-comp.css";
import json_file from "../server/build_history.json";
import json_file_regression from "../server/regression_report.json";
import json_file_deployment from "../server/deployment_report.json";
import json_file_system from "../server/system_report.json";

function Reports() {
  const [inputParam, setInputParam] = useState("");
  const [output, setOutput] = useState("");
  const [showRecords, setShowRecords] = useState(true);
  const [selectedReport, setSelectedReport] = useState("");
  const [buildHistoryData, setBuildHistoryData] = useState([]);
  const [regressionReportData, setRegressionReportData] = useState([]);
  const [deploymentReportData, setDeploymentReportData] = useState([]);
  const [systemReportData, setSystemReportData] = useState([]);

  useEffect(() => {
    const storedIpAddress = localStorage.getItem("ipAddress");
    const selectedTestingType = localStorage.getItem("selectedTestType");
    if (!storedIpAddress || !selectedTestingType) {
      setShowRecords(false);
      setSelectedReport("");
      return;
    }
    setInputParam(storedIpAddress);
    runPythonScript(storedIpAddress);
    setSelectedReport(selectedTestingType || "");

    fetchJsonData('build_history.json', setBuildHistoryData);
    fetchJsonData('regression_report.json', setRegressionReportData);
    fetchJsonData('deployment_report.json', setDeploymentReportData);
    fetchJsonData('system_report.json', setSystemReportData);
  }, []);

  const runPythonScript = (param) => {
    axios
      .get(`http://localhost:3001/run-python-script?input_param=${param}`)
      .then((response) => {
        setOutput(response.data);
      })
      .catch((error) => {
        console.error("Error calling Python script:", error);
      });
  };



  const fetchJsonData = (fileName, setData) => {
    axios
      .get(`http://localhost:3001/json-api/${fileName}?input_param=${fileName}`) 
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(`Error fetching ${fileName}:`, error);
      });
  };



  const getStatusStyle = (status) => {
    let statusStyle = {
      color: "black",
      fontWeight: "normal",
      fontSize: "16px",
    };

    if (status.toLowerCase().includes("success")) {
      statusStyle.color = "green";
      statusStyle.fontWeight = "bold";
      statusStyle.fontSize = "18px";
    } else if (status.toLowerCase().includes("failed")) {
      statusStyle.color = "red";
      statusStyle.fontWeight = "bold";
      statusStyle.fontSize = "18px";
    } else if (status.toLowerCase().includes("aborted")) {
      statusStyle.color = "black";
      statusStyle.fontWeight = "bold";
      statusStyle.fontSize = "18px";
    }
    return statusStyle;
  };

  const hasNoRecordsMessage =
    !showRecords || (json_file.length === 1 && json_file[0].message === "No Records Available");

  return (
    <div className="reports">
      {hasNoRecordsMessage ? (
        <div className="no-records">
          <p>No Records Available</p>
        </div>
      ) : (
        <>
          {selectedReport === "Integration Testing" &&
            buildHistoryData.map((item, index) => (
              <div className="report-card" key={index}>
                <h2>{item.build_number}</h2>
                <p style={getStatusStyle(item.build_status)}>{item.build_status}</p>
                <p>Timestamp: {item.build_timestamp}</p>
                <a href={item.build_link} target="_blank" rel="noopener noreferrer">
                  Console Log
                </a>
                <a href={item.pats_report} target="_blank" rel="noopener noreferrer">
                  PATS Report
                </a>
                {item.build_status === "Failed" && item.failure_cause && (
        <p className="failure-cause">{item.failure_cause}</p>
      )}
              </div>
            ))}

          {selectedReport === "Regression Testing" &&
            regressionReportData.map((item, index) => (
              <div className="report-card" key={index}>
                <h2>{item.build_number}</h2>
                <p style={getStatusStyle(item.build_status)}>{item.build_status}</p>
                <p>Timestamp: {item.build_timestamp}</p>
                <a href={item.build_link} target="_blank" rel="noopener noreferrer">
                  Console Log
                </a>
                <a href={item.pats_report} target="_blank" rel="noopener noreferrer">
                  PATS Report
                </a>
                {item.build_status === "Failed" && item.failure_cause && (
        <p className="failure-cause">{item.failure_cause}</p>
      )}
              </div>
            ))}

          {selectedReport === "Scale Testing" &&
            systemReportData.map((item, index) => (
              <div className="report-card" key={index}>
                <h2>{item.build_number}</h2>
                <p style={getStatusStyle(item.build_status)}>{item.build_status}</p>
                <p>Timestamp: {item.build_timestamp}</p>
                <a href={item.build_link} target="_blank" rel="noopener noreferrer">
                  Console Log
                </a>
                <a href={item.pats_report} target="_blank" rel="noopener noreferrer">
                  PATS Report
                </a>
                {item.build_status === "Failed" && item.failure_cause && (
        <p className="failure-cause">{item.failure_cause}</p>
      )}
              </div>
            ))}
        </>
      )}
    </div>
  );
}

export default Reports;
