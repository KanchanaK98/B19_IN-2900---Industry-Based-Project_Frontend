import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
//import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import {
  cancelInterview,
  getInterviewList,
} from "../../../Api/RecruitmentModule/InterviewApi";
import { Avatar, AvatarGroup, Button } from "@mui/material";
import InterviewDetailsDialog from "./InterviewDetailsDialog/InterviewDetailsDialog";
import SnackBar from "../../SnackBar/SnackBar";
import { useLocation } from "react-router-dom";

const InterviewList = ({ open }) => {
  const [interviewList, setInterviewList] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [interview, setInterview] = useState();
  const [openSnackBar, setOpenSnackBar] = useState(false);

  const location = useLocation();
  const fetchData = async () => {
    setInterviewList(await getInterviewList("E001"));
  };
  useEffect(() => {
    fetchData();
    if (location.state) setOpenSnackBar(location.state.success);
    window.history.replaceState(location.pathname, null);
  }, [location]);

  const handleCancelInterview = async () => {
    const response = await cancelInterview(interview._id);
    setInterviewList(
      interviewList.filter((Interview) => interview !== Interview)
    );
    handleCloseDialog();
    location.state = response;
      setOpenSnackBar(true);
  };
  const handleCloseSnackBar = () => {
    setOpenSnackBar(false);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleViewDetails = (interview) => {
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
                <TableCell>{interview.candidate.candidateName}</TableCell>
                <TableCell>{interview.InterviewType}</TableCell>
                <TableCell>
                  {new Date(interview.InterviewDate).toDateString()}
                </TableCell>
                <TableCell>{interview.InterviewTime}</TableCell>
                <TableCell>
                  <AvatarGroup total={interview.Interviewers.length}>
                    {interview.Interviewers &&
                      interview.Interviewers.map((interviewer) => (
                        <Avatar
                          key={interviewer._id}
                          src={interviewer.profilePic}
                        />
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
        handleCancelInterview={handleCancelInterview}
      />

      <SnackBar
        handleCloseSnackBar={handleCloseSnackBar}
        openSnackBar={openSnackBar}
        message={location.state && location.state.message}
      />
    </Paper>
  );
};
export default InterviewList;
