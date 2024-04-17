import React, { useState,useRef } from "react";
import { Card, CardBody, CardFooter, Progress } from "@nextui-org/react";
import Layout from "../Components/Layout";
import ReactApexChart from "react-apexcharts";

const Dashboard = () => {
  // Example values, you should replace these with your actual values
  const cost = 10; // Total cost
  const spent = 8; // Amount spent

  // Calculate remaining amount
  const remaining = cost - spent;

  // Calculate percentage spent
  const percentageSpent = (spent / cost) * 100;

   // Define color function for the heatmap
   const colorFunc = ({ alpha }) => {
    // Example color logic, replace with your own
    let color = "rgba(0, 128, 255, " + alpha + ")";
    return color;
  };

  const [chartState, setChartState] = useState({
    barChart: {
      series: [
        {
          name: "Actual Sales",
          data: [55, 41, 44, 103, 302, 55, 41],
        },
      ],
      options: {
        chart: {
          type: "bar",
        },
        plotOptions: {
          bar: {
            borderRadius: 2,
            dataLabels: {
              position: "top",
            },
          },
        },
        dataLabels: {
          enabled: true,
          offsetX: -6,
          style: {
            fontSize: "12px",
            colors: ["black"],
          },
        },
        xaxis: {
          categories: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
          axisBorder: {
            show: false,
            color: "#FF1654",
          },
          style: { alignItems: "center", fontSize: 12 },
        },
        legend: {
          position: "bottom",
          horizontalAlign: "top",
          onItemClick: {
            toggleDataSeries: false,
          },
          onItemHover: {
            highlightDataSeries: false,
          },
          itemMargin: {
            horizontal: 16,
            vertical: 0,
          },
          markers: {
            width: 12,
            height: 12,
            strokeWidth: 0,
            strokeColor: "#fff",
            radius: 12,
          },
        },
      },
    },
  });

 

   // Generate data for the heatmap
   const generateHeatmapData = () => {
    // Example data, replace with your actual heatmap data
    const data = [
      { date: new Date("2022-01-01"), value: 3 },
      { date: new Date("2022-01-02"), value: 5 },
      { date: new Date("2022-01-03"), value: 7 },
      // Add more data points as needed
    ];
    return data;
  };

  const [heatmapData, setHeatmapData] = useState(generateHeatmapData());


// Cell component representing each day
function Cell({ value, date }) {
  let alpha = value / 10; // Adjust this scaling factor as needed
  let color = colorFunc({ alpha });

  let style = {
    backgroundColor: color,
    height: "15px", // Increased cell height
    width: "15px", // Increased cell width
    margin: "1px", // Reduced margin
    position: "relative",
  };

  // Check if the background color is #262626
  if (color === "#262626") {
    style.color = "white"; // Change text color to white for better visibility
  }

  const [hovered, setHovered] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const cellRef = useRef(null);

  const handleMouseEnter = (event) => {
    setHovered(true);
    const cellRect = cellRef.current.getBoundingClientRect();
    
    // Calculate initial tooltip position
    let tooltipX = cellRect.left + cellRect.width + 10;
    let tooltipY = cellRect.top - 20;
  
    // Check if tooltip would overflow from the right side of the viewport
    const tooltipWidth = 200; // Width of the tooltip
    const viewportWidth = window.innerWidth;
    
    if (tooltipX + tooltipWidth > viewportWidth) {
      // Adjust tooltip to the left side of the cell
      tooltipX = cellRect.left - tooltipWidth - 10;
    }
  
    setTooltipPosition({ x: tooltipX, y: tooltipY });
  };
  

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={cellRef}
    >
      {hovered && (
        <div
          style={{
            position: "fixed",
            top: tooltipPosition.y + "px",
            left: tooltipPosition.x + "px",
          
            maxWidth: "200px",
            padding: "10px",
          
            backgroundColor: "#262626",
            color: "white",
            borderRadius: "5px",
            fontSize: "12px",
            zIndex: 9999,
            pointerEvents: "none",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          <div>{date.toDateString()}</div>
          <div> {value}</div>
        </div>
      )}
    </div>
  );
}



  // Timeline component for the heatmap
  function Timeline({ range, data, colorFunc }) {
    let months = [];
    for (let i = 0; i < 12; i++) {
      let date = new Date(range[0].getFullYear(), i, 1);
      let monthName = date.toLocaleString("default", { month: "short" });
      let daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
      let monthData = Array.from(new Array(daysInMonth), (_, index) => ({
        date: new Date(date.getFullYear(), date.getMonth(), index + 1),
        value: Math.floor(Math.random() * 10), // Random value for demonstration
      }));
      months.push({ name: monthName, data: monthData });
    }

    return (
      <div style={{ display: "flex", gap: "10px", flexWrap: "nowrap", overflowX: "auto" }}>
        {months.map((month, index) => (
          <div
            key={index}
            style={{
              textAlign: "center",
              width: "calc(100% / 12)",
              fontWeight: "bold",
              marginBottom: "20px",
              marginRight:'10px'
            }}
          >
            {month.name}
            <div style={{ display: "grid", gridTemplateColumns: `repeat(auto-fill, minmax(15px, 1fr))`, gap: "2px" }}>
              {month.data.map((day, dayIndex) => (
                <Cell key={dayIndex} value={day.value} date={day.date} />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }


  return (
    <Layout>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" ,marginRight:'20px'}}>
        {/* First Card */}
        <div style={{ flex: "1 1 300px" }}>
          <Card
            shadow
            bordered
            style={{
              height: "92%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#262626",
              borderRadius: "5px",
            }}
          >
            <CardBody style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "2rem",
                  fontFamily: "sans-serif",
                  paddingTop: "20px",
                }}
              >
                Metrics
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    marginRight: "5px",
                  }}
                >
                  100
                </div>
                <div style={{ fontSize: "1rem", cursor: "pointer" }}>▲</div>
              </div>
              <div style={{ fontSize: "2rem", color: "white" }}>+100 Today</div>
            </CardBody>
            <CardFooter style={{ textAlign: "center" }}></CardFooter>
          </Card>
        </div>

        {/* Second Card */}
        <div style={{ flex: "1 1 300px" }}>
          <Card
            shadow
            bordered
            style={{
              height: "92%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#262626",
              borderRadius: "5px",
            }}
          >
            <CardBody style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "sans-serif",
                  paddingTop: "20px",
                }}
              >
                Cost
              </div>
              <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
                ${cost}
              </div>
              <Progress
                value={percentageSpent}
                max={100}
                style={{
                  background: `linear-gradient(to right, #0070f3 ${percentageSpent}%, #f3f3f3 ${percentageSpent}%)`,
                  height: "20px",
                  borderRadius: "10px",
                  margin: "15px",
                }}
              />
              <div
                style={{
                  fontSize: "1.5rem",
                  color: "white",
                  textAlign: "center",
                  marginTop: "5px",
                }}
              >
                ${remaining} remaining
              </div>
            </CardBody>
            <CardFooter style={{ textAlign: "center" }}></CardFooter>
          </Card>
        </div>

        {/* Third Card */}
        <div style={{ flex: "1 1 300px", marginBottom: "10px" }}>
          <Card
            shadow
            bordered
            style={{
              // height: "300px",
              height: "95%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#262626",
              borderRadius: "5px",
            }}
          >
            <ReactApexChart
              options={{
                ...chartState.barChart.options,
                chart: {
                  ...chartState.barChart.options.chart,
                  toolbar: {
                    show: false,
                  },
                },
              }}
              series={chartState.barChart.series}
              type="bar"
              height={220}
              border={false}
            />
          </Card>
        </div>

        <div
        style={{ display: "flex", justifyContent: "center", width:'100%',scrollbarWidth:'none',overflow:'' }}>
        {/* Fourth Card - Heatmap */}
        <Card
        
          shadow
          bordered
          style={{
            backgroundColor: "#262626",
            borderRadius: "5px",
            width: "100%", // Increased width
            padding:'20px',
            overflow:'none',
            scrollbarWidth:'none',
          }}
        >
          <Timeline
            range={[new Date("2024-01-01"), new Date("2024-12-31")]} // Range for the entire year
            data={heatmapData}
            colorFunc={colorFunc}
          />
        </Card>
      </div>
      </div>
    </Layout>
  );
};

export default Dashboard;




















































// import React, { useState } from "react";
// import { Card, CardBody, CardFooter, Progress } from "@nextui-org/react";
// import Layout from "../Components/Layout";
// import ReactApexChart from "react-apexcharts";

// const Dashboard = () => {
//   // Example values, you should replace these with your actual values
//   const cost = 10; // Total cost
//   const spent = 6; // Amount spent

//   // Calculate remaining amount
//   const remaining = cost - spent;

//   // Calculate percentage spent
//   const percentageSpent = (spent / cost) * 100;

//   const [chartState, setChartState] = useState({
//     barChart: {
//       series: [
//         {
//           name: "Actual Sales",
//           data: [55, 41, 44, 103, 302, 55, 41],
//         },
//       ],
//       options: {
//         chart: {
//           type: "bar",
//         },
//         plotOptions: {
//           bar: {
//             borderRadius: 2,
//             dataLabels: {
//               position: "top",
//             },
//           },
//         },
//         dataLabels: {
//           enabled: true,
//           offsetX: -6,
//           style: {
//             fontSize: "12px",
//             colors: ["black"],
//           },
//         },
//         xaxis: {
//           categories: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
//           axisBorder: {
//             show: false,
//             color: "#FF1654",
//           },
//           style: { alignItems: "center", fontSize: 12 },
//         },
//         legend: {
//           position: "bottom",
//           horizontalAlign: "top",
//           onItemClick: {
//             toggleDataSeries: false,
//           },
//           onItemHover: {
//             highlightDataSeries: false,
//           },
//           itemMargin: {
//             horizontal: 16,
//             vertical: 0,
//           },
//           markers: {
//             width: 12,
//             height: 12,
//             strokeWidth: 0,
//             strokeColor: "#fff",
//             radius: 12,
//           },
//         },
//       },
//     },
//   });

//   const generateData = (count, yrange) => {
//     let i = 0;
//     const series = [];
//     while (i < count) {
//       const x = `w${i + 1}`;
//       const y =
//         Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
//       series.push({
//         x,
//         y,
//       });
//       i++;
//     }
//     return series;
//   };

//   const [chartData, setChartData] = useState({
//     series: [
//       {
//         name: "Metric1",
//         data: generateData(18, {
//           min: 0,
//           max: 90,
//         }),
//       },
//       {
//         name: "Metric2",
//         data: generateData(18, {
//           min: 0,
//           max: 90,
//         }),
//       },
//       {
//         name: "Metric3",
//         data: generateData(18, {
//           min: 0,
//           max: 90,
//         }),
//       },
//       {
//         name: "Metric4",
//         data: generateData(18, {
//           min: 0,
//           max: 90,
//         }),
//       },
//       {
//         name: "Metric5",
//         data: generateData(18, {
//           min: 0,
//           max: 90,
//         }),
//       },
//       {
//         name: "Metric6",
//         data: generateData(18, {
//           min: 0,
//           max: 90,
//         }),
//       },
//       {
//         name: "Metric7",
//         data: generateData(18, {
//           min: 0,
//           max: 90,
//         }),
//       },
//       {
//         name: "Metric8",
//         data: generateData(18, {
//           min: 0,
//           max: 90,
//         }),
//       },
//       {
//         name: "Metric9",
//         data: generateData(18, {
//           min: 0,
//           max: 90,
//         }),
//       },
//     ],
//     options: {
//       chart: {
//         height: 350,
//         type: "heatmap",
//       },
//       dataLabels: {
//         enabled: false,
//       },
//       colors: ["#008FFB"],
//       title: {
//         text: "ThinkGPT HeatMap ",
//       },
//     },
//   });

//   return (
//     <Layout>
//       <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
//         {/* First Card */}
//         <div style={{ flex: "1 1 300px" }}>
//           <Card
//             shadow
//             bordered
//             style={{
//               height: "60%",
//               width: "100%",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "space-between",
//               // border: "1px solid #ccc",
//               boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.1)",
//               backgroundColor: "#262626",
//               borderRadius: "5px"
//             }}
//           >
//             <CardBody style={{ textAlign: "center" }}>
//               <div style={{ fontSize: "2rem", fontFamily: "sans-serif", paddingTop: '20px' }}>Metrics</div>
//               <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
//                 <div style={{ fontSize: "2rem", fontWeight: "bold", marginRight: "5px" }}>100</div>
//                 <div style={{ fontSize: "1rem", cursor: "pointer" }}>▲</div>
//               </div>
//               <div style={{ fontSize: "2rem", color: "white" }}>+100 Today</div>
//             </CardBody>
//             <CardFooter style={{ textAlign: "center" }}></CardFooter>
//           </Card>
//         </div>

//         {/* Second Card */}
//         <div style={{ flex: "1 1 300px" }}>
//           <Card
//             shadow
//             bordered
//             style={{
//               height: "60%",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "space-between",
//               boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
//               backgroundColor: "#262626",
//               borderRadius: "5px"
//             }}
//           >
//             <CardBody style={{ textAlign: "center" }}>
//               <div style={{ fontSize: "1.5rem", fontFamily: 'sans-serif', paddingTop: '20px' }}>Cost</div>
//               <div style={{ fontSize: "2rem", fontWeight: "bold" }}>${cost}</div>
//               <Progress
//                 value={percentageSpent}
//                 max={100}
//                 style={{
//                   background: `linear-gradient(to right, #0070f3 ${percentageSpent}%, #f3f3f3 ${percentageSpent}%)`,
//                   height: "20px",
//                   borderRadius: "10px",
//                   margin: "15px"
//                 }}
//               />
//               <div style={{ fontSize: "1.5rem", color: "white", textAlign: "center", marginTop: "5px" }}>
//                 ${remaining} remaining
//               </div>
//             </CardBody>
//             <CardFooter style={{ textAlign: "center" }}></CardFooter>
//           </Card>
//         </div>

//         {/* Third Card */}
//         <div style={{ flex: "1 1 300px", marginRight: "20px", backgroundColor: "#262626" }}>
//           <Card className="py-4" style={{ height: "300px" }}>
//             <ReactApexChart
//               options={{
//                 ...chartState.barChart.options,
//                 chart: {
//                   ...chartState.barChart.options.chart,
//                   toolbar: {
//                     show: false
//                   }
//                 }
//               }}
//               series={chartState.barChart.series}
//               type="bar"
//               height={220} // Adjust the height here
//               border={false}
//             />
//           </Card>
//         </div>

//       </div>

//       {/* Fourth Card (on a new row) */}
//       <div style={{ display: "flex", justifyContent: "center", marginTop: "-60px", backgroundColor: "#262626" }}>
//         <Card
//           shadow
//           bordered
//           style={{
//             flex: "1 1 90rem", // Adjust width as needed
//             margin: "8px 4px", // Margin on all sides
      
//           }}
//         >
//           <div id="chart">
//             <ReactApexChart
//               options={{
//                 ...chartData.options,
//                 chart: {
//                   ...chartData.options.chart,
//                   toolbar: {
//                     show: false
//                   }
//                 }
//               }}
//               series={chartData.series}
//               type="heatmap"
//               height={350}
              
//             />
//           </div>
//         </Card>
//       </div>

//     </Layout>
//   );
// };

// export default Dashboard;