import React, { useState, useRef, useEffect } from 'react';
import Layout from '../Components/Layout';
import axios from 'axios';

function Chatui() {
  const [inputText, setInputText] = useState(""); // State to track input text
  const [messages, setMessages] = useState([]); // State to track messages
  const [showSendButton, setShowSendButton] = useState(false); // State to track whether to show the send button
  const [loading, setLoading] = useState(false); // State to track loading state
  const [inputDisabled, setInputDisabled] = useState(false); // State to track input disabled state

  const chatEndRef = useRef(null); // Ref to the end of chat for scrolling

  const scrollToBottom = () => {
    chatEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]); // Scroll to bottom whenever messages change

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text); // Update input text state when input changes
    setShowSendButton(text.trim().length > 0); // Show send button if input is not empty
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const sendMessage = async () => {
    const userMessage = inputText.trim();
    if (userMessage !== '') {
      try {
        setLoading(true); // Set loading state to true
        setInputDisabled(true); // Disable the input field

        // Combine user message with existing messages
        const updatedMessages = [...messages, { role: 'user', content: userMessage }];

        // Send the entire messages array to the completion API
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/v1/chat/completions`, {
          messages: updatedMessages
        });

        // Get system response from API
        const systemMessage = response.data.response;

        // Update messages state with combined user and system messages
        const updatedMessagesWithSystem = [...updatedMessages, { role: 'system', content: systemMessage }];
        setMessages(updatedMessagesWithSystem);

        // Clear input text and hide send button
        setInputText("");
        setShowSendButton(false);
      } catch (error) {
        console.error('Error sending message:', error);
      } finally {
        setLoading(false); // Set loading state to false
        setInputDisabled(false); // Enable the input field
      }
    }
  };

  return (
    <Layout>
      <div style={{ backgroundColor: 'black', color: 'white', minHeight: '78vh', position: 'relative', overflow: 'hidden' }}>
        {/* Display messages */}
        <div style={{ position: 'absolute', bottom: '130px', left: '50%', transform: 'translateX(-50%)', zIndex: '1', width: '800px', textAlign: 'center', overflowY: 'auto', maxHeight: 'calc(100% - 135px)', scrollbarWidth: 'none' }}>
          {messages.map((message, index) => (
            <div key={index} style={{ marginBottom: '20px', textAlign: message.role === 'user' ? 'right' : 'left' }}>
              {message.role === 'user' ? (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                  <div style={{ marginRight: '8px' }}>
                    <div style={{ backgroundColor: '#007bff', borderRadius: '15px', padding: '10px', color: '#fff', display: 'inline-block' }}>{message.content}</div>
                  </div>
                  <div style={{ marginRight: '10px' }}>
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="User" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
                  </div>
                </div>
              ) : (
                <div>
                  <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <img src="https://cdn-icons-png.flaticon.com/512/4712/4712104.png" alt="Bot" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
                  </div>
                  <div style={{ backgroundColor: 'black', borderRadius: '15px', padding: '10px', color: '#fff', display: 'inline-block' }}>{message.content}</div>
                </div>
              )}
            </div>
          ))}
          <div ref={chatEndRef} style={{ float: "left", clear: "both" }} /> {/* Empty div to scroll to */}
        </div>

        {/* Input field */}
        <div style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)' }}>
          <div style={{ position: 'fixed', bottom: '0', left: '50%', transform: 'translateX(-50%)', marginBottom: '50px', display: 'flex', alignItems: 'center', maxWidth: '90vw', width: '800px', justifyContent: 'center', paddingLeft: '17%' }}>
            <input
              type="text"
              placeholder="Enter a prompt here....."
              style={{ flex: '1', height: '35px', padding: '10px 50px 10px 10px', backgroundColor: '#262626', borderRadius: '20px', border: 'none', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', color: 'white', fontSize: '14px' }}
              value={inputText}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              disabled={inputDisabled} // Disable input field based on inputDisabled state
            />
            {showSendButton && (
              <button
                onClick={sendMessage}
                style={{ marginLeft: '-40px', backgroundColor: '#262626', color: 'white', border: 'none', borderRadius: '50%', width: '40px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', cursor: 'pointer' }}
              >
                {loading ? ( // Display loading icon when loading is true
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 4.418 3.582 8 8 8v-4zm10-1.662A7.965 7.965 0 0120 12h-4c0 3.584-2.93 6.5-6.545 6.5L16 15.63z"></path>
                  </svg>
                ) : (
                  <svg className="h-8 w-8 text-red-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                    <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" />
                  </svg>
                )}
              </button>
            )}
          </div>
        </div>
        {/* Privacy notice */}
        <div style={{ position: 'absolute', bottom: '20px', fontSize: '12px', width: '60%', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', color: 'white' }}>
          Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps
        </div>
      </div>
    </Layout>
  );
}

export default Chatui;






// import React, { useState, useRef, useEffect } from 'react';
// import Layout from '../Components/Layout';
// import axios from 'axios';

// function Chatui() {
//   const fetchData = async() =>{
//     const res = await axios.get(`${process.env.REACT_APP_API_URL}/status`);
//     console.log(res);
//   }
//   const [inputText, setInputText] = useState(""); // State to track input text
//   const [messages, setMessages] = useState([]); // State to track messages
//   const [showSendButton, setShowSendButton] = useState(false); // State to track whether to show the send button
  
//   const chatEndRef = useRef(null); // Ref to the end of chat for scrolling

//   const scrollToBottom = () => {
//     chatEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]); // Scroll to bottom whenever messages change
//   useEffect(() => {
//     // Call fetchData when component mounts
//     fetchData();
//   }, []); 

//   const handleInputChange = (e) => {
//     const text = e.target.value;
//     setInputText(text); // Update input text state when input changes
//     setShowSendButton(text.trim().length > 0); // Show send button if input is not empty
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       sendMessage();
//     }
//   };

//   const handleSendClick = () => {
//     sendMessage();
//   };

//   const sendMessage = () => {
//     const userMessage = inputText.trim();
//     if (userMessage !== '') {
//       // Update messages state with new message added below existing messages
//       const newMessages = [...messages, { role: 'user', content: userMessage }];
//       setMessages(newMessages);
//       setInputText(""); // Clear input text
//       setShowSendButton(false); // Hide send button after sending
//       // Process user message
//       processUserMessage(userMessage, newMessages);
//     }
//   };

//   const processUserMessage = (userMessage, newMessages) => {
//     // Add system response based on user message
//     let systemMessages = [];
//     if (userMessage.toLowerCase().includes('what is your name')) {
//       systemMessages.push({ role: 'system', content: "My name is TailGPT" });
//     } else if (userMessage.toLowerCase().includes('hi')) {
//       systemMessages.push({ role: 'system', content: "Hello, how can I assist you?" });
//     }  else if (userMessage.toLowerCase().includes('what is the Capital of India?')) {
//       systemMessages.push({ role: 'system', content: "Captial of India is Delhi" });
//     }
//     else {
//       systemMessages.push({ role: 'system', content: "Hello. How can I help you?" });
//     }
//     // Update messages state with system messages
//     setMessages([...newMessages, ...systemMessages]);
//   };

//   return (
//     <Layout>
//       <div style={{ backgroundColor: 'black', color: 'white', minHeight: '78vh', position: 'relative', overflow: 'hidden' }}>
//         {/* Display messages */}
//         <div style={{ position: 'absolute', bottom: '130px', left: '50%', transform: 'translateX(-50%)', zIndex: '1', width: '800px', textAlign: 'center', overflowY: 'auto', maxHeight: 'calc(100% - 135px)', scrollbarWidth: 'none' }}>
//           {messages.map((message, index) => (
//             <div key={index} style={{ marginBottom: '20px', textAlign: message.role === 'user' ? 'right' : 'left' }}>
//               <div style={{ backgroundColor: message.role === 'user' ? '#007bff' : '#6c757d', borderRadius: '15px', padding: '10px', color: '#fff', display: 'inline-block' }}>{message.content}</div>
//             </div>
//           ))}
//           <div ref={chatEndRef} style={{ float: "left", clear: "both" }} /> {/* Empty div to scroll to */}
//         </div>

//         {/* Input field */}
//         <div style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)' }}>
//           <div style={{ position: 'fixed', bottom: '0', left: '50%', transform: 'translateX(-50%)', marginBottom: '50px', display: 'flex', alignItems: 'center', maxWidth: '90vw', width: '800px', justifyContent: 'center', paddingLeft: '17%' }}>
//             <input
//               type="text"
//               placeholder="Enter a prompt here....."
//               style={{ flex: '1', height: '35px', padding: '10px 50px 10px 10px', backgroundColor: '#262626', borderRadius: '20px', border: 'none', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', color: 'white', fontSize: '14px' }}
//               value={inputText}
//               onChange={handleInputChange}
//               onKeyPress={handleKeyPress}
//             />
           

//             {showSendButton && (
//               <button
//                 onClick={handleSendClick}
//                 style={{ marginLeft: '-40px', backgroundColor: '#262626', color: 'white', border: 'none', borderRadius: '50%', width: '40px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', cursor: 'pointer' }}
//               >
//                     <svg class="h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="10" y1="14" x2="21" y2="3" />  <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" /></svg>
//               </button>
//             )}
//           </div>
//         </div>
//         {/* Privacy notice */}
//         <div style={{ position: 'absolute', bottom: '20px', fontSize: '12px', width: '60%', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', color: 'white' }}>
//           Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps
//         </div>
//       </div>
//     </Layout>
//   );
// }

// export default Chatui;









