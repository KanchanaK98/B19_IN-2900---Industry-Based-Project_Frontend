// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { makeStyles } from "@mui/styles";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import { Button, Grid, Alert, Stack } from "@mui/material";
// import { updatePaperDetailsApi } from "../../../Api/PromotionModule/PaperApi/updatePaperDetailsApi";
// import { viewOnePaperApi } from "../../../Api/PromotionModule/PaperApi/viewOnePaperApi";

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

// export default function UpdatePaperDetails() {
//   const classes = useStyles();
//   const [added, setadded] = useState(false);
//   const [notadded, setnotadded] = useState(false);

//   const [record, setRecord] = useState({
//     PaperID: "",
//     PaperType: "",
//     PaperName: "",
//   });

//   const { PaperID } = useParams();

//   useEffect(() => {
//     async function fetchData() {
//       const result = await viewOnePaperApi(PaperID);
//       setRecord(result[0], record);
//     }

//     fetchData();
//   }, []);

//   const UpdatePaperDetails = async (e) => {
//     e.preventDefault();

//     updatePaperDetailsApi(PaperID, record).then((response) => {
//       if (response.success === true) {
//         setadded(true);
//         setTimeout(() => {
//           setadded(false);
//         }, 4000);
//       }
//       if (response.success === false) {
//         setnotadded(true);
//         setTimeout(() => {
//           setnotadded(false);
//         }, 4000);
//       }
//     });
//   };

//   return (
//     <Box>
//       <Grid align="center" width="50">
//         <div>
//           <h3>Update Paper</h3>
//         </div>

//         <form className={classes.root} noValidate autoComplete="off">
//           <Grid>
//             <TextField
//               type="text"
//               label="Paper ID"
//               variant="outlined"
//               id="outlined-basic"
//               value={record.PaperID}
//               onChange={(event) => {
//                 setRecord({ ...record, PaperID: event.target.value });
//               }}
//             />
//           </Grid>
//           <TextField
//             type="text"
//             id="outlined-basic"
//             label="Paper Type"
//             variant="outlined"
//             value={record.PaperType}
//             onChange={(event) =>
//               setRecord({
//                 ...record,
//                 PaperType: event.target.value,
//               })
//             }
//           />
//           <Grid>
//             <TextField
//               type="text"
//               id="outlined-basic"
//               label="Paper Name"
//               variant="outlined"
//               value={record.PaperName}
//               onChange={(event) =>
//                 setRecord({
//                   ...record,
//                   PaperName: event.target.value,
//                 })
//               }
//             />
//           </Grid>
//           <Button
//             variant="contained"
//             sx={{ backgroundColor: "#183d78" }}
//             onClick={UpdatePaperDetails}
//           >
//             {" "}
//             Update
//           </Button>
//           <Button
//             variant="contained"
//             sx={{ backgroundColor: "#183d78" }}
//             onClick={() =>
//               window.open(`/promotion/Paper/display/${PaperID}`, "_self")
//             }
//           >
//             View Paper &nbsp;
//           </Button>
//         </form>
//         <Grid>
//           {added ? (
//             <Stack sx={{ width: "100%" }} spacing={2}>
//               <Alert severity="success">
//                 Paper details successfully updated!
//               </Alert>{" "}
//             </Stack>
//           ) : null}
//           {notadded ? (
//             <Stack sx={{ width: "100%" }} spacing={2}>
//               <Alert severity="error">
//                 Paper details not updated! <strong>Try again</strong>
//               </Alert>{" "}
//             </Stack>
//           ) : null}
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }
//-----------with add more questions------------------------
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Grid, Alert, Stack, Card } from "@mui/material";
import { updatePaperDetailsApi } from "../../../Api/PromotionModule/PaperApi/updatePaperDetailsApi";
import { viewOnePaperApi } from "../../../Api/PromotionModule/PaperApi/viewOnePaperApi";

