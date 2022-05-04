import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { getLeaveHistory } from "../../../Api/LeaveManagementModule/LeaveApi";

import ViewMoreDialog from "./ViewDetailDialog";



const LeaveHistoryTable = () => {
  const [leaveHistory, setLeaveHistory] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [leave, setLeave] = React.useState(null);

  const handleClickOpen = (leave) => {
    setLeave(leave)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const fetchData = async () => {
    setLeaveHistory(await getLeaveHistory("E002"));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Paper elevation={4} sx={{ width: "100%", overflow: "hidden", p: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Leave Type</TableCell>
            <TableCell>Number of Days</TableCell>
            <TableCell>Leave Method</TableCell>
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
          {leaveHistory &&
            leaveHistory.map((leave) => (
              <TableRow key={leave.leaveHistory._id}>
                <TableCell>{leave.leaveHistory.leaveType}</TableCell>
                <TableCell>{leave.numberOfLeaveDates}</TableCell>
                <TableCell>{leave.leaveHistory.leaveMethod}</TableCell>
                <TableCell>{leave.leaveHistory.status}</TableCell>
                <TableCell>
                  <Button color="secondary" variant="contained" onClick={() => handleClickOpen(leave)}>
                    View Details
                  </Button>
                </TableCell>

               
              </TableRow>
            ))}
        </TableBody>
      </Table>
      {leave && (
        <ViewMoreDialog open={open} handleClose={handleClose}leaveHistory={leaveHistory} setLeaveHistory={setLeaveHistory} leave={leave}/>

      )}

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

export default LeaveHistoryTable;
