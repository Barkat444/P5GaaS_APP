import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "TBaaS",
    path: "/tbaas",
    icon: <FaIcons.FaFlask />,
    cName: "nav-text",
  },
  {
    title: "Testing",
    path: "/testing",
    icon: <FaIcons.FaCog />,
    cName: "nav-text",
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];




// import React from "react";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";
// import { useHistory } from "react-router-dom";
// import { exec } from "child_process";

// export const SidebarData = [
//   {
//     title: "Home",
//     path: "/",
//     icon: <AiIcons.AiFillHome />,
//     cName: "nav-text",
//   },
//   {
//     title: "TBaaS",
//     path: "/tbaas",
//     icon: <FaIcons.FaFlask />,
//     cName: "nav-text",
//   },
//   {
//     title: "Testing",
//     path: "/testing",
//     icon: <FaIcons.FaCog />,
//     cName: "nav-text",
//   },
//   {
//     title: "Reports",
//     path: "/reports",
//     icon: <IoIcons.IoIosPaper />,
//     cName: "nav-text",
//     onClick: () => handleReportsClick(),
//   },
//   {
//     title: "Support",
//     path: "/support",
//     icon: <IoIcons.IoMdHelpCircle />,
//     cName: "nav-text",
//   },
// ];

// const handleReportsClick = () => {
//   // Retrieve the IP address from local storage
//   const ipAddress = localStorage.getItem("ipAddress");

//   // Run the Python script with the IP address as a command-line argument
//   if (ipAddress) {
//     exec(`python src/server/get_build_history.py ${ipAddress}`, (error, stdout, stderr) => {
//       if (error) {
//         console.error("Error running Python script:", error);
//       } else {
//         console.log("Python script output:", stdout);
//       }
//     });
//   } else {
//     console.error("IP address not found in local storage");
//   }
// };

// const Sidebar = () => {
//   const history = useHistory();

//   return (
//     <nav className="sidebar">
//       {SidebarData.map((item, index) => {
//         return (
//           <div key={index} className={item.cName} onClick={() => history.push(item.path)}>
//             {item.icon}
//             <span>{item.title}</span>
//           </div>
//         );
//       })}
//     </nav>
//   );
// };

// export default Sidebar;
