import React, { useEffect, useState } from "react";
import { Avatar, Button, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { getRequestedLeaves } from "../../../../Api/LeaveManagementModule/LeaveApi";
import ViewDetailTeamLead from "./ViewDetailTeamLead";
import useStyles from "./RequestedLeavesStyles";

const RequestedLeavesTeamLead = () => {
  const classes = useStyles();
  const [requestedLeaves, setRequestedLeaves] = useState([]);
  const [open, setOpen] = useState(false);
  const [leaveDetail, setLeaveDetail]= useState(null);
  const[approve, setApprove] = useState(false);
  const[reject, setReject] = useState(false);

  
  const handleClickOpen = (Leave) => {
    setLeaveDetail(Leave);
    setOpen(true);
    
  };

  const onClose = () => {
    setOpen(false);
    setApprove(false);
    setReject(false);
  };

  
  useEffect(() => {
    fetchData();
  }, [open]);

  const fetchData = async () => {
    setRequestedLeaves(await getRequestedLeaves());
  };
  
  return (
    <Paper elevation={4} sx={{ width: "100%", overflow: "hidden", p: 2 }} className={classes.paper}>
      <Table >
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell><Typography>Employee</Typography></TableCell>
            <TableCell><Typography>Leave Type</Typography></TableCell>
            <TableCell><Typography>Leave Method</Typography></TableCell>
            <TableCell><Typography>Start Date</Typography></TableCell>
            <TableCell><Typography>End Date</Typography></TableCell>
            <TableCell><Typography>Status</Typography></TableCell>
            <TableCell> </TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {requestedLeaves &&
            requestedLeaves.map((requestedLeave) => (
              <TableRow key={requestedLeave.leave._id} className={classes.tableRow}>
                <TableCell sx={{display:"flex",alignItems:"center"}}><Avatar sx={{mr:1}} src ={requestedLeave.employee.profilePic}/>{requestedLeave.employee.employeeFirstName+" "+requestedLeave.employee.employeeLastName}</TableCell>
                <TableCell>{requestedLeave.leave.leaveType}</TableCell>
                <TableCell>{requestedLeave.leave.leaveMethod}</TableCell>
                <TableCell>
                  {new Date(requestedLeave.leave.startDate).toDateString()}
                </TableCell>
                <TableCell>
                  {new Date(requestedLeave.leave.endDate).toDateString()}
                </TableCell>
                <TableCell>{requestedLeave.leave.status}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleClickOpen(requestedLeave)}
                    variant="contained"
                  >
                    View
                  </Button>

                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      {leaveDetail && 
      (<ViewDetailTeamLead open={open} onClose={onClose} 
        leaveDetail={leaveDetail}
        setApprove = {setApprove}
        approve = {approve}
        setReject = {setReject}
        reject = {reject}
       requestedLeaves={requestedLeaves}
       setRequestedLeaves = {setRequestedLeaves}
        />)
      }

      {/* <TablePagination
      rowsPerPageOptions={[15, 5, 25, 100]}
      component="div"
      //count={rows.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    /> */}
    </Paper>
  );
};

export default RequestedLeavesTeamLead;
