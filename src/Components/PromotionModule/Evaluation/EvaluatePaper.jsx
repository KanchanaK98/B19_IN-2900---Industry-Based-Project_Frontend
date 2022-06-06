// import { useState, useEffect } from "react";
// import { Box, Grid, Card, Typography, Button, Divider } from "@mui/material";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import { makeStyles } from "@mui/styles";
// import TextField from "@mui/material/TextField";
// import { useParams } from "react-router-dom";
// //import { submitPaperApi } from "../../../Api/PromotionModule/SubmissionApi/submitPaperApi";
// import { displayPaperApi } from "../../../Api/PromotionModule/SubmissionApi/displayPaperApi";
// import { evaluatePaperApi } from "../../../Api/PromotionModule/EvaluateApi/evaluatePaperApi";
// import { displayAnsweredPaperToTeamleadApi } from "../../../Api/PromotionModule/EvaluateApi/displayAnsweredPaperToTeamleadApi";
// const useStyles = makeStyles({
//   root: {
//     minWidth: 200,
//     boxShadow: "1px 1px #9da1a6",
//     width: "100%",
//     backgroundColor: "#eceff1",
//   },
//   text: {
//     fontSize: 14,
//     fontWeight: "medium",
//     color: "#000a12",
//   },
//   pos: {
//     marginBottom: 12,
//     justifyContent: "center",
//   },
//   gridContainer: {
//     paddingLeft: "40px",
//     paddingRight: "40px",
//     shadow: "red",
//   },
//   card1: {
//     marginLeft: 60,
//     marginBottom: 10,
//     width: "85%",
//     padding: 2,
//     backgroundColor: "#e0e0e0",
//     "&:hover": {
//       backgroundColor: "#e8eaf6",
//     },
//   },
// });
// export default function EvaluatePaper() {
//   const { EmployeeID } = useParams();
//   const { PaperID } = useParams();
//   const { TeamLeadID } = useParams();
//   const classes = useStyles();

//   const [Paper, setPaper] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       setPaper(await displayAnsweredPaperToTeamleadApi(EmployeeID, PaperID));
//     }
//     fetchData();
//   }, []);
//   console.log("here paper:", Paper);

//   const [Questions, setQuestions] = useState([]);

//     const EvaluatePaperFunc = () => {
//       evaluatePaperApi(TeamLeadID, EmployeeID, Paper[0].PaperID, Questions).then(
//         (response) => {
//           console.log("from response", response);
//         }
//       );
//       console.log(Paper[0].PaperID);
//     };
// //   const EvaluatePaperFunc = () => {
// //     evaluatePaperApi(TeamLeadID, EmployeeID, PaperID, Questions).then(
// //       (response) => {
// //         console.log("from response", response);
// //       }
// //     );
// //   };

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         backgroundColor: "#d7dde0",
//         padding: 3,
//         marginTop: false,
//       }}
//     >
//       <Grid item xs={12} md={12}>
//         <Grid
//           container
//           className={classes.gridContainer}
//           justify="center"
//           spacing={2}
//           columns={12}
//         >
//           <Grid item xs={6}>
//             <Typography
//               variant="h4"
//               sx={{
//                 m1: 2,
//                 fontWeight: "Bold",
//                 color: "#183d78",
//                 mb: 2,
//                 ml: 2,
//               }}
//             >
//               Employee : {EmployeeID}
//             </Typography>
//           </Grid>
//         </Grid>
//       </Grid>

