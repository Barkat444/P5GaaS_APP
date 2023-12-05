// import React, { useState, useEffect } from "react";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import { Link } from "react-router-dom";
// import { SidebarData } from "./SidebarData";
// import "../App.css";
// import { IconContext } from "react-icons";
// import "../Styles/login-comp.css"

// function Navbar() {
//   const [sidebar, setSidebar] = useState(false);
//   const [showLoginPopup, setShowLoginPopup] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [ipAddress, setIpAddress] = useState("");
//   const [password, setPassword] = useState("");
//   const [storedIp, setStoredIp] = useState("");
//   const [ipError, setIpError] = useState(false);

//   const jsonFileUrl = "../../ipAddress.json";

//   useEffect(() => {
//     // Load JSON data from a file if the user is logged in
//     if (isLoggedIn) {
//       fetch(jsonFileUrl)
//         .then((response) => response.json())
//         .then((data) => setStoredIp(data.ipAddress))
//         .catch((error) => console.error("Error loading JSON data:", error));
//     }
//   }, [isLoggedIn, jsonFileUrl]);

//   const showSidebar = () => setSidebar(!sidebar);
//   const toggleLoginPopup = () => setShowLoginPopup(!showLoginPopup);

//   const handleLogin = () => {
//     // Check if the IP address is a valid IPv4 format
//     const ipv4Regex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
//     if (ipv4Regex.test(ipAddress) && password === "admin") {
//       // Set isLoggedIn to true to display IP and logout button
//       setIsLoggedIn(true);
//       setShowLoginPopup(false);

//       // Save the IP address to a JSON file
//       const jsonData = { ipAddress };
//       fetch(jsonFileUrl, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(jsonData),
//       })
//         .then(() => {
//           // After successfully storing, update the stored IP
//           setStoredIp(ipAddress);
//         })
//         .catch((error) => console.error("Error saving JSON data:", error));
//     } else {
//       // Handle an invalid login
//       setIpError(true);
//     }
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);

//     // Remove the stored IP address from the JSON file
//     fetch(jsonFileUrl, {
//       method: "DELETE",
//     })
//       .then(() => {
//         // After successfully deleting, reset the stored IP
//         setStoredIp("");
//         window.location.href = "/";
//       })
//       .catch((error) => console.error("Error deleting JSON data:", error));
//   };

//   return (
//     <>
//       <IconContext.Provider value={{ color: "undefined" }}>
//         <div className="navbar">
//           <Link to="#" className="menu-bars">
//             <FaIcons.FaBars onClick={showSidebar} />
//           </Link>
//           {isLoggedIn ? (
//             <div className="login-status">
//               <div className="ip-dropdown">
//                 <span className="ip-button">{storedIp}</span>
//                 <div className="logout-dropdown">
//                   <span onClick={handleLogout}>Logout</span>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <div className="login-button">
//               <button onClick={toggleLoginPopup}>Login</button>
//             </div>
//           )}
//         </div>
//         <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
//           <ul className="nav-menu-items" onClick={showSidebar}>
//             <li className="navbar-toggle">
//               <Link to="#" className="menu-bars">
//                 <AiIcons.AiOutlineClose />
//               </Link>
//             </li>
//             {SidebarData.map((item, index) => {
//               return (
//                 <li key={index} className={item.cName}>
//                   <Link to={item.path}>
//                     {item.icon}
//                     <span>{item.title}</span>
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>
//       </IconContext.Provider>

//       {showLoginPopup && (
//         <div className="popup">
//           <div className="popup-content">
//             <span className="close" onClick={toggleLoginPopup}>
//               &times;
//             </span>
//             <input
//               type="text"
//               placeholder="IPv4 Address"
//               value={ipAddress}
//               onChange={(e) => setIpAddress(e.target.value)}
//               className={ipError ? "invalid" : ""}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <button onClick={handleLogin}>Login</button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Navbar;





// import React, { useState, useEffect } from "react";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import { Link } from "react-router-dom";
// import { SidebarData } from "./SidebarData";
// import "../App.css";
// import { IconContext } from "react-icons";
// import axios from "axios"; // Import Axios for making HTTP requests
// import "../Styles/login-comp.css";

