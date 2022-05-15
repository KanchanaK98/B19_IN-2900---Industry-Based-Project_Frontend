import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

const LeaveHistoryHeader = () => {
  return (
    <Box sx={{mb : 3}}>
      <Paper elevation={3} square sx={{ p: 2 }}>
        <Grid container>
          <Grid md={6} item sx={{display:"flex"}}>
            <AppRegistrationIcon fontSize="large" sx={{ mr: 1 }} />
            <Typography variant="h4" color="initial" fontWeight={500}>
              My Leaves
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default LeaveHistoryHeader;
