// import React, { useState } from "react";
// import "../Styles/testing-comp.css"; 
// import ScaleImg from "../Images/Performance-Testing.png"
// import IntegrationImg from "../Images/integration-testing-final.webp"

// function Testing() {
//   const integrationTestBedUrl = "http://eig-jenkins.cisco.com:7600/job/Deployer/job/IVT_SMF_AMF_UPF_Deployer/";

//   // State for managing the popup
//   const [showPopup, setShowPopup] = useState(false);
//   const [ipAddress, setIpAddress] = useState("");

//   // Function to handle the "Proceed" button click
//   const handleProceed = () => {
//     // Redirect to the specified URL with the entered IP address
//     if (ipAddress) {
//       const redirectUrl = `https://pats-patsexecutor.${ipAddress}.nip.io/job/Functional-Scenarios`;
//       window.open(redirectUrl, "_blank");
//       setShowPopup(false);
//     }
//   };

  

//   return (
//     <div className="header">
//       <h1>Please Select a Type of Jenkins</h1>
//       <div className="testing">
//         <div className="image-container">
//           <div className="image-wrapper">
//             <img
//               src={ScaleImg} 
//               alt="Image 1"
//               className="image"
//               onClick={() => setShowPopup(true)} // Show the popup on image click
//             />
//             <p>Local Jenkins</p>
//           </div>
//           <div className="image-wrapper">
//             <a href={integrationTestBedUrl} target="_blank" rel="noopener noreferrer">
//               <img
//                 src={IntegrationImg} 
//                 alt="Image 2"
//                 className="image"
//               />
//             </a>
//             <p>Centralized Jenkins</p>
//           </div>
//         </div>
//       </div>
//       {showPopup && (
//         <div className="popup">
//           <div className="popup-content">
//             <span className="close" onClick={() => setShowPopup(false)}>&times;</span>
//             <input
//               type="text"
//               placeholder="Enter NAT Public IP"
//               value={ipAddress}
//               onChange={(e) => setIpAddress(e.target.value)}
//             />
//             <button onClick={handleProceed}>Proceed</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Testing;


// import React, { useState } from "react";
// import "../Styles/testing-comp.css";
// import ScaleImg from "../Images/Performance-Testing.png";
// import IntegrationImg from "../Images/integration-testing-final.webp";
// import jsonFile from "../ipAddresses.json";

// function Testing() {
//   const integrationTestBedUrl = "http://eig-jenkins.cisco.com:7600/job/Deployer/job/IVT_SMF_AMF_UPF_Deployer/";

//   // Function to fetch the IP address from the JSON file
//   const fetchIpAddress = async () => {
//     try {
//       const ipAddress = jsonFile.ipAddress;

//       // Redirect to the specified URL with the fetched IP address
//       if (ipAddress) {
//         const redirectUrl = `https://pats-patsexecutor.${ipAddress}.nip.io/job/Functional-Scenarios`;
//         window.open(redirectUrl, "_blank");
//       }
//     } catch (error) {
//       console.error("Error fetching IP address:", error);
//     }
//   };

//   // Function to handle the "Proceed" button click
//   const handleProceed = () => {
//     fetchIpAddress();
//   };

//   return (
//     <div className="header">
//       <h1>Please Select a Type of Jenkins</h1>
//       <div className="testing">
//         <div className="image-container">
//           <div className="image-wrapper" onClick={handleProceed}>
//             <img
//               src={ScaleImg}
//               alt="Image 1"
//               className="image"
//             />
//             <p>Local Jenkins</p>
//           </div>
//           <div className="image-wrapper">
//             <a href={integrationTestBedUrl} target="_blank" rel="noopener noreferrer">
//               <img
//                 src={IntegrationImg}
//                 alt="Image 2"
//                 className="image"
//               />
//             </a>
//             <p>Centralized Jenkins</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Testing;






// import React from "react";
// import "../Styles/testing-comp.css";
// import SystemImage from "../Images/computer-troubleshooting.webp"
// import FunctionalTestImg from "../Images/functional-testing-image2.jpg"
// import RegressionTestImg from "../Images/Regression_testing_Image.jpg"

// function Testing() {
//   const integrationTestBedUrl = "http://eig-jenkins.cisco.com:9500/job/P5G_Integration_Regression/build?delay=0sec";
//   const systemTestBedUrl = "http://eig-jenkins.cisco.com:9500/job/P5G_System_Test_BV/build?delay=0sec";

