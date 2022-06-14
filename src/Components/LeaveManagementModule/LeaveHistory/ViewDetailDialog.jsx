import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Button,
  Card,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import useStyles from "./ViewDetailDialogStyles";
import { cancelLeave } from "../../../Api/LeaveManagementModule/LeaveApi";

const ViewMoreDialog = ({
  open,
  handleClose,
  leave,
  leaveHistory,
  setLeaveHistory,
  setCancel,
  cancel,
}) => {
  const classes = useStyles();
  const [reason, setReason] = useState();
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const handleSubmit = async () => {
    // const response =
    await cancelLeave(reason, leave.leaveHistory._id);
    setReason("");
    setLeaveHistory(leaveHistory.filter((lev) => lev !== leave));
    handleClose();
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      ia-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" className={classes.title}>
        <Grid container>
          <Grid item md={12} className={classes.closeButton}>
            <IconButton onClick={handleClose}>
              <Close fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item md={12} sx={{ mt: 1 }}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h5" fontFamily="Rubik" sx={{ fontSize: 25, color:"#880e4f" }}>
                Leave Details
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent className={classes.root}>
        <Grid container>
          <Grid item md={12} className={classes.content}>
            <Typography
              fontFamily="Segoe UI Emoji"
              sx={{ mr: 2, fontSize: 20, color: "#607d8b" }}
            >
              Leave type{" "}
            </Typography>
          
          <Grid item md={12}>
            <Card className={classes.card}>
              <Typography fontFamily="Rubik" >{leave.leaveHistory.leaveType}</Typography>
            </Card>
          </Grid>
          </Grid>
          <Grid item md={12} className={classes.content}>
            <Typography
              fontFamily="Segoe UI Emoji"
              sx={{ mr: 2, fontSize: 20, color: "#607d8b" }}
            >
              Start date{" "}
            </Typography>
            <Card className={classes.card}>
              <Typography fontFamily="Rubik">
                {new Date(leave.leaveHistory.startDate).toDateString()}
              </Typography>
            </Card>
          </Grid>
          <Grid item md={12} className={classes.content}>
            <Typography
              fontFamily="Segoe UI Emoji"
              sx={{ mr: 2, fontSize: 20, color: "#607d8b" }}
            >
              End Date{" "}
            </Typography>
            <Card className={classes.card}>
              <Typography fontFamily="Rubik" >
                {new Date(leave.leaveHistory.endDate).toDateString()}
              </Typography>
            </Card>
          </Grid>
          <Grid item md={12} className={classes.content}>
            <Typography
              fontFamily="Segoe UI Emoji"
              sx={{ mr: 2, fontSize: 20, color: "#607d8b" }}
            >
              Reason{" "}
            </Typography>
            <Card className={classes.card}>
              <Typography fontFamily="Rubik">{leave.leaveHistory.reason}</Typography>
            </Card>
          </Grid>
        </Grid>
        {cancel && (
          <TextField
            label="Type a reason for cancellation"
            name="reason"
            variant="filled"
            value={reason}
            fullWidth
            multiline
            rows={3}
            onChange={(event) => setReason(event.target.value)}
          />
        )}
      </DialogContent>
      <DialogActions>
        {leave.leaveHistory.status === "Pending" && !cancel && (
          <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Button
          
            sx={{ m: 2 ,borderRadius:16}}
            variant="contained"
            minWidth="60px"
            color="error"
            
            onClick={() => setCancel(true)}
          >
            Cancel Leave
          </Button>
          </Grid>
        )}
        {cancel && (
           <Grid
           container
           direction="row"
           justifyContent="center"
           alignItems="center"
         >
          <Button
             name="reason"
            sx={{ mt: 2, mr: 3, mb: 2,borderRadius:16,minWidth:50 }}
            disabled={reason ? false : true} 
            variant="contained"
            color="success"
            onClick={handleSubmit}
          >
            Submit
          </Button>
          </Grid>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default ViewMoreDialog;
