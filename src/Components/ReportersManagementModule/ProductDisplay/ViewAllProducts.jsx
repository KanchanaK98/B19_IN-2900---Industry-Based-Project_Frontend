import React, { useEffect, useState } from "react";
import {
  Typography,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Grid,
  MenuItem,
  Menu,
} from "@mui/material";
import useStyles from "./ViewAllProductsStyles";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { viewProducts } from "../../../Api/ReportersManagementModule/ProductApi";
import { MoreVert } from "@mui/icons-material";
import ProductDescriptionDialog from "./ProductDescriptionDialog";

function ViewAllProducts() {
  const [products, setProducts] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const openMenu = Boolean(anchorEl);

  useEffect(() => {
    async function fetchData() {
      setProducts(await viewProducts());
    }
    fetchData();
  }, []);
  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    
  };
  const handleCloseDialog = () => {
    setSelectedProduct(null);
    setOpenDialog(false);
    handleClose();
  };
  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setOpenDialog(true);
  };
  //   console.log(products);
  const classes = useStyles();
  return (
    <Paper elevation={6} className={classes.paper}>
      <Table>
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>
              <Typography>Product ID</Typography>
            </TableCell>
            <TableCell>
              <Typography>Product Name</Typography>
            </TableCell>
            <TableCell>
              <Typography>Team</Typography>
            </TableCell>
            {/* <TableCell>
              <Typography>Description</Typography>
            </TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {products &&
            products.map((product) => (
              <TableRow key={product._id} className={classes.tableRow}>
                <TableCell>
                  <Grid item md={3}>
                    <IconButton
                      sx={{ backgroundColor: "#183d78" }}
                      component={Link}
                      to={`/products/update/${products._id}`}
                      state={{ product }}
                    >
                      <EditIcon sx={{ color: "white" }} fontSize="large" />
                    </IconButton>
                  </Grid>
                </TableCell>
                <TableCell>
                  <Typography>{product.productID}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{product.productName}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{product.teamName}</Typography>
                </TableCell>
                {/* <TableCell>
                  <Typography
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "webkit-box",
                      WebkitLineClamp: 0,

                      // -webkit-line-clamp: 4;
                      // -webkit-box-orient: vertical;
                    }}
                  >
                    {product.description}
                  </Typography>
                </TableCell> */}
                <TableCell>
                  <IconButton
                    onClick={handleOpenMenu}
                    aria-controls={openMenu ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={openMenu ? "true" : undefined}
                  >
                    <MoreVert />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={openMenu}
                    onClose={handleClose}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 1px 9px rgba(0,0,0,0.1))",
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&:before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    }}
                  >
                    <MenuItem onClick={() => handleViewDetails(product)}>
                      View more
                    </MenuItem>
                    <MenuItem>Edit</MenuItem>
                    <MenuItem>Cancel</MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      {selectedProduct && (
        <ProductDescriptionDialog
          openDialog={openDialog}
          handleCloseDialog={handleCloseDialog}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      )}
    </Paper>
  );
}

export default ViewAllProducts;
