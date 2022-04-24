import {

Divider,
Grid,

Paper,

Typography,
} from "@mui/material";
import { PendingActions } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { getLeaveBalance } from "../../../Api/LeaveManagementModule/LeaveApi";


const RemaningLeaves = () => {
  const [leaveBalance, setLeaveBalance] = useState({});

  const fetchData = async()=> {
  setLeaveBalance(await getLeaveBalance('E001'));
  }
  useEffect(()=> {
    fetchData();
  }, [])
 // console.log(leaveBalance.rema);
  return (
    <Paper sx={{mr:4,ml:4, pb : 2}}>
      <Grid container>

      <Grid item sm={12} md={12} sx={{display:"flex", mt:4}}>
          <PendingActions fontSize="large" sx={{mr:4, ml:4}} />
          <Typography fontWeight={700} variant="h4">
            Remaining Leaves
          </Typography>
        </Grid>

        <Grid item sm={12} md={12} sx={{mt:2}}>
          <Divider variant="middle" />
          <Divider variant="middle" />
        </Grid>

      </Grid>
       
      <Card sx={{ minWidth: 275, backgroundColor: "#af8eb5", m:5}}>
      <CardContent sx={{display : 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <Typography fontWeight={500} sx={{ fontSize: 20}} color="text.secondary" gutterBottom>
          Annual Leave
        </Typography>
        <Typography variant="h5">
         {leaveBalance.remainingAnnual &&  (leaveBalance.remainingAnnual)}
        </Typography>
      
      </CardContent>
      
    </Card>

    <Card sx={{ minWidth: 275, backgroundColor: "#ffcc80", m:5}}>
      <CardContent sx={{display : 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <Typography fontWeight={500} sx={{ fontSize: 20}} color="text.secondary" gutterBottom>
          Casual Leave
        </Typography>
        <Typography variant="h5">
         {leaveBalance.remainingCasual &&  (leaveBalance.remainingCasual)}
        </Typography>
      </CardContent>
      
    </Card>

    <Card sx={{ minWidth: 275, backgroundColor: "pink", m:5}}>
      <CardContent sx={{display : 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <Typography fontWeight={500} sx={{ fontSize: 20}} color="text.secondary" gutterBottom>
          Medical Leave
        </Typography>
        <Typography variant="h5">
         {leaveBalance.remainingMedical &&  (leaveBalance.remainingMedical)}
        </Typography>
      </CardContent>
      
    </Card>

    </Paper>
  )
}

export default RemaningLeaves