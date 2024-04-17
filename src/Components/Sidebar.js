import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div
      style={{
        width: collapsed ? "60px" : "250px",
        height: "100%",
        backgroundColor: "#262626",
        color: "white",
        paddingTop: "10px",
        position: "relative",
        transition: "width 0.3s ease",
      }}
    >
      {/* Hamburger Menu */}
      <div
        style={{ position: "absolute", top: "10px", left: "10px", zIndex: "1" }}
      >
        <svg
          width="22"
          height="22"
          strokeWidth="2"
          stroke="white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ cursor: "pointer" }}
          onClick={toggleSidebar}
        >
          <path stroke="none" />
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </div>

      {/* Navigation Links */}
      <div
        style={{ textAlign: "left", paddingTop: collapsed ? "100px" : "100px" }}
      >
        <button
          style={{
            textDecoration: "none",
            color: "white",
            display: "flex",
            alignItems: "center",
            padding: "5px 5px",
            cursor: "pointer",
            marginLeft: "15px",
            borderRadius: "35px",
            fontWeight: "bold",
            background: "black",
            color: "#4d4d4d",
            border: "none",
          }}
        >
          <svg
            className="h-8 w-8 text-gray-500 mr-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          {collapsed ? null : "New Chat"}
        </button>

        {/* Dashboard link */}
        <Link
          to="/dashboard"
          style={{
            textDecoration: "none",
            color: "white",
            display: "flex",
            alignItems: "center",
            padding: "15px 15px",
            cursor: "pointer",
            backgroundColor:
              activeLink === "/dashboard" ? "#333" : "transparent",
            transition: "background-color 0.3s",
          }}
          onClick={() => handleLinkClick("/dashboard")}
          onMouseEnter={() => {
            if (activeLink !== "/dashboard") setActiveLink("/dashboard");
          }}
          onMouseLeave={() => {
            if (activeLink !== "/dashboard") setActiveLink(null);
          }}
        >
          <svg
            className="h-8 w-8 text-gray-100 mr-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ marginRight: "8px" }}
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <rect x="4" y="4" width="6" height="6" rx="1" />
            <rect x="14" y="4" width="6" height="6" rx="1" />
            <rect x="4" y="14" width="6" height="6" rx="1" />
            <rect x="14" y="14" width="6" height="6" rx="1" />
          </svg>
          {collapsed ? null : "Dashboard"}
        </Link>

        {/* New Chat link */}
        <Link
          to="/chatui"
          style={{
            textDecoration: "none",
            color: "white",
            display: "flex",
            alignItems: "center",
            padding: "15px 15px",
            cursor: "pointer",
            backgroundColor: activeLink === "/chatui" ? "#333" : "transparent",
            transition: "background-color 0.3s",
          }}
          onClick={() => handleLinkClick("/chatui")}
          onMouseEnter={() => {
            if (activeLink !== "/chatui") setActiveLink("/chatui");
          }}
          onMouseLeave={() => {
            if (activeLink !== "/chatui") setActiveLink(null);
          }}
        >
          <svg
            className="h-8 w-8 text-gray-500 mr-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ marginRight: "8px" }}
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          {collapsed ? null : "Chat UI"}
        </Link>

        {/* Api Settings link */}
        <Link
          to="/apisettings"
          style={{
            textDecoration: "none",
            color: "white",
            display: "flex",
            alignItems: "center",
            padding: "15px 15px",
            cursor: "pointer",
            backgroundColor:
              activeLink === "/apisettings" ? "#333" : "transparent",
            transition: "background-color 0.3s",
          }}
          onClick={() => handleLinkClick("/apisettings")}
          onMouseEnter={() => {
            if (activeLink !== "/apisettings") setActiveLink("/apisettings");
          }}
          onMouseLeave={() => {
            if (activeLink !== "/apisettings") setActiveLink(null);
          }}
        >
          <svg
            className="h-8 w-8 text-gray-100 mr-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ marginRight: "8px" }}
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          {collapsed ? null : "Api Settings"}
        </Link>

        {/* Last 3 links displayed at the end */}
        {/* Help link */}
        <Link
          to="/help"
          style={{
            textDecoration: "none",
            color: "white",
            display: "flex",
            alignItems: "center",
            padding: "15px 15px",
            cursor: "pointer",
            paddingTop: collapsed ? "200px" : "90%",
          }}
        >
          <svg
            className="h-8 w-8 text-red-500 mr-2"
            width="24"
            height="54"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ marginRight: "8px" }}
          >
            <circle cx="12" cy="12" r="9" />
            <line x1="12" y1="17" x2="12" y2="17.01" />
            <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
          </svg>
          {collapsed ? null : "Help"}
        </Link>

        {/* Activity link */}
        <Link
          to="/activity"
          style={{
            textDecoration: "none",
            color: "white",
            display: "flex",
            alignItems: "center",
            padding: "15px 15px",
            cursor: "pointer",
            backgroundColor:
              activeLink === "/activity" ? "#333" : "transparent",
            transition: "background-color 0.3s",
          }}
          onClick={() => handleLinkClick("/activity")}
          onMouseEnter={() => {
            if (activeLink !== "/activity") setActiveLink("/activity");
          }}
          onMouseLeave={() => {
            if (activeLink !== "/activity") setActiveLink(null);
          }}
        >
          <svg
            className="h-8 w-8 text-red-500 mr-4"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ marginRight: "8px" }}
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <polyline points="12 8 12 12 14 14" />
            <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" />
          </svg>
          {collapsed ? null : "Activity"}
        </Link>

        {/* Settings link */}
        <Link
          to="/settings"
          style={{
            textDecoration: "none",
            color: "white",
            display: "flex",
            alignItems: "center",
            padding: "15px 15px",
            cursor: "pointer",
            backgroundColor:
              activeLink === "/settings" ? "#333" : "transparent",
            transition: "background-color 0.3s",
          }}
          onClick={() => handleLinkClick("/settings")}
          onMouseEnter={() => {
            if (activeLink !== "/settings") setActiveLink("/settings");
          }}
          onMouseLeave={() => {
            if (activeLink !== "/settings") setActiveLink(null);
          }}  
          
        >
          <svg
            className="h-8 w-8 text-gray-100 mr-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ marginRight: "8px" }}
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          {collapsed ? null : "Settings"}
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;








































// import React, { useState } from 'react';
// import { Button } from '@nextui-org/react';
// import { Link } from 'react-router-dom';

// function Sidebar() {
//   const [collapsed, setCollapsed] = useState(false);

//   const [dashboardActive, setDashboardActive] = useState(false);

//   const handleDashboardClick = () => {
//     setDashboardActive(true);
//   };


//   const toggleSidebar = () => {
//     setCollapsed(!collapsed);
//   };

//   return (
//     <div
//       style={{
//         width: collapsed ? '60px' : '250px',
//         height: '100%',
//         backgroundColor: '#262626',
//         color: 'white',
//         paddingTop: '10px',
//         position: 'relative',
//         transition: 'width 0.3s ease',
//       }}
//     >
//       {/* Hamburger Menu */}
//       <div style={{ position: 'absolute', top: '10px', left: '10px', zIndex: '1' }}>
//         <Button auto size="small" flat bordered onClick={toggleSidebar}>
//           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
//             <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
//           </svg>
//         </Button>
//       </div>

//       {/* Navigation Links */}
//       <div style={{ textAlign: 'left', marginLeft: '0px', paddingTop: collapsed ? '100px' : '100px', }}>


//         {/* <Link to="/" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', padding: '10px 20px', cursor: 'pointer' }}>
//           <svg className="h-8 w-8 text-gray-500 mr-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
//             <path stroke="none" d="M0 0h24v24H0z"/>
//             <line x1="12" y1="5" x2="12" y2="19" />
//             <line x1="5" y1="12" x2="19" y2="12" />
//           </svg>
//           {collapsed ? null : 'New Chat'}
//         </Link> */}

//         <button style={{
//           textDecoration: 'none',
//           color: 'white',
//           display: 'flex',
//           alignItems: 'center',
//           padding: '5px 5px',
//           cursor: 'pointer',
//           marginLeft: '15px',
//           borderRadius: '35px',
//           fontWeight: 'bold',
//           background: 'black',
//           color: '#4d4d4d',
//           border: 'none',
//         }}>
//           <svg className="h-8 w-8 text-gray-500 mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" >
//             <path stroke="none" d="M0 0h24v24H0z" />
//             <line x1="12" y1="5" x2="12" y2="19" />
//             <line x1="5" y1="12" x2="19" y2="12" />
//           </svg>
//           {collapsed ? null : 'New Chat'}
//         </button>



//         {/* Dashboard link */}
//         <Link
//           to="/dashboard"
//           style={{
//             textDecoration: 'none',
//             color: 'white',
//             display: 'flex',
//             alignItems: 'center',
//             padding: '10px 20px',
//             cursor: 'pointer',
//             backgroundColor: dashboardActive ? '#333' : 'transparent', // Highlight background color when active
//             transition: 'background-color 0.3s', // Smooth transition for background color change
            
//           }}
//           onClick={handleDashboardClick} // Set Dashboard as active when clicked
//           onMouseEnter={() => setDashboardActive(true)} // Highlight on hover
//           onMouseLeave={() => setDashboardActive(false)} // Remove highlight on hover out
//         >
//           <svg
//             className="h-8 w-8 text-gray-100 mr-2"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             strokeWidth="2"
//             stroke="currentColor"
//             fill="none"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             style={{ marginRight: '8px' }}
//           >
//             <path stroke="none" d="M0 0h24v24H0z" />
//             <rect x="4" y="4" width="6" height="6" rx="1" />
//             <rect x="14" y="4" width="6" height="6" rx="1" />
//             <rect x="4" y="14" width="6" height="6" rx="1" />
//             <rect x="14" y="14" width="6" height="6" rx="1" />
//           </svg>
//           {collapsed ? null : 'Dashboard'}
//         </Link>


//         {/* New Chat link */}
//         <Link to="/chatui"
//           style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', padding: '10px 20px', 
//           cursor: 'pointer',backgroundColor: dashboardActive ? '#333' : 'transparent', // Highlight background color when active
//           transition: 'background-color 0.3s' }}

//           onClick={handleDashboardClick} // Set Dashboard as active when clicked
//           onMouseEnter={() => setDashboardActive(true)} // Highlight on hover
//           onMouseLeave={() => setDashboardActive(false)} // Remove highlight on hover out
//         >
//           <svg className="h-8 w-8 text-gray-500 mr-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
//             <path stroke="none" d="M0 0h24v24H0z" />
//             <line x1="12" y1="5" x2="12" y2="19" />
//             <line x1="5" y1="12" x2="19" y2="12" />
//           </svg>
//           {collapsed ? null : 'Chat UI'}
//         </Link>

//         {/* Api Settings link */}
//         <Link to="/apisettings" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', padding: '10px 20px', cursor: 'pointer' , backgroundColor: dashboardActive ? '#333' : 'transparent', // Highlight background color when active
//             transition: 'background-color 0.3s', // Smooth transition for background color change
//             }}
         
//             onClick={handleDashboardClick} // Set Dashboard as active when clicked
//             onMouseEnter={() => setDashboardActive(true)} // Highlight on hover
//             onMouseLeave={() => setDashboardActive(false)} // Remove highlight on hover out
//             >
//           <svg className="h-8 w-8 text-gray-100 mr-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
//             <path stroke="none" d="M0 0h24v24H0z" />
//             <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
//             <circle cx="12" cy="12" r="3" />
//           </svg>
//           {collapsed ? null : 'Api Settings'}
//         </Link>


//         {/* Last 3 links displayed at the end */}
//         {/* Help link */}
//         <Link to="/help" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', padding: '10px 20px', cursor: 'pointer', paddingTop: collapsed ? '300px' : '90%' }}>
//           <svg className="h-8 w-8 text-red-500 mr-2" width="24" height="54" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
//             <circle cx="12" cy="12" r="9" />
//             <line x1="12" y1="17" x2="12" y2="17.01" />
//             <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
//           </svg>
//           {collapsed ? null : 'Help'}
//         </Link>

//         {/* Activity link */}
//         <Link to="/activity" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', padding: '10px 20px', cursor: 'pointer' }}>
//           <svg className="h-8 w-8 text-red-500 mr-4" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }} >
//             <path stroke="none" d="M0 0h24v24H0z" />
//             <polyline points="12 8 12 12 14 14" />
//             <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" />
//           </svg>
//           {collapsed ? null : 'Activity'}
//         </Link>

//         {/* Settings link */}
//         <Link to="/settings" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', padding: '15px 20px', cursor: 'pointer', }}>
//           <svg className="h-8 w-8 text-gray-100 mr-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
//             <path stroke="none" d="M0 0h24v24H0z" />
//             <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
//             <circle cx="12" cy="12" r="3" />
//           </svg>
//           {collapsed ? null : 'Settings'}
//         </Link>

//       </div>
//     </div>
//   );
// }

// export default Sidebar;

































// import React, { useState } from 'react';
// import { Button } from '@nextui-org/react';
// import { Link } from 'react-router-dom';

// function Sidebar() {
//   const [collapsed, setCollapsed] = useState(false);

//   const toggleSidebar = () => {
//     setCollapsed(!collapsed);
//   };

//   return (
//     <div
//       style={{
//         width: collapsed ? '60px' : '250px',
//         height: '100%',
//         backgroundColor: '#262626',
//         color: 'white',
//         paddingTop: '10px',
//         position: 'relative',
//         transition: 'width 0.3s ease',
//       }}
//     >
//       {/* Hamburger Menu */}
//       <div style={{ position: 'absolute', top: '10px', left: '10px', zIndex: '1' }}>
//         <Button auto size="small" flat bordered onClick={toggleSidebar}>
//           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
//             <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
//           </svg>
//         </Button>
//       </div>

//       {/* Navigation Links */}
//       <div style={{ textAlign: 'left', marginLeft: '0px', paddingTop: collapsed ? '100px' : '100px', }}>


//         {/* <Link to="/" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', padding: '10px 20px', cursor: 'pointer' }}>
//           <svg className="h-8 w-8 text-gray-500 mr-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
//             <path stroke="none" d="M0 0h24v24H0z"/>
//             <line x1="12" y1="5" x2="12" y2="19" />
//             <line x1="5" y1="12" x2="19" y2="12" />
//           </svg>
//           {collapsed ? null : 'New Chat'}
//         </Link> */}

//         <button style={{
//           textDecoration: 'none',
//           color: 'white',
//           display: 'flex',
//           alignItems: 'center',
//           padding: '5px 5px',
//           cursor: 'pointer',
//           marginLeft: '15px',
//           borderRadius: '35px',
//           fontWeight: 'bold',
//           background: 'black',
//           color: '#4d4d4d',
//           border: 'none',
//         }}>
//           <svg className="h-8 w-8 text-gray-500 mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
//             <path stroke="none" d="M0 0h24v24H0z" />
//             <line x1="12" y1="5" x2="12" y2="19" />
//             <line x1="5" y1="12" x2="19" y2="12" />
//           </svg>
//           {collapsed ? null : 'New Chat'}
//         </button>



//         {/* Dashboard link */}
//         <Link to="/dashboard" style={{
//           textDecoration: 'none',
//           color: 'white',
//           display: 'flex',
//           alignItems: 'center',
//           padding: '10px 20px',
//           cursor: 'pointer'
//         }}>
//           <svg className="h-8 w-8 text-gray-100 mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
//             <path stroke="none" d="M0 0h24v24H0z" />
//             <rect x="4" y="4" width="6" height="6" rx="1" />
//             <rect x="14" y="4" width="6" height="6" rx="1" />
//             <rect x="4" y="14" width="6" height="6" rx="1" />
//             <rect x="14" y="14" width="6" height="6" rx="1" />
//           </svg>
//           {collapsed ? null : 'Dashboard'}
//         </Link>


//         {/* New Chat link */}
//         <Link to="/new-chat" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', padding: '10px 20px', cursor: 'pointer' }}>
//           <svg className="h-8 w-8 text-gray-500 mr-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
//             <path stroke="none" d="M0 0h24v24H0z" />
//             <line x1="12" y1="5" x2="12" y2="19" />
//             <line x1="5" y1="12" x2="19" y2="12" />
//           </svg>
//           {collapsed ? null : 'Chat UI'}
//         </Link>

//         {/* Api Settings link */}
//         <Link to="/apisettings" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', padding: '10px 20px', cursor: 'pointer' }}>
//           <svg className="h-8 w-8 text-gray-100 mr-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{marginRight:'8px'}}>
//             <path stroke="none" d="M0 0h24v24H0z" />
//             <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
//             <circle cx="12" cy="12" r="3" />
//           </svg>
//           {collapsed ? null : 'Api Settings'}
//         </Link>


//         {/* Last 3 links displayed at the end */}
//         {/* Help link */}
//         <Link to="/help" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', padding: '10px 20px', cursor: 'pointer', paddingTop: collapsed ? '300px' : '90%' }}>
//           <svg className="h-8 w-8 text-red-500 mr-2" width="24" height="54" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
//             <circle cx="12" cy="12" r="9" />
//             <line x1="12" y1="17" x2="12" y2="17.01" />
//             <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
//           </svg>
//           {collapsed ? null : 'Help'}
//         </Link>

//         {/* Activity link */}
//         <Link to="/activity" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', padding: '10px 20px', cursor: 'pointer' }}>
//           <svg className="h-8 w-8 text-red-500 mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
//             <path stroke="none" d="M0 0h24v24H0z" />
//             <polyline points="12 8 12 12 14 14" />
//             <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" />
//           </svg>
//           {collapsed ? null : 'Activity'}
//         </Link>
//         {/* Settings link */}
//         <Link to="/settings" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', padding: '10px 20px', cursor: 'pointer', }}>
//           <svg className="h-8 w-8 text-gray-100 mr-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
//             <path stroke="none" d="M0 0h24v24H0z" />
//             <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
//             <circle cx="12" cy="12" r="3" />
//           </svg>
//           {collapsed ? null : 'Settings'}
//         </Link>

//       </div>
//     </div>
//   );
// }

// export default Sidebar;





































