import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material/";
import { useParams } from "react-router-dom";
import { viewAllExamsApi } from "../../../Api/PromotionModule/ExamApi/viewAllExamsApi";
import { deleteScheduledExamApi } from "../../../Api/PromotionModule/ExamApi/deleteScheduledExamApi";

const ViewAllExamList = () => {
  const [ExamsList, setExamsList] = useState([]);

  const { EmployeeID } = useParams();
  console.log(EmployeeID);

  useEffect(() => {
    async function fetchData() {
      setExamsList(await viewAllExamsApi());
    }
    fetchData();
  }, []);

  console.log(ExamsList);

  return (
    <div>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#183d78" }}
        onClick={() =>
          window.open(
            ` /promotion/evaluation/exam/scheduleExam/${EmployeeID}`,
            "_self"
          )
        }
      >
        Schedule New Exam&nbsp;
      </Button>
      <h1>All Exams</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ExamID</TableCell>
              <TableCell align="right">ExamName</TableCell>
              <TableCell align="right">DateScheduled</TableCell>
              <TableCell align="right">JobRole</TableCell>
              <TableCell align="right">PaperID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ExamsList.map((element, key) => (
              <TableRow
                key={key}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {element.ExamID}
                </TableCell>
                <TableCell align="right">{element.ExamName}</TableCell>
                <TableCell align="right">{element.DateScheduled}</TableCell>
                <TableCell align="right">{element.JobRole}</TableCell>
                <TableCell align="right">{element.PaperID}</TableCell>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#183d78" }}
                  onClick={() =>
                    window.open(
                      ` /promotion/evaluation/exam/updateExam/${EmployeeID}/${element.ExamID}`,
                      "_self"
                    )
                  }
                >
                  Update&nbsp;
                </Button>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#183d78" }}
                  onClick={() => {
                    deleteScheduledExamApi(EmployeeID, element.ExamID).then(
                      () => {
                        window.location.reload(false);
                      }
                    );
                  }}
                >
                  Delete&nbsp;
                </Button>{" "}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default ViewAllExamList;
