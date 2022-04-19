import React from "react";
import { Typography, Button, Card, Grid, Avatar } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";

function DisplayTeam({ team }) {
  const {
    _id,
    teamName,
    leadFirstName,
    leadLastName,
    leaderProfPic,
    teamLeadID,
    TeamWithEmp,
    ProductOfTeam,
  } = team;

  //   console.log(ProductOfTeam)
  return (
    <div>
      <Card sx={{ mb: 2, minWidth: 1210 }}>
     
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                {/* <EditTwoToneIcon /> */}
                <TableCell sx={{minWidth:100}}>
                  <Typography>{teamName}</Typography>
                </TableCell>
                <TableCell align="left" sx={{minWidth:200}}>
                  <Avatar src={leaderProfPic}></Avatar>
                  <Typography>
                    {teamLeadID + " " + leadFirstName + " " + leadLastName}
                  </Typography>
                </TableCell>
                <TableCell align="left" sx={{minWidth:300}}>
                  <Typography>
                    {TeamWithEmp.length > 0 &&
                      TeamWithEmp.map((result, i) => {
                        return (
                         <Typography component={"span"} key={i}>
                         {TeamWithEmp[i].employeeID +" "+
                           TeamWithEmp[i].employeeFirstName +
                           " " +
                           TeamWithEmp[i].employeeLastName}
                         ,
                       </Typography>
                        );
                      })}
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography>
                    {ProductOfTeam.length > 0 ?(ProductOfTeam[0].productName):'not assigned'}
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </Card>

      {/* <Card sx={{ mb: 2, minWidth: 1000 }}>
        <Grid>
          <Typography>Team Name :{teamName}</Typography>
          <Avatar src={leaderProfPic}></Avatar>
          <Typography>
            Team Leader :{teamLeadID + " " + leadFirstName + " " + leadLastName}
          </Typography>
          <Typography>
            Product Name :
            {ProductOfTeam.length > 0 && ProductOfTeam[0].productName}
          </Typography>
          <Typography>
            Team Members :
            {TeamWithEmp.length > 0 &&
              TeamWithEmp.map((result, i) => {
                return (
                  <Typography component={"span"} key={i}>
                    {TeamWithEmp[i].employeeID +
                      TeamWithEmp[i].employeeFirstName +
                      " " +
                      TeamWithEmp[i].employeeLastName}
                    ,
                  </Typography>
                );
              })}
          </Typography>
        </Grid>
      </Card> */}
    </div>
  );
}

export default DisplayTeam;
