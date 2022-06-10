import { Avatar, Card, Divider, Grid, Paper, Typography } from "@mui/material";
import useStyles from "../OrganizationStructure/OrganizationStructureStyles";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { viewAllEmployees } from "../../../Api/ReportersManagementModule/EmployeeApi";

function OrganizationStructure() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setProfiles(await viewAllEmployees());
    }
    fetchData();
  }, []);
  console.log("djnjf");
  console.log(profiles);
  const classes = useStyles();
  return (
    <div>
      <Box padding={1}>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ textAlign: "center", mb: 2 }}
        >
          Organization Structure
        </Typography>
        <Paper className={classes.paper}>
          <Typography className={classes.levelRole} variant="h6">
            CTO
          </Typography>
          <Divider sx={{ mt: 2, mb: 2 }}></Divider>
          <Grid container>
            {profiles &&
              profiles.map((employee) => {
                if (employee.user.jobRole === "CTO") {
                  return (
                    <Grid
                      item
                      md={3}
                      className={classes.levelGrid}
                      key={employee.user._id}
                    >
                      <Typography component="span">
                        <Avatar
                          className={classes.avatar}
                          src={employee.user.profilePic}
                        />
                        {employee.user.employeeFirstName +
                          " " +
                          employee.user.employeeLastName}
                      </Typography>
                    </Grid>
                  );
                }
              })}
          </Grid>
        </Paper>
        <Paper className={classes.paper}>
          <Typography className={classes.levelRole} variant="h6">
            Senior Software Engineer
          </Typography>
          <Divider sx={{ mt: 2, mb: 2 }}></Divider>
          <Grid container>
            {profiles &&
              profiles.map((employee) => {
                if (employee.user.jobRole === "SSE") {
                  return (
                    <Grid
                      item
                      md={3}
                      className={classes.levelGrid}
                      key={employee.user._id}
                    >
                      <Typography component="span">
                        <Avatar
                          className={classes.avatar}
                          src={employee.user.profilePic}
                        />
                        {employee.user.employeeFirstName +
                          " " +
                          employee.user.employeeLastName}
                      </Typography>
                    </Grid>
                  );
                }
              })}
          </Grid>
        </Paper>

        <Typography className={classes.levelRole} variant="h6">
          Software Engineer
        </Typography>
        <Divider sx={{ mt: 2, mb: 2 }}></Divider>
        <Grid container>
          {profiles &&
            profiles.map((employee) => {
              if (employee.user.jobRole === "software engineer") {
                return (
                  <Box padding={2}>
                    <Card
                      sx={{
                        padding: 3,
                        minWidth: 250,
                        borderRadius: 5,
                        textAlign: "center",
                      }}
                    >
                      <Grid item md={3} key={employee.user._id}>
                        <Typography
                          component="span"
                          sx={{ textAlign: "center" }}
                        >
                          <Avatar src={employee.user.profilePic} />
                          {employee.user.employeeFirstName +
                            " " +
                            employee.user.employeeLastName}
                        </Typography>
                      </Grid>
                    </Card>
                  </Box>
                );
              }
            })}
        </Grid>

        <Paper className={classes.paper}>
          <Typography className={classes.levelRole} variant="h6">
            HR Employee
          </Typography>
          <Divider sx={{ mt: 2, mb: 2 }}></Divider>
          <Grid container>
            {profiles &&
              profiles.map((employee) => {
                if (employee.user.jobRole === "HR") {
                  return (
                    <Grid
                      item
                      md={3}
                      className={classes.levelGrid}
                      key={employee.user._id}
                    >
                      <Typography component="span">
                        <Avatar
                          className={classes.avatar}
                          src={employee.user.profilePic}
                        />
                        {employee.user.employeeFirstName +
                          " " +
                          employee.user.employeeLastName}
                      </Typography>
                    </Grid>
                  );
                }
              })}
          </Grid>
        </Paper>
        <Paper className={classes.paper}>
          <Typography className={classes.levelRole} variant="h6">
            UI/UX Designer
          </Typography>
          <Divider sx={{ mt: 2, mb: 2 }}></Divider>
          <Grid container>
            {profiles &&
              profiles.map((employee) => {
                if (employee.user.jobRole === "UI/UX designer") {
                  return (
                    <Grid
                      item
                      md={3}
                      className={classes.levelGrid}
                      key={employee.user._id}
                    >
                      <Typography component="span">
                        <Avatar
                          className={classes.avatar}
                          src={employee.user.profilePic}
                        />
                        {employee.user.employeeFirstName +
                          " " +
                          employee.user.employeeLastName}
                      </Typography>
                    </Grid>
                  );
                }
              })}
          </Grid>
        </Paper>
      </Box>
    </div>
  );
}

export default OrganizationStructure;
