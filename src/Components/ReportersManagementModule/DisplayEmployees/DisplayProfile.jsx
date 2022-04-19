import useStyles from "./DisplayProfileCardStyles";
import { Typography, Button, Avatar, Card, Grid } from "@mui/material";
import { Link } from "react-router-dom";
function DisplayProfile({ profile}) {
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
    EmployeeWithAcc,
    EmpWithProf,
  } = profile;
 console.log(profile)
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card} sx={{ maxWidth: 800 }}>
        <Avatar
          sx={{ width: 120, height: 120 }}
          className={classes.avatar}
          src={profilePic}
          alt={employeeFirstName + " " + employeeLastName}
        ></Avatar>
        <Grid className={classes.empDetails} >
          <Typography className={classes.typography}>
            Name :{employeeFirstName + " " + employeeLastName}
          </Typography>
          <Typography>Address :{streetNo + "," + city}</Typography>
          <Typography>Birthday : {new Date(birthday).toDateString()}</Typography>
          <Typography>NIC : {NIC}</Typography>
          <Typography>Phone : {phoneNumber}</Typography>
          <Typography>Email : {companyEmail}</Typography>
          <Typography>Job Role : {jobRole}</Typography>
          <Typography>Job Type : {jobType}</Typography>
          <Typography>Status : {status}</Typography>
          <Typography>Team : {teamID}</Typography>
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
          sx={{ mt: 5 }}
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
