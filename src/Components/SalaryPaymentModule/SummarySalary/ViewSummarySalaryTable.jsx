import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Grid, Box } from "@mui/material";
import { viewSummarySalaryApi } from "../../../Api/SalaryPaymentModule/SummarySalaryApi/viewSummarySalaryApi";
import { styled } from "@mui/material/styles";
import useStyles from "./ViewSummarySalaryTableStyles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#ab47bc",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#f9fbe7",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#c5cae9",
  },
  "&:hover": {
    backgroundColor: "#fafafa",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function ViewCurruntSalaryTable() {
  const classes = useStyles();
  const [summarySalaryList, setSummarySalaryList] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredRecords, setFilteredRecords] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setSummarySalaryList(await viewSummarySalaryApi());
    }
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredRecords(
      summarySalaryList.filter(
        (record) =>
          record.EmployeeID.toLowerCase().includes(search.toLowerCase()) ||
          record.Month.toLowerCase().includes(search.toLowerCase()) ||
          record.Year.toString().includes(search.toString())
      )
    );
  }, [search, summarySalaryList]);

  return (
    <div>
      <Box className={classes.Box}>
        <Typography className={classes.topic}>
          Summary Salary Details - DirectFN Ltd.
        </Typography>
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
                  className={classes.search}
                  type="text"
                  placeholder="Search"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <br />
            </Grid>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="left">EmployeeID</StyledTableCell>
                    <StyledTableCell align="left">Year</StyledTableCell>
                    <StyledTableCell align="left">Month</StyledTableCell>
                    <StyledTableCell align="left">Basic Salary</StyledTableCell>
                    <StyledTableCell align="left">Vehicle Alw.</StyledTableCell>
                    <StyledTableCell align="left">
                      Internet Alw.
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      Emoloyee EPF
                    </StyledTableCell>
                    <StyledTableCell align="left">Net Salary</StyledTableCell>
                    <StyledTableCell align="left">Company EPF</StyledTableCell>
                    <StyledTableCell align="left">ETF</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredRecords.map((record, idx) => (
                    <StyledTableRow key={idx}>
                      <StyledTableCell align="left">
                        {record.EmployeeID}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {record.Year}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {record.Month}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {record.BasicSalary}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {record.VehicleAllowance}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {record.InternetAllowance}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {record.EmoloyeeEpf}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {record.NetSalary}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {record.CompanyEPF}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {record.ETF}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
