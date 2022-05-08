import { useState, useEffect, React } from "react";
import DisplayProfile from "./DisplayProfile";
import { Grid } from "@mui/material";
import { viewAllEmployees } from "../../../Api/ReportersManagementModule/EmployeeApi";
// import useStyles from "./DisplayProfileCardStyles";
// const fetchHandler = async () => {
//   return await axios
//     .get("http://localhost:8070/employee/")
//     .then((res) => res.data.data)
//     .catch((err) => {
//       console.log(err);
//     });
// };
function DisplayProfiles() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setProfiles(await viewAllEmployees());
    }
    fetchData();
    // fetchHandler()
    //   .then((data) => setProfiles(data.profiles))
    //   .catch((err) => {
    //     console.log(err);
    //   });
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
