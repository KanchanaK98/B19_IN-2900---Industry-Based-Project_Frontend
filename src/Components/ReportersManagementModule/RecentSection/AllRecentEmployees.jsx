import { useState, useEffect, React } from "react";
import { Grid } from "@mui/material";
// import useStyles from "./RecentEmployeeSectionStyles";
import RecentEmployee from "./RecentEmployee";
import { recentEmployees } from "../../../Api/ReportersManagementModule/EmployeeApi";

function AllRecentEmployees() {
  const [profiles, setProfiles] = useState([]);
  // console.log(profiles)
  useEffect(() => {
    async function fetchData() {
      setProfiles(await recentEmployees());
    }
    fetchData();
 
  }, []);

  // console.log(profiles);
  // const classes = useStyles();
  return (
    <div>
      <Grid
        container
        spacing={4}
        sx={{
         
          justifyContent: "center",
          display: "flex",
        }}
      >
        {profiles &&
          profiles.map((prof) => {
            return (
              <div className="profile" key={prof._id}>
                <Grid item xs={12} sm={6} md={4} component="span">
                  <RecentEmployee profile={prof} />
                </Grid>
              </div>
            );
          })}
      </Grid>
    </div>
  );
}

export default AllRecentEmployees;
