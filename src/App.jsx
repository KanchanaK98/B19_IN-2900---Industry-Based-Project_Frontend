import React, { useState } from "react";
import { CssBaseline, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/Navigation/NavBar/NavBar";
import SideBar from "./Components/Navigation/SideBar/SideBar";
import CreateCandidate from "./Pages/RecruitmentModule/CreateCandidateProfile/CreateCandidate";
import Example from "./Components/AssetManagementModule/Example";
import Login from "./Components/Login/Login";
import EditEmployee from "./Components/ReportersManagementModule/UpdateEmployeesForm/EditEmployee";
import DashBord from "./Pages/ReportersManagementModule/DashBoard/DashBord";
import TeamPage from "./Pages/ReportersManagementModule/Teams/TeamPage";
import ProductPage from "./Pages/ReportersManagementModule/Products/ProductPage";
import CreateProduct from "./Components/ReportersManagementModule/ProductCreate/CreateProduct";
import UserProfile from "./Components/ReportersManagementModule/UserProfile/UserProfile";
import EditProduct from "./Components/ReportersManagementModule/ProductUpdate/EditProduct";
import ProgressBar from "./Components/ReportersManagementModule/DisplayEmployees/ProgressBar";
import EditTeam from "./Components/ReportersManagementModule/TeamUpdate/EditTeam";
import CreateTeamPage from "./Pages/ReportersManagementModule/Teams/CreateTeamPage";
import CreateProductPage from "./Pages/ReportersManagementModule/Products/CreateProductPage";
import CreateEmployeePage from "./Pages/ReportersManagementModule/DashBoard/CreateEmployeePage";
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
              {/*reporters management paths */}
              <Route path="/dashboard" element={<DashBord />} />
              <Route path="/profile/update/" element={<EditEmployee />} />
              <Route path="dashboard/create" element={<CreateEmployeePage />} />

              <Route path="/teams" element={<TeamPage />} />
              <Route path="/teams/update/:id" element={<EditTeam />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/products/create" element={<CreateProductPage />} />
              <Route path="teams/create" element={<CreateTeamPage />} />
              {/* <Route path="/createteams" element={<CreateTeams />} /> */}
              <Route path="/pro" element={<CreateProduct />} />
              <Route path="/user" element={<UserProfile user={user} />} />
              <Route path="/products/update/:id" element={<EditProduct />} />
              <Route path="progress" element={<ProgressBar />} />
            </Routes>
          </BrowserRouter>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
