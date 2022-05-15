import React, { useEffect, useState } from "react";
import { Avatar, Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { getRequestedLeaves } from "../../../Api/LeaveManagementModule/LeaveApi";
import ViewMoreDialog from "./ViewDetailDialog";
import ViewDetailTeamLead from "./ViewDetailTeamLead";

const RequestedLeavesTeamLead = () => {
  const [requestedLeaves, setRequestedLeaves] = useState([]);
  const [open, setOpen] = useState(false);
  const [leave, setLeave] = useState(null);
  // const [cancel, setCancel] = useState(false);
  const [leaveDetail, setLeaveDetail]= useState(null);

  

  const handleClickOpen = (Leave) => {
    setLeaveDetail(Leave);
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setRequestedLeaves(await getRequestedLeaves("E001"));
  };
  
  return (
    <Paper elevation={4} sx={{ width: "100%", overflow: "hidden", p: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Employee</TableCell>
            <TableCell>Leave Type</TableCell>
            <TableCell>Leave Method</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>End Date</TableCell>
            <TableCell>Status</TableCell>
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
              <TableRow key={requestedLeave.leave._id}>
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
      (<ViewDetailTeamLead open={open} onClose={onClose} leaveDetail={leaveDetail} />)
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
