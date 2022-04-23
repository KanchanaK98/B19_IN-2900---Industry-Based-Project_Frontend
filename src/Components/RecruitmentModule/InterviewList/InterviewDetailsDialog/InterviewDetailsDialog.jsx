import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { Button, Divider, Grid, IconButton, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import useStyles from "./InterviewDetailsDialogStyles";
import { Link } from "react-router-dom";

const InterviewDetailsDialog = ({
  openDialog,
  handleCloseDialog,
  interview,
}) => {
  const classes = useStyles();

  return (
    <Dialog fullWidth open={openDialog} onClose={handleCloseDialog}>
      <DialogTitle>
        <Grid container sx={{ display: "flex", alignItems: "center" }}>
          <Grid sm={10} md={10} item>
            <Typography variant="h5">Interview</Typography>
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
      <Divider variant="middle" />
      <DialogContent>
        <Grid className={classes.item}>
          <Typography>Candidate : </Typography>
          <Typography sx={{ ml: 2 }}>
            {interview && interview.candidateName}
          </Typography>
        </Grid>

        <Grid className={classes.item}>
          <Typography>Interview Type : </Typography>
          <Typography sx={{ ml: 2 }}>
            {interview && interview.InterviewType}
          </Typography>
        </Grid>

        <Grid className={classes.item}>
          <Typography>Interview Date : </Typography>
          <Typography sx={{ ml: 2 }}>
            {interview && new Date(interview.InterviewDate).toDateString()}
          </Typography>
        </Grid>
        <Grid className={classes.item}>
          <Typography>Interview Time : </Typography>
          <Typography sx={{ ml: 2 }}>
            {interview && interview.InterviewTime}
          </Typography>
        </Grid>
        <Grid className={classes.item}>
          <Typography>Interviewers : </Typography>
          <Typography sx={{ ml: 2 }}>
            {interview &&
              interview.Interviewers.map((interviewer) => (
                <li key={interviewer._id} component="span">
                  {interviewer.employeeFirstName +
                    " " +
                    interviewer.employeeLastName}
                </li>
              ))}
          </Typography>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Grid container className={classes.buttons}>
          <Grid item md={6}>
            <Button size="small" color="warning" variant="contained">
              Cancel Interview
            </Button>
          </Grid>
          <Grid item md={6} className={classes.buttonUpdate}>
            <Button
              component={Link}
              to={"/interview/update"}
              state={{ interview }}
              size="small"
              color="secondary"
              variant="contained"
            >
              Update
            </Button>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
};

export default InterviewDetailsDialog;
