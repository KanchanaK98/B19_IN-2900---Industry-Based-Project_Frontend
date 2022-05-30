
import React, { useState } from 'react'
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Button,
  DialogContentText,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import {  Close } from "@mui/icons-material";
import useStyles from "./ViewDetailDialogStyles";

const ViewDetailTeamLead = ({open, onClose, leaveDetail}) => {
    const classes = useStyles();

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
          <DialogTitle >
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
        <Divider/>
        <Divider/>
          </DialogTitle>
          <DialogContent>
              <Grid container>
          <Grid item md={12} className={classes.content}>
           <Typography sx={{mr : 2}}>Employee Name:</Typography>
           <Typography>{ leaveDetail.employee.employeeFirstName+" "+leaveDetail.employee.employeeLastName}</Typography>
           </Grid>
           <Grid item md={12} className={classes.content}>
           <Typography sx={{mr : 2}}>Leave Type:</Typography>
           <Typography>{ leaveDetail.leave.leaveType}</Typography>
           </Grid>
           <Grid item md={12} className={classes.content}>
           <Typography sx={{mr : 2}}>Leave Method:</Typography>
           <Typography>{leaveDetail.leave.leaveMethod}</Typography>
           </Grid>
           <Grid item md={12} className={classes.content}>
               <Typography sx={{mr : 2}}>Start Date:</Typography>
               <Typography>{new Date(leaveDetail.leave.startDate).toDateString()}</Typography>
               </Grid>
           <Grid item md={12} className={classes.content}>
               <Typography sx={{mr : 2}}> End Date:</Typography>
               <Typography>{new Date(leaveDetail.leave.endDate).toDateString()}</Typography>
           </Grid>
           <Grid item md={12} className={classes.content}> 
           <Typography sx={{mr : 2}}>Reason:</Typography>
           <Typography>{leaveDetail.leave.reason}</Typography>
           </Grid>
           </Grid>
           
          </DialogContent>
          <DialogActions>
              <Button>Approve</Button>
              <Button>Reject</Button>
            
          </DialogActions>
        </Dialog>

  )
}

export default ViewDetailTeamLead