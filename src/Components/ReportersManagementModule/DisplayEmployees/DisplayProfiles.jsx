import { useState, useEffect, React } from "react";
import axios from "axios";
import DisplayProfile from "./DisplayProfile";
import { Grid } from "@mui/material";
import useStyles from "./DisplayProfileCardStyles";
const fetchHandler = async () => {
  return await axios
    .get("http://localhost:8070/employee/")
    .then((res) => res.data.data)
    .catch((err) => {
      console.log(err);
    });
};
function DisplayProfiles() {
  const [profiles, setProfiles] = useState([]);
  // console.log(profiles)
  useEffect(() => {
    async function fetchData() {
      setProfiles(await fetchHandler());
    }
    fetchData();
    // fetchHandler()
    //   .then((data) => setProfiles(data.profiles))
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);
  const classes = useStyles();
  return (
    <div component="div" >
      {/* <DisplayProfile/> */}
      <Grid  container
  spacing={4}
  className={classes.gridContainer}
  justifyItems="center"

 >
        {profiles &&
          profiles.map((prof) => {
            return (
              <div className="profile" key={prof._id} component="div"  >
              
                  <Grid item  xs={12} sm={6} md={4} component="div">
                  <DisplayProfile profile={prof}  />
                 
                </Grid>
             
               </div>
            );
          })}
      </Grid>
    </div>
  );
}

export default DisplayProfiles;
