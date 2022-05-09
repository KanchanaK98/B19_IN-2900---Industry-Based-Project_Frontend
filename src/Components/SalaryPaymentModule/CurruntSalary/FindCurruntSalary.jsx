import React from "react";
import { findCurrentSalaryAPi } from "../../../Api/SalaryPaymentModule/CurruntSalaryApi/findCurrentSalaryAPi";

export default function FindCurruntSalary() {
  return (
    <div>
      <h6>Find currunt Salary table from Component</h6>
    </div>
  );
}
// }
// import { useState, useEffect } from "react";
// import axios from "axios";
// //import { findCurrentSalaryAPi } from "../../../Api/SalaryPaymentModule/CurruntSalaryApi/findCurrentSalaryAPi";
// import IconButton from "@mui/material/IconButton";
// import SearchIcon from "@mui/icons-material/Search";
// import TextField from "@mui/material/TextField";

// export default function FindCurruntSalary() {
//   const [searchQuery, setSearchQuery] = useState("");
//   console.log("passed");

//   const [data] = useEffect(() => {
//     axios
//       .get("http://localhost:8070/salary/currentSalary")
//       .then((allRecords) => {
//         setSearchQuery(allRecords.data);
//         // console.log("data loaded from currunt salary list - frontend");
//       });
//   }, []);
//   console.log(data);
//   const filterData = (query, data) => {
//     if (!query) {
//       return data;
//     } else {
//       return data.filter((d) => d.toLowerCase().includes(query));
//     }
//   };
//   const dataFiltered = filterData(searchQuery, data);
//   console.log(data);

//   //<div>
//   //   <h1>Find currunt Salary table from Component</h1>
//   // </div>

//   const SearchBar = ({ setSearchQuery }) => (
//     <form>
//       <TextField
//         id="search-bar"
//         className="text"
//         onInput={(e) => {
//           setSearchQuery(e.target.value);
//         }}
//         label="Enter a city name"
//         variant="outlined"
//         placeholder="Search..."
//         size="small"
//       />
//       <IconButton type="submit" aria-label="search">
//         <SearchIcon style={{ fill: "blue" }} />
//       </IconButton>
//     </form>
//   );

//   return (
//     <div
//       style={{
//         display: "flex",
//         alignSelf: "center",
//         justifyContent: "center",
//         flexDirection: "column",
//         padding: 20,
//       }}
//     >
//       <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
//       <div style={{ padding: 3 }}>
//         {dataFiltered.map((d) => (
//           <div
//             className="text"
//             style={{
//               padding: 5,
//               justifyContent: "normal",
//               fontSize: 20,
//               color: "blue",
//               margin: 1,
//               width: "250px",
//               BorderColor: "green",
//               borderWidth: "10px",
//             }}
//             key={d._id}
//           >
//             {d}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
