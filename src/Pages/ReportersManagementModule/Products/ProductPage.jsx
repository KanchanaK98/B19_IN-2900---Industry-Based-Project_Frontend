import React from "react";
import { Grid, Button} from "@mui/material";
import DisplayProducts from "../../../Components/ReportersManagementModule/ProductDisplay/DisplayProducts";
import SearchProduct from "../../../Components/ReportersManagementModule/ProductSearch/SearchProduct";

function ProductPage() {
  return (
    <div>
      <Grid item sm={12} md={12} sx={{ mb: 5 }}>
        <Grid container>
          <Grid item md={6}>
            <Button variant="contained">Create New Product</Button>
          </Grid>
          <Grid item md={6}>
            {/* <SearchProduct /> */}
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={12} md={12} sx={{ mb: 5 }}>
        <DisplayProducts />
      </Grid>
    </div>
  );
}

export default ProductPage;
