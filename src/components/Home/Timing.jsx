// import { Box, Stack, Typography } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import logo from "../../assets/images/logo.png";
// const Timing = () => {
//   // Timeline
//   const [currentDateTime, setCurrentDateTime] = useState(new Date());

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentDateTime(new Date());
//     }, 1000); // Update every second

//     return () => clearInterval(intervalId);
//   }, []);

//   // Greeting
//   const [greeting, setGreeting] = useState(""); // Initialize with an empty greeting

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       const now = new Date();

//       const currentHour = now.getHours();

//       if (currentHour >= 5 && currentHour < 12) {
//         setGreeting("Good Morning");
//       } else if (currentHour >= 12 && currentHour < 17) {
//         setGreeting("Good Afternoon");
//       } else if (currentHour >= 17 && currentHour < 22) {
//         setGreeting("Good Evening");
//       } else {
//         setGreeting("Good night");
//       }
//     }, 1000); // Update every second

//     return () => clearInterval(intervalId);
//   }, []);
//   return (
//     <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
//       <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
//         <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
//           <div className="max-w-xl mb-6">
//             <div>
//               <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase bg-teal-accent-400 text-white rounded-full">Greetings!</p>
//             </div>
//             <h2 className="font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none max-w-lg mb-6">
//               {currentDateTime.toDateString()} 
//               <br className="hidden md:block" />
            
//               <span className="inline-block text-deep-purple-accent-200">{greeting}</span>
//             </h2>
//           </div>
//         </div>
//         <div className="flex items-center justify-center lg:w-1/2">
//           {/* <div className="w-2/5">
//             <img className="object-cover" src="https://kitwind.io/assets/kometa/one-girl-phone.png" alt="" />
//           </div>
//           <div className="w-5/12 -ml-16 lg:-ml-32">
//             <img className="object-cover" src="https://kitwind.io/assets/kometa/two-girls-phone.png" alt="" />
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import logo from '../../assets/images/logo.png'
const Timing = () => {
      // Timeline
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(intervalId);
  }, []);

  // Greeting
  const [greeting, setGreeting] = useState(""); // Initialize with an empty greeting

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();

      const currentHour = now.getHours();

      if (currentHour >= 5 && currentHour < 12) {
        setGreeting("Good Morning");
      } else if (currentHour == 12 ) {
        setGreeting("Good Noon");
      } else if (currentHour > 12 && currentHour < 17) {
        setGreeting("Good Afternoon");
      } else if (currentHour >= 17 && currentHour < 19) {
        setGreeting("Good Evening");
      } else {
        setGreeting("Good night");
      }
    }, 1000); // Update every second

    return () => clearInterval(intervalId);
  }, []);
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 rounded-2xl">
            <Box className='block md:flex gap-5 justify-between items-center'>
              <Stack
                sx={{
                  backgroundColor: "#394867",
                  boxShadow: "0px 0px 2px 2.5px #394867",
                  padding: "20px",
                }}
              >
                <Typography>
                  <p
                    style={{
                      fontSize: 50,
                      fontFamily: "monospace",
                      color: "#fef7df",
                    }}
                  >
                    {currentDateTime.toLocaleTimeString()}
                  </p>
                </Typography>
                <Typography>
                  <p
                    style={{
                      fontSize: 50,
                      fontFamily: "monospace",
                      color: "#fef7df",
                    }}
                  >
                    {greeting}
                  </p>
                </Typography>
              </Stack>
            </Box>
           
        </div>
    );
};

export default Timing;

// export default Timing;