//       <Grid container className={classes.gridContainer} justify="center">
//         {" "}
//         {Paper.map((p, key) => (
//           <Grid item xs={12} md={12} key={key}>
//             <Card className={classes.root} variant="outlined">
//               <CardContent>
//                 <Typography
//                   sx={{
//                     fontWeight: "bold",
//                     color: "#546e7a",
//                     marginLeft: "20px",
//                   }}
//                   value={p.PaperID}
//                 >
//                   Paper ID : {p.PaperID}
//                 </Typography>
//                 <Typography
//                   sx={{
//                     fontWeight: "bold",
//                     color: "#546e7a",
//                     marginLeft: "20px",
//                   }}
//                 >
//                   Paper Name : {p.PaperName}
//                 </Typography>
//                 <Typography
//                   sx={{
//                     fontWeight: "bold",
//                     color: "#546e7a",
//                     marginLeft: "20px",
//                   }}
//                 >
//                   Paper Type : {p.PaperType}
//                 </Typography>
//                 <Typography
//                   sx={{
//                     fontWeight: "bold",
//                     color: "#546e7a",
//                     marginLeft: "20px",
//                   }}
//                 >
//                   Date Created : {p.DateCreated}
//                 </Typography>
//                 <Divider sx={{ mt: 2, mb: 2 }}></Divider>
//                 <Typography
//                   sx={{
//                     fontWeight: "bold",
//                     color: "#546e7a",
//                     marginLeft: "20px",
//                   }}
//                 >
//                   Questions :
//                 </Typography>

//                 {p.questions.map((item, key) => (
//                   <Card className={classes.card1} key={key}>
//                     <Typography
//                       className={classes.text}
//                       value={item.QuestionID}
//                     >
//                       Question ID : {item.QuestionID}
//                     </Typography>
//                     <Typography className={classes.text}>
//                       Question Catogory : {item.QuestionCatogory}
//                     </Typography>
//                     <Typography className={classes.text}>
//                       QuestionBody : {item.QuestionBody}
//                     </Typography>
//                     <Typography className={classes.text}>
//                       Employee Rating : {item.EmployeeRating}
//                     </Typography>

//                     {/* <TextField
//                       type="text"
//                       label="TeamLeadRating"
//                       variant="outlined"
//                       id="outlined-basic"
//                       value={item.TeamLeadRating}
//                       onChange={(event) => {
//                         setQuestions(
//                           Questions.concat({
//                             QuestionID: item.QuestionID,
//                             EmployeeRating: item.EmployeeRating,
//                             TeamLeadRating: event.target.value,
//                           })
//                         );
//                         console.log(Questions);
//                       }}
//                     /> */}
//                     <div
//                       onChange={(event) => {
//                         setQuestions(
//                           Questions.concat({
//                             QuestionID: item.QuestionID,
//                             TeamLeadRating: event.target.value,
//                           })
//                         );
//                         console.log(Questions);
//                       }}
//                     >
//                       <input type="radio" value="weak" name="response" /> Weak
//                       <input type="radio" value="average" name="response" />
//                       Average
//                       <input type="radio" value="good" name="response" /> Good
//                       <input
//                         type="radio"
//                         value="very good"
//                         name="response"
//                       />{" "}
//                       Very good
//                     </div>
//                   </Card>
//                 ))}
//               </CardContent>
//               <CardActions className={classes.pos}>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   onClick={EvaluatePaperFunc}
//                 >
//                   {" "}
//                   Save
//                 </Button>
//               </CardActions>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }

