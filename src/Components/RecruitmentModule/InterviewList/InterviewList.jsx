import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
//import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { getInterviewList } from "../../../Api/RecruitmentModule/InterviewApi";
import { Avatar, AvatarGroup, Button } from "@mui/material";
import InterviewDetailsDialog from "./InterviewDetailsDialog/InterviewDetailsDialog";

const InterviewList = ({ open }) => {
  //const [page, setPage] = useState(0);
  //const [rowsPerPage, setRowsPerPage] = useState(5);
  const [interviewList, setInterviewList] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [interview, setInterview] = useState();
  const fetchData = async () => {
    setInterviewList(await getInterviewList("E001"));
    //console.log(interviewList);
  };
  useEffect(() => {
    fetchData();
  }, []);
  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(event.target.value);
  //   setPage(0);
  // };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleViewDetails = (interview) => {
    console.log(interview);
    setInterview(interview);
    setOpenDialog(true);
  };
  return (
    <Paper elevation={4} sx={{ width: "100%", overflow: "hidden", p: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Candidate</TableCell>
            <TableCell>Interview Type</TableCell>
            <TableCell>Interview Date</TableCell>
            <TableCell>Interview Time</TableCell>
            <TableCell align="center">Interviewers</TableCell>
            <TableCell></TableCell>
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
          {interviewList &&
            interviewList.map((interview) => (
              <TableRow key={interview._id}>
                <TableCell>{interview.candidateName}</TableCell>
                <TableCell>{interview.InterviewType}</TableCell>
                <TableCell>{new Date(interview.InterviewDate).toDateString()}</TableCell>
                <TableCell>{interview.InterviewTime}</TableCell>
                <TableCell>
                  <AvatarGroup total={interview.Interviewers.length}>
                    {interview.Interviewers &&
                      interview.Interviewers.map((interviewer) => (
                        <Avatar key={interviewer._id} src={interviewer.profilePic}/>
                      ))}
                  </AvatarGroup>
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleViewDetails(interview)}
                    size="small"
                    variant="contained"
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <InterviewDetailsDialog
        openDialog={openDialog}
        handleCloseDialog={handleCloseDialog}
        interview={interview}
      />

      {/* <TablePagination
        rowsPerPageOptions={[5, 10]}
        component="div"
        count={interviewList.length }
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </Paper>
  );
};
export default InterviewList;
