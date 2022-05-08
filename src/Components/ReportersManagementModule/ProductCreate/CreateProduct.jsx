import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  Divider,
  FormLabel,
  TextField,
  Typography,
  Button,
  MenuItem,
} from "@mui/material";
import InventoryIcon from "@mui/icons-material/Inventory";
import { TextareaAutosize } from "@mui/material";
import { createProduct } from "../../../Api/ReportersManagementModule/ProductApi";
import { getAllTeams } from "../../../Api/ReportersManagementModule/TeamsApi";
function CreateProduct() {
  const [products, setProducts] = useState({
    productID: "",
    productName: "",
    description: "",
    nameofTeam: {},
  });
  const [teams, setTeams] = useState([]);
  const handleChange = (e) => {
    setProducts((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  // const sendRequest = async () => {
  //   await axios
  //     .post("http://localhost:8070/employee/addProduct", {
  //       productID: products.productID,
  //       productName: products.productName,
  //       description: products.description,
  //       teamNames: products.nameofTeam.teamName,
  //     })
  //     .then((res) => res.data);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    // sendRequest()
    createProduct(products)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
    setProducts({
      productID: "",
      productName: "",
      description: "",
      teamNames: {},
    });
  };
  // const handlegetTeams = async () => {
  //   return await axios
  //     .get("http://localhost:8070/employee/getTeam")
  //     .then((res) => res.data.data)
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  useEffect(() => {
    async function fetchData() {
      setTeams(await getAllTeams());
    }
    fetchData();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Card sx={{ padding: 5 }}>
          <Typography variant="h5">
            <InventoryIcon /> Create Product
          </Typography>
          <Divider sx={{ mt: 5, mb: 5 }}></Divider>

          <Grid container sx={{ mb: 5 }} spacing={4}>
            <Grid item md={6}>
              <Grid container>
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
          <Grid container sx={{ mt: 3 }}>
            <Grid item md={1.5}>
              <FormLabel>Team Name:</FormLabel>
            </Grid>
            <Grid item md={4.5}>
              <TextField
                id="filled-basic"
                variant="filled"
                name="nameofTeam"
                select
                value={products.nameofTeam}
                onChange={handleChange}
                fullWidth
              >
                {teams.length > 0 &&
                  teams.map((team, i) => (
                    <MenuItem value={team} key={team.teamLeadID}>
                      <Typography>{team.teamName}</Typography>
                    </MenuItem>
                  ))}
              </TextField>
            </Grid>
            <Grid item md={6} textAlign="right">
              <Button onClick={handleSubmit} variant="contained">
                Create New Product
              </Button>
            </Grid>
          </Grid>
        </Card>
      </form>
    </div>
  );
}

export default CreateProduct;