import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import Checkbox from "@mui/material/Checkbox";
import { viewAllQuestionsApi } from "../../../Api/PromotionModule/QuestionApi/viewAllQuestionsApi";
import { addMoreQuestionsApi } from "../../../Api/PromotionModule/PaperApi/addMoreQuestionsApi";

import CardContent from "@mui/material/CardContent";
//import CardActions from "@mui/material/CardActions";

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
  const [added, setadded] = useState(false);
  const [notadded, setnotadded] = useState(false);

  const [record, setRecord] = useState({
    PaperID: "",
    PaperType: "",
    PaperName: "",
  });

  const { PaperID } = useParams();

  useEffect(() => {
    async function fetchData() {
      const result = await viewOnePaperApi(PaperID);
      setRecord(result[0], record);
    }

    fetchData();
  }, []);
  console.log("paper fetched", record);

  const [QuestionList, setQuestionList] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]);

  //----------------------------------------------------------------------------------------------
  useEffect(() => {
    async function fetchData() {
      setQuestionList(await viewAllQuestionsApi());
    }
    fetchData();
  }, []);
  // console.log("QuestionList", QuestionList);

  const addMoreQues = async () => {
    addMoreQuestionsApi(PaperID, selectedQuestions);
    console.log("addMoreQuestions executed");
  };

  console.log("selected Questions:", selectedQuestions);

  //---------------------------------------------------------------------------------------------------------
  const UpdatePaperDetails = async (e) => {
    e.preventDefault();
    // addMoreQuestionsApi(PaperID, checkValue);
    updatePaperDetailsApi(PaperID, record).then((response) => {
      if (response.success === true) {
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
    });
  };

  return (
    <Box>
      <Grid align="center" width="50">
        <div>
          <h3>Update Paper</h3>
        </div>

        <form className={classes.root} noValidate autoComplete="off">
          <Grid>
            <TextField
              type="text"
              label="Paper ID"
              variant="outlined"
              id="outlined-basic"
              value={record.PaperID}
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
            sx={{ backgroundColor: "#183d78" }}
            onClick={UpdatePaperDetails}
          >
            {" "}
            Update
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#183d78" }}
            onClick={() =>
              window.open(`/promotion/Paper/display/${PaperID}`, "_self")
            }
          >
            View Paper &nbsp;
          </Button>
        </form>
        <Grid>
          {added ? (
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert severity="success">
                Paper details successfully updated!
              </Alert>{" "}
            </Stack>
          ) : null}
          {notadded ? (
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert severity="error">
                Paper details not updated! <strong>Try again</strong>
              </Alert>{" "}
            </Stack>
          ) : null}
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>QuestionID</TableCell>
              <TableCell align="right">QuestionCatogory</TableCell>
              <TableCell align="right">QuestionBody</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {QuestionList.map((question, key) => (
              <TableRow
                key={key}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {question.QuestionID}
                </TableCell>
                <TableCell align="right">{question.QuestionCatogory}</TableCell>
                <TableCell align="right">{question.QuestionBody}</TableCell>
                <Checkbox
                  onChange={(e) => {
                    // add to list
                    if (e.target.checked) {
                      setSelectedQuestions([
                        ...selectedQuestions,
                        {
                          QuestionID: question.QuestionID,
                          QuestionBody: question.QuestionBody,
                        },
                      ]);
                    } else {
                      //remove from list
                      setSelectedQuestions(
                        selectedQuestions.filter(
                          (q) => q.QuestionID !== question.QuestionID
                        )
                      );
                    }
                  }}
                  value={selectedQuestions}
                  style={{ margin: "20px" }}
                  type="checkbox"
                />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Card>
        {selectedQuestions.map((element, key) => (
          <CardContent key={key}>
            <ul>
              <li>
                {element.QuestionID},{element.QuestionBody}
              </li>
            </ul>
          </CardContent>
        ))}
      </Card>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#183d78" }}
        onClick={addMoreQues}
      >
        Add &nbsp;
      </Button>
    </Box>
  );
}
