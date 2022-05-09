import React from "react";
import {
  Box,
  Grid,
  Card,
  Avatar,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
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

import PlaceIcon from "@mui/icons-material/Place";

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
  return (
    <div>
      <Box sx={{ width: "100%", backgroundColor: "#d7dde0", padding: 5 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
            <Grid container>
              <Grid item xs={3} textAlign="left">
                <Button variant="contained" sx={{ backgroundColor: "#183d78" }}>
                  <EditIcon />
                  Edit
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Avatar
                  alt="Remy Sharp"
                  src=""
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
            {/* <Card sx={{ mt: 4, padding: 2 }}>
              <Grid container spacing={2} columns={12}>
                <Grid item xs={3} textAlign="center">
                  <FacebookIcon />
                </Grid>
                <Grid item xs={3} textAlign="center">
                  <LinkedInIcon />
                </Grid>
                <Grid item xs={3} textAlign="center">
                  <GitHubIcon />
                </Grid>
                <Grid item xs={3} textAlign="center">
                  <InstagramIcon />
                </Grid>
              </Grid>
            </Card> */}
            <Card sx={{ padding: 3, mt: 2 }}>
              <Divider sx={{ mt: 2, mb: 2 }}></Divider>

              <Typography>
                <PlaceIcon />
                &nbsp;127/A/3, Benet Gunasekara Rd, Blabowa, Dewalapola
              </Typography>
              <Typography sx={{ color: "blue" }}>
                <ContactMailIcon />
                &nbsp;&nbsp;nimaashamadhushani@gmail.com
              </Typography>
              <Typography>
                <ContactPhoneIcon />
                &nbsp;&nbsp;076 3768795
              </Typography>
              <Typography>
                <CakeIcon />
                &nbsp;1998/05/15
              </Typography>
              <Divider sx={{ mt: 1, mb: 1 }}></Divider>

              <Typography> White Colar | Permenent</Typography>
            </Card>
          </Grid>

          <Grid item xs={8}>
            <Typography
              variant="h4"
              sx={{ mb: 2, fontWeight: "bold", color: "#183d78" }}
            >
              Nimasha Madhushani | Software Engineer
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
                    Degrees
                  </Typography>
                  <Divider sx={{ mt: 1, mb: 1 }}></Divider>
                  <Typography>fffff</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography sx={{ fontWeight: "bold", color: "#9da1a6" }}>
                    Courses
                  </Typography>
                  <Divider sx={{ mt: 1, mb: 1 }}></Divider>
                  <Typography>fffff</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography sx={{ fontWeight: "bold", color: "#9da1a6" }}>
                    Languages
                  </Typography>
                  <Divider sx={{ mt: 1, mb: 1 }}></Divider>
                  <Typography>fffff</Typography>
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
                  <Typography>fffff</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography sx={{ fontWeight: "bold", color: "#9da1a6" }}>
                    A/L Results
                  </Typography>
                  <Divider sx={{ mt: 1, mb: 1 }}></Divider>
                  <Typography>fffff</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography sx={{ fontWeight: "bold", color: "#9da1a6" }}>
                    Achievments
                  </Typography>
                  <Divider sx={{ mt: 1, mb: 1 }}></Divider>
                  <Typography>fffff</Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={8}></Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default UserProfile;
