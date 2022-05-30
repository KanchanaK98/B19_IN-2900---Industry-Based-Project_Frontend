import { useState, useEffect } from "react";
import { findEmployeeSalaryApi } from "../../../Api/SalaryPaymentModule/EmployeeSalaryApi/findEmployeeSalaryApi";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material/";
import Pagination from "@mui/material/Pagination";
import usePagination from "./.././Pagination";

export default function FindEmployeeSalary() {
  const [employeeSalaryList, setEmployeeSalaryList] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredRecords, setFilteredRecords] = useState([]);
  const { EmployeeID } = useParams();

  useEffect(() => {
    async function fetchData() {
      setEmployeeSalaryList(await findEmployeeSalaryApi(EmployeeID));
    }
    fetchData();
  }, [EmployeeID]);

  useEffect(() => {
    setFilteredRecords(
      employeeSalaryList.filter(
        (record) =>
          record.EmployeeID.toLowerCase().includes(search.toLowerCase()) ||
          record.Month.toLowerCase().includes(search.toLowerCase()) ||
          record.Year.toString().includes(search.toString())
      )
    );
  }, [search, employeeSalaryList]);

  //----------------------------------pagination------------------------------
  let [page, setPage] = useState(1);
  const PER_PAGE = 10;

  const count = Math.ceil(filteredRecords.length / PER_PAGE);
  const _DATA = usePagination(filteredRecords, PER_PAGE);

  //   const handleChange = (e,p) => {
  const handleChange = (p) => {
    setPage(p);
    _DATA.jump(p);
  };
  //----------------------------------------------------------------

  return (
    <div>
      <div className="heading" align="center">
        <h3>Previous Salary Details</h3>
      </div>

      <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
      <Grid container sx={{ p: 4 }}>
        <Grid
          item
          sm={12}
          md={12}
          sx={{
            mt: 2,
          }}
        >
          <Grid>
            <div style={{ marginLeft: 10 }}>
              <input
                type="text"
                placeholder="Search"
                style={{
                  marginLeft: 20,
                  padding: 5,
                  border: "3px solid #3f51b5",
                  borderRadius: 5,
                }}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <br />
          </Grid>

          <Button
            variant="contained"
            onClick={() =>
              window.open(`/salary/employeeSalary/${EmployeeID}`, "_self")
            }
          >
            Currunt Salary Details
          </Button>

          <TableContainer component={Paper}>
            <Stack spacing={2}></Stack>
            <Table
              sx={{ minWidth: 650 }}
              aria-label="simple table"
              border="0.9"
            >
              <TableHead>
                <TableRow>
                  <TableCell>EmployeeID</TableCell>
                  <TableCell>Year</TableCell>
                  <TableCell>Month</TableCell>
                  <TableCell align="right">Basic Salary</TableCell>
                  <TableCell align="right">Vehicle Allowance</TableCell>
                  <TableCell align="right">Internet Allowance</TableCell>
                  <TableCell align="right">Emoloyee EPF</TableCell>
                  <TableCell align="right">Net Salary</TableCell>
                  <TableCell align="right">Company EPF</TableCell>
                  <TableCell align="right">ETF</TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {_DATA.currentData().map((record, idx) => (
                  <TableRow
                    key={idx}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {record.EmployeeID}
                    </TableCell>

                    <TableCell component="th" scope="row">
                      {record.Year}
                    </TableCell>

                    <TableCell component="th" scope="row">
                      {record.Month}
                    </TableCell>

                    <TableCell align="right">{record.BasicSalary}</TableCell>

                    <TableCell align="right">
                      {record.VehicleAllowance}
                    </TableCell>

                    <TableCell align="right">
                      {record.InternetAllowance}
                    </TableCell>

                    <TableCell align="right">{record.EmoloyeeEpf}</TableCell>
                    <TableCell align="right">{record.NetSalary}</TableCell>
                    <TableCell align="right">{record.CompanyEPF}</TableCell>
                    <TableCell align="right">{record.ETF}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
}
