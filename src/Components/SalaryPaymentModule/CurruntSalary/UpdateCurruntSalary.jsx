// import React, { useState } from "react";
// import { makeStyles } from "@mui/styles";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import { Button, Grid, Alert, Stack } from "@mui/material";
// import { updateCurruntSalaryApi } from "../../../Api/SalaryPaymentModule/CurruntSalaryApi/updateCurrentSalaryApi";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     " & > * ": {
//       margin: theme.spacing(0.5),
//       width: "24ch",
//       flexDirection: "column",
//       alignItems: "center",
//     },
//   },
// }));

// export default function UpdateCurruntSalary() {
//   const classes = useStyles();
//   //const [employeeID, setEmployeeID] = useState("");
//   //   const [basicSalary, setBasicSalary] = useState("");
//   //   const [vehicleAllowance, setVehicleAllowance] = useState("");
//   //   const [internetAllowance, setInternetAllowance] = useState("");
//   //EmployeeID, BasicSalary, VehicleAllowance, InternetAllowance
//   const [record, setRecord] = useState({
//     //use state react hook- updates data in textfield
//     EmployeeID: "",
//     BasicSalary: "",
//     VehicleAllowance: "",
//     InternetAllowance: "",
//   });
//   //   const setData=(e)=>{
//   // if (value != null && value != "" && value != undefined){
//   //   setRecord({ ...record, EmployeeID: e.target.value });
//   // }
//   //   }
//   const [updated, setUpdated] = useState(false);
//   const [notUpdate, setNotUpdate] = useState(false);

//   const UpdateCurruntSalaryFunc = () => {
//     updateCurruntSalaryApi(record).then((response) => {
//       if (response.success === true) {
//         record.EmployeeID = "";
//         record.BasicSalary = "";
//         record.VehicleAllowance = "";
//         record.InternetAllowance = "";
//         setUpdated(true);
//         setTimeout(() => {
//           setUpdated(false);
//         }, 4000);
//       } else {
//         setNotUpdate(true);
//         setTimeout(() => {
//           setNotUpdate(false);
//         }, 4000);
//       }
//       console.log(response);
//     });

//     console.log(record);
//   };

//   return (
//     <Box>
//       <Grid marginTop="50px" align="center" width="50" marginBottom="50px">
//         <Button
//           variant="contained"
//           onClick={() => window.open("/salary/currentSalary", "_self")}
//         >
//           View Currut Salary
//         </Button>
//       </Grid>
//       <Grid align="center" width="50">
//         <div>
//           <h3>Update current Salary</h3>
//         </div>

//         <form className={classes.root} noValidate autoComplete="off">
//           <Grid>
//             <TextField
//               label="Employee ID"
//               variant="outlined"
//               id="outlined-basic"
//               vlaue={record.EmployeeID}
//               onChange={(event) => {
//                 setRecord({ ...record, EmployeeID: event.target.value });
//               }}
//             />
//           </Grid>
//           <TextField
//             id="outlined-basic"
//             label="BasicSalary"
//             variant="outlined"
//             value={record.BasicSalary}
//             onChange={(event) => {
//               if (
//                 event.target.value != null &&
//                 event.target.value !== undefined &&
//                 event.target.value !== "" &&
//                 !isNaN(event.target.value)
//               ) {
//                 setRecord({
//                   ...record,
//                   BasicSalary: parseInt(event.target.value),
//                 });
//               }
//             }}
//           />
//           <Grid>
//             <TextField
//               id="outlined-basic"
//               label="Vehicle Allowance"
//               variant="outlined"
//               value={record.VehicleAllowance}
//               onChange={(event) => {
//                 if (
//                   event.target.value != null &&
//                   event.target.value !== undefined &&
//                   event.target.value !== "" &&
//                   !isNaN(event.target.value)
//                 ) {
//                   setRecord({
//                     ...record,
//                     VehicleAllowance: parseInt(event.target.value),
//                   });
//                 }
//               }}
//             />
//           </Grid>
//           <Grid>
//             <TextField
//               id="outlined-basic"
//               label="Internet Allowance"
//               variant="outlined"
//               value={record.InternetAllowance}
//               onChange={(event) => {
//                 if (
//                   event.target.value != null &&
//                   event.target.value !== undefined &&
//                   event.target.value !== "" &&
//                   !isNaN(event.target.value)
//                 ) {
//                   setRecord({
//                     ...record,
//                     InternetAllowance: parseInt(event.target.value),
//                   });
//                 }
//               }}
//             />
//           </Grid>
//           <Grid>
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={UpdateCurruntSalaryFunc}
//             >
//               {" "}
//               Update
//             </Button>
//           </Grid>
//         </form>
//         {updated ? (
//           <Stack sx={{ width: "100%" }} spacing={2}>
//             <Alert severity="success">
//               Currunt Salary record updated successfully!
//             </Alert>{" "}
//           </Stack>
//         ) : null}
//         {notUpdate ? (
//           <Stack sx={{ width: "100%" }} spacing={2}>
//             <Alert severity="error">
//               Currunt Salary record not updated! <strong>Try again</strong>
//             </Alert>{" "}
//           </Stack>
//         ) : null}
//       </Grid>
//     </Box>
//   );
// }

