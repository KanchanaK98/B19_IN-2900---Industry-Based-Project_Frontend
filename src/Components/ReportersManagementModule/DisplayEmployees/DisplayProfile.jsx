// import useStyles from "./DisplayProfileCardStyles";
import { Divider, Typography, Button, Avatar, Card, Grid } from "@mui/material";
import { Link } from "react-router-dom";
// import moment from "moment";
import ProgressBar from "./ProgressBar";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import CakeIcon from "@mui/icons-material/Cake";
import PlaceIcon from "@mui/icons-material/Place";
import { useEffect, useState } from "react";
import { getAllTeams } from "../../../Api/ReportersManagementModule/TeamsApi";

function DisplayProfile({ profile }) {
  const [teams, setTeams] = useState();
  // const handleUpdate = () => {
  //   setUpdateEmployee(profile);
  //   setUpdateState(true);
  // };
  const {
    // employeeFirstName,
    // employeeLastName,
    // birthday,
    // streetNo,
    // city,
    // phoneNumber,
    // NIC,
    // companyEmail,
    // jobRole,
    // jobType,
    // lastSeen,
    // profilePic,
    // status,
    // teamID,
    user,
    EmployeeWithAcc,
    EmpWithProf,
  } = profile;
  useEffect(() => {
    async function fetchData() {
      setTeams(await getAllTeams());
    }
    fetchData();
  }, []);
  console.log(profile);
  // const classes = useStyles();
  return (
    <div>
      <Card
        sx={{
          borderRadius: 5,
          marginBottom: 5,
          padding: 5,
          maxWidth: 350,
          minWidth: 350,
          backgroundColor: "#e4ecf7",
        }}
      >
        <Typography variant="h6" textAlign="center" sx={{ mb: 1 }}>
          {user.employeeFirstName + " " + user.employeeLastName}
        </Typography>
        <Grid sx={{ justifyContent: "center", display: "flex" }}>
          <Avatar
            sx={{ width: 120, height: 120, border: "0.5px solid #1b529e" }}
            src={user.profilePic}
            alt={user.employeeFirstName + " " + user.employeeLastName}
          ></Avatar>
        </Grid>

        <ProgressBar
          EmployeeWithAcc={EmployeeWithAcc}
          EmpWithProf={EmpWithProf}
          birthday={user.birthday}
          streetNo={user.streetNo}
          city={user.city}
          phoneNumber={user.phoneNumber}
        />

        {/* <Typography>{moment("lastSeen", "YYYYMMDD").fromNow()}</Typography> */}
        <Typography>{user.lastSeen}</Typography>

        <Divider sx={{ mt: 2, mb: 2 }}></Divider>
        <Grid>
          {user.streetNo && (
            <Typography>
              <PlaceIcon />
              &nbsp; {user.streetNo + " " + user.city}
            </Typography>
          )}
          {user.phoneNumber && (
            <Typography>
              <ContactPhoneIcon />
              &nbsp; {user.phoneNumber}
            </Typography>
          )}
          <Typography>
            <ContactMailIcon />
            &nbsp;&nbsp;{user.companyEmail}
          </Typography>
          <Typography>
            <CakeIcon />
            &nbsp; {new Date(user.birthday).toDateString()}
          </Typography>
          <Typography>
            <PermIdentityIcon />
            &nbsp; {user.NIC}
          </Typography>
          <Divider sx={{ mt: 1, mb: 1 }}></Divider>
          <Typography>Job Role : {user.jobRole}</Typography>
          <Typography>Job Type : {user.jobType}</Typography>
          <Typography>Status : {user.status}</Typography>
          {/* <Typography>Team : {user.teamID}</Typography> */}
          {teams &&
            teams.map((team) => {
              if (team._id === user.teamID) {
                return (
                  <Typography textAlign="center" key={team._id}>
                    {" "}
                    {team.teamName}
                  </Typography>
                );
              }
            })}
          <Divider sx={{ mt: 2, mb: 2 }}></Divider>
        </Grid>
        <Typography>
          O/L Results :
          {EmployeeWithAcc &&
            EmployeeWithAcc.ordinaryLevelResult.map((result, i) => {
              return (
                <Typography component={"span"} key={i}>
                  {result + " "}
                </Typography>
              );
            })}
        </Typography>
        <Typography>
          A/L Results :
          {EmployeeWithAcc &&
            EmployeeWithAcc.advancedLevelResults.map((result, i) => {
              return (
                <Typography component={"span"} key={i}>
                  {result + " "}
                </Typography>
              );
            })}
        </Typography>
        <Typography>
          Achievements :
          {EmployeeWithAcc &&
            EmployeeWithAcc.achievements.map((result, i) => {
              return (
                <Typography component={"span"} key={i}>
                  {result + " "}
                </Typography>
              );
            })}
        </Typography>
        <Divider sx={{ mt: 2, mb: 2 }}></Divider>
        <Typography>
          Degree :
          {EmpWithProf &&
            EmpWithProf.degree.map((result, i) => {
              return (
                <Typography component={"span"} key={i}>
                  {result + " "}
                </Typography>
              );
            })}
        </Typography>
        <Typography>
          Courses :
          {EmpWithProf &&
            EmpWithProf.course.map((result, i) => {
              return (
                <Typography component={"span"} key={i}>
                  {result + " "}
                </Typography>
              );
            })}
        </Typography>
        <Typography>
          Languages :
          {EmpWithProf &&
            EmpWithProf.language.map((result, i) => {
              return (
                <Typography component={"span"} key={i}>
                  {result + " "}
                </Typography>
              );
            })}
        </Typography>
        {/* <Button onClick={handleUpdate} sx={{ mt: 5 }} fullWidth  variant="contained" size="medium">
          Update
        </Button> */}
        <Button
          component={Link}
          to={`/profile/update`}
          state={{ profile }}
          sx={{ mt: 5, backgroundColor: "#1b529e" }}
          fullWidth
          variant="contained"
          size="medium"
        >
          Update
        </Button>
      </Card>
    </div>
  );
}

export default DisplayProfile;
