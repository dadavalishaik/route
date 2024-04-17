import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState("groq"); // Default to "groq"
    const [modelNames, setModelNames] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/status`);
            // Extracting available models from API response
            const { available_models } = response.data;
            setModelNames(available_models || []); // Use an empty array as fallback
        } catch (error) {
            console.error('Error fetching model names:', error);
        }
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleItemClick = async (item) => {
        setSelectedItem(item);
        setIsDropdownOpen(false);

        try {
            // Perform action based on the selected item
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/model/${item}`);
        
            // Set message
            setMessage(`${(res.data.details)}`);
            // Clear message after 3 seconds
            setTimeout(() => {
                setMessage("");
            }, 3000);
        } catch (error) {
            console.error('Error switching model:', error);
            setMessage('Error switching model. Please try again.');
        }
    };

    return (
        <div style={{ position: "relative", backgroundColor: "black", padding: "0.5rem", boxShadow: "0px 10px 6px rgba(0, 0, 0, 0.1)", width: "95%" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ position: "relative" }}>
                    <div style={{ color: "white", fontSize: "1rem", marginRight: "100px", cursor: "pointer", fontFamily: "Sans-serif" }} onClick={toggleDropdown}>
                        {selectedItem || 'Select Model'} ▼
                    </div>
                    {isDropdownOpen && (
                        <div style={{ position: "absolute", width: '150px', top: "100%", left: 0, backgroundColor: "#262626", color: "white", padding: "0.5rem", borderRadius: "4px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", zIndex: "999", display: "flex", flexDirection: "column" }}>
                            {modelNames.length > 0 ? (
                                modelNames.map((modelName, index) => (
                                    <div key={index} style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={() => handleItemClick(modelName)}>
                                        <div style={{ marginRight: "0.5rem", fontFamily: "sans-serif" }}>{modelName}</div>
                                    </div>
                                ))
                            ) : (
                                <div>No models available</div>
                            )}
                        </div>
                    )}
                </div>
                {/* Profile Image */}
                <div style={{ position: "fixed", top: "10px", right: "1rem" }}>
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Profile" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
                </div>
            </div>
            {/* Message Display */}
            {message && (
                <div style={{ position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white', padding: '10px 20px', borderRadius: '4px', zIndex: '9999' }}>
                    {message}
                </div>
            )}
        </div>
    );
}

export default Navbar;





















// import React, { useState } from 'react';
// import gemini from '../assets/gemini.png';

// function Navbar() {
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//     const toggleDropdown = () => {
//         setIsDropdownOpen(!isDropdownOpen);
//     };

//     return (
//         <div style={{ height: "3rem", display: "flex", alignItems: "center", justifyContent: "space-between", backgroundColor: "black", padding: "1rem", boxShadow: "0px 10px 6px rgba(0, 0, 0, 0.1)" }}>
//             <div style={{ position: "relative" }}>
//                 <div style={{ color: "white", fontSize: "1rem", marginRight: "1rem", cursor: "pointer" ,fontFamily:"Sans-serif" }} onClick={toggleDropdown}>
//                     Gemini ▼
//                 </div>
//                 {isDropdownOpen && (
//                     <div style={{ position: "absolute",width:'110px', top: "100%", left: 0, backgroundColor: "#262626", color: "white", padding: "0.5rem", borderRadius: "4px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", zIndex: "999", display: "flex", alignItems: "center" }}>
//                         <img src={gemini} alt="Gemini Icon" style={{ width: "20px", height: "20px", marginRight: "0.5rem" }} />
//                         <div style={{ marginRight: "0.5rem",fontFamily:"sans-serif" }}>Gemini</div>
//                         <svg className="h-5 w-5 text-red-500 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                         </svg>
//                     </div>
//                 )}
//             </div>
//             {/* Profile Image */}
//             <div style={{ marginLeft: "auto", marginRight: "auto" }}>
//                 <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Profile" style={{ width: "40px", height: "40px", borderRadius: "50%", paddingLeft: '1000%' }} />
//             </div>
//         </div>
//     );
// }

// export default Navbar;




















































