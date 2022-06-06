import useStyles from "./RecentEmployeeSectionStyles";
import { Typography, Avatar, Card, Grid, Divider } from "@mui/material";
import { useEffect, useState } from "react";
import { getAllTeams } from "../../../Api/ReportersManagementModule/TeamsApi";
function RecentEmployee({ profile }) {
  const [teams, setTeams] = useState();
  // const handleUpdate = () => {
  //   setUpdateEmployee(profile);
  //   setUpdateState(true);
  // };
  const {
    employeeFirstName,
    employeeLastName,
    birthday,
    streetNo,
    city,
    phoneNumber,
    NIC,
    companyEmail,
    jobRole,
    jobType,
    profilePic,
    status,
    teamID,
  } = profile;
  useEffect(() => {
    async function fetchData() {
      setTeams(await getAllTeams());
    }
    fetchData();
  }, []);
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card}>
        <Typography sx={{ mb: 1, fontWeight: "bold" }}>
          {employeeFirstName + " " + employeeLastName + " | " + jobRole}
        </Typography>
        <Grid container spacing={2}>
          <Grid item md={4} sx={{ justifyContent: "center", display: "flex" }}>
            <Avatar
              sx={{ width: 100, height: 100 }}
              src={profilePic}
              alt={employeeFirstName + " " + employeeLastName}
            ></Avatar>
          </Grid>
          <Grid item md={8} sx={{ mt: 1 }}>
            <Typography textAlign="center"> {companyEmail}</Typography>
            <Typography textAlign="center"> {phoneNumber}</Typography>
            <Divider sx={{ mt: 1, mb: 1 }}></Divider>
            {teams &&
              teams.map((team) => {
                if (team._id === teamID) {
                  return (
                    <Typography textAlign="center"> {team.teamName}</Typography>
                  );
                }
              })}
          </Grid>
        </Grid>

        {/* <Button onClick={handleUpdate} sx={{ mt: 5 }} fullWidth  variant="contained" size="medium">
          Update
        </Button> */}
      </Card>
    </div>
  );
}

export default RecentEmployee;
