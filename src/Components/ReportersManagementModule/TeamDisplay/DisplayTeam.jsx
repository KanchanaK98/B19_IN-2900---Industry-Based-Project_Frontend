import React from "react";
import { Typography, Button, Card, Grid, Avatar, Divider } from "@mui/material";
import { Link } from "react-router-dom";
function DisplayTeam({ team }) {
  const { _id, teamName, teamLeadID, TeamWithEmp, ProductOfTeam } = team;
  const jobRole = JSON.parse(localStorage.getItem("user")).jobRole; //profile should change to user
  return (
    <div>
      <Card
        sx={{
          mt: 5,
          mb: 2,
          borderRadius: 5,
          padding: 3,
          minHeight: 500,
          minWidth: 320,
          backgroundColor: "#e4ecf7",
        }}
      >
        {/* <EditTwoToneIcon /> */}

        <Typography
          align="center"
          variant="h6"
          sx={{ fontWeight: "bold", color: "#183d78" }}
        >
          {teamName}
        </Typography>
        <Grid sx={{ justifyContent: "center", display: "flex" }}>
          {/* <Avatar
            sx={{ width: 60, height: 60 }}
            src={TeamWithEmp[0].profilePic}
          ></Avatar> */}

          {TeamWithEmp.length > 0 &&
            TeamWithEmp.map((result, i, j, k) => {
              if (TeamWithEmp[i].employeeID === teamLeadID) {
                return (
                  <Grid sx={{ mb: 1, mt: 1 }} key={i}>
                    <Grid
                      sx={{ justifyContent: "center", display: "flex", mb: 1 }}
                    >
                      <Avatar
                        src={TeamWithEmp[i].profilePic}
                        sx={{
                          width: 80,
                          height: 80,
                         border: "4px solid #09559c"
                        }}
                        key={i}
                        component={"span"}
                      />
                    </Grid>
                    <Typography
                      component={"span"}
                      align="center"
                      sx={{ fontWeight: "bold", color: "#09559c" }}
                    >
                      {TeamWithEmp[i].employeeID}
                      &nbsp;
                      {
                        TeamWithEmp[i].employeeName
                        // " " +
                        // TeamWithEmp[i].employeeLastName
                      }
                    </Typography>
                  </Grid>
                );
              }
            })}
        </Grid>

        <Divider sx={{ mt: 2, mb: 2 }}></Divider>
        <Grid>
          <Typography component={"span"}>
            {TeamWithEmp.length > 0 &&
              TeamWithEmp.map((result, i) => {
                if (TeamWithEmp[i].employeeID !== teamLeadID) {
                  return (
                    <Typography
                      component={"span"}
                      key={i}
                      sx={{ color: "#09559c", fontWeight: "bold",mt:2 }}
                    >
                      <Grid container sx={{ mb: 1 }}>
                        <Grid item>
                          <Avatar
                          sx={{  border: "2px solid #09559c",}}
                            src={TeamWithEmp[i].profilePic}
                            component={"span"}
                          ></Avatar>
                        </Grid>
                        <Grid item sx={{}}>
                          &nbsp;
                          {TeamWithEmp[i].employeeID}
                          <br /> &nbsp;
                          {
                            TeamWithEmp[i].employeeName
                            // " " +
                            // TeamWithEmp[i].employeeLastName
                          }
                        </Grid>
                      </Grid>
                    </Typography>
                  );
                }
              })}
          </Typography>
        </Grid>
        <Divider sx={{ mt: 2, mb: 2 }}></Divider>
        <Typography align="center" sx={{ color: "#183d78" }}>
          {ProductOfTeam.length > 0
            ? ProductOfTeam[0].productName
            : "not assigned"}
        </Typography>
        <Divider sx={{ mt: 2, mb: 2 }}></Divider>
        {jobRole === "HR Manager" && (
          <Typography align="center">
            <Button
              variant="contained"
              component={Link}
              to={`/teams/update/${_id}`}
              state={{ team }}
              sx={{ backgroundColor: "#183d78" }}
            >
              Update Team
            </Button>
          </Typography>
        )}
      </Card>
      {/* <Grid container>
      <Grid item md={12}>
        
      </Grid>
      </Grid> */}
    </div>
  );
}

export default DisplayTeam;
