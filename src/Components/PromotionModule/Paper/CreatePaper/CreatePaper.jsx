// import React, { useState } from "react";
// import { makeStyles } from "@mui/styles";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import { Button, Grid } from "@mui/material";
// import { createPaperApi } from "../../../Api/PromotionModule/PaperApi/createPaperApi";

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

// export default function CreatePaper() {
//   const classes = useStyles();
//   const [record, setRecord] = useState({
//     PaperID: "",
//     PaperName: "",
//     PaperType: "",
//     DateCreated: "",
//     questions: [],
//   });

//   const CreatePaperFunc = () => {
//     console.log("call CreatePaperFunc");
//     createPaperApi(record).then((response) => {
//       console.log("from", response);
//     });

//     //install axios
//     // let obj = {
//     //   EmployeeID: "EE002",
//     //   BasicSalary: 100000,
//     //   VehicleAllowance: 5000,
//     //   InternetAllowance: 1000,
//     // };
//     // axios
//     //   .post("http://localhost:8070/salary/currentSalary/create", record)
//     //   .then((response) => {
//     //     console.log(response)}).error((err) => {
//     //       console.log(err);
//     //     });

//     // .then(() => {
//     //   window.location.reload(false); //do not need to refresh, auto realoads
//     // });
//     console.log(record);
//   };

//   // const BacktoAllQuestionsFunc = () => {
//   //   console.log("back is called");
//   //   viewAllQuestionsApi().then((response) => {
//   //     console.log("from Back", response);
//   //   });
//   // };

//   return (
//     <Box>
//       <Grid align="center" width="50">
//         <div>
//           <h3>Create New Paper</h3>
//         </div>

//         <form className={classes.root} noValidate autoComplete="off">
//           <Grid>
//             <TextField
//               type="text"
//               label="Paper ID"
//               variant="outlined"
//               id="outlined-basic"
//               vlaue={record.PaperID}
//               onChange={(event) => {
//                 setRecord({ ...record, PaperID: event.target.value });
//               }}
//             />
//           </Grid>
//           <TextField
//             type="text"
//             id="outlined-basic"
//             label="Paper Name"
//             variant="outlined"
//             value={record.PaperName}
//             onChange={(event) =>
//               setRecord({
//                 ...record,
//                 PaperName: event.target.value,
//               })
//             }
//           />
//           <Grid>
//             <TextField
//               type="text"
//               id="outlined-basic"
//               label="Paper Type"
//               variant="outlined"
//               value={record.PaperType}
//               onChange={(event) =>
//                 setRecord({
//                   ...record,
//                   PaperType: event.target.value,
//                 })
//               }
//             />
//           </Grid>
//           <Grid>
//             <TextField
//               type="text"
//               id="outlined-basic"
//               label="Questions"
//               variant="outlined"
//               value={record.questions}
//               onChange={(event) =>
//                 setRecord({
//                   ...record,
//                   questions: event.target.value,
//                 })
//               }
//             />
//           </Grid>
//           <Button variant="contained" color="primary" onClick={CreatePaperFunc}>
//             {" "}
//             Create
//           </Button>
//           {/* <Button
//             variant="contained"
//             color="primary"
//             onClick={BacktoAllQuestionsFunc}
//           >
//             {" "}
//             View All Questions
//           </Button> */}
//         </form>
//       </Grid>
//     </Box>
//   );
// }

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
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import ListItemText from "@mui/material/ListItemText";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import Select from "@mui/material/Select";
import { createPaperApi } from "../../../../Api/PromotionModule/PaperApi/createPaperApi";
import { viewAllQuestionsApi } from "../../../../Api/PromotionModule/QuestionApi/viewAllQuestionsApi";
import useStyles from "./CreatePaperStyles";

