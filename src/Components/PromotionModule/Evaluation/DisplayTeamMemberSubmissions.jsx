import { useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material/";
import { displayTeamMemberSubmissionsApi } from "../../../Api/PromotionModule/EvaluateApi/displayTeamMemberSubmissionsApi";

const DisplayTeamMemberSubmissions = () => {
  const [mysubmissionList, setmysubmissionList] = useState([]);

  const { EmployeeID } = useParams();

  // useEffect(() => {
  //   axios
  //     .get(
  //       `http://localhost:8070/promotion/evaluation/allSubmissions/${EmployeeID}`
  //     ) //edit this
  //     .then((allRecords) => {
  //       setmysubmissionList(allRecords.data);
  //       console.log("data loaded from TeamLead submissions - frontend");
  //       // console.log(allRecords.data);
  //     });
  // }, []);

  useEffect(() => {
    async function fetchData() {
      setmysubmissionList(await displayTeamMemberSubmissionsApi(EmployeeID));
      console.log("data loaded from TeamLead submissions - frontend");
    }
    fetchData();
  }, [EmployeeID]);

  return (
    <div>
      <h1>Team member submissions</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>PaperID</TableCell>
              <TableCell align="right">EmployeeID</TableCell>
              <TableCell align="right">DateAttempted</TableCell>
              <TableCell align="right">TeamLeadID</TableCell>
              <TableCell align="right">Feedback</TableCell>
              <TableCell align="right">DateOfEvaluation</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mysubmissionList.map((submission, key) => (
              <TableRow
                key={key}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {submission.PaperID}
                </TableCell>

                <TableCell align="right">{submission.EmployeeID}</TableCell>
                <TableCell align="right">{submission.DateAttempted}</TableCell>
                <TableCell align="right">{submission.TeamLeadID}</TableCell>
                <TableCell align="right">{submission.Feedback}</TableCell>
                <TableCell align="right">
                  {submission.DateOfEvaluation}
                </TableCell>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#183d78" }}
                  onClick={() =>
                    window.open(
                      ` /promotion/evaluation/evaluatePaper/${EmployeeID}/${submission.EmployeeID}/${submission.PaperID}`,
                      "_self"
                    )
                  }
                >
                  Evaluate&nbsp;
                </Button>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default DisplayTeamMemberSubmissions;
