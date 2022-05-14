// // import React from "react";
// // import { createCurruntSalaryApi } from "../../../Api/SalaryPaymentModule/CurruntSalaryApi/createCurruntSalaryApi";

// // export default function CreateCurruntSalary() {
// //   return (
// //     <div>
// //       <h1>create Salary component</h1>
// //     </div>
// //   );
// //}

import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";
import { createCurruntSalaryApi } from "../../../Api/SalaryPaymentModule/CurruntSalaryApi/createCurruntSalaryApi";

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
  //const [employeeID, setEmployeeID] = useState("");
  //   const [basicSalary, setBasicSalary] = useState("");
  //   const [vehicleAllowance, setVehicleAllowance] = useState("");
  //   const [internetAllowance, setInternetAllowance] = useState("");
  //EmployeeID, BasicSalary, VehicleAllowance, InternetAllowance
  const [record, setRecord] = useState({
    //use state react hook- updates data in textfield
    EmployeeID: "",
    BasicSalary: "",
    VehicleAllowance: "",
    InternetAllowance: "",
  });
  //   const setData=(e)=>{
  // if (value != null && value != "" && value != undefined){
  //   setRecord({ ...record, EmployeeID: e.target.value });
  // }
  //   }

  const CreateCurruntSalaryFunc = () => {
    createCurruntSalaryApi(record).then((response) => {
      console.log(response);
    });

    //install axios
    // let obj = {
    //   EmployeeID: "EE002",
    //   BasicSalary: 100000,
    //   VehicleAllowance: 5000,
    //   InternetAllowance: 1000,
    // };
    // axios
    //   .post("http://localhost:8070/salary/currentSalary/create", record)
    //   .then((response) => {
    //     console.log(response)}).error((err) => {
    //       console.log(err);
    //     });

    // .then(() => {
    //   window.location.reload(false); //do not need to refresh, auto realoads
    // });
    console.log(record);
  };

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
            <TextField
              label="Employee ID"
              variant="outlined"
              id="outlined-basic"
              vlaue={record.EmployeeID}
              onChange={(event) => {
                setRecord({ ...record, EmployeeID: event.target.value });
              }}
            />
          </Grid>
          <TextField
            id="outlined-basic"
            label="BasicSalary"
            variant="outlined"
            value={record.BasicSalary}
            onChange={(event) => {
              if (
                event.target.value != null &&
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
          <Grid>
            <TextField
              id="outlined-basic"
              label="Vehicle Allowance"
              variant="outlined"
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
      </Grid>
    </Box>
  );
}
