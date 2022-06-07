import { useState, useEffect, React } from "react";
import DisplayProfile from "./DisplayProfile";
import { Grid } from "@mui/material";
import { viewAllEmployees } from "../../../Api/ReportersManagementModule/EmployeeApi";
import ViewProfileInfo from "./ViewProfileInfo";

function DisplayProfiles() {
  const [profiles, setProfiles] = useState([]);
  const [empoyeeInfo, setEmployeeInfo] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setProfiles(await viewAllEmployees());
    }
    fetchData();
  }, []);

  return (
    <div component="span">
      <Grid
        container
        sx={{
          justifyContent: "center",
          display: "flex",
        }}
      >
        {profiles &&
          profiles.map((prof, i) => {
            return (
              <div className="profile" key={prof._id} component="span">
                <Grid item xs={12} sm={6} md={4} component="span" key={i}>
                  <DisplayProfile profile={prof} />
                </Grid>
              </div>
            );
          })}
      </Grid>
      {/* <Grid>
        <ViewProfileInfo employee={empoyeeInfo} />
      </Grid> */}
    </div>
  );
}

export default DisplayProfiles;
