import { React, useState, useEffect } from "react";
import {
  Box,
  Grid,
  Card,
  Avatar,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { styled } from "@mui/material/styles";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import SchoolIcon from "@mui/icons-material/School";
import CakeIcon from "@mui/icons-material/Cake";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Link } from "react-router-dom";
import PlaceIcon from "@mui/icons-material/Place";
import { viewAllEmployees } from "../../../Api/ReportersManagementModule/EmployeeApi";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#183d78" : "#308fe8",
  },
}));
function UserProfile({ user }) {
  const [profiles, setProfiles] = useState([]);
  const [employee, setEmployee] = useState([]);
  //const filterEmployee=setEmployee(profiles.filter((emp)=>(emp.employeeID===user.employeeID)))
  //console.log(filterEmployee)

  // useEffect(() => {
  // setEmployee(profiles.filter((emp) => emp.employeeID === user.employeeID));
  // profiles.map((emp) => {
  //   if (emp.employeeID === user.employeeID) {
  //     // setEmployee(emp);
  //     console.log(emp.employeeFirstName)

  //   }
  // });
  // }, []);

  useEffect(() => {
    let userInfo = [];
    async function fetchData() {
      userInfo = await viewAllEmployees();
      setProfiles(userInfo);
      setEmployee(
        userInfo.filter((emp) => emp.user.employeeID === user.employeeID)
      );
      // const{empInfo:user,EmpWithProf:EmpWithProf,EmployeeWithAcc}=employee;
    }
    fetchData();
  }, []);
  console.log(employee);
  return (
    <div>
      <Box sx={{ width: "100%", backgroundColor: "#d7dde0", padding: 5 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
            <Grid container>
              <Grid item xs={3} textAlign="left">
                {/* <Link to="/profile/update"> */}
                <Button
                // component={Link}
                // to={`/profile/update`}
                // state={{ user }}
                variant="contained"
                sx={{ backgroundColor: "#183d78" }}
                >
                  <EditIcon />
                  Edit
                </Button>
                {/* </Link> */}
              </Grid>
              <Grid item xs={3}>
                <Avatar
                  alt="Remy Sharp"
                  src={user.profilePic}
                  sx={{
                    width: 150,
                    height: 150,
                    border: "0.5px solid #183d78",
                  }}
                />
              </Grid>
            </Grid>
            <BorderLinearProgress
              variant="determinate"
              value={50}
              sx={{ mb: 2, mt: 3 }}
            />
            <Card sx={{ padding: 3, mt: 2 }}>
              <Divider sx={{ mt: 2, mb: 2 }}></Divider>

              <Typography>
                <PlaceIcon />
                &nbsp;{user.streetNo + ", " + user.city}
              </Typography>
              <Typography sx={{ color: "blue" }}>
                <ContactMailIcon />
                &nbsp;&nbsp;{user.companyEmail}
              </Typography>
              <Typography>
                <ContactPhoneIcon />
                &nbsp;&nbsp;{user.phoneNumber}
              </Typography>
              <Typography>
                <CakeIcon />
                &nbsp;{user.birthday}
              </Typography>
              <Divider sx={{ mt: 1, mb: 1 }}></Divider>

              <Typography>
                {" "}
                {user.jobType} | {user.status}
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={8}>
            <Typography
              variant="h4"
              sx={{ mb: 2, fontWeight: "bold", color: "#183d78" }}
            >
              {user.employeeFirstName + " " + user.employeeLastName}|{" "}
              {user.jobRole}
            </Typography>
            <Card sx={{ padding: 3 }}>
              <Typography variant="h6" sx={{ color: "#708bb8" }}>
                <SchoolIcon />
                &nbsp;Professional Qualification
              </Typography>
              <Divider sx={{ mt: 2, mb: 2 }}></Divider>
              <Grid container spacing={2} columns={12}>
                <Grid item xs={4}>
                  <Typography sx={{ fontWeight: "bold", color: "#9da1a6" }}>
                    Courses
                  </Typography>
                  <Divider sx={{ mt: 1, mb: 1 }}></Divider>
                  {employee.length > 0 &&
                    employee[0].EmpWithProf.course.map((result, i) => {
                      return <Typography key={i}>{result}</Typography>;
                    })}
                </Grid>
                <Grid item xs={4}>
                  <Typography sx={{ fontWeight: "bold", color: "#9da1a6" }}>
                    Degrees
                  </Typography>
                  <Divider sx={{ mt: 1, mb: 1 }}></Divider>
                  {employee.length > 0 &&
                    employee[0].EmpWithProf.degree.map((result, i) => {
                      return <Typography key={i}>{result}</Typography>;
                    })}
                </Grid>
                <Grid item xs={4}>
                  <Typography sx={{ fontWeight: "bold", color: "#9da1a6" }}>
                    Languages
                  </Typography>
                  <Divider sx={{ mt: 1, mb: 1 }}></Divider>
                  {employee.length > 0 &&
                    employee[0].EmpWithProf.language.map((result, i) => {
                      return <Typography key={i}>{result}</Typography>;
                    })}
                </Grid>
              </Grid>
            </Card>
            <Card sx={{ padding: 3, mt: 2 }}>
              <Typography variant="h6" sx={{ color: "#708bb8" }}>
                <MenuBookIcon />
                &nbsp;Academic Qualification
              </Typography>
              <Divider sx={{ mt: 2, mb: 2 }}></Divider>
              <Grid container spacing={2} columns={12}>
                <Grid item xs={4}>
                  <Typography sx={{ fontWeight: "bold", color: "#9da1a6" }}>
                    O/L Results
                  </Typography>
                  <Divider sx={{ mt: 1, mb: 1 }}></Divider>
                  {employee.length > 0 &&
                    employee[0].EmployeeWithAcc.ordinaryLevelResult.map(
                      (result, i) => {
                        return <Typography key={i}>{result}</Typography>;
                      }
                    )}
                </Grid>
                <Grid item xs={4}>
                  <Typography sx={{ fontWeight: "bold", color: "#9da1a6" }}>
                    A/L Results
                  </Typography>
                  <Divider sx={{ mt: 1, mb: 1 }}></Divider>
                  {employee.length > 0 &&
                    employee[0].EmployeeWithAcc.advancedLevelResults.map(
                      (result, i) => {
                        return <Typography key={i}>{result}</Typography>;
                      }
                    )}
                </Grid>
                <Grid item xs={4}>
                  <Typography sx={{ fontWeight: "bold", color: "#9da1a6" }}>
                    Achievments
                  </Typography>
                  <Divider sx={{ mt: 1, mb: 1 }}></Divider>
                  {employee.length > 0 &&
                    employee[0].EmployeeWithAcc.achievements.map(
                      (result, i) => {
                        return <Typography key={i}>{result}</Typography>;
                      }
                    )}
                </Grid>
              </Grid>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card sx={{ padding: 3 }}>
              <Typography variant="h6" sx={{ color: "#708bb8" }}>
                <MenuBookIcon />
                &nbsp;Products
              </Typography>
              <Divider sx={{ mt: 2, mb: 2 }}></Divider>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default UserProfile;
