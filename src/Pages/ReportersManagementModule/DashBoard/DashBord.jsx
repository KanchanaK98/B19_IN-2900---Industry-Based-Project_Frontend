import React from "react";
import DisplayProfiles from "../../../Components/ReportersManagementModule/DisplayEmployees/DisplayProfiles";
import { Grid, Button } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Box from "@mui/material/Box";
import AllRecentEmployees from "../../../Components/ReportersManagementModule/RecentSection/AllRecentEmployees";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Link } from "react-router-dom";
import OrganizationStructure from "../../../Components/ReportersManagementModule/OrganizationStructure/OrganizationStructure";
function DashBord() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
     <Box padding={4}>
     <Grid item sm={12} md={12} sx={{ mb: 5 }}>
        <Link to="/dashboard/create">
          <Button type="button" variant="contained" startIcon={<AddBoxIcon />}>
            CAREATE NEW EMPLOYEE
          </Button>
        </Link>
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
                <Tab label="ALL EMPLOYEES" value="2" />
                <Tab label="RECENT EMPLOYEE SECTION" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1" sx={{ mt: 3}}>
            <OrganizationStructure/>
            </TabPanel>
            <TabPanel value="2" sx={{ mt: 3}}>
              <DisplayProfiles />
            </TabPanel>
            <TabPanel value="3" sx={{ mt: 7 }}>
              <AllRecentEmployees />
            </TabPanel>
          </TabContext>
        </Box>
      </Grid>
     </Box>
    </div>
  );
}

export default DashBord;
