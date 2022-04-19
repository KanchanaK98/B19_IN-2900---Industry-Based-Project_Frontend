import React from "react";
import { Grid, Button } from "@mui/material";
import DisplayProducts from "../../../Components/ReportersManagementModule/ProductDisplay/DisplayProducts";

function ProductPage() {
  return (
    <div>
      <Grid item sm={12} md={12} sx={{ mb: 5 }}>
        <Button variant="contained">Create New Product</Button>
      </Grid>
      <Grid item sm={12} md={12} sx={{ mb: 5 }}>
    <DisplayProducts/>
      </Grid>
    </div>
  );
}

export default ProductPage;