//   // Function to fetch the IP address from local storage
//   const fetchIpAddress = () => {
//     try {
//       const ipAddress = JSON.parse(localStorage.getItem("ipAddress"))[0] || "";

//       // Redirect to the specified URL with the fetched IP address
//       if (ipAddress) {
//         const redirectUrl = `https://pats-patsexecutor.${ipAddress}.nip.io/job/Functional-Scenarios/build?delay=0sec`;
//         window.open(redirectUrl, "_blank");
//       }
//     } catch (error) {
//       console.error("Error fetching IP address:", error);
//     }
//   };

//   // Function to handle the "Proceed" button click
//   const handleProceed = () => {
//     fetchIpAddress();
//   };

//   return (
//     <div className="header">
//       <h1>Please Select a Type of Testing</h1>
//       <div className="testing">
//         <div className="image-container">
//           <div className="image-wrapper" onClick={handleProceed}>
//             <img style={{ cursor: 'pointer' }}
//               src={FunctionalTestImg}
//               alt="Image 1"
//               className="image"
//             />
//             <p>Integration Testing</p>
//           </div>
//           <div className="image-wrapper">
//             <a href={integrationTestBedUrl} target="_blank" rel="noopener noreferrer">
//               <img
//                 src={RegressionTestImg}
//                 alt="Image 2"
//                 className="image"
//               />
//             </a>
//             <p>Regression Testing</p>
//           </div>
//           <div className="image-wrapper">
//             <a href={systemTestBedUrl} target="_blank" rel="noopener noreferrer">
//               <img
//                 src={SystemImage}
//                 alt="Image 3"
//                 className="image"
//               />
//             </a>
//             <p>Scale Testing</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Testing;





// import React from "react";
// import "../Styles/testing-comp.css";
// import SystemImage from "../Images/computer-troubleshooting.webp";
// import FunctionalTestImg from "../Images/functional-testing-image2.jpg";
// import RegressionTestImg from "../Images/Regression_testing_Image.jpg";

// function Testing() {
//   const integrationTestBedUrl = "http://eig-jenkins.cisco.com:9500/job/P5G_Integration_Regression/build?delay=0sec";
//   const systemTestBedUrl = "http://eig-jenkins.cisco.com:9500/job/P5G_System_Test_BV/build?delay=0sec";

//   // Function to fetch the IP address from local storage
//   const fetchIpAddress = () => {
//     try {
//       let ipAddress = localStorage.getItem("ipAddress");
//       const redirectUrl = `https://pats-patsexecutor.${ipAddress}.nip.io/job/Functional-Scenarios/build?delay=0sec`;
//       window.open(redirectUrl, "_blank");
//     } catch (error) {
//       console.error("Error fetching IP address:", error);
//     }
//   };


//   const handleImage1Click = () => {
//     try {
//       let testingType = localStorage.getItem("Testing Type");
//       if (!testingType) {
//         testingType = "Integration Testing";
//       } else {
//         testingType = "Integration Testing";
//       }
//       localStorage.setItem("Testing Type");
//       fetchIpAddress();
//     } catch (error) {
//       alert("Error handling Image 1 click:", error);
//     }
//   };


//   const handleImage2Click = () => {
//     try {
//       let testingType = localStorage.getItem("Testing Type");
//       if (!testingType) {
//         testingType = "Regression Testing";
//       } else {
//         testingType = "Regression Testing";
//       }
//       localStorage.setItem("Testing Type");
//     } catch (error) {
//       alert("Error handling Image 2 click:", error);
//     }
//   };


//   const handleImage3Click = () => {
//     try {
//       let testingType = localStorage.getItem("Testing Type");
//       if (!testingType) {
//         testingType = "Scale Testing";
//       } else {
//         testingType = "Scale Testing";
//       }
//       localStorage.setItem("Testing Type");
//     } catch (error) {
//       alert("Error handling Image 3 click:", error);
//     }
//   };

