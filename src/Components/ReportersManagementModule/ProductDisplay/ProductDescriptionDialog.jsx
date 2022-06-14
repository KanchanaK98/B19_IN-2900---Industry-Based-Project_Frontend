import { Close } from "@mui/icons-material";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

function ProductDescriptionDialog({
  openDialog,
  handleCloseDialog,
  selectedProduct,
  setSelectedProduct,
}) {
  return (
    <Dialog fullWidth open={openDialog} onClose={handleCloseDialog}>
      <DialogTitle>
        {" "}
        <Grid container sx={{ display: "flex", alignItems: "center" }}>
          <Grid sm={10} md={10} item>
            <Typography variant="h5">Product Description</Typography>
          </Grid>

          <Grid
            sm={2}
            md={2}
            item
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <IconButton onClick={handleCloseDialog}>
              <Close />
            </IconButton>
          </Grid>
        </Grid>
      </DialogTitle>
      <Divider variant="middle" />
      <DialogContent>
        <Grid>
          <Typography>{selectedProduct.description}</Typography>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

export default ProductDescriptionDialog;
