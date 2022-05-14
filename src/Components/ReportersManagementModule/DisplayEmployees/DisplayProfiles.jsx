import { useState, useEffect, React } from "react";
import DisplayProfile from "./DisplayProfile";
import { Grid } from "@mui/material";
import { viewAllEmployees } from "../../../Api/ReportersManagementModule/EmployeeApi";

function DisplayProfiles() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setProfiles(await viewAllEmployees());
    }
    fetchData();
 
  }, []);
  // const classes = useStyles();
  return (
    <div component="span">
      {/* <DisplayProfile/> */}

      <Grid
        container
        sx={{
          justifyContent: "center",
          display: "flex",
        }}
        
      >
        {profiles &&
          profiles.map((prof) => {
            return (
              <div className="profile" key={prof._id} component="span">
                <Grid item xs={12} sm={6} md={4} component="span" >
                  <DisplayProfile profile={prof} />
                </Grid>
              </div>
            );
          })}
      </Grid>
    </div>
  );
}

export default DisplayProfiles;
