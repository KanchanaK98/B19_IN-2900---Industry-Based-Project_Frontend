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
import FormControl from "@mui/material/FormControl";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import Stack from "@mui/material/Stack";
import useStyles from "./UpdateCurruntSalaryStyles";
import { updateCurruntSalaryApi } from "../../../../Api/SalaryPaymentModule/CurruntSalaryApi/updateCurrentSalaryApi";
import { useParams } from "react-router-dom";
import { viewEmployeeSalaryApi } from "../../../../Api/SalaryPaymentModule/EmployeeSalaryApi/viewEmployeeSalaryApi";

export default function CreateCurruntSalary() {
  const classes = useStyles();
  const [error, seterror] = useState(false);
  const [added, setadded] = useState(false);

  const [record, setRecord] = useState({
    EmployeeID: "",
    BasicSalary: "",
    VehicleAllowance: "",
    InternetAllowance: "",
  });

  const { EmployeeID } = useParams();
  console.log(EmployeeID);

  useEffect(() => {
    async function fetchData() {
      const result = await viewEmployeeSalaryApi(EmployeeID);
      setRecord(result[0], record);
    }
    fetchData();
  }, []);

  const UpdateCurruntSalaryFunc = async (e) => {
    console.log("updateCurruntSalaryFunc");
    e.preventDefault();
    if (
      record.EmployeeID &&
      record.BasicSalary &&
      record.InternetAllowance &&
      record.VehicleAllowance
    ) {
      const response = updateCurruntSalaryApi(record.EmployeeID, record).then(
        (response) => {
          if (response.success === true) {
            console.log("success");
            setadded(true);
            setTimeout(() => {
              setadded(false);
            }, 4000);
          } else {
            console.log("error");
            seterror(true);
            setTimeout(() => {
              seterror(false);
            }, 4000);
          }
        }
      );
      console.log("response", response);
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
            <Typography variant="h4">
              Update Salarysheet of {EmployeeID}
            </Typography>
          </Grid>

          <Grid item sm={12} md={12}>
            <Divider variant="middle" />
            <Divider variant="middle" />
          </Grid>

          <Grid item sm={12} md={12}>
            <form autoComplete="off" onSubmit={UpdateCurruntSalaryFunc}>
              <Grid container>
                <Grid item sm={12} md={6} className={classes.inputs}>
                  <Grid container>
                    <Grid item sm={4} md={4} className={classes.texFieldLabel}>
                      <InputLabel>Employee ID</InputLabel>
                    </Grid>
                    <FormControl sx={{ m: 2, minWidth: 120 }}>
                      <TextField
                        label="Employee ID"
                        variant="outlined"
                        name="EmpID"
                        value={record.EmployeeID}
                        disabled
                        fullWidth
                      />
                    </FormControl>
                  </Grid>{" "}
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
                  Update
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
            Salarysheet of {record.EmployeeID} is successfully updated!
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
