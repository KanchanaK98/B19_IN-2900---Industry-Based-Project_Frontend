
import useStyles from "./RecentEmployeeSectionStyles";
import { Typography, Button, Avatar, Card, Grid, Divider } from "@mui/material";
import { Link } from "react-router-dom";
function RecentEmployee({ profile}) {
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

  const classes = useStyles();
  return (
    <div>
      <Card     sx={{
          borderRadius: 5,
          marginBottom: 5,
          padding: 5,
          maxWidth: 350,
          
        }}>
      <Grid sx={{ justifyContent: "center", display: "flex" }}>
        <Avatar
          sx={{ width: 120, height: 120 }}
        
          src={profilePic}
          alt={employeeFirstName + " " + employeeLastName}
        ></Avatar>
        </Grid>
        <Grid className={classes.empDetails}>
          <Typography >
            Name :{employeeFirstName + " " + employeeLastName}
          </Typography>
          <Typography>Address :{streetNo + "," + city}</Typography>
          <Typography>Birthday : {birthday}</Typography>
          <Typography>NIC : {NIC}</Typography>
          <Typography>Phone : {phoneNumber}</Typography>
          <Typography>Email : {companyEmail}</Typography>
          <Divider sx={{mt:1,mb:1}}></Divider>
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
