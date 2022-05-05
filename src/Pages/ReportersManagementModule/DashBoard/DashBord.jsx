import React, { useState } from "react";
import DisplayProfiles from "../../../Components/ReportersManagementModule/DisplayEmployees/DisplayProfiles";
import { Grid, Button } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Box from "@mui/material/Box";
import AllRecentEmployees from "../../../Components/ReportersManagementModule/RecentSection/AllRecentEmployees";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
function DashBord() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      {/* <Grid item sm={12} md={12}>
        <Grid container spacing={2}>
          <Grid item sm={12} md={6} sx={{ mb: 5 }}>
            <Button variant="contained" fullWidth>
              REACNT REPORTERS SECTION
            </Button>
          </Grid>
          <Grid item sm={12} md={6}>
            <Button LinkComponent={Link} to={`#`} variant="contained" fullWidth>
              ORGANIZATION STRUCTURE
            </Button>
          </Grid>
        </Grid>
      </Grid> */}
      <Grid item sm={12} md={12} sx={{ mb: 5 }}>
        <Button
          variant="contained"
          sx={{ justifyContent: "right" }}
          startIcon={<AddBoxIcon />}
        >
          CAREATE NEW EMPLOYEE
        </Button>
      </Grid>
      <Grid item sm={12} md={12}>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="ORGANIZATION STRUCTURE" value="1" />
                <Tab label="RECENT EMPLOYEE SECTION" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1" sx={{ mt: 7 }}>
              <DisplayProfiles />
            </TabPanel>
            <TabPanel value="2" sx={{ mt: 7 }}>
              <AllRecentEmployees />
            </TabPanel>
          </TabContext>
        </Box>
      </Grid>
    </div>
  );
}

export default DashBord;
