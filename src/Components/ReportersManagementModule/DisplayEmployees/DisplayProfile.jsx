// import useStyles from "./DisplayProfileCardStyles";
import { Divider, Typography, Button, Avatar, Card, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import moment from "moment";
import ProgressBar from "./ProgressBar";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import SchoolIcon from "@mui/icons-material/School";
import CakeIcon from "@mui/icons-material/Cake";
import PlaceIcon from "@mui/icons-material/Place";

function DisplayProfile({ profile }) {
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
    lastSeen,
    profilePic,
    status,
    teamID,
    EmployeeWithAcc,
    EmpWithProf,
  } = profile;
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
          backgroundColor: "#e4ecf7",
        }}
      >
        <Typography variant="h6" textAlign="center" sx={{ mb: 1 }}>
          {employeeFirstName + " " + employeeLastName}
        </Typography>
        <Grid sx={{ justifyContent: "center", display: "flex" }}>
          <Avatar
            sx={{ width: 120, height: 120, border: "0.5px solid #1b529e" }}
            src={profilePic}
            alt={employeeFirstName + " " + employeeLastName}
          ></Avatar>
        </Grid>
        <ProgressBar
          EmployeeWithAcc={EmployeeWithAcc}
          EmpWithProf={EmpWithProf}
        />
        {/* <Typography>{moment("lastSeen", "YYYYMMDD").fromNow()}</Typography> */}
        <Typography>{lastSeen}</Typography>

        <Divider sx={{ mt: 2, mb: 2 }}></Divider>
        <Grid>
          <Typography>
            {" "}
            <PlaceIcon />
            &nbsp; {streetNo + "," + city}
          </Typography>

          <Typography>
            <ContactPhoneIcon />
            &nbsp; {phoneNumber}
          </Typography>
          <Typography>
            <ContactMailIcon />
            &nbsp;&nbsp;{companyEmail}
          </Typography>
          <Typography>
            <CakeIcon />
            &nbsp; {new Date(birthday).toDateString()}
          </Typography>
          <Typography>
            <PermIdentityIcon />
            &nbsp; {NIC}
          </Typography>
          <Divider sx={{ mt: 1, mb: 1 }}></Divider>
          <Typography>Job Role : {jobRole}</Typography>
          <Typography>Job Type : {jobType}</Typography>
          <Typography>Status : {status}</Typography>
          <Typography>Team : {teamID}</Typography>
          <Divider sx={{ mt: 2, mb: 2 }}></Divider>
        </Grid>
        <Typography>
          O/L Results :
          {EmployeeWithAcc.length > 0 &&
            EmployeeWithAcc[0].ordinaryLevelResult.map((result, i) => {
              return (
                <Typography component={"span"} key={i}>
                  {result}
                </Typography>
              );
            })}
        </Typography>
        <Typography>
          A/L Results :
          {EmployeeWithAcc.length > 0 &&
            EmployeeWithAcc[0].advancedLevelResults.map((result, i) => {
              return (
                <Typography component={"span"} key={i}>
                  {result}
                </Typography>
              );
            })}
        </Typography>
        <Typography>
          Achievements :
          {EmployeeWithAcc.length > 0 &&
            EmployeeWithAcc[0].achievements.map((result, i) => {
              return (
                <Typography component={"span"} key={i}>
                  {result}
                </Typography>
              );
            })}
        </Typography>
        <Divider sx={{ mt: 2, mb: 2 }}></Divider>
        <Typography>
          Degree :
          {EmpWithProf.length > 0 &&
            EmpWithProf[0].degree.map((result, i) => {
              return (
                <Typography component={"span"} key={i}>
                  {result}
                </Typography>
              );
            })}
        </Typography>
        <Typography>
          Courses :
          {EmpWithProf.length > 0 &&
            EmpWithProf[0].course.map((result, i) => {
              return (
                <Typography component={"span"} key={i}>
                  {result}
                </Typography>
              );
            })}
        </Typography>
        <Typography>
          Languages :
          {EmpWithProf.length > 0 &&
            EmpWithProf[0].language.map((result, i) => {
              return (
                <Typography component={"span"} key={i}>
                  {result}
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