import { useState, useEffect } from "react";
import { Box, Grid, Card, Typography, Button, Divider } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
//import { submitPaperApi } from "../../../Api/PromotionModule/SubmissionApi/submitPaperApi";
import { displayPaperApi } from "../../../Api/PromotionModule/SubmissionApi/displayPaperApi";
import { evaluatePaperApi } from "../../../Api/PromotionModule/EvaluateApi/evaluatePaperApi";
import { displayAnsweredPaperToTeamleadApi } from "../../../Api/PromotionModule/EvaluateApi/displayAnsweredPaperToTeamleadApi";
const useStyles = makeStyles({
  root: {
    minWidth: 200,
    boxShadow: "1px 1px #9da1a6",
    width: "100%",
    backgroundColor: "#eceff1",
  },
  text: {
    fontSize: 14,
    fontWeight: "medium",
    color: "#000a12",
  },
  pos: {
    marginBottom: 12,
    justifyContent: "center",
  },
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
    shadow: "red",
  },
  card1: {
    marginLeft: 60,
    marginBottom: 10,
    width: "85%",
    padding: 2,
    backgroundColor: "#e0e0e0",
    "&:hover": {
      backgroundColor: "#e8eaf6",
    },
  },
});
export default function EvaluatePaper() {
  const { EmployeeID } = useParams();
  const { PaperID } = useParams();
  const { TeamLeadID } = useParams();
  const classes = useStyles();

  const [Paper, setPaper] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setPaper(await displayAnsweredPaperToTeamleadApi(EmployeeID, PaperID));
    }
    fetchData();
  }, [EmployeeID, PaperID]);

  console.log("here paper:", Paper);

  //   const questionAraay = Paper.Questions;
  //   console.log("question Araay:", questionAraay);

  const [Questions, setQuestions] = useState([]);
  const [Feedback, setFeedback] = useState([]);

  //console.log("here feedback:", Feedback);
  console.log("here tl review", Questions);

  const EvaluatePaperFunc = () => {
    evaluatePaperApi(TeamLeadID, EmployeeID, PaperID, Questions, Feedback).then(
      (response) => {
        console.log("from response", response);
      }
    );
    // console.log(Paper[0].PaperID);
  };
  //   const EvaluatePaperFunc = () => {
  //     evaluatePaperApi(TeamLeadID, EmployeeID, PaperID, Questions).then(
  //       (response) => {
  //         console.log("from response", response);
  //       }
  //     );
  //   };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#d7dde0",
        padding: 3,
        marginTop: false,
      }}
    >
      <Grid item xs={12} md={12}>
        <Grid
          container
          className={classes.gridContainer}
          justify="center"
          spacing={2}
          columns={12}
        >
          <Grid item xs={6}>
            <Typography
              variant="h4"
              sx={{
                m1: 2,
                fontWeight: "Bold",
                color: "#183d78",
                mb: 2,
                ml: 2,
              }}
            >
              Employee : {EmployeeID}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid container className={classes.gridContainer} justify="center">
        {" "}
        {Paper.map((p, key) => (
          <Grid item xs={12} md={12} key={key}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#546e7a",
                    marginLeft: "20px",
                  }}
                  value={p.PaperID}
                >
                  Paper ID : {p.PaperID}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#546e7a",
                    marginLeft: "20px",
                  }}
                >
                  Employee ID: {EmployeeID}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#546e7a",
                    marginLeft: "20px",
                  }}
                >
                  Date Attempted : {p.DateAttempted}
                </Typography>
                <Divider sx={{ mt: 2, mb: 2 }}></Divider>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#546e7a",
                    marginLeft: "20px",
                  }}
                >
                  Questions :
                </Typography>

                {p.Questions.map((item, key) => (
                  <Card className={classes.card1} key={key}>
                    <Typography
                      className={classes.text}
                      value={item.QuestionID}
                    >
                      Question ID : {item.QuestionID}
                    </Typography>
                    <Typography className={classes.text}>
                      Question Body: {item.QuestionBody}
                    </Typography>
                    <Typography className={classes.text}>
                      Employee Rating : {item.EmployeeRating}
                    </Typography>
                    <Typography className={classes.text}>
                      TeamLead Rating : {item.TeamLeadRating}
                    </Typography>

                    <div
                      onChange={(event) => {
                        setQuestions(
                          Questions.concat({
                            QuestionID: item.QuestionID,
                            TeamLeadRating: event.target.value,
                          })
                        );
                      }}
                    >
                      <input type="radio" value="weak" name="response" /> Weak
                      <input type="radio" value="average" name="response" />
                      Average
                      <input type="radio" value="good" name="response" /> Good
                      <input
                        type="radio"
                        value="very good"
                        name="response"
                      />{" "}
                      Very good
                    </div>
                  </Card>
                ))}
                <Typography className={classes.text}>Feedback :</Typography>
                <TextField
                  type="text"
                  label=""
                  variant="outlined"
                  id="outlined-basic"
                  value={Paper.Feedback}
                  onChange={(event) => {
                    setFeedback({
                      ...Feedback,
                      Feedback: event.target.value,
                    });
                  }}
                />
              </CardContent>
              <CardActions className={classes.pos}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={EvaluatePaperFunc}
                >
                  {" "}
                  Save
                </Button>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#183d78" }}
                  onClick={() =>
                    window.open(
                      ` /promotion/evaluation/allSubmissions/${TeamLeadID}`,
                      "_self"
                    )
                  }
                >
                  All Submissions&nbsp;
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
        {/* } */}
      </Grid>
    </Box>
  );
}
