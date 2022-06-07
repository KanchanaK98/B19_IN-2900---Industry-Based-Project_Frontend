// import useStyles from "./DisplayProfileCardStyles";
import {
  Divider,
  Typography,
  Button,
  Avatar,
  Card,
  Grid,
  FormLabel,
} from "@mui/material";
import { Link } from "react-router-dom";
import moment from "moment";
import ProgressBar from "./ProgressBar";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import CakeIcon from "@mui/icons-material/Cake";
import PlaceIcon from "@mui/icons-material/Place";
import { useEffect, useState } from "react";
import { getAllTeams } from "../../../Api/ReportersManagementModule/TeamsApi";
import ViewProfileInfo from "./ViewProfileInfo";

function DisplayProfile({ employee }) {
  const [teams, setTeams] = useState();
  const jobRole = JSON.parse(localStorage.getItem("profile")).jobRole; //profile should change to user
  // const handleUpdate = () => {
  //   setUpdateEmployee(profile);
  //   setUpdateState(true);
  // };

  const { user, EmployeeWithAcc, EmpWithProf } = employee;
  console.log(user);
  useEffect(() => {
    async function fetchData() {
      setTeams(await getAllTeams());
    }
    fetchData();
  }, []);

  // const classes = useStyles();
  return (
    <div>
      <Card
        sx={{
          borderRadius: 5,
          marginBottom: 5,
          padding: 5,
          maxWidth: 750,
          minWidth: 750,
          minHeight: 400,
          // backgroundColor: "#e4ecf7",
          cursor: "pointer",
        }}
      >
        <Grid container>
          <Grid item md={9}>
            <Typography
              variant="h6"
              textAlign="left"
              sx={{ mb: 1, fontWeight: "bold" }}
            >
              {user &&
                user.employeeFirstName[0].toUpperCase() +
                  user.employeeFirstName.slice(1) +
                  " " +
                  user.employeeLastName[0].toUpperCase() +
                  user.employeeLastName.slice(1) +
                  " | " +
                  user.jobRole.replace(/\w\S*/g, (w) =>
                    w.replace(/^\w/, (c) => c.toUpperCase())
                  )}
            </Typography>
          </Grid>
          <Grid item md={3}>
            {teams &&
              user &&
              teams.map((team) => {
                if (team._id === user.teamID) {
                  return (
                    <Typography variant="h6" textAlign="center" key={team._id}>
                      {team.teamName}
                    </Typography>
                  );
                }
              })}
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={6} padding={1}>
            <Grid sx={{ justifyContent: "center", display: "flex" }}>
              <Avatar
                sx={{ width: 100, height: 100, border: "0.5px solid #1b529e" }}
                src={user.profilePic}
                alt={user.employeeFirstName + " " + user.employeeLastName}
              ></Avatar>
            </Grid>
            <Grid>
              <ProgressBar
                EmployeeWithAcc={EmployeeWithAcc}
                EmpWithProf={EmpWithProf}
                user={user}
                // birthday={user.birthday}
                // streetNo={user.streetNo}
                // city={user.city}
                // phoneNumber={user.phoneNumber}
              />
            </Grid>
            {/* <Typography>{moment("lastSeen", "YYYYMMDD").fromNow()}</Typography> */}
            <Typography>
              {moment(user.lastSeen).format("ddd MMM DD YYYY hh:mm:ss")}
            </Typography>
            <Divider sx={{ mt: 2, mb: 2 }}></Divider>
            <Typography sx={{ fontWeight: "bold", mb: 1 }}>
              Profile Info
            </Typography>
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
              {jobRole === "HR" && (
                <Grid>
                  {user.birthday && (
                    <Typography>
                      <CakeIcon />
                      &nbsp; {new Date(user.birthday).toDateString()}
                      {/* {momen{user.birthday).format("MMM DD YYYY")} */}
                    </Typography>
                  )}
                  <Typography>
                    <PermIdentityIcon />
                    &nbsp;{user.NIC}
                  </Typography>
                </Grid>
              )}
            </Grid>
          </Grid>
          <Grid item md={6} padding={1}>
            <Divider sx={{ mt: 1, mb: 1 }}></Divider>
            <Typography>
              <FormLabel sx={{ color: "#9098a6", fontWeight: "bold" }}>
                Job Type :&nbsp;
              </FormLabel>
              {user.jobType}
            </Typography>
            <Typography>
              <FormLabel sx={{ color: "#9098a6", fontWeight: "bold" }}>
                Status :&nbsp;
              </FormLabel>
              {user.status}
            </Typography>

            {/* <Typography>Team :{user.teamID}</Typography> */}
            <Divider sx={{ mt: 2, mb: 2 }}></Divider>
            <Typography sx={{ fontWeight: "bold", mb: 1 }}>
              Accademic Qulaifications
            </Typography>
            <Typography>
              <FormLabel sx={{ color: "#9098a6", fontWeight: "bold" }}>
                O/L Results :{" "}
              </FormLabel>

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
              <FormLabel sx={{ color: "#9098a6", fontWeight: "bold" }}>
                A/L Results :&nbsp;{" "}
              </FormLabel>
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
              <FormLabel sx={{ color: "#9098a6", fontWeight: "bold" }}>
                {" "}
                Achievements :&nbsp;
              </FormLabel>

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
            <Typography sx={{ fontWeight: "bold", mb: 1 }}>
              Professional Qualifications
            </Typography>
            <Typography>
              <FormLabel sx={{ color: "#9098a6", fontWeight: "bold" }}>
                {" "}
                Degree : &nbsp;
              </FormLabel>
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
              <FormLabel sx={{ color: "#9098a6", fontWeight: "bold" }}>
                Courses :&nbsp;
              </FormLabel>

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
              <FormLabel sx={{ color: "#9098a6", fontWeight: "bold" }}>
                {" "}
                Languages :&nbsp;
              </FormLabel>

              {EmpWithProf &&
                EmpWithProf.language.map((result, i) => {
                  return (
                    <Typography component={"span"} key={i}>
                      {result + " "}
                    </Typography>
                  );
                })}
            </Typography>
          </Grid>
        </Grid>

        {/* <Button onClick={handleUpdate} sx={{ mt: 5 }} fullWidth  variant="contained" size="medium">
          Update
        </Button> */}
        {jobRole === "HR" && (
          <Button
            component={Link}
            to={`/profile/update`}
            state={{ employee }}
            sx={{ mt: 5, backgroundColor: "#1b529e" }}
            fullWidth
            variant="contained"
            size="medium"
          >
            Update
          </Button>
        )}
      </Card>
    </div>
  );
}

export default DisplayProfile;
