import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import AllEmployees from "../../../Components/ReportersManagementModule/DisplayEmployees/AllEmployees";
import DisplayProfile from "../../../Components/ReportersManagementModule/DisplayEmployees/DisplayProfile";

function DisplayAllEmployees({ profiles }) {
  // const [profiles, setProfiles] = useState([]);
  const [employee, setEmployee] = useState(profiles[0]);
  console.log(profiles);
  console.log(employee);
  // useEffect(() => {
  //   async function fetchData() {
  //     setProfiles(await viewAllEmployees());
  //     setEmployee( profiles[0]);
  //    console.log("hi 1")
  //   }
  //   fetchData();
  // }, []);
  console.log("Hi 2");
  return (
    <Box>
      <Grid container>
        <Grid item md={4} xs={12}>
          <AllEmployees setEmployee={setEmployee} profiles={profiles}/>
        </Grid>
        <Grid item md={8} xs={12} sx={{padding:1}}>
          {employee && <DisplayProfile employee={employee} />}
        </Grid>
      </Grid>
    </Box>
  );
}

export default DisplayAllEmployees;
