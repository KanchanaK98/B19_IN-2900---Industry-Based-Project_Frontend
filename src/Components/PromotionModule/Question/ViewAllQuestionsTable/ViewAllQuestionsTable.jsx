// import { useState, useEffect } from "react";
// // import axios from "axios";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import { Button } from "@mui/material/";
// import { viewAllQuestionsApi } from "../../../Api/PromotionModule/QuestionApi/viewAllQuestionsApi";

// const ViewAllQuestionsTable = () => {
//   const [QuestionList, setQuestionList] = useState([]); //

//   useEffect(() => {
//     async function fetchData() {
//       setQuestionList(await viewAllQuestionsApi());
//     }
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }} aria-label="simple table">
//           <TableHead>
//             <TableRow>
//               <TableCell>QuestionID</TableCell>
//               <TableCell align="right">QuestionCatogory</TableCell>
//               <TableCell align="right">QuestionBody</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {QuestionList.map((question, key) => (
//               <TableRow
//                 key={key}
//                 sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//               >
//                 <TableCell component="th" scope="row">
//                   {question.QuestionID}
//                 </TableCell>
//                 <TableCell align="right">{question.QuestionCatogory}</TableCell>
//                 <TableCell align="right">{question.QuestionBody}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       {/* <Button variant="contained" color="primary" onClick={createQuestionApi}>
//         {" "}
//         Create using API
//       </Button> */}
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={() => window.open("/promotion/Questions/create", "_self")}
//       >
//         {" "}
//         Create
//       </Button>
//     </div>
//   );
// };
// export default ViewAllQuestionsTable;

import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Button, Box } from "@mui/material/";
import { Grid } from "@mui/material";
import { viewAllQuestionsApi } from "../../../../Api/PromotionModule/QuestionApi/viewAllQuestionsApi";
import { styled } from "@mui/material/styles";
import useStyles from "./ViewAllQuestionsTableStyles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#455a64",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#cfd8dc",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#e0e0e0",
  },
  "&:hover": {
    backgroundColor: "#90a4ae",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function ViewAllQuestionsTable() {
  const classes = useStyles();
  const [QuestionList, setQuestionList] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredRecords, setFilteredRecords] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setQuestionList(await viewAllQuestionsApi());
    }
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredRecords(
      QuestionList.filter((question) =>
        question.QuestionCatogory.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, QuestionList]);

  return (
    <div>
      <Box className={classes.Box}>
        <Typography className={classes.topic}>Question List</Typography>
        <Grid container sx={{ p: 4 }}>
          <Grid item sm={12} md={12}>
            <Grid item sm={12} md={12}>
              <div style={{ marginLeft: "37%", justifyContent: "center" }}>
                <Button
                  className={classes.btn}
                  variant="contained"
                  onClick={() =>
                    window.open("/promotion/Questions/create", "_self")
                  }
                >
                  Create New
                </Button>
                <input
                  type="text"
                  placeholder="Search by Q-Catogory"
                  className={classes.search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <br />
            </Grid>
            <TableContainer component={Paper} className={classes.paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="left">Question ID</StyledTableCell>
                    <StyledTableCell align="left">
                      Question Catogory
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      Question Body
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredRecords.map((question, idx) => (
                    <StyledTableRow key={idx}>
                      <StyledTableCell align="left">
                        {question.QuestionID}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {question.QuestionCatogory}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {question.QuestionBody}
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
  );
}
