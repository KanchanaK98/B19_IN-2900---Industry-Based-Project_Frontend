import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Grid, Alert, Stack } from "@mui/material";
import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { createCurruntSalaryApi } from "../../../Api/SalaryPaymentModule/CurruntSalaryApi/createCurruntSalaryApi";
import { viewCurruntSalaryApi } from "../../../Api/SalaryPaymentModule/CurruntSalaryApi/viewCurruntSalaryApi";
import { viewAllEmployees } from "../../../Api/ReportersManagementModule/EmployeeApi";

const useStyles = makeStyles((theme) => ({
  root: {
    " & > * ": {
      margin: theme.spacing(0.5),
      width: "24ch",
      flexDirection: "column",
      alignItems: "center",
    },
  },
}));

export default function CreateCurruntSalary() {
  const classes = useStyles();

  const [record, setRecord] = useState({
    EmployeeID: "",
    BasicSalary: "",
    VehicleAllowance: "",
    InternetAllowance: "",
  });

  const [added, setadded] = useState(false);
  const [notadded, setnotadded] = useState(false);
  //const [isEmpty, setIsEmpty] = useState(false);

  const CreateCurruntSalaryFunc = async (e) => {
    e.preventDefault();
    // if (
    //   record.EmployeeID == null ||
    //   record.BasicSalary == null ||
    //   record.InternetAllowance !== null ||
    //   record.VehicleAllowance !== null
    // ) {
    //   setIsEmpty(true);
    //   setTimeout(() => {
    //     setIsEmpty(false);
    //   }, 4000);
    // } else
    if (
      record.EmployeeID !== null &&
      record.BasicSalary !== null &&
      record.InternetAllowance !== null &&
      record.VehicleAllowance !== null
    ) {
      //createCurruntSalaryApi(record).then((response) => {
      const response = await createCurruntSalaryApi(record);
      if (response.success === true) {
        record.EmployeeID = "";
        record.BasicSalary = "";
        record.VehicleAllowance = "";
        record.InternetAllowance = "";
        setadded(true);
        setTimeout(() => {
          setadded(false);
        }, 4000);
      }
      if (response.success === false) {
        setnotadded(true);
        setTimeout(() => {
          setnotadded(false);
        }, 4000);
      }
    }
  };

  const [curruntSalaryList, setCurruntSalaryList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      setCurruntSalaryList(await viewCurruntSalaryApi());
    }
    fetchData();
  }, []);

  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setProfiles(await viewAllEmployees());
    }
    fetchData();
  }, []);

  //----------------------------------------------------------------
  // const [open, setOpen] = useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  //----------------------------------------------------------------

  return (
    <Box>
      <Grid marginTop="50px" align="center" width="50" marginBottom="50px">
        <Button
          variant="contained"
          onClick={() => window.open("/salary/currentSalary", "_self")}
        >
          View Currut Salary
        </Button>
      </Grid>
      <Grid align="center" width="50">
        <div>
          <h3>Create current Salary</h3>
        </div>
        <form className={classes.root} noValidate autoComplete="off">
          <Grid>
            <Table>
              <TableHead>
                <TableRow></TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Employee ID*</TableCell>
                  <TableCell align="center">
                    <FormControl>
                      <select
                        label="demo-simple-select-label"
                        onChange={(event) => {
                          setRecord({
                            ...record,
                            EmployeeID: event.target.value,
                          });
                        }}
                      >
                        {profiles.map((option, key) => (
                          <option key={key} value={option.employeeID}>
                            {option.employeeID}
                          </option>
                        ))}
                      </select>
                    </FormControl>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Employee ID*</TableCell>
                  <TableCell align="center">
                    <FormControl>
                      <select
                        label="demo-simple-select-label"
                        onChange={(event) => {
                          if (
                            profiles.employeeID !== curruntSalaryList.EmployeeID
                          ) {
                            profiles.map((option, key) => (
                              <option key={key} value={option.employeeID}>
                                {option.employeeID}
                              </option>
                            ));
                          }
                          setRecord({
                            ...record,
                            EmployeeID: event.target.value,
                          });
                        }}
                      ></select>
                    </FormControl>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
          {/* <Grid>
            <TextField
              label="Employee ID"
              variant="outlined"
              id="outlined-basic"
              vlaue={record.EmployeeID}
              onChange={(event) => {
                setRecord({ ...record, EmployeeID: event.target.value });
              }}
            />
          </Grid> */}
          <Grid>
            <TextField
              id="outlined-basic"
              label="BasicSalary"
              variant="outlined"
              required={true}
              value={record.BasicSalary}
              onChange={(event) => {
                if (
                  event.target.value !== null &&
                  event.target.value !== undefined &&
                  event.target.value !== "" &&
                  !isNaN(event.target.value)
                ) {
                  setRecord({
                    ...record,
                    BasicSalary: parseInt(event.target.value),
                  });
                }
              }}
            />
          </Grid>
          <Grid>
            <TextField
              id="outlined-basic"
              label="Vehicle Allowance"
              variant="outlined"
              padding="45"
              required={true}
              value={record.VehicleAllowance}
              onChange={(event) => {
                if (
                  event.target.value != null &&
                  event.target.value !== undefined &&
                  event.target.value !== "" &&
                  !isNaN(event.target.value)
                ) {
                  setRecord({
                    ...record,
                    VehicleAllowance: parseInt(event.target.value),
                  });
                }
              }}
            />
          </Grid>
          <Grid>
            <TextField
              id="outlined-basic"
              label="Internet Allowance"
              variant="outlined"
              required={true}
              value={record.InternetAllowance}
              onChange={(event) => {
                if (
                  event.target.value != null &&
                  event.target.value !== undefined &&
                  event.target.value !== "" &&
                  !isNaN(event.target.value)
                ) {
                  setRecord({
                    ...record,
                    InternetAllowance: parseInt(event.target.value),
                  });
                }
              }}
            />
          </Grid>

          <label style={{ color: "red", textAlign: "right", fontSize: 12 }}>
            <em>*Required Filed</em>
          </label>

          <Grid>
            <Button
              variant="contained"
              color="primary"
              onClick={CreateCurruntSalaryFunc}
            >
              {" "}
              Create
            </Button>
          </Grid>
        </form>
        <Grid>
          {added ? (
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert severity="success">
                Currunt Salary record successfully added!
              </Alert>{" "}
            </Stack>
          ) : null}
          {notadded ? (
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert severity="error">
                Currunt Salary record not added! <strong>Try again</strong>
              </Alert>{" "}
            </Stack>
          ) : null}
        </Grid>
      </Grid>
    </Box>
  );
}
