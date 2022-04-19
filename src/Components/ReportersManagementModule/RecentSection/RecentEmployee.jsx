
import useStyles from "./RecentEmployeeSectionStyles";
import { Typography, Button, Avatar, Card, Grid } from "@mui/material";
import { Link } from "react-router-dom";
function RecentEmployee({ profile}) {
  // const handleUpdate = () => {
  //   setUpdateEmployee(profile);
  //   setUpdateState(true);
  // };
  const {
    _id,
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
        <Grid className={classes.empDetails}>
          <Typography className={classes.typography}>
            Name :{employeeFirstName + " " + employeeLastName}
          </Typography>
          <Typography>Address :{streetNo + "," + city}</Typography>
          <Typography>Birthday : {birthday}</Typography>
          <Typography>NIC : {NIC}</Typography>
          <Typography>Phone : {phoneNumber}</Typography>
          <Typography>Email : {companyEmail}</Typography>
          <Typography>Job Role : {jobRole}</Typography>
          <Typography>Job Type : {jobType}</Typography>
          <Typography>Status : {status}</Typography>
          <Typography>Team : {teamID}</Typography>
        </Grid>
       
        {/* <Button onClick={handleUpdate} sx={{ mt: 5 }} fullWidth  variant="contained" size="medium">
          Update
        </Button> */}
      
      </Card>
    </div>
  );
}

export default RecentEmployee;
