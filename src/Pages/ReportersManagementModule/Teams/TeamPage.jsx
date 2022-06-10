import React from "react";
import DisplayTeams from "../../../Components/ReportersManagementModule/TeamDisplay/DisplayTeams";
import { Grid, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

function TeamPage({ teamcreate }) {
  const jobRole = JSON.parse(localStorage.getItem("user")).jobRole; //profile should change to user
  return (
    <div>
      <Box padding={4}>
        {jobRole==="HR Manager"&&(<Grid item sm={12} md={12}>
          <Link to="/teams/create">
            <Button type="button" variant="contained">
              Create Team
            </Button>
          </Link>
        </Grid>)}
        <Grid item sm={12} md={12} sx={{ mb: 1 }}>
          <DisplayTeams />
        </Grid>
      </Box>
    </div>
  );
}

export default TeamPage;
