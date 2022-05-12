import { useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material/";
//import { viewAllQuestionsApi } from "../../../Api/PromotionModule/QuestionApi/viewAllQuestionsApi";

import { createQuestionApi } from "../../../Api/PromotionModule/QuestionApi/createQuestionApi";
const ViewAllQuestionsTable = () => {
  const [QuestionList, setQuestionList] = useState([]); //

  useEffect(() => {
    axios
      .get("http://localhost:8070/promotion/Questions/")
      .then((allRecords) => {
        setQuestionList(allRecords.data);
        console.log("data loaded from View All QuestionList - frontend");
        // console.log(allRecords.data);
      });
  }, []);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>QuestionID</TableCell>
              <TableCell align="right">QuestionCatogory</TableCell>
              <TableCell align="right">QuestionBody</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {QuestionList.map((question, key) => (
              <TableRow
                key={key}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {question.QuestionID}
                </TableCell>
                <TableCell align="right">{question.QuestionCatogory}</TableCell>
                <TableCell align="right">{question.QuestionBody}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <Button variant="contained" color="primary" onClick={createQuestionApi}>
        {" "}
        Create using API
      </Button> */}
      <Button
        variant="contained"
        color="primary"
        onClick={() => window.open("/promotion/Questions/create", "_self")}
      >
        {" "}
        Create
      </Button>
    </div>
  );
};
export default ViewAllQuestionsTable;
