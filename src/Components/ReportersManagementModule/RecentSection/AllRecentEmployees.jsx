import { useState, useEffect, React } from "react";
import { Box, Grid } from "@mui/material";
import RecentEmployee from "./RecentEmployee";
import { recentEmployees } from "../../../Api/ReportersManagementModule/EmployeeApi";

// import Carousel from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';

function AllRecentEmployees() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setProfiles(await recentEmployees());
    }
    fetchData();
  }, []);

  return (
    <div>
        {/* <Carousel> */}
      <Box maxWidth={400}>
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
                <div key={prof._id}>
                  <Grid item xs={12} sm={6} md={4} component="span" >
                    <RecentEmployee profile={prof} />
                  </Grid>
                </div>
              );
            })}
        </Grid>
      </Box>
      {/* </Carousel> */}
    </div>
  );
}

export default AllRecentEmployees;
