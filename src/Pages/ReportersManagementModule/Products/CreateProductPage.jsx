import { Grid, Box } from "@mui/material";
import React from "react";
import Drawer from '@mui/material/Drawer';
import ProductCountUp from "../../../Components/ReportersManagementModule/CountUps/CountUpStack";
import CreateProduct from "../../../Components/ReportersManagementModule/ProductCreate/CreateProduct";

function CreateProductPage() {
  return (
    <div>
      <Grid container>
      <Grid item md={9}>
        <Box padding={3}>
        
            <ProductCountUp />
            <CreateProduct />
        
        </Box>
        </Grid>
        <Grid item md={3}>
       

        </Grid>
      </Grid>
    </div>
  );
}

export default CreateProductPage;
