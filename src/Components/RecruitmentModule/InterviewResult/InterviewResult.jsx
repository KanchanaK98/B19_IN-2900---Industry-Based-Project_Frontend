import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import {
  Avatar,
  Card,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { AdminPanelSettings, Close } from "@mui/icons-material";

const InterviewResult = ({
  openDialog,
  handleCloseDialog,
  selectedCandidates,
  interviewResult,
}) => {
  return (
    <Dialog fullWidth open={openDialog} onClose={handleCloseDialog}>
      <DialogTitle>
        <Grid container>
          <Grid
            sm={10}
            md={10}
            item
            sx={{ display: "flex", alignItems: "center" }}
          >
            <AdminPanelSettings fontSize="large" sx={{ mr: 1 }} />
            <Typography variant="h5">
              {selectedCandidates.candidateName
                ? selectedCandidates.candidateName
                : selectedCandidates.firstName +
                  " " +
                  selectedCandidates.lastName +
                  "'s CV"}
            </Typography>
          </Grid>

          <Grid
            sm={2}
            md={2}
            item
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <IconButton onClick={handleCloseDialog}>
              <Close />
            </IconButton>
          </Grid>
        </Grid>
      </DialogTitle>
      <Divider />
      <DialogContent>
        <Grid container>
          <Grid item md={12}>
            <Typography>{interviewResult.InterviewType} Interview</Typography>
          </Grid>

          <Grid item md={12}>
            <Typography>
              {new Date(interviewResult.InterviewDate).toDateString()}
            </Typography>
          </Grid>
          <Grid item md={12} sx={{ display: "flex", justifyContent: "center" }}>
            {interviewResult.Interviewers.map((interviewer) => (
              <Grid sx={{ mr: 3 }}>
                <Avatar />
                <Typography>{interviewer.id}</Typography>
              </Grid>
            ))}
          </Grid>
          <Grid item md={12}></Grid>
        </Grid>
        <Grid container>
          <Typography>Interview Result</Typography>
          <Grid item md={12}>
            {interviewResult.CandidateMarks &&
              interviewResult.CandidateMarks.map((mark) => (
                <Card sx={{ p: 2 }}>
                  <Grid
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Avatar />
                    <Typography>{mark.interviewer}</Typography>
                  </Grid>
                  <Grid>
                    <Divider />
                    <Typography>
                      Knowledge of Specific Job Skills :{" "}
                      {mark.knowledgeOfSpecificJobSkills}
                    </Typography>

                    <Typography>
                      Related Job Experience : {mark.relatedJobExperience}
                    </Typography>

                    <Typography>
                      Related Education or Training :{" "}
                      {mark.relatedEducationOrTraining}
                    </Typography>

                    <Typography>Initiative : {mark.initiative}</Typography>

                    <Typography>
                      Communication or Listening Skills :{" "}
                      {mark.communicationOrListeningSkills}
                    </Typography>

                    <Typography>Attitude : {mark.attitude}</Typography>

                    <Typography>
                      Interest in Company or Position :{" "}
                      {mark.interestInCompanyOr}
                    </Typography>
                  </Grid>
                  <Grid>
                    {mark.strengths.length> 0 && (
                      <Grid>
                        <Typography>strengths : </Typography>
                        {mark.strengths.map((strength) => (
                          <Typography>{strength}</Typography>
                        ))}
                      </Grid>
                    )}
                    {mark.weaknesses.length> 0 && (
                      <Grid>
                        <Typography>weaknesses : </Typography>
                        {mark.weaknesses.map((weakness) => (
                          <Typography>{weakness}</Typography>
                        ))}
                      </Grid>
                    )}
                    {mark.additionalComments.length> 0 && (
                      <Grid>
                        <Typography>strengths : </Typography>
                        {mark.additionalComments.map((additionalComment) => (
                          <Typography>{additionalComment}</Typography>
                        ))}
                      </Grid>
                    )}
                    <Typography>Recommendation : {mark.recommendation}</Typography>
                  </Grid>
                </Card>
              ))}
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default InterviewResult;
