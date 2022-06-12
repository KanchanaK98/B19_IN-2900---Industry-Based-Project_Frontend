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
import FeedIcon from "@mui/icons-material/Feed";
import Stack from "@mui/material/Stack";
import useStyles from "./UpdatePaperDetailsStyles";
import { useParams } from "react-router-dom";
import { viewAllQuestionsApi } from "../../../../Api/PromotionModule/QuestionApi/viewAllQuestionsApi";
import { addMoreQuestionsApi } from "../../../../Api/PromotionModule/PaperApi/addMoreQuestionsApi";
import { viewOnePaperApi } from "../../../../Api/PromotionModule/PaperApi/viewOnePaperApi";
import { updatePaperDetailsApi } from "../../../../Api/PromotionModule/PaperApi/updatePaperDetailsApi";

export default function CreateCurruntSalary() {
  const classes = useStyles();

  const [error, seterror] = useState(false);
  const [added, setadded] = useState(false);
  const [notadded, setnotadded] = useState(false);
  const [QuestionList, setQuestionList] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]);

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

  useEffect(() => {
    async function fetchData() {
      setQuestionList(await viewAllQuestionsApi());
    }
    fetchData();
  }, []);

  const addMoreQues = async () => {
    addMoreQuestionsApi(PaperID, selectedQuestions);
  };

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
      <Grid item className={classes.viewButton} sm={12} md={12}>
        <Button
          sx={{ backgroundColor: "#183d78" }}
          variant="contained"
          size="large"
          onClick={() =>
            window.open(`/promotion/Paper/display/${PaperID}`, "_self")
          }
        >
          View Paper
        </Button>
      </Grid>

      <Paper elevation={5} className={classes.form}>
        <Grid container>
          <Grid item sm={12} md={12} className={classes.formHeader}>
            <FeedIcon />
            <Typography variant="h4">Update Paper {PaperID}</Typography>
          </Grid>

          <Grid item sm={12} md={12}>
            <Divider variant="middle" />
            <Divider variant="middle" />
          </Grid>

          <Grid item sm={12} md={12}>
            <form autoComplete="off" onSubmit={UpdatePaperDetails}>
              <Grid container>
                <Grid item sm={12} md={6} className={classes.inputs}>
                  <Grid container>
                    <Grid item sm={4} md={4} className={classes.texFieldLabel}>
                      <InputLabel>Paper ID</InputLabel>
                    </Grid>
                    <FormControl sx={{ minWidth: 120 }}>
                      <TextField
                        label="PaperID"
                        variant="outlined"
                        name="PaperID"
                        value={record.PaperID}
                        disabled
                        fullWidth
                      />
                    </FormControl>
                  </Grid>
                  <Grid container>
                    <Grid item sm={4} md={4} className={classes.texFieldLabel}>
                      <InputLabel>Paper Type</InputLabel>
                    </Grid>
                    <TextField
                      label="PaperType"
                      variant="outlined"
                      name="PaperType"
                      value={record.PaperType}
                      onChange={(event) =>
                        setRecord({
                          ...record,
                          PaperType: event.target.value,
                        })
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid container>
                    <Grid item sm={4} md={4} className={classes.texFieldLabel}>
                      <InputLabel>Paper Name</InputLabel>
                    </Grid>
                    <TextField
                      label="PaperName"
                      variant="outlined"
                      name="PaperName"
                      value={record.PaperName}
                      onChange={(event) =>
                        setRecord({
                          ...record,
                          PaperName: event.target.value,
                        })
                      }
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sm={12} md={12} className={classes.createButton}>
                <Button
                  sx={{ backgroundColor: "#183d78" }}
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
            Paper successfully updated!
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