//--------------------------------------------------------------
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Grid, Alert, Stack } from "@mui/material";
import { updateCurruntSalaryApi } from "../../../Api/SalaryPaymentModule/CurruntSalaryApi/updateCurrentSalaryApi";
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

export default function UpdateCurruntSalary() {
  const classes = useStyles();

  const [records, setRecords] = useState({
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
  const [updated, setUpdated] = useState(false);
  const [notUpdate, setNotUpdate] = useState(false);

  const UpdateCurruntSalaryFunc = () => {
    updateCurruntSalaryApi(records).then((response) => {
      if (response.success === true) {
        // record.EmployeeID = "";
        // record.BasicSalary = "";
        // record.VehicleAllowance = "";
        // record.InternetAllowance = "";
        setUpdated(true);
        setTimeout(() => {
          setUpdated(false);
        }, 4000);
      } else {
        setNotUpdate(true);
        setTimeout(() => {
          setNotUpdate(false);
        }, 4000);
      }
      console.log(response);
    });

    console.log(records);
  };

  // const handleChange = (event) => {
  //   setContactInfo({ ...record, [event.target.name]: event.target.value });
  // };

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
          <h3>Update current Salary</h3>
        </div>

        <form className={classes.root} noValidate autoComplete="off">
          <Grid>
            <TextField
              label="Employee ID"
              variant="outlined"
              id="outlined-basic"
              vlaue={records.EmployeeID}
              onChange={(event) => {
                setRecords({ ...records, EmployeeID: event.target.value });
              }}
            />
          </Grid>
          <TextField
            id="outlined-basic"
            label="BasicSalary"
            variant="outlined"
            value={records.BasicSalary}
            onChange={(event) => {
              if (
                event.target.value != null &&
                event.target.value !== undefined &&
                event.target.value !== "" &&
                !isNaN(event.target.value)
              ) {
                setRecords({
                  ...records,
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
              value={records.VehicleAllowance}
              onChange={(event) => {
                if (
                  event.target.value != null &&
                  event.target.value !== undefined &&
                  event.target.value !== "" &&
                  !isNaN(event.target.value)
                ) {
                  setRecords({
                    ...records,
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
              value={records.InternetAllowance}
              onChange={(event) => {
                if (
                  event.target.value != null &&
                  event.target.value !== undefined &&
                  event.target.value !== "" &&
                  !isNaN(event.target.value)
                ) {
                  setRecords({
                    ...records,
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
              onClick={UpdateCurruntSalaryFunc}
            >
              {" "}
              Update
            </Button>
          </Grid>
        </form>
        {updated ? (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="success">
              Currunt Salary record updated successfully!
            </Alert>{" "}
          </Stack>
        ) : null}
        {notUpdate ? (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="error">
              Currunt Salary record not updated! <strong>Try again</strong>
            </Alert>{" "}
          </Stack>
        ) : null}
      </Grid>
    </Box>
  );
}
