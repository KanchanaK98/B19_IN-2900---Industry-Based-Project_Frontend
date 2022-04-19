import { useState, useEffect, React } from "react";
import axios from "axios";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import { Grid, Card } from "@mui/material";
import DisplayTeam from "./DisplayTeam";

const fetchHandler = async () => {
  return await axios
    .get("http://localhost:8070/employee/viewTeam")
    .then((res) => res.data.data)
    .catch((err) => {
      console.log(err);
    });
};
function DisplayTeams() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    async function fetchData() {
      setTeams(await fetchHandler());
    }
    fetchData();
  }, []);


  return (
    <div component="div">
        <Grid item sm={12} md={12} >
      <Card sx={{ mb: 2, minWidth: 1000 }}>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell  align='left'>Team Name </TableCell>
                <TableCell  align="left">Team Lead</TableCell>
                <TableCell  align="left">Team Members</TableCell>
                <TableCell  align="left">Product</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </Card>
      </Grid>
      <Grid item sm={12} md={12} >
      <Grid>
        {teams &&
          teams.map((tm) => {
            return (
              <div key={tm._id} component="div">
                <Grid item xs={12} sm={6} md={4} component="div">
                  <DisplayTeam team={tm} />
                </Grid>
              </div>
            );
          })}
      </Grid>
      </Grid>
    </div>
  );
}

export default DisplayTeams;
