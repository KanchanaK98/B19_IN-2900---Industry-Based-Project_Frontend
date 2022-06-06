import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import {
  Avatar,
  Button,
  DialogContentText,
  Divider,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Close, Send } from "@mui/icons-material";
import useStyles from "./ViewDetailDialogStyles";

const ViewDetailTeamLead = ({ open, onClose, leaveDetail, setApprove, approve, setReject, reject }) => {
  const classes = useStyles();

  return (
 
    <Dialog open={open} onClose={onClose} fullWidth >
      <DialogTitle sx={{backgroundColor: "rgb(243, 229, 245)"}}>
        <Grid container>
          <Grid item md={8} sx={{ mt: 1 }}>
            <Typography variant="h5">Leave Details</Typography>
          </Grid>
          <Grid item md={4} className={classes.closeButton}>
            <IconButton onClick={onClose}>
              <Close fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
        <Divider />
        <Divider />
      </DialogTitle>
      <DialogContent sx={{backgroundColor: "rgb(243, 229, 245)"}}>
        <Grid container >
          <Grid item md={12} className={classes.content} >
            <Avatar sx={{ m:"auto"}} className={classes.large}  src={leaveDetail.employee.profilePic} />
          </Grid>
          <Grid item md={12} className={classes.content}>
            <Typography sx={{ m:"auto", fontSize:20, fontWeight:600}}>
              {leaveDetail.employee.employeeFirstName +
                " " +
                leaveDetail.employee.employeeLastName}
            </Typography>
          </Grid>
          <Grid item md={12} className={classes.content}>
          <Typography sx={{ m:"auto", fontSize:20, fontWeight:600}}>{leaveDetail.employee.employeeID}</Typography>
          </Grid>
          <Grid item md={12} className={classes.content}>
            <Typography sx={{ mr: 2 }}>Leave Type:</Typography>
            <Typography>{leaveDetail.leave.leaveType}</Typography>
          </Grid>
          <Grid item md={12} className={classes.content}>
            <Typography sx={{ mr: 2 }}>Leave Method:</Typography>
            <Typography>{leaveDetail.leave.leaveMethod}</Typography>
          </Grid>
          <Grid item md={12} className={classes.content}>
            <Typography sx={{ mr: 2 }}>Start Date:</Typography>
            <Typography>
              {new Date(leaveDetail.leave.startDate).toDateString()}
            </Typography>
          </Grid>
          <Grid item md={12} className={classes.content}>
            <Typography sx={{ mr: 2 }}> End Date:</Typography>
            <Typography>
              {new Date(leaveDetail.leave.endDate).toDateString()}
            </Typography>
          </Grid>
          <Grid item md={12} className={classes.content}>
            <Typography sx={{ mr: 2 }}>Reason:</Typography>
            <Typography>{leaveDetail.leave.reason}</Typography>
          </Grid>
        </Grid>
        {(approve|| reject) && <TextField label="reason"
        sx={{backgroundColor: "white"}}
            name="reason"
            variant="filled"
    
            fullWidth
            multiline
            rows={3}/>} 
      </DialogContent>
      <DialogActions sx={{backgroundColor: "rgb(243, 229, 245)"}}>
        {leaveDetail.leave.status === "Pending" && !(approve || reject) && <Button onClick={()=> setApprove(true)} variant="contained" color="success" sx={{ mt: 2, mr: 1, mb: 2 }}>Approve</Button>}
        {leaveDetail.leave.status === "Pending" && !(approve || reject) && <Button onClick={()=> setReject(true)} variant="contained" color="error" sx={{ mt: 2, mr: 3, mb: 2 }}>Reject</Button>}
        {(approve || reject) &&<Button variant="contained" endIcon={<Send />} sx={{ mt: 2, mr: 3, mb: 2 }}>Send</Button>}
      </DialogActions>
    </Dialog>
   
  );
};

export default ViewDetailTeamLead;
