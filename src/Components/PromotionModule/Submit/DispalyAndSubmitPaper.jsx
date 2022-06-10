import { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Card,
  Typography,
  Button,
  Divider,
  // Alert,
  // Stack,
} from "@mui/material";
import CardContent from "@mui/material/CardContent";
//import CardActions from "@mui/material/CardActions";
import { makeStyles } from "@mui/styles";
//import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
import { submitPaperApi } from "../../../Api/PromotionModule/SubmissionApi/submitPaperApi";
import { displayPaperApi } from "../../../Api/PromotionModule/SubmissionApi/displayPaperApi";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

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
  dialogBoxTopic: {
    justifyContent: "center",
    paddingLeft: "85px",
    color: "red",
  },
});
export default function DispalyAndSubmitPaper() {
  const { EmployeeID } = useParams();
  const classes = useStyles();

  const [Paper, setPaper] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setPaper(await displayPaperApi(EmployeeID));
    }
    fetchData();
  }, [EmployeeID]);

  //console.log("here paper:", Paper);

  const [Questions, setQuestions] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const SubmitPaperFunc = async () => {
    await submitPaperApi(EmployeeID, Questions, Paper[0].PaperID).then(() => {
      window.close();
    });
    console.log("submitted");
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#d7dde0",
        padding: 3,
        marginTop: false,
      }}
    >
      {Paper == null ? (
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
                You Have NO Evaluation Test today!
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => window.close()}
              >
                OK
              </Button>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Grid>
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
                      Paper Name : {p.PaperName}
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        color: "#546e7a",
                        marginLeft: "20px",
                      }}
                    >
                      Paper Type : {p.PaperType}
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        color: "#546e7a",
                        marginLeft: "20px",
                      }}
                    >
                      Date Created : {p.DateCreated}
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

                    {p.questions.map((item, key) => (
                      <Card className={classes.card1} key={key}>
                        <Typography
                          className={classes.text}
                          value={item.QuestionID}
                        >
                          Question ID : {item.QuestionID}
                        </Typography>
                        <Typography className={classes.text}>
                          Question Catogory : {item.QuestionCatogory}
                        </Typography>
                        <Typography className={classes.text}>
                          QuestionBody : {item.QuestionBody}
                        </Typography>

                        <div
                          onChange={(event) => {
                            setQuestions(
                              Questions.concat({
                                QuestionID: item.QuestionID,
                                QuestionBody: item.QuestionBody,
                                EmployeeRating: event.target.value,
                              })
                            );
                            console.log(Questions);
                          }}
                        >
                          <input type="radio" value="weak" name="response" />{" "}
                          Weak
                          <input type="radio" value="average" name="response" />
                          Average
                          <input
                            type="radio"
                            value="good"
                            name="response"
                          />{" "}
                          Good
                          <input
                            type="radio"
                            value="very good"
                            name="response"
                          />{" "}
                          Very good
                        </div>
                      </Card>
                    ))}
                  </CardContent>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClickOpen}
                  >
                    Submit
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle
              id="form-dialog-title"
              className={classes.dialogBoxTopic}
            >
              Submit
            </DialogTitle>
            <DialogActions>
              <Button
                variant="contained"
                color="primary"
                onClick={SubmitPaperFunc}
              >
                Confirm
              </Button>
              <Button variant="contained" color="primary" onClick={handleClose}>
                Return to Attempt
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
      )}
    </Box>
  );
}
