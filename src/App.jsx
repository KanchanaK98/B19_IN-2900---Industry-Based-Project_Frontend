import React, { useState } from "react";
import { CssBaseline, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/Navigation/NavBar/NavBar";
import SideBar from "./Components/Navigation/SideBar/SideBar";
import CreateCandidate from "./Pages/RecruitmentModule/CreateCandidateProfile/CreateCandidate";
import Example from "./Components/AssetManagementModule/Example";
import Login from "./Components/Login/Login";
import CreateEmployee from "./Components/ReportersManagementModule/CreateEmployeeForm/CreateEmployee";
import EditEmployee from "./Components/ReportersManagementModule/UpdateEmployeesForm/EditEmployee";
import DashBord from "./Pages/ReportersManagementModule/DashBoard/DashBord";
import Add from "./Components/ReportersManagementModule/TeamCreate/Add";
import TeamPage from "./Pages/ReportersManagementModule/Teams/TeamPage";
import ProductPage from "./Pages/ReportersManagementModule/Products/ProductPage";
import CreateTeams from "./Components/ReportersManagementModule/TeamCreate/CreateTeams";
function App() {
  const [open, setOpen] = useState(true);
  const [user, setUser] = useState(true); //true when working

  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {user && <SideBar open={open} toggleDrawer={toggleDrawer} />}
      <Grid container>
        <Grid item sm={12} md={12}>
          {user && <NavBar open={open} toggleDrawer={toggleDrawer} />}
        </Grid>
        <Grid item sm={12} md={12} sx={{ p: !user ? 0 : 4 }}>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Login setUser={setUser} />} />
              <Route path="candidate" element={<CreateCandidate />} />
              <Route path="/asset" element={<Example />} />
              <Route path="/dashboard" element={<DashBord />} />
              <Route path="/profile/update/" element={<EditEmployee />} />
              <Route path="createemployee" element={<CreateEmployee />} />
              <Route path="add" element={<Add />} />
              <Route path="/teams" element={<TeamPage />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/team" element={<CreateTeams />} />
            </Routes>
          </BrowserRouter>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
