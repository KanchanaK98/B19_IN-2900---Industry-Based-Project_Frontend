import React from "react";
import DisplayTeams from "../../../Components/ReportersManagementModule/TeamDisplay/DisplayTeams";
import { Grid, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

function TeamPage({ teamcreate }) {
  return (
    <div>
      <Box padding={4} bgcolor="#d7dde0">
        <Grid item sm={12} md={12}>
          {/* <Link to="/teams/create"> */}
          <Button
            LinkComponent={Link}
            to={`/teams/create`}
            type="button"
            variant="contained"
            sx={{ backgroundColor: "#183d78" }}
          >
            Create Team
          </Button>
          {/* </Link> */}
        </Grid>

        <Grid item sm={12} md={12} sx={{ mb: 1 }}>
          <DisplayTeams />
        </Grid>
      </Box>
    </div>
  );
}

export default TeamPage;
