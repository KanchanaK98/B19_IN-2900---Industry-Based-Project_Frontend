import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import {
  Card,
  Divider,
  FormLabel,
  TextField,
  Typography,
  Grid,
  Box,
  TextareaAutosize,
  MenuItem,
  Button,
} from "@mui/material";
import InventoryIcon from '@mui/icons-material/Inventory';
const getTeams = async () => {
  return await axios
    .get("http://localhost:8070/employee/getTeam")
    .then((res) => res.data.data)
    .catch((err) => {
      console.log(err);
    });
};
function EditProduct() {
  const {id}=useParams();
  console.log(id)
  const [teams, setTeams] = useState([]);
  const location = useLocation();
  const { product } = location.state;

  // if (teams.length > 0) {
  //   teams.map((tm) => {
  //     if (tm._id === product.teamID) {
  //       tm.name = tm.teamName;
  //     }
  //   });
  // }

  const [products, setProducts] = useState({
    // _id: product._id,
    productID: product.productID,
    productName: product.productName,
    description: product.description,
    teamName: product.teamName,
  });
  console.log(product.productID)
  console.log(product);
  const sendRequest = async () => {
    await axios
      .put(`http://localhost:8070/employee/updateProduct/${id}`, {
        productID: products.productID,
        productName: products.productName,
        description: products.description,
        // teamID: products.teamID,
      })
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(product);

  const handleChange = (e) => {
    setProducts((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    sendRequest()
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    async function fetchData() {
      setTeams(await getTeams());
    }
    fetchData();
  }, []);
  console.log(product)
  return (
    <div>
      {products && (
        <form>
          <Box>
            <Card sx={{ padding: 5 }}>
              <Typography variant="h5" sx={{fontWeight:'bold'}}><InventoryIcon/>&nbsp;{products.productName} | {products.productID}</Typography>
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

              <Grid container sx={{ mb: 5 ,mt:2}}>
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

                    // SelectProps={{
                    //   renderValue: (team) => team.teamName,
                    // }}
                    // label={teams.filter((t) => t._id === product.teamID)}
                  >
                    {/* {teams.length > 0 &&
                      teams.map((team, i) => (
                        <MenuItem value={team._id} key={team._id}>
                          <Typography key={team._id}>
                            {team.teamName}
                          </Typography>
                        </MenuItem>
                      ))} */}
                  </TextField>
                </Grid>

                <Grid item md={6} textAlign="right" sx={{mt:2}}>
                  <Button variant="contained" onClick={handleSubmit}>
                    Update
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Box>
        </form>
      )}
    </div>
  );
}

export default EditProduct;