// function Navbar() {
//   const [sidebar, setSidebar] = useState(false);
//   const [showLoginPopup, setShowLoginPopup] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [ipAddress, setIpAddress] = useState("");
//   const [password, setPassword] = useState("");
//   const [storedIp, setStoredIp] = useState("");
//   const [ipError, setIpError] = useState(false);

//   axios.defaults.baseURL = "http://localhost:3001";

//   useEffect(() => {
//     // Load JSON data from the server if the user is logged in
//     if (isLoggedIn) {
//       axios
//         .get("/ip-address")
//         .then((response) => {
//           setStoredIp(response.data.ipAddress);
//         })
//         .catch((error) => {
//           console.error("Error loading IP address:", error);
//         });
//     }
//   }, [isLoggedIn]);

//   const showSidebar = () => setSidebar(!sidebar);
//   const toggleLoginPopup = () => setShowLoginPopup(!showLoginPopup);

//   const handleLogin = () => {
//     // Check if the IP address is a valid IPv4 format
//     const ipv4Regex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
//     if (ipv4Regex.test(ipAddress) && password === "admin") {
//       // Make a POST request to the server to update the IP address
//       axios
//         .post("/update-ip", { ipAddress })
//         .then((response) => {
//           console.log(response.data.message);
//           setIsLoggedIn(true);
//           setShowLoginPopup(false);
//         })
//         .catch((error) => {
//           console.error("Error updating IP address:", error);
//           setIpError(true);
//         });
//     } else {
//       // Handle an invalid login
//       setIpError(true);
//     }
//   };


//   const handleLogout = () => {
//     // Make a DELETE request to the server to delete the IP address
//     axios
//       .delete("/delete-ip")
//       .then((response) => {
//         console.log(response.data.message);
//         setIsLoggedIn(false);
//         setStoredIp("");
//         window.location.href = "/";
//       })
//       .catch((error) => {
//         console.error("Error deleting IP address:", error);
//       });
//   };


//   return (
//     <>
//       <IconContext.Provider value={{ color: "undefined" }}>
//         <div className="navbar">
//           <Link to="#" className="menu-bars">
//             <FaIcons.FaBars onClick={showSidebar} />
//           </Link>
//           {isLoggedIn ? (
//             <div className="login-status">
//               <div className="ip-dropdown">
//                 <span className="ip-button">{storedIp}</span>
//                 <div className="logout-dropdown">
//                   <span onClick={handleLogout}>Logout</span>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <div className="login-button">
//               <button onClick={toggleLoginPopup}>Login</button>
//             </div>
//           )}
//         </div>
//         <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
//           <ul className="nav-menu-items" onClick={showSidebar}>
//             <li className="navbar-toggle">
//               <Link to="#" className="menu-bars">
//                 <AiIcons.AiOutlineClose />
//               </Link>
//             </li>
//             {SidebarData.map((item, index) => {
//               return (
//                 <li key={index} className={item.cName}>
//                   <Link to={item.path}>
//                     {item.icon}
//                     <span>{item.title}</span>
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>
//       </IconContext.Provider>

//       {showLoginPopup && (
//         <div className="popup">
//           <div className="popup-content">
//             <span className="close" onClick={toggleLoginPopup}>
//               &times;
//             </span>
//             <input
//               type="text"
//               placeholder="IPv4 Address"
//               value={ipAddress}
//               onChange={(e) => setIpAddress(e.target.value)}
//               className={ipError ? "invalid" : ""}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <button onClick={handleLogin}>Login</button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Navbar;





// import React, { useState, useEffect } from "react";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import { Link } from "react-router-dom";
// import { SidebarData } from "./SidebarData";
// import "../App.css";
// import { IconContext } from "react-icons";
// import "../Styles/login-comp.css";

// function Navbar() {
//   const [sidebar, setSidebar] = useState(false);
//   const [showLoginPopup, setShowLoginPopup] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [ipAddress, setipAddress] = useState([""]); // Initialize as an array
//   const [password, setPassword] = useState("");
//   const [ipError, setIpError] = useState(false);

//   useEffect(() => {
//     // Check if the IP addresses are stored in local storage as an array
//     const storedipAddress = JSON.parse(localStorage.getItem("ipAddress"))[0] || "";
//     if (storedipAddress && Array.isArray(storedipAddress)) {
//       setipAddress(storedipAddress); // Store it as an array
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const showSidebar = () => setSidebar(!sidebar);
//   const toggleLoginPopup = () => setShowLoginPopup(!showLoginPopup);

