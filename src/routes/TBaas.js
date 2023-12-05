// import React from "react";
// import "../Styles/tbaas-comp.css"; 
// import ScaleImg from "../Images/Performance-Testing.png"
// import IntegrationImg from "../Images/integration-testing-final.webp"

// function TBaaS() {
//   const scaleTestBedUrl = "https://example.com/scale-test-bed-url"; 
//   const integrationTestBedUrl = "http://eig-jenkins.cisco.com:7600/job/Deployer/job/P5G_AMF_SMF_UPF_Deployer/build?delay=0sec"; 

//   return (
//     <div className="header">
//         <h1>P5G Test-Bed Setup</h1>
//     <div className="tbaas">
//       <div className="image-container">
//         <div className="image-wrapper">
//           <a href={integrationTestBedUrl} target="_blank" rel="noopener noreferrer">
//             <img
//               src={ScaleImg} 
//               alt="Image 1"
//               className="image"
//             />
//           </a>
//           <p>Scale Test Bed</p>
//         </div>
//         <div className="image-wrapper">
//           <a href={integrationTestBedUrl} target="_blank" rel="noopener noreferrer">
//             <img
//               src={IntegrationImg} 
//               alt="Image 2"
//               className="image"
//             />
//           </a>
//           <p>Integration Test Bed</p>
//         </div>
//       </div>
//     </div>
// </div>
//   );
// }

// export default TBaaS;











// import React, { useEffect } from "react";
// import "../Styles/tbaas-comp.css";
// import ScaleImg from "../Images/Performance-Testing.png";
// import IntegrationImg from "../Images/integration-testing-final.webp";

// function TBaaS() {
//   const scaleTestBedUrl = "https://example.com/scale-test-bed-url";
//   const integrationTestBedUrl = "http://eig-jenkins.cisco.com:7600/job/Deployer/job/P5G_AMF_SMF_UPF_Deployer/build?delay=0sec";

//   useEffect(() => {
//     const selectTestBed = (testBedType) => {
//       const ipAddress = JSON.parse(localStorage.getItem("ipAddress")) || ["", "", ""];
//       if (testBedType === "Scale Deployment") {
//         ipAddress[2] = "Scale Deployment";
//       } else if (testBedType === "Integration Deployment") {
//         ipAddress[2] = "Integration Deployment";
//       }
//       localStorage.setItem("ipAddress", JSON.stringify(ipAddress));
//     };

//     document.getElementById("scaleImage").addEventListener("click", () => {
//       selectTestBed("Scale Deployment");
//     });

//     document.getElementById("integrationImage").addEventListener("click", () => {
//       selectTestBed("Integration Deployment");
//     });
//   }, []);

//   return (
//     <div className="header">
//       <h1>P5G Test-Bed Setup</h1>
//       <div className="tbaas">
//         <div className="image-container">
//           <div className="image-wrapper">
//             <a href={scaleTestBedUrl} target="_blank" rel="noopener noreferrer">
//               <img
//                 src={ScaleImg}
//                 alt="Image 1"
//                 className="image"
//                 id="scaleImage" // Add an id to the image
//               />
//             </a>
//             <p>Scale Test Bed</p>
//           </div>
//           <div className="image-wrapper">
//             <a href={integrationTestBedUrl} target="_blank" rel="noopener noreferrer">
//               <img
//                 src={IntegrationImg}
//                 alt="Image 2"
//                 className="image"
//                 id="integrationImage" // Add an id to the image
//               />
//             </a>
//             <p>Integration Test Bed</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TBaaS;






// import React, { useEffect } from "react";
// import "../Styles/tbaas-comp.css";
// import ScaleImg from "../Images/Performance-Testing.png";
// import IntegrationImg from "../Images/integration-testing-final.webp";

// function TBaaS() {
//   const scaleTestBedUrl = "https://example.com/scale-test-bed-url";
//   const integrationTestBedUrl = "http://eig-jenkins.cisco.com:7600/job/Deployer/job/P5G_AMF_SMF_UPF_Deployer/build?delay=0sec";

//   useEffect(() => {
//     const selectTestBed = (testBedType) => {
//       const ipAddress = localStorage.getItem("ipAddress");
//       if (!ipAddress[0]) {
//         // Check if index 0 of ipAddress is empty, and display an alert
//         alert("Please Login");
//         return;
//       }

//       if (testBedType === "Scale Deployment") {
//         ipAddress[2] = "Scale Deployment";
//       } else if (testBedType === "Integration Deployment") {
//         ipAddress[2] = "Integration Deployment";
//       }
//       localStorage.setItem("ipAddress", JSON.stringify(ipAddress));

//       // Redirect to the URL only if index 0 of ipAddress is not empty
//       if (ipAddress) {
//         if (testBedType === "Scale Deployment") {
//           window.location.href = scaleTestBedUrl;
//         } else if (testBedType === "Integration Deployment") {
//           window.location.href = integrationTestBedUrl;
//         }
//       }
//     };

//     document.getElementById("scaleImage").addEventListener("click", () => {
//       selectTestBed("Scale Deployment");
//     });

//     document.getElementById("integrationImage").addEventListener("click", () => {
//       selectTestBed("Integration Deployment");
//     });
//   }, []);

//   return (
//     <div className="header">
//       <h1>P5G Test-Bed Setup</h1>
//       <div className="tbaas">
//         <div className="image-container">
//           <div className="image-wrapper">
//             <a href="/" rel="noopener noreferrer">
//               <img
//                 src={ScaleImg}
//                 alt="Image 1"
//                 className="image"
//                 id="scaleImage"
//               />
//             </a>
//             <p>Scale Test Bed</p>
//           </div>
//           <div className="image-wrapper">
//             <a href="/" rel="noopener noreferrer">
//               <img
//                 src={IntegrationImg}
//                 alt="Image 2"
//                 className="image"
//                 id="integrationImage"
//               />
//             </a>
//             <p>Integration Test Bed</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TBaaS;




import React from "react";
import "../Styles/tbaas-comp.css"; 
import ScaleImg from "../Images/Performance-Testing.png";
import IntegrationImg from "../Images/integration-testing-final.webp";

function TBaaS() {
  const scaleTestBedUrl = "http://eig-jenkins.cisco.com:7600/job/Deployer/job/P5G_AMF_SMF_UPF_Deployer/build?delay=0sec"; 
  const integrationTestBedUrl = "http://eig-jenkins.cisco.com:7600/job/Deployer/job/P5G_AMF_SMF_UPF_Deployer/build?delay=0sec"; 

  const handleImageClick = (deploymentType) => {
    const ipAddress = localStorage.getItem("ipAddress");

    if (ipAddress) {
      localStorage.setItem("deploymentType", deploymentType);
    } else {
      alert("Please Login");
      window.location.href = "/";
    }
  };

  return (
    <div className="header">
      <h1>P5G Test-Bed Setup</h1>
      <div className="tbaas">
        <div className="image-container">
          <div className="image-wrapper">
            <a href={scaleTestBedUrl} target="_blank" rel="noopener noreferrer">
              <img
                src={ScaleImg} 
                alt="Image 1"
                className="image"
                onClick={() => handleImageClick("Scale Deployment")}
              />
            </a>
            <p>Scale Test Bed</p>
          </div>
          <div className="image-wrapper">
            <a href={integrationTestBedUrl} target="_blank" rel="noopener noreferrer">
              <img
                src={IntegrationImg} 
                alt="Image 2"
                className="image"
                onClick={() => handleImageClick("Integration Deployment")}
              />
            </a>
            <p>Integration Test Bed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TBaaS;