function ScheduleExamForm() {
  const classes = useStyles();
  const [paperId, setPaperID] = useState("");
  const [papername, setPaperName] = useState("");
  const [paperType, setPaperType] = useState("");
  const [QuestionList, setQuestionList] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [error, seterror] = useState(false);
  const [added, setadded] = useState(false);
  const [fill, setFill] = useState(false);

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  //const { EmployeeID } = useParams();

  // useEffect(() => {
  //   async function fetchData() {
  //     setPaperList(await viewAllPapersListApi());
  //   }
  //   fetchData();
  // }, []);
  useEffect(() => {
    async function fetchData() {
      setQuestionList(await viewAllQuestionsApi());
    }
    fetchData();
  }, []);

  console.log("paperId", paperId);
  console.log("papername", papername);
  console.log("paperType", paperType);
  console.log("selectedQuestions", selectedQuestions);

  const CreatePaperFunc = async (e) => {
    e.preventDefault();
    const newPaper = {
      paperId,
      papername,
      paperType,
      selectedQuestions,
    };
    console.log("record", newPaper);
    if (paperId && papername && paperType && selectedQuestions) {
      const response = await createPaperApi(newPaper);
      console.log("response", response);
      if (response.success === true) {
        setadded(true);
        setTimeout(() => {
          setadded(false);
        }, 2000);
      } else {
        seterror(true);
        setTimeout(() => {
          seterror(false);
        }, 2000);
      }
    } else {
      setFill(true);
      setTimeout(() => {
        setFill(false);
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
          onClick={() => window.open("/promotion/Paper", "_self")}
        >
          View All Papers
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
            <form autoComplete="off" onSubmit={CreatePaperFunc}>
              <Grid container>
                <Grid item sm={12} md={6} className={classes.inputs}>
                  <Grid container>
                    <Grid item sm={4} md={4} className={classes.texFieldLabel}>
                      <InputLabel>Paper Id</InputLabel>
                    </Grid>
                    <TextField
                      label="ID"
                      variant="outlined"
                      name="paperId"
                      value={paperId}
                      onChange={(e) => {
                        setPaperID(e.target.value);
                      }}
                      fullWidth
                    />
                  </Grid>

                  <Grid container>
                    <Grid item sm={4} md={4} className={classes.texFieldLabel}>
                      <InputLabel>Paper Type</InputLabel>
                    </Grid>
                    <FormControl sx={{ m: 2, minWidth: 120 }}>
                      <InputLabel id="demo-simple-select-helper-label">
                        Paper Type
                      </InputLabel>

                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={paperType}
                        fullWidth
                        label="papername"
                        onChange={(e) => {
                          setPaperType(e.target.value);
                        }}
                      >
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
                    </FormControl>
                  </Grid>

                  <Grid container>
                    <Grid item sm={4} md={4} className={classes.texFieldLabel}>
                      <InputLabel>Paper Name</InputLabel>
                    </Grid>
                    <TextField
                      label="Paper Name"
                      variant="outlined"
                      name="PaperName"
                      value={papername}
                      onChange={(e) => {
                        setPaperName(e.target.value);
                      }}
                      fullWidth
                    />
                  </Grid>
                </Grid>

                <Grid item sm={12} md={6} className={classes.inputs}>
                  <Grid container>
                    <Grid item sm={4} md={4} className={classes.texFieldLabel}>
                      <InputLabel>Questions</InputLabel>
                    </Grid>
                    <FormControl sx={{ m: 1, width: 600 }}>
                      <InputLabel id="demo-multiple-checkbox-label">
                        Questions
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={selectedQuestions}
                        // onChange={handleChange}
                        input={<OutlinedInput label="Tag" />}
                        renderValue={(selected) => selected.join(", ")}
                        MenuProps={MenuProps}
                        onChange={(e) => {
                          setSelectedQuestions(e.target.value);
                        }}
                      >
                        {QuestionList.map((q, key) => (
                          <MenuItem key={key} value={q.QuestionID}>
                            <Checkbox
                              checked={
                                selectedQuestions.indexOf(q.QuestionID) > -1
                              }
                            />
                            <ListItemText
                              primary={
                                [q.QuestionBody] +
                                [" ("] +
                                [q.QuestionCatogory] +
                                [")"]
                              }
                            />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
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
            Please Try again!
          </Alert>
        </Stack>
      ) : null}
      {fill ? (
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
