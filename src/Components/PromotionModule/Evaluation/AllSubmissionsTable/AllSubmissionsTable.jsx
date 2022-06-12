// import { useState, useEffect } from "react";
// import axios from "axios";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import { Button } from "@mui/material/";

// const AllSubmissionsTable = () => {
//   const [submissionList, setsubmissionList] = useState([]); //

//   useEffect(() => {
//     axios
//       .get("http://localhost:8070/promotion/evaluation/allSubmissions")
//       .then((allRecords) => {
//         setsubmissionList(allRecords.data);
//         console.log("data loaded from View All PaperList - frontend");
//         // console.log(allRecords.data);
//       });
//   }, []);
//   //useEffect(() => {
//   //   async function fetchData() {
//   //     setExamsList(await viewAllExamsApi());
//   //   }
//   //   fetchData();
//   // }, []);

//   return (
//     <div>
//       <h1>All submissions</h1>
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }} aria-label="simple table">
//           <TableHead>
//             <TableRow>
//               <TableCell>PaperID</TableCell>
//               <TableCell align="right">EmployeeID</TableCell>
//               <TableCell align="right">DateAttempted</TableCell>
//               <TableCell align="right">TeamLeadID</TableCell>
//               <TableCell align="right">Feedback</TableCell>
//               <TableCell align="right">DateOfEvaluation</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {submissionList.map((submission, key) => (
//               <TableRow
//                 key={key}
//                 sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//               >
//                 <TableCell component="th" scope="row">
//                   {submission.PaperID}
//                 </TableCell>
//                 <TableCell align="right">{submission.EmployeeID}</TableCell>
//                 <TableCell align="right">{submission.DateAttempted}</TableCell>
//                 <TableCell align="right">{submission.TeamLeadID}</TableCell>
//                 <TableCell align="right">{submission.Feedback}</TableCell>
//                 <TableCell align="right">
//                   {submission.DateOfEvaluation}
//                 </TableCell>
//                 {/* <Button>View Paper</Button> */}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };
// export default AllSubmissionsTable;

import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Button, Box } from "@mui/material/";
import { Grid } from "@mui/material";
import useStyles from "./AllSubmissionsTableStyles";
import { styled } from "@mui/material/styles";
import { displayTeamMemberSubmissionsApi } from "../../../../Api/PromotionModule/EvaluateApi/displayTeamMemberSubmissionsApi";
import { allSubmissionsApi } from "../../../../Api/PromotionModule/EvaluateApi/allSubmissionsApi";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#183d78",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#e0e0e0",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#e1f5fe",
  },
  "&:hover": {
    backgroundColor: "#fafafa",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const DisplayMyFeedback = () => {
  const classes = useStyles();
  const [submissionList, setsubmissionList] = useState([]);

  const { EmployeeID } = useParams();
  useEffect(() => {
    async function fetchData() {
      setsubmissionList(await allSubmissionsApi());
      console.log("data loaded from all submissions - frontend");
    }
    fetchData();
  }, [EmployeeID]);

  return (
    <div>
      {submissionList == null ? (
        <div>
          <Box className={classes.Box}>
            <Typography className={classes.topic}>
              Evaluation Test Submissions
            </Typography>

            <Grid container sx={{ p: 4 }}>
              <Grid className={classes.text}>
                <Typography className={classes.content}>
                  No any submission yet.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </div>
      ) : (
        <div>
          <Box className={classes.Box}>
            <Typography className={classes.topic}>
              Evaluation Test Submissions
            </Typography>
            <Grid container sx={{ p: 4 }}>
              <Grid
                item
                sm={12}
                md={12}
                sx={{
                  mt: 2,
                }}
              >
                <TableContainer component={Paper} className={classes.paper}>
                  <Table
                    className={classes.table}
                    aria-label="customized table"
                  >
                    <TableHead>
                      <TableRow>
                        <StyledTableCell align="left">
                          Employee ID
                        </StyledTableCell>
                        <StyledTableCell align="left">Paper ID</StyledTableCell>
                        <StyledTableCell align="left">
                          Date Attempted
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          TeamLead ID
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          Feed back
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          Date Of Evaluation
                        </StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {submissionList.map((record, idx) => (
                        <StyledTableRow key={idx}>
                          <StyledTableCell align="left">
                            {record.EmployeeID}
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            {record.PaperID}
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            {record.DateAttempted}
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            {record.TeamLeadID}
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            {record.DateOfEvaluation}
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            {record.Feedback}
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </Box>
        </div>
      )}
    </div>
  );
};
export default DisplayMyFeedback;
