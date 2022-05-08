import { useState, useEffect, React } from "react";
import axios from "axios";
import { Grid, Box } from "@mui/material";
import useStyles from "./RecentEmployeeSectionStyles";
import RecentEmployee from "./RecentEmployee";
import { recentEmployees } from "../../../Api/ReportersManagementModule/EmployeeApi";
// const fetchHandler = async () => {
//   return await axios
//     .get("http://localhost:8070/employee/recentSection")
//     .then((res) => res.data.data)
//     .catch((err) => {
//       console.log(err);
//     });
// };
function AllRecentEmployees() {
  const [profiles, setProfiles] = useState([]);
  // console.log(profiles)
  useEffect(() => {
    async function fetchData() {
      setProfiles(await recentEmployees());
    }
    fetchData();
    // fetchHandler()
    //   .then((data) => setProfiles(data.profiles))
    //   .catch((err) => {
    //     console.log(err);
    //   });
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
