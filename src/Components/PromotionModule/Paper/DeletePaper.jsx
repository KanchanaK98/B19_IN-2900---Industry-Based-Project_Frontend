import { useState, useEffect } from "react";
import axios from "axios";
import { deletePaperAPi } from "../../../Api/PromotionModule/PaperApi/deletePaperAPi";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material/";
import { Grid } from "@mui/material";

export default function DeletePaper() {
  // const ViewCurruntSalaryTable = () => {
  const [curruntSalaryList, setCurruntSalaryList] = useState([]); //

  // const ViewCurruntSalaryTableFunc = () => {
  //   viewCurruntSalaryApi(curruntSalaryList).then((response) => {
  //     console.log(response);
  //   });
  // };

  useEffect(() => {
    axios
      .get("http://localhost:8070/salary/Paper/delete/:PaperID")
      .then((allRecords) => {
        setCurruntSalaryList(allRecords.data);
        // console.log("data loaded from currunt salary list - frontend");
        // console.log(allRecords.data);
      });
  }, []);

  return (
    <Grid container sx={{ p: 4 }}>
      <Grid
        item
        sm={12}
        md={12}
        sx={{
          mt: 2,
        }}
      >
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              <TableCell align="right">
                <Button
                  variant="contained"
                  onClick={() => window.open("", "_self")}
                >
                  Delete
                </Button>
              </TableCell>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
