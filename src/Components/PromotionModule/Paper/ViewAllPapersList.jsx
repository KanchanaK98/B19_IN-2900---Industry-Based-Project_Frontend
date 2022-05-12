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
import { createPaperApi } from "../../../Api/PromotionModule/PaperApi/createPaperApi";

const ViewAllPapersList = () => {
  const [PaperList, setPaperList] = useState([]); //

  useEffect(() => {
    axios.get("http://localhost:8070/promotion/Paper").then((allRecords) => {
      setPaperList(allRecords.data);
      console.log("data loaded from View All PaperList - frontend");
      // console.log(allRecords.data);
    });
  }, []);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>PaperID</TableCell>
              <TableCell align="right">PaperName</TableCell>
              <TableCell align="right">PaperType</TableCell>
              <TableCell align="right">DateCreated</TableCell>
              <TableCell align="right">Questions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {PaperList.map((paper, key) => (
              <TableRow
                key={key}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {paper.PaperID}
                </TableCell>
                <TableCell align="right">{paper.PaperName}</TableCell>
                <TableCell align="right">{paper.PaperType}</TableCell>
                <TableCell align="right">{paper.DateCreated}</TableCell>
                <TableCell align="right">{paper.Questions}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        variant="contained"
        color="primary"
        onClick={() => window.open("/promotion/Paper/createPaper", "_self")}
      >
        {" "}
        Create New
      </Button>
    </div>
  );
};
export default ViewAllPapersList;
