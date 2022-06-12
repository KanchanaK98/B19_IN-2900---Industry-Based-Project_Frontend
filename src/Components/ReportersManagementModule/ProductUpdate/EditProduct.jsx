import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  Card,
  Divider,
  FormLabel,
  TextField,
  Typography,
  Grid,
  Box,
  TextareaAutosize,
  Button,
} from "@mui/material";
import InventoryIcon from "@mui/icons-material/Inventory";
import { updateProduct } from "../../../Api/ReportersManagementModule/ProductApi";

function EditProduct() {
  const [inputErrors, setInputErrors] = useState({
    productID: "",
    productName: "",
  });
  const { id } = useParams();

  const location = useLocation();
  const { product } = location.state;

  const [products, setProducts] = useState({
    // _id: product._id,
    productID: product.productID,
    productName: product.productName,
    description: product.description,
    teamName: product.teamName,
  });

  const handleChange = (e) => {
    setProducts((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const errorHandle = () => {
    let isError = false;

    if (!products.productName) {
      setInputErrors((prevState) => ({
        ...prevState,
        productName: "Product Name is required",
      }));
      isError = true;
    }
    if (!products.productID) {
      setInputErrors((prevState) => ({
        ...prevState,
        productID: "Product ID is required",
      }));
      isError = true;
    }

    return isError;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!errorHandle()) {
      updateProduct(products, product._id)
        .then((res) => {})
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <Box padding={4}>
        {products && (
          <form>
            <Box>
              <Card sx={{ padding: 5 }}>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  <InventoryIcon />
                  &nbsp;{products.productName} | {products.productID}
                </Typography>
                <Divider sx={{ mt: 5, mb: 5 }}></Divider>
                <Grid container>
                  <Grid item md={6}>
                    <Grid container sx={{ mb: 5 }}>
                      <Grid item md={3}>
                        <FormLabel>Product ID:</FormLabel>
                      </Grid>
                      <Grid item md={9}>
                        <TextField
                          id="filled-basic"
                          variant="filled"
                          name="productID"
                          value={products.productID}
                          onChange={handleChange}
                          error={inputErrors.productID ? true : false}
                          helperText={inputErrors.productID}
                          fullWidth
                        />
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item md={6}>
                    <Grid container>
                      <Grid item md={3}>
                        <FormLabel>Product Name:</FormLabel>
                      </Grid>
                      <Grid item md={9}>
                        <TextField
                          id="filled-basic"
                          variant="filled"
                          name="productName"
                          value={products.productName}
                          error={inputErrors.productName ? true : false}
                          helperText={inputErrors.productName}
                          onChange={handleChange}
                          fullWidth
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item md={1.5}>
                    <FormLabel>Description:</FormLabel>
                  </Grid>
                  <Grid item md={10.5}>
                    <TextareaAutosize
                      style={{ width: "100%", height: 200 }}
                      aria-label="maximum height"
                      placeholder="Enter product description"
                      name="description"
                      value={products.description}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>

                <Grid container sx={{ mb: 5, mt: 2 }}>
                  <Grid item md={1.5}>
                    <FormLabel>Team Name:</FormLabel>
                  </Grid>

                  <Grid item md={4.5}>
                    <TextField
                      id="filled-basic"
                      variant="filled"
                      // name="teamName"
                      disabled
                      value={products.teamName}
                      // onChange={handleChange}
                      fullWidth
                    ></TextField>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item md={6} textAlign="left">
                    <Button
                      component={Link}
                      to="/products"
                      variant="contained"
                      sx={{ mt: 2, backgroundColor: "#183d78" }}
                    >
                      View Products
                    </Button>
                  </Grid>
                  <Grid item md={6} textAlign="right" sx={{ mt: 2 }}>
                    <Button
                      variant="contained"
                      sx={{ mt: 2, backgroundColor: "#183d78" }}
                      onClick={handleSubmit}
                    >
                      Update
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            </Box>
          </form>
        )}
      </Box>
    </div>
  );
}

export default EditProduct;
