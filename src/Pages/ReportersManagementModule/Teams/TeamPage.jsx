import React from "react";
import DisplayTeams from "../../../Components/ReportersManagementModule/TeamDisplay/DisplayTeams";
import { Grid, Button } from "@mui/material";

function TeamPage() {
  return (
    <div>
      <Grid item sm={12} md={12} sx={{ mb: 5 }}>
        <Button variant="contained">Create New Team</Button>
      </Grid>
      <Grid item sm={12} md={12} sx={{ mb: 5 }}>
        <DisplayTeams />
      </Grid>
    </div>
  );
}

export default TeamPage;
