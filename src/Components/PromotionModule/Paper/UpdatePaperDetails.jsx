import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";
import { updatePaperDetailsApi } from "../../../Api/PromotionModule/QuestionApi/viewAllQuestionsApi";

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

export default function UpdatePaperDetails() {
  const classes = useStyles();
  const [record, setRecord] = useState({
    PaperID: "",
    PaperType: "",
    PaperName: "",
  });
  //   const setData=(e)=>{
  // if (value != null && value != "" && value != undefined){
  //   setRecord({ ...record, EmployeeID: e.target.value });
  // }
  //   }

  const UpdatePaperDetails = () => {
    console.log("call UpdatePaperDetails");
    updatePaperDetailsApi(record).then((response) => {
      console.log("from", response);
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

  //   const BacktoAllPaperListFunc = () => {
  //     console.log("back is called");
  //     viewAllQuestionsApi().then((response) => {
  //       console.log("from Back", response);
  //     });
  //   };

  return (
    <Box>
      <Grid align="center" width="50">
        <div>
          <h3>Create Questions</h3>
        </div>

        <form className={classes.root} noValidate autoComplete="off">
          <Grid>
            <TextField
              type="text"
              label="Paper ID"
              variant="outlined"
              id="outlined-basic"
              vlaue={record.PaperID}
              onChange={(event) => {
                setRecord({ ...record, PaperID: event.target.value });
              }}
            />
          </Grid>
          <TextField
            type="text"
            id="outlined-basic"
            label="Paper Type"
            variant="outlined"
            value={record.PaperType}
            onChange={(event) =>
              setRecord({
                ...record,
                PaperType: event.target.value,
              })
            }
          />
          <Grid>
            <TextField
              type="text"
              id="outlined-basic"
              label="Paper Name"
              variant="outlined"
              value={record.PaperName}
              onChange={(event) =>
                setRecord({
                  ...record,
                  PaperName: event.target.value,
                })
              }
            />
          </Grid>
          <Button
            variant="contained"
            color="primary"
            onClick={UpdatePaperDetails}
          >
            {" "}
            Create
          </Button>
          {/* <Button
            variant="contained"
            color="primary"
            onClick={BacktoAllPaperListFunc}
          >
            {" "}
            View All Questions
          </Button> */}
        </form>
      </Grid>
    </Box>
  );
}
