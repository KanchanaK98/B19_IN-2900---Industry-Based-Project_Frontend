import { useState, useEffect, React } from "react";
import { Box, Grid } from "@mui/material";
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
      <Box maxWidth={400} >
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
              <div  key={prof._id}>
                <Grid item xs={12} sm={6} md={4} component="span">
                  <RecentEmployee profile={prof} />
                </Grid>
              </div>
            );
          })}
      </Grid>
      </Box>
    </div>
  );
}

export default AllRecentEmployees;