//   const handleLogin = () => {
//     const ipv4Regex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
//     if (ipv4Regex.test(ipAddress[0]) && password === "admin") {
//       // Store the IP addresses as an array in local storage
//       localStorage.setItem("ipAddress", JSON.stringify(ipAddress));
//       setIsLoggedIn(true);
//       setShowLoginPopup(false);
//     } else {
//       // Handle an invalid login
//       setIpError(true);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("ipAddress");
//     setIsLoggedIn(false);
//     setipAddress([""]);
//   };

//   return (
//     <>
//       <IconContext.Provider value={{ color: "undefined" }}>
//         <div className="navbar">
//           <Link to="#" className="menu-bars">
//             <FaIcons.FaBars onClick={showSidebar} />
//           </Link>
//           {isLoggedIn ? (
//             <div className="login-status">
//               <div className="ip-dropdown">
//                 <span className="ip-button">{ipAddress[0]}</span>
//                 <div className="logout-dropdown">
//                   <span onClick={handleLogout}>Logout</span>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <div className="login-button">
//               <button onClick={toggleLoginPopup}>Login</button>
//             </div>
//           )}
//         </div>
//         <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
//           <ul className="nav-menu-items" onClick={showSidebar}>
//             <li className="navbar-toggle">
//               <Link to="#" className="menu-bars">
//                 <AiIcons.AiOutlineClose />
//               </Link>
//             </li>
//             {SidebarData.map((item, index) => {
//               return (
//                 <li key={index} className={item.cName}>
//                   <Link to={item.path}>
//                     {item.icon}
//                     <span>{item.title}</span>
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>
//       </IconContext.Provider>

//       {showLoginPopup && (
//         <div className="popup">
//           <div className="popup-content">
//             <span className="close" onClick={toggleLoginPopup}>
//               &times;
//             </span>
//             <input
//               type="text"
//               placeholder="Enter Public IP of the Test Bed"
//               value={ipAddress[0]}
//               onChange={(e) => setipAddress([e.target.value])}
//               className={ipError ? "invalid" : ""}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <button onClick={handleLogin}>Login</button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Navbar;







import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "../App.css";
import { IconContext } from "react-icons";
import "../Styles/login-comp.css";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [ipAddress, setIpAddress] = useState("");
  const [password, setPassword] = useState("");
  const [ipError, setIpError] = useState(false);

  useEffect(() => {
    // Check if the IP address is stored in local storage
    const storedIp = localStorage.getItem("ipAddress");
    if (storedIp) {
      setIpAddress(storedIp);
      setIsLoggedIn(true);
    }
  }, []);

  const showSidebar = () => setSidebar(!sidebar);
  const toggleLoginPopup = () => setShowLoginPopup(!showLoginPopup);

  const handleLogin = () => {
    // Check if the IP address is a valid IPv4 format and the password is "admin"
    const ipv4Regex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
    if (ipv4Regex.test(ipAddress) && password === "admin") {
      // Store the IP address in local storage
      localStorage.setItem("ipAddress", ipAddress);
      setIsLoggedIn(true);
      setShowLoginPopup(false);
    } else {
      // Handle an invalid login
      setIpError(true);
    }
  };

  const handleLogout = () => {
    // Remove the IP address from local storage
    localStorage.removeItem("ipAddress");
    localStorage.removeItem("selectedTestType");
    localStorage.removeItem("deploymentType");
    setIsLoggedIn(false);
    setIpAddress("");
  };

  return (
    <>
      <IconContext.Provider value={{ color: "undefined" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          {isLoggedIn ? (
            <div className="login-status">
              <div className="ip-dropdown">
                <span className="ip-button">{ipAddress}</span>
                <div className="logout-dropdown">
                  <span onClick={handleLogout}>Logout</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="login-button">
              <button onClick={toggleLoginPopup}>Login</button>
            </div>
          )}
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>

      {showLoginPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={toggleLoginPopup}>
              &times;
            </span>
            <input
              type="text"
              placeholder="Enter Public IP of the Test Bed"
              value={ipAddress}
              onChange={(e) => setIpAddress(e.target.value)}
              className={ipError ? "invalid" : ""}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;