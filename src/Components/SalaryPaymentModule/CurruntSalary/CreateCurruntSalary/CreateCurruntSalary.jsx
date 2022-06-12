import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
  Alert,
  AlertTitle,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { createCurruntSalaryApi } from "../../../../Api/SalaryPaymentModule/CurruntSalaryApi/createCurruntSalaryApi";
import { viewCurruntSalaryApi } from "../../../../Api/SalaryPaymentModule/CurruntSalaryApi/viewCurruntSalaryApi";
import { viewAllEmployees } from "../../../../Api/ReportersManagementModule/EmployeeApi";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import Stack from "@mui/material/Stack";
import useStyles from "./CreateCurruntSalaryStyles";

export default function CreateCurruntSalary() {
  const classes = useStyles();
  const [error, seterror] = useState(false);
  const [added, setadded] = useState(false);
  const [profiles, setProfiles] = useState([]);
  const [curruntSalaryList, setCurruntSalaryList] = useState([]);
  const [record, setRecord] = useState({
    EmployeeID: "",
    BasicSalary: "",
    VehicleAllowance: "",
    InternetAllowance: "",
  });

  useEffect(() => {
    async function fetchData() {
      setCurruntSalaryList(await viewCurruntSalaryApi());
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      setProfiles(await viewAllEmployees());
    }
    fetchData();
  }, []);
  //console.log("profiles", profiles);

  const comparedEid = profiles.filter(
    (q1) =>
      !curruntSalaryList.find((q2) => q1.user.employeeID === q2.EmployeeID)
  );
  //console.log("comparedeid", comparedEid);

  const CreateCurruntSalaryFunc = async (e) => {
    console.log("CreateCurruntSalaryFunc");
    e.preventDefault();
    if (
      record.EmployeeID &&
      record.BasicSalary &&
      record.InternetAllowance &&
      record.VehicleAllowance
    ) {
      const response = await createCurruntSalaryApi(record);
      if (response.success === true) {
        console.log("success");
        setadded(true);
        setTimeout(() => {
          setadded(false);
        }, 2000);
      }
    } else {
      console.log("error");
      seterror(true);
      setTimeout(() => {
        seterror(false);
      }, 2000);
    }
  };

  return (
    <Box>
      <Grid item sm={12} md={12} className={classes.createButton}>
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={() => window.open("/salary/currentSalary", "_self")}
        >
          View Salarysheets
        </Button>
      </Grid>

      <Paper elevation={5} className={classes.form}>
        <Grid container>
          <Grid item sm={12} md={12} className={classes.formHeader}>
            <AttachMoneyRoundedIcon />
            <Typography variant="h4">Create New Salarysheet</Typography>
          </Grid>

          <Grid item sm={12} md={12}>
            <Divider variant="middle" />
            <Divider variant="middle" />
          </Grid>

          <Grid item sm={12} md={12}>
            <form autoComplete="off" onSubmit={CreateCurruntSalaryFunc}>
              <Grid container>
                <Grid item sm={12} md={6} className={classes.inputs}>
                  <Grid container>
                    <Grid item sm={4} md={4} className={classes.texFieldLabel}>
                      <InputLabel>Employee ID</InputLabel>
                    </Grid>
                    <FormControl sx={{ m: 2, minWidth: 120 }}>
                      <InputLabel id="demo-simple-select-helper-label">
                        EmpID
                      </InputLabel>

                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="EmpID"
                        fullWidth
                        value={record.EmployeeID}
                        onChange={(event) => {
                          setRecord({
                            ...record,
                            EmployeeID: event.target.value,
                          });
                        }}
                      >
                        <MenuItem>None</MenuItem>
                        {comparedEid.map((option, key) => (
                          <MenuItem value={option.user.employeeID} key={key}>
                            {option.user.employeeID}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid container>
                    <Grid item sm={4} md={4} className={classes.texFieldLabel}>
                      <InputLabel>Basic Salary</InputLabel>
                    </Grid>
                    <TextField
                      label="BasicSalary"
                      variant="outlined"
                      name="BasicSalary"
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
                      fullWidth
                    />
                  </Grid>
                </Grid>

                <Grid item sm={12} md={6} className={classes.inputs}>
                  <Grid container>
                    <Grid item sm={4} md={4} className={classes.texFieldLabel}>
                      <InputLabel>Internet Allowance</InputLabel>
                    </Grid>
                    <TextField
                      label="Internet Allowance"
                      variant="outlined"
                      name="InternetAllowance"
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
                      fullWidth
                    />
                  </Grid>
                  <Grid container>
                    <Grid item sm={4} md={4} className={classes.texFieldLabel}>
                      <InputLabel>Vehicle Allowance</InputLabel>
                    </Grid>
                    <TextField
                      label="VehicleAllowance"
                      variant="outlined"
                      name="Vehicle Allowance"
                      fullWidth
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
                </Grid>
              </Grid>
              <Grid item sm={12} md={12} className={classes.createButton}>
                <Button
                  color="primary"
                  variant="contained"
                  size="large"
                  type="submit"
                >
                  Create
                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Paper>
      {added ? (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            The new Salarysheet for {record.EmployeeID} is successfully created!
          </Alert>{" "}
        </Stack>
      ) : null}
      {error ? (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert variant="filled" severity="error">
            Please enter all the details and Try again!
          </Alert>
        </Stack>
      ) : null}
    </Box>
  );
}
