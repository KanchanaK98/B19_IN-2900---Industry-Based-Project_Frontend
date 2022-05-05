import React from "react";
import { Typography, Button, Card, Grid, Avatar, Divider } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import { Link } from "react-router-dom";
function DisplayTeam({ team }) {
  const { _id, teamName, teamLeadID, TeamWithEmp, ProductOfTeam } = team;
  console.log(team);
  //   console.log(ProductOfTeam)
  return (
    <div>
      <Card
        sx={{
          mt: 5,
          mb: 2,
          borderRadius: 5,
          padding: 5,
          minWidth: 300,
          backgroundColor: "#e4ecf7",
        }}
      >
        {/* <EditTwoToneIcon /> */}

        <Typography align="center" variant="h6">
          {teamName}
        </Typography>
        <Grid sx={{ justifyContent: "center", display: "flex" }}>
          <Avatar src={TeamWithEmp[0].profilePic}></Avatar>
        </Grid>

        <Typography align="center">
          {teamLeadID +
            " " +
            TeamWithEmp[0].employeeName 
            // " " +
            // TeamWithEmp[0].employeeLastName
          }
        </Typography>
        <Divider sx={{ mt: 2, mb: 2 }}></Divider>
        <Grid>
          <Typography>
            {TeamWithEmp.length > 0 &&
              TeamWithEmp.map((result, i) => {
                if (TeamWithEmp[i].employeeID !== teamLeadID) {
                  return (
                    <Typography component={"span"} key={i}>
                      <Avatar
                        src={TeamWithEmp[i].profilePic}
                        component={"span"}
                      ></Avatar>
                      {TeamWithEmp[i].employeeID +
                        " " +
                        TeamWithEmp[i].employeeName 
                        // " " +
                        // TeamWithEmp[i].employeeLastName
                        }
                    </Typography>
                  );
                }
              })}
          </Typography>
        </Grid>
        <Divider sx={{ mt: 2, mb: 2 }}></Divider>
        <Typography align="center">
          {ProductOfTeam.length > 0
            ? ProductOfTeam[0].productName
            : "not assigned"}
        </Typography>
        <Divider sx={{ mt: 2, mb: 2 }}></Divider>
        <Typography align="center">
          <Button
            variant="contained"
            component={Link}
            to={`/teams/update/${_id}`}
            state={{ team }}
          >
            Update Team
          </Button>
        </Typography>
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
