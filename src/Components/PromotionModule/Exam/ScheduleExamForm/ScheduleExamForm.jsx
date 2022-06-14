// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { scheduleExamApi } from "../../../Api/PromotionModule/ExamApi/scheduleExamApi";

// const ScheduleExamForm = () => {
//   const [Exam, setExam] = useState([]);
//   const { EmployeeID } = useParams();
//   useEffect(() => {
//     async function fetchData() {
//       setExam(await scheduleExamApi(EmployeeID, Exam));
//     }
//     fetchData();
//   }, []);
//   console.log(Exam);
//   return <div>from schedule exam</div>;
// };
// export default ScheduleExamForm;

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
  Stack,
  AlertTitle,
} from "@mui/material";
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useParams } from "react-router-dom";
import { scheduleExamApi } from "../../../../Api/PromotionModule/ExamApi/scheduleExamApi";
import { viewAllPapersListApi } from "../../../../Api/PromotionModule/PaperApi/viewAllPapersListApi";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import useStyles from "./ScheduleExamFormStyles";

function ScheduleExamForm() {
  const classes = useStyles();

  const [ExamID, setExamID] = useState("");
  const [ExamName, setExamName] = useState("");
  const [DateScheduled, setDateScheduled] = useState(null);
  const [JobRole, setJobRole] = useState("");
  const [PaperID, setPaperID] = useState("");
  const [error, seterror] = useState(false);
  const [added, setadded] = useState(false);
  const [Status, setStatus] = useState([]);

  const [PaperList, setPaperList] = useState([]);

  const { EmployeeID } = useParams();

  useEffect(() => {
    async function fetchData() {
      setPaperList(await viewAllPapersListApi());
    }
    fetchData();
  }, []);

  const sendData = async (e) => {
    e.preventDefault();
    //ExamID, ExamName, DateScheduled, JobRole, PaperID

    const examDetails = {
      ExamID,
      ExamName,
      DateScheduled,
      JobRole,
      PaperID,
      Status,
    };
    if (ExamID && ExamName && DateScheduled && JobRole && PaperID && Status) {
      const response = await scheduleExamApi(EmployeeID, examDetails);
      if (response.success === true) {
        setExamID("");
        setExamName("");
        setDateScheduled("");
        setJobRole("");
        setPaperID("");
        setStatus("");
        setadded(true);
        setTimeout(() => {
          setadded(false);
        }, 2000);
      }
    } else {
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
          className={classes.Button}
          variant="contained"
          size="large"
          onClick={() =>
            window.open(
              ` /promotion/evaluation/exam/viewExam/${EmployeeID}`,
              "_self"
            )
          }
        >
          View All Evaluation Exams
        </Button>
      </Grid>

      <Paper elevation={5} className={classes.form}>
        <Grid container>
          <Grid item sm={12} md={12} className={classes.formHeader}>
            <EventNoteRoundedIcon />
            <Typography variant="h4">Schedule New Exam</Typography>
          </Grid>

          <Grid item sm={12} md={12}>
            <Divider variant="middle" />
            <Divider variant="middle" />
          </Grid>

          <Grid item sm={12} md={12}>
            <form autoComplete="off" onSubmit={sendData}>
              <Grid container>
                <Grid item sm={12} md={6} className={classes.inputs}>
                  <Grid container>
                    <Grid item sm={4} md={4} className={classes.texFieldLabel}>
                      <InputLabel>Exam ID</InputLabel>
                    </Grid>
                    <TextField
                      label="ID"
                      variant="outlined"
                      name="ExamID"
                      value={ExamID}
                      onChange={(e) => {
                        setExamID(e.target.value);
                      }}
                      fullWidth
                    />
                  </Grid>

                  <Grid container>
                    <Grid item sm={4} md={4} className={classes.texFieldLabel}>
                      <InputLabel>Job Role</InputLabel>
                    </Grid>
                    <FormControl sx={{ m: 2, minWidth: 120 }}>
                      <InputLabel id="demo-simple-select-helper-label">
                        Job Role
                      </InputLabel>

                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={JobRole}
                        label="Job Role"
                        onChange={(e) => {
                          setJobRole(e.target.value);
                        }}
                      >
                        {/* <MenuItem value="SE">SE</MenuItem>
                        <MenuItem value="BA">BA</MenuItem>
                        <MenuItem value="QA">QA</MenuItem>
                        <MenuItem value="HR">HR</MenuItem>
                        <MenuItem value="SSE">SSE</MenuItem> */}
                        <MenuItem value="Software Engineer">
                          Software Engineer
                        </MenuItem>
                        <MenuItem value="Senior Software Engineer">
                          Senior Software Engineer
                        </MenuItem>
                        <MenuItem value="HR Manager">HR Manager</MenuItem>
                        <MenuItem value="Associate Software Engineer">
                          Associate Software Engineer
                        </MenuItem>
                        <MenuItem value="Software Architect">
                          Software Architect
                        </MenuItem>
                        <MenuItem value="Tech Lead">Tech Lead</MenuItem>
                        <MenuItem value="UI/UX Designer">
                          UI/UX Designer
                        </MenuItem>
                        <MenuItem value="Business Analyst">
                          Business Analyst
                        </MenuItem>
                        <MenuItem value="Product Manager">
                          Product Manager
                        </MenuItem>
                      </Select>
                      <FormHelperText>
                        Job Role for which exam is scheduling to
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid container>
                    <Grid item sm={4} md={4} className={classes.texFieldLabel}>
                      <InputLabel>Paper ID</InputLabel>
                    </Grid>
                    <FormControl sx={{ m: 2, minWidth: 120 }}>
                      <InputLabel id="demo-simple-select-helper-label">
                        PaperID
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={PaperID}
                        label="PaperID"
                        onChange={(e) => {
                          setPaperID(e.target.value);
                        }}
                      >
                        {PaperList.map((option, key) => (
                          <MenuItem value={option.PaperID} key={key}>
                            {option.PaperID}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>

                <Grid item sm={12} md={6} className={classes.inputs}>
                  <Grid container>
                    <Grid item sm={4} md={4} className={classes.texFieldLabel}>
                      <InputLabel>Date Scheduled</InputLabel>
                    </Grid>
                    {/* <TextField
                      label="Date Scheduled"
                      
                      name="DateScheduled"
                      value={DateScheduled}
                      onChange={(e) => {
                        setDateScheduled(e.target.value);
                      }}
                      fullWidth
                    /> */}
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        label="Schedule date"
                        variant="outlined"
                        value={DateScheduled}
                        onChange={(date) => {
                          setDateScheduled(date);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                    {/* value.format("YYYY-MM-DD HH:mm:ss"), "Asia/Singapore" */}
                  </Grid>

                  <Grid container>
                    <Grid item sm={4} md={4} className={classes.texFieldLabel}>
                      <InputLabel>Exam Name</InputLabel>
                    </Grid>
                    <TextField
                      label="Exam Name"
                      variant="outlined"
                      name="ExamName"
                      value={ExamName}
                      onChange={(e) => {
                        setExamName(e.target.value);
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid container>
                    <Grid item sm={4} md={4} className={classes.texFieldLabel}>
                      <InputLabel>Exam Status</InputLabel>
                    </Grid>
                    <TextField
                      label="Exam Status"
                      variant="outlined"
                      name="ExamName"
                      value="Pending"
                      disabled
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sm={12} md={12} className={classes.createButton}>
                <Button
                  className={classes.Button}
                  variant="contained"
                  size="large"
                  type="submit"
                >
                  Schedule
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
            The new Exam is successfully scheduled!
          </Alert>{" "}
        </Stack>
      ) : null}
      {error ? (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert variant="filled" severity="error">
            Please enter all the details!
          </Alert>
        </Stack>
      ) : null}
    </Box>
  );
}

export default ScheduleExamForm;
