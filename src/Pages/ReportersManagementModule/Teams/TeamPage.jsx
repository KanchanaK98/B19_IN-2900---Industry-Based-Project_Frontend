import React from "react";
import DisplayTeams from "../../../Components/ReportersManagementModule/TeamDisplay/DisplayTeams";
import { Grid, Button } from "@mui/material";
import { Link, Route } from "react-router-dom";
import CreateTeams from "../../../Components/ReportersManagementModule/TeamCreate/CreateTeams";
import { withRouter } from "react-router-dom";

function TeamPage({ teamcreate }) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Grid item sm={12} md={12} sx={{ mb: 5 }}>
        {/* <Button
          variant="contained"

          
          // onClick={() => history.push('/teams/create')}
          // component={Link}
          // to={`/teams/create`}
          // state="createTeam"
        >
          
          Create New Team
        </Button> */}
        <Link to="/teams/create">
          <Button type="button" variant="contained">
           Create Team
          </Button>
        </Link>
      </Grid>
      <Grid item sm={12} md={12} sx={{ mb: 5 }}>
        <DisplayTeams />
      </Grid>
    </div>
  );
}

export default TeamPage;
