import React, { useEffect, useState } from "react";
import DisplayProfiles from "../../../Components/ReportersManagementModule/DisplayEmployees/DisplayProfiles";
import { Grid, Button } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Box from "@mui/material/Box";
import AllRecentEmployees from "../../../Components/ReportersManagementModule/RecentSection/AllRecentEmployees";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Link, useLocation } from "react-router-dom";
import OrganizationStructure from "../../../Components/ReportersManagementModule/OrganizationStructure/OrganizationStructure";
import DisplayAllEmployees from "./DisplayAllEmployees";
import { viewAllEmployees } from "../../../Api/ReportersManagementModule/EmployeeApi";
import RecentSection from "./RecentSection";
import { WindowSharp } from "@mui/icons-material";
function DashBord() {
  const location = useLocation();
  //const { allEmployees } = location.state;
  const [value, setValue] = React.useState("1");
  const [profiles, setProfiles] = useState([]);
  const jobRole = JSON.parse(localStorage.getItem("user")).jobRole; //profile should change to user

  useEffect(() => {
    console.log(location.state)
    if (location.state ) {
      setValue(location.state.allEmployees === true ? "2" :" 1");
      
      window.history.replaceState({}, document.title)

      console.log(location.state)
    }
 
    async function fetchData() {
      setProfiles(await viewAllEmployees());
    }
    fetchData();
  }, []);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box padding={2}>
        {jobRole === "HR Manager" && (
          <Grid item sm={12} md={12} sx={{ mb: 5 }}>
            <Link to="/dashboard/create">
              <Button
                type="button"
                variant="contained"
                startIcon={<AddBoxIcon />}
              >
                CAREATE NEW EMPLOYEE
              </Button>
            </Link>
          </Grid>
        )}
        <Grid item sm={12} md={12}>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="RECENT EMPLOYEE SECTION" value="1" />
                  <Tab label="ALL EMPLOYEES" value="2" />
                  <Tab label="ORGANIZATION STRUCTURE" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <Box>
                  {/* <Grid container>
                    <Grid item md={8}></Grid>
                    <Grid item md={4}> */}
                  {/* <AllRecentEmployees /> */}
                  <RecentSection />
                  {/* </Grid>
                  </Grid> */}
                </Box>
              </TabPanel>
              <TabPanel value="2" sx={{ mt: 1 }}>
                <DisplayAllEmployees profiles={profiles} />
              </TabPanel>
              <TabPanel value="3" sx={{ mt: 3 }}>
                <OrganizationStructure />
              </TabPanel>
            </TabContext>
          </Box>
        </Grid>
      </Box>
    </div>
  );
}

export default DashBord;
