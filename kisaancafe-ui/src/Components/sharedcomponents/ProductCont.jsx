import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img1 from "../images/img1.jpg";
import GetAllProducts from "../sharedstore/slices/GetAllProducts";
import { useDispatch } from "react-redux";
import { IconButton } from "@mui/material";
import DeleteImg from "../sharedcomponents/Images/delete.png"
export const ProductCont = ({
  ProductDetails,
  Addlabel,
  Editlabel,
  onClick,
  OnAddClick,
  OnDeleteProduct
}) => {
  const dispatch = useDispatch();
  // Create a image URL
  const imageUrl = `data:image/png;base64,${ProductDetails.imageData}`;
  console.log(imageUrl);
  const OnEditClick = (e) => {
    onClick(e);
  };
  const OnDelete = async () => {
   await OnDeleteProduct(ProductDetails.id)
    dispatch(GetAllProducts())
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={imageUrl} title="green iguana" />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {ProductDetails.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Product Name : {ProductDetails.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Weight : {ProductDetails.weight}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          MRP :{ProductDetails.prize}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Technical :{ProductDetails.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => OnEditClick(ProductDetails)}>
          {Editlabel}
        </Button>
        <Button size="small" onClick={OnAddClick}>
          {Addlabel}
        </Button>
        <IconButton aria-label="delete">
          <img src={DeleteImg} onClick={OnDelete} />
        </IconButton>
      </CardActions>
    </Card>
  );
};
