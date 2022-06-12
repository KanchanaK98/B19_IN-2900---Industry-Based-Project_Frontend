// import React, { useState } from "react";
// import { makeStyles } from "@mui/styles";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import { Button, Grid } from "@mui/material";
// import { createQuestionApi } from "../../../Api/PromotionModule/QuestionApi/createQuestionApi";
// import { viewAllQuestionsApi } from "../../../Api/PromotionModule/QuestionApi/viewAllQuestionsApi";

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

// export default function CreateQuestions() {
//   const classes = useStyles();
//   const [record, setRecord] = useState({
//     QuestionID: "",
//     QuestionCatogory: "",
//     QuestionBody: "",
//   });

//   const CreateQuestionsFunc = () => {
//     console.log("call CreateQuestionsFunc");
//     createQuestionApi(record).then((response) => {
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

//   const BacktoAllQuestionsFunc = () => {
//     console.log("back is called");
//     viewAllQuestionsApi().then((response) => {
//       console.log("from Back", response);
//     });
//   };

//   return (
//     <Box>
//       <Grid align="center" width="50%">
//         <div>
//           <h3>Create Questions</h3>
//         </div>

//         <form className={classes.root} noValidate autoComplete="off">
//           <Grid>
//             <TextField
//               type="text"
//               label="Question ID"
//               variant="outlined"
//               id="outlined-basic"
//               vlaue={record.QuestionID}
//               onChange={(event) => {
//                 setRecord({ ...record, QuestionID: event.target.value });
//               }}
//             />
//           </Grid>
//           <TextField
//             type="text"
//             id="outlined-basic"
//             label="Question Catogory"
//             variant="outlined"
//             value={record.QuestionCatogory}
//             onChange={(event) =>
//               setRecord({
//                 ...record,
//                 QuestionCatogory: event.target.value,
//               })
//             }
//           />
//           <Grid>
//             <TextField
//               type="text"
//               id="outlined-basic"
//               label="Question Body"
//               variant="outlined"
//               value={record.QuestionBody}
//               onChange={(event) =>
//                 setRecord({
//                   ...record,
//                   QuestionBody: event.target.value,
//                 })
//               }
//             />
//           </Grid>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={CreateQuestionsFunc}
//           >
//             {" "}
//             Create
//           </Button>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={BacktoAllQuestionsFunc}
//           >
//             {" "}
//             View All Questions
//           </Button>
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
  AlertTitle,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { createQuestionApi } from "../../../../Api/PromotionModule/QuestionApi/createQuestionApi";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import Stack from "@mui/material/Stack";
import useStyles from "./CreateQuestionsStyles";

export default function CreateCurruntSalary() {
  const classes = useStyles();
  const [error, seterror] = useState(false);
  const [added, setadded] = useState(false);
  const [] = useState([]);

  const [question, setQuestion] = useState({
    QuestionID: "",
    QuestionCatogory: "",
    QuestionBody: "",
  });

  const CreateQuestionsFunc = async (e) => {
    console.log("CreateQuestionsFunc");
    e.preventDefault();
    if (
      question.QuestionID &&
      question.QuestionCatogory &&
      question.QuestionBody
    ) {
      const response = await createQuestionApi(question);
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
    <Box className={classes.Box}>
      <Grid item sm={12} md={12} className={classes.createButton}>
        <Button
          className={classes.Button}
          variant="contained"
          size="large"
          onClick={() => window.open("/promotion/Questions", "_self")}
        >
          View All Questions
        </Button>
      </Grid>

      <Paper elevation={5} className={classes.form}>
        <Grid container>
          <Grid item sm={12} md={12} className={classes.formHeader}>
            <AttachMoneyRoundedIcon />
            <Typography variant="h4">Create New Question</Typography>
          </Grid>

          <Grid item sm={12} md={12}>
            <Divider variant="middle" />
            <Divider variant="middle" />
          </Grid>

          <Grid item sm={12} md={12}>
            <form autoComplete="off" onSubmit={CreateQuestionsFunc}>
              <Grid container>
                <Grid item sm={12} md={6} className={classes.inputs}>
                  <Grid container>
                    <Grid
                      item
                      sm={4}
                      md={4}
                      marginLeft={5}
                      className={classes.texFieldLabel}
                    >
                      <InputLabel>Question ID</InputLabel>
                    </Grid>
                    <FormControl sx={{ minWidth: 120 }}>
                      <TextField
                        className={classes.textField}
                        label="QuestionID"
                        variant="outlined"
                        name="QuestionID"
                        value={question.QuestionID}
                        onChange={(event) => {
                          if (
                            event.target.value !== null &&
                            event.target.value !== undefined &&
                            event.target.value !== ""
                          ) {
                            setQuestion({
                              ...question,
                              QuestionID: event.target.value,
                            });
                          }
                        }}
                        fullWidth
                      />
                    </FormControl>
                  </Grid>
                  <Grid container>
                    <Grid
                      item
                      sm={4}
                      md={4}
                      ml={5}
                      className={classes.texFieldLabel}
                    >
                      <InputLabel>Question Catogory</InputLabel>
                    </Grid>
                    <FormControl sx={{ m: 2, minWidth: 120 }}>
                      <InputLabel id="demo-simple-select-helper-label">
                        Catogory
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={question.QuestionCatogory}
                        label="Category"
                        onChange={(event) => {
                          setQuestion({
                            ...question,
                            QuestionCatogory: event.target.value,
                          });
                        }}
                      >
                        <MenuItem value="SE">SE</MenuItem>
                        <MenuItem value="BA">BA</MenuItem>
                        <MenuItem value="QA">QA</MenuItem>
                        <MenuItem value="HR">HR</MenuItem>
                        <MenuItem value="UI/UX">UI/UX</MenuItem>
                        <MenuItem value="PM">PM</MenuItem>
                        <MenuItem value="SSE">SSE</MenuItem>
                        <MenuItem value="SA">SA</MenuItem>
                        <MenuItem value="TL">TL</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid container>
                    <Grid
                      item
                      sm={4}
                      md={4}
                      marginLeft={5}
                      className={classes.texFieldLabel}
                    >
                      <InputLabel>Question Body</InputLabel>
                    </Grid>
                    <TextField
                      className={classes.textField}
                      label="Question Body"
                      variant="outlined"
                      name="QuestionBody"
                      value={question.QuestionBody}
                      onChange={(event) => {
                        if (
                          event.target.value != null &&
                          event.target.value !== undefined &&
                          event.target.value !== ""
                        ) {
                          setQuestion({
                            ...question,
                            QuestionBody: event.target.value,
                          });
                        }
                      }}
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
            The new Question successfully created!
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
