import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material/";
import { Grid } from "@mui/material";
import { deleteCurrentSalaryApi } from "../../../Api/SalaryPaymentModule/CurruntSalaryApi/deleteCurrentSalaryApi";
import { viewCurruntSalaryApi } from "../../../Api/SalaryPaymentModule/CurruntSalaryApi/viewCurruntSalaryApi";
import Pagination from "@mui/material/Pagination";
import usePagination from "./.././Pagination";

export default function ViewCurruntSalaryTable() {
  const [curruntSalaryList, setCurruntSalaryList] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredRecords, setFilteredRecords] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setCurruntSalaryList(await viewCurruntSalaryApi());
    }
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredRecords(
      curruntSalaryList.filter((record) =>
        record.EmployeeID.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, curruntSalaryList]);

  //----------------------------------pagination------------------------------
  let [page, setPage] = useState(1);
  const PER_PAGE = 5;

  const count = Math.ceil(filteredRecords.length / PER_PAGE);
  const _DATA = usePagination(filteredRecords, PER_PAGE);

  const handleChange = (p) => {
    setPage(p);
    _DATA.jump(p);
  };
  //----------------------------------------------------------------

  return (
    <div>
      <div className="heading" align="center">
        <h3>Currunt Salary Details - DirectFN Ltd.</h3>
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
              <Button
                align="center"
                variant="contained"
                onClick={() => window.open("currentSalary/create", "_self")}
              >
                Create New
              </Button>
              <input
                type="text"
                placeholder="Search by EmployeeID"
                style={{
                  marginLeft: 50,
                  color: "primary",
                  padding: 5,
                  border: "2px solid #3f51b5",
                  borderRadius: 5,
                }}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <br />
          </Grid>

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
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {filteredRecords.map((record, idx) => ( */}
                {_DATA.currentData().map((record, idx) => (
                  <TableRow
                    key={idx}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {record.EmployeeID}
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
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        onClick={() =>
                          window.open(
                            `/salary/currentSalary/update/${record.EmployeeID}`,
                            "_self"
                          )
                        }
                      >
                        Edit
                      </Button>
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        onClick={() => {
                          deleteCurrentSalaryApi(record.EmployeeID).then(() => {
                            window.location.reload();
                          });
                        }}
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
}
