import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Button, Box } from "@mui/material/";
import { Grid } from "@mui/material";
import { deleteCurrentSalaryApi } from "../../../../Api/SalaryPaymentModule/CurruntSalaryApi/deleteCurrentSalaryApi";
import { viewCurruntSalaryApi } from "../../../../Api/SalaryPaymentModule/CurruntSalaryApi/viewCurruntSalaryApi";
import { styled } from "@mui/material/styles";
import useStyles from "./ViewCurruntSalaryTableStyles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#e0e0e0",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#e1f5fe",
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

  return (
    <div>
      <Box className={classes.Box}>
        <Typography className={classes.topic}>
          Currunt Salary Details - DirectFN Ltd.
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
                  className={classes.search}
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
                    <StyledTableCell align="left">Update</StyledTableCell>
                    <StyledTableCell align="left">Delete</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredRecords.map((record, idx) => (
                    <StyledTableRow key={idx}>
                      <StyledTableCell align="left">
                        {record.EmployeeID}
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
                      <StyledTableCell align="left">
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
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <Button
                          variant="contained"
                          onClick={() => {
                            deleteCurrentSalaryApi(record.EmployeeID);
                            window.location.reload(false);
                          }}
                        >
                          Delete
                        </Button>
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