//   return (
//     <div className="header">
//       <h1>Please Select a Type of Testing</h1>
//       <div className="testing">
//         <div className="image-container">
//           <div className="image-wrapper" onClick={handleImage1Click}>
//             <img
//               style={{ cursor: 'pointer' }}
//               src={FunctionalTestImg}
//               alt="Image 1"
//               className="image"
//             />
//             <p>Integration Testing</p>
//           </div>
//           <div className="image-wrapper" onClick={handleImage2Click}>
//             <a href={integrationTestBedUrl} target="_blank" rel="noopener noreferrer">
//               <img
//                 src={RegressionTestImg}
//                 alt="Image 2"
//                 className="image"
//               />
//             </a>
//             <p>Regression Testing</p>
//           </div>
//           <div className="image-wrapper" onClick={handleImage3Click}>
//             <a href={systemTestBedUrl} target="_blank" rel="noopener noreferrer">
//               <img
//                 src={SystemImage}
//                 alt="Image 3"
//                 className="image"
//               />
//             </a>
//             <p>Scale Testing</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Testing;








import React from "react";
import "../Styles/testing-comp.css";
import SystemImage from "../Images/computer-troubleshooting.webp";
import FunctionalTestImg from "../Images/functional-testing-image2.jpg";
import RegressionTestImg from "../Images/Regression_testing_Image.jpg";

function Testing() {
  const integrationTestBedUrl = "http://eig-jenkins.cisco.com:9500/job/P5G_Regression/build?delay=0sec";
  const systemTestBedUrl = "http://eig-jenkins.cisco.com:9500/job/P5G_System_Test_BV/build?delay=0sec";

  // Function to fetch the IP address from local storage
  const fetchIpAddress = () => {
    try {
      const ipAddress = localStorage.getItem("ipAddress");
      const redirectUrl = `https://pats-patsexecutor.${ipAddress}.nip.io/job/Functional-Scenarios/build?delay=0sec`;
      window.open(redirectUrl, "_blank");
    } catch (error) {
      console.error("Error fetching IP address:", error);
    }
  };

  const handleImage1Click = () => {
    try {
    const ipAddress = localStorage.getItem("ipAddress");
    const deploymentType = localStorage.getItem("deploymentType");
    if (!ipAddress){
      alert("Please Login!")
    }
    else{
      const newKey = "selectedTestType";
      const newTestType = "Integration Testing";
      localStorage.setItem(newKey, newTestType);

      fetchIpAddress();
    }
    } catch (error) {
      console.error("Error handling Image 1 click:", error);
    }
  };

  const handleImage2Click = () => {
    try {
      const ipAddress = localStorage.getItem("ipAddress");
      const deploymentType = localStorage.getItem("deploymentType");
      if (!ipAddress){
        alert("Please Login!")
        window.location.href = "/";
      }
      else{
        const newKey = "selectedTestType";
        const newTestType = "Regression Testing";
        localStorage.setItem(newKey, newTestType);
       
      }
      } catch (error) {
      console.error("Error handling Image 2 click:", error);
    }
  };

  const handleImage3Click = () => {
    try {
      const ipAddress = localStorage.getItem("ipAddress");
      const deploymentType = localStorage.getItem("deploymentType");
      if (!ipAddress){
        alert("Please Login!")
        window.location.href = "/"
      }
      else{
        const newKey = "selectedTestType";
        const newTestType = "Scale Testing";
        localStorage.setItem(newKey, newTestType);
        
      }
      } catch (error) {
      console.error("Error handling Image 3 click:", error);
    }
  };

  // const checkDeploymentType = (expectedType) => {
  //   const ipAddress = localStorage.getItem("ipAddress");
  //   const deploymentType = localStorage.getItem("deploymentType");
  //   if (ipAddress){
  //     if (deploymentType !== expectedType) {
  //       alert("This type of testing is not possible since you've deployed your setup using " + expectedType);
  //       window.location.href = "/"; 
  //     }
  //   }
  // };


  return (
    <div className="header">
      <h1>Please Select a Type of Testing</h1>
      <div className="testing">
        <div className="image-container">
          <div className="image-wrapper" onClick={handleImage1Click}>
            <img
              style={{ cursor: 'pointer' }}
              src={FunctionalTestImg}
              alt="Image 1"
              className="image"
            />
            <p>Integration Testing</p>
          </div>
          <div className="image-wrapper" onClick={handleImage2Click}>
            <a href={integrationTestBedUrl} target="_blank" rel="noopener noreferrer">
              <img
                src={RegressionTestImg}
                alt="Image 2"
                className="image"
              />
            </a>
            <p>Regression Testing</p>
          </div>
          <div className="image-wrapper" onClick={handleImage3Click}>
            <a href={systemTestBedUrl} target="_blank" rel="noopener noreferrer">
              <img
                src={SystemImage}
                alt="Image 3"
                className="image"
              />
            </a>
            <p>Scale Testing</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testing;