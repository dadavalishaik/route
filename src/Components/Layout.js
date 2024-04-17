import React ,{useState}from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";


function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden", backgroundColor: 'black', color: 'white' }}>
      <div className="sidebar" style={{ /* Sidebar styles */ }}>
     
        <Sidebar />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ height: "1rem", width: "100%", backgroundColor: "white", position: "fixed", top: 0 }}>
          <Navbar  collapsed={collapsed}/>
        </div>
        <div style={{ boxSizing: "border-box", marginTop: "4rem", paddingLeft: "1rem", height: "calc(100% - 4rem)", overflow: "auto", paddingTop: "5rem" }}>
          {children}
        </div>
      </div>
    </div>
  );
} 

export default Layout;
































// import React from "react";
// import Sidebar from "./Sidebar";
// import Navbar from "./Navbar";

// function Layout({ children }) {
//   return (
//     <div style={{ display: "flex", height: "100vh", overflow: "hidden", backgroundColor: 'black', color: 'white' }}>
//       <div className="sidebar" style={{ /* Sidebar styles */ }}>
//         <Sidebar/>
//       </div>
//       <div style={{ flex: 1, position: "relative" }}>
//         <div style={{ height: "1rem", width: "100%", backgroundColor: "white", position: "fixed", top: 0 }}>
//           <Navbar/>
//         </div>
//         <div style={{ boxSizing: "border-box", marginTop: "4rem", paddingLeft: "1rem", height: "calc(100% - 4rem)", overflow: "auto", paddingTop: "5rem" }}>
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Layout;
















