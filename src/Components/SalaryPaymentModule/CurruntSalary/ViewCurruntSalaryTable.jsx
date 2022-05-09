import { useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material/";
import { Grid } from "@mui/material";
//import { viewCurruntSalaryApi } from "../../../Api/SalaryPaymentModule/CurruntSalaryApi/viewCurruntSalaryApi";
// { createCurruntSalaryApi } from "../../../Api/SalaryPaymentModule/CurruntSalaryApi/createCurruntSalaryApi";

// export default function ViewCurruntSalaryTable() {
//   const [curruntSalaryList, setCurruntSalaryList] = useState([]);

//   useEffect(() => {
//     //react hook- calls it self when page reloads and displays
//     axios
//       .get("http://localhost:8070/salary/currentSalary")
//       .then((allRecords) => {
//         setCurruntSalaryList(allRecords.data);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>View Currunt SalaryTable component</h1>
//     </div>
//   );
// }

const ViewCurruntSalaryTable = () => {
  const [curruntSalaryList, setCurruntSalaryList] = useState([]); //

  // const ViewCurruntSalaryTableFunc = () => {
  //   viewCurruntSalaryApi(curruntSalaryList).then((response) => {
  //     console.log(response);
  //   });
  // };

  useEffect(() => {
    axios
      .get("http://localhost:8070/salary/currentSalary")
      .then((allRecords) => {
        setCurruntSalaryList(allRecords.data);
        // console.log("data loaded from currunt salary list - frontend");
        // console.log(allRecords.data);
      });
  }, []);

  return (
    <div>
      <Button
        align="center"
        variant="contained"
        onClick={() => window.open("currentSalary/create", "_self")}
      >
        Create New
      </Button>
      <Grid container sx={{ p: 4 }}>
        <Grid
          item
          sm={12}
          md={12}
          sx={{
            mt: 2,
          }}
        >
          <h3>Currunt Salary Of Employees</h3>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              aria-label="simple table"
              border="0.9"
            >
              <TableHead>
                <TableRow>
                  <TableCell>EmployeeID</TableCell>
                  <TableCell align="right">Basic Salary</TableCell>
                  <TableCell align="right">Vehicle Allowance</TableCell>
                  <TableCell align="right">Internet Allowance</TableCell>
                  <TableCell align="right">Emoloyee EPF</TableCell>
                  <TableCell align="right">Net Salary</TableCell>
                  <TableCell align="right">Company EPF</TableCell>
                  <TableCell align="right">ETF</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {curruntSalaryList.map((salary, key) => (
                  <TableRow
                    key={key}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {salary.EmployeeID}
                    </TableCell>
                    <TableCell align="right">{salary.BasicSalary}</TableCell>
                    <TableCell align="right">
                      {salary.VehicleAllowance}
                    </TableCell>
                    <TableCell align="right">
                      {salary.InternetAllowance}
                    </TableCell>
                    <TableCell align="right">{salary.EmoloyeeEpf}</TableCell>
                    <TableCell align="right">{salary.NetSalary}</TableCell>
                    <TableCell align="right">{salary.CompanyEPF}</TableCell>
                    <TableCell align="right">{salary.ETF}</TableCell>
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        onClick={() =>
                          window.open("/salary/currentSalary/update", "_self")
                        }
                      >
                        Edit
                      </Button>
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        onClick={() => window.open("", "_self")}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
};
export default ViewCurruntSalaryTable;
