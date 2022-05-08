import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Button,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import {  Close } from "@mui/icons-material";
import useStyles from "./ViewDetailDialogStyles";
import { cancelLeave } from "../../../Api/LeaveManagementModule/LeaveApi";

const ViewMoreDialog = ({ open, handleClose, leave, leaveHistory, setLeaveHistory }) => {
  const classes = useStyles();
  const [reason, setReason] = useState();
  const [cancel, setCancel] = useState(false);
  
  const handleSubmit = async()=> {
   const response = await cancelLeave(reason, leave.leaveHistory._id, 'E002');
   setReason("")
   setLeaveHistory(leaveHistory.filter((lev) => lev != leave))
   handleClose();
  }
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      ia-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" className={classes.title}>
        <Grid container>
          <Grid item md={8} sx={{ mt: 1 }}>
            <Typography variant="h5">Leave Details</Typography>
          </Grid>
          <Grid item md={4} className={classes.closeButton}>
            <IconButton onClick={handleClose}>
              <Close fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent className={classes.root}>
        <Divider />
        <Divider sx={{ mb: 2 }} />

        <Grid container>
          <Grid item md={12} className={classes.content}>
            <Typography>Leave type: </Typography>
            <Typography>{leave.leaveHistory.leaveType}</Typography>
          </Grid>
          <Grid item md={12} className={classes.content}>
            <Typography>Start date: </Typography>
            <Typography>
              {new Date(leave.leaveHistory.startDate).toDateString()}
            </Typography>
          </Grid>
          <Grid item md={12} className={classes.content}>
            <Typography>End Date: </Typography>
            <Typography>
              {new Date(leave.leaveHistory.endDate).toDateString()}
            </Typography>
          </Grid>
          <Grid item md={12} className={classes.content}>
            <Typography>Reason: </Typography>
            <Typography>{leave.leaveHistory.reason}</Typography>
          </Grid>
          <Grid item md={12} className={classes.content}></Grid>
        </Grid>
        {cancel && (
          <TextField
            label="reason"
            name="reason"
            variant="filled"
            value={reason}
            fullWidth
            multiline
            rows={3}
            onChange={(event)=> setReason(event.target.value)}
          />
        )}
      </DialogContent>
      <DialogActions>
        {leave.leaveHistory.status === "Pending" && !cancel && (
          <Button sx={{ m: 2 }} variant="contained" color="error" onClick={()=> setCancel(true)}>
            Cancel Leave
          </Button>
        )}
        {
          cancel && (
            <Button disabled={reason ? false: true} sx={{ mt: 2, mr: 3, mb: 2 }} variant="contained" color="success" onClick={handleSubmit}>
            Submit
          </Button>
          )
        }
      </DialogActions>
    </Dialog>
  );
};

export default ViewMoreDialog;
