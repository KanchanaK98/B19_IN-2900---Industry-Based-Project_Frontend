// import React from "react";
// import { viewSummarySalaryApi } from "../../../Api/SalaryPaymentModule/SummarySalaryApi/viewSummarySalaryApi";

// export default function ViewSummarySalaryTable() {
//   return (
//     <div>
//       <h1>View summary Salary table from Component</h1>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import axios from "axios";
import { viewSummarySalaryApi } from "../../../Api/SalaryPaymentModule/SummarySalaryApi/viewSummarySalaryApi";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ViewSummarySalaryTable = () => {
  // useStyles();po
  const [summarySalaryList, setSummarySalaryList] = useState([]); //

  useEffect(() => {
    //react hook- calls it self when page reloads and displays
    axios
      .get("http://localhost:8070/salary/summarySalary")
      .then((allRecords) => {
        setSummarySalaryList(allRecords.data);
        console.log("data loaded from currunt salary list - frontend");
        console.log(allRecords.data);
      });
  }, []); //

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>EmployeeID</TableCell>
            <TableCell align="right">Year</TableCell>
            <TableCell align="right">Month</TableCell>
            <TableCell align="right">BasicSalary</TableCell>
            <TableCell align="right">VehicleAllowance</TableCell>
            <TableCell align="right">InternetAllowance</TableCell>
            <TableCell align="right">EmoloyeeEpf</TableCell>
            <TableCell align="right">NetSalary</TableCell>
            <TableCell align="right">CompanyEPF</TableCell>
            <TableCell align="right">ETF</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {summarySalaryList.map((salary, key) => (
            <TableRow
              key={key}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {salary.EmployeeID}
              </TableCell>
              <TableCell align="right">{salary.Year}</TableCell>
              <TableCell align="right">{salary.Month}</TableCell>
              <TableCell align="right">{salary.BasicSalary}</TableCell>
              <TableCell align="right">{salary.VehicleAllowance}</TableCell>
              <TableCell align="right">{salary.InternetAllowance}</TableCell>
              <TableCell align="right">{salary.EmoloyeeEpf}</TableCell>
              <TableCell align="right">{salary.NetSalary}</TableCell>
              <TableCell align="right">{salary.CompanyEPF}</TableCell>
              <TableCell align="right">{salary.ETF}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default ViewSummarySalaryTable;
