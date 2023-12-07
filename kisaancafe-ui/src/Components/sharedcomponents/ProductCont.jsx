import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img1 from "../images/img1.jpg"

export const ProductCont = ({ ProductDetails, Addlabel, Editlabel, OnEditClick, OnAddClick }) => {
  // Create a image URL
  const imageUrl = `data:image/png;base64,${ProductDetails.imageData}`;
  console.log(imageUrl);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={imageUrl}
        title="green iguana"
      />
     
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
        <Button size="small" onClick={OnEditClick} >{Editlabel}</Button>
        <Button size="small" onClick={OnAddClick} >{Addlabel}</Button>
      </CardActions>
    </Card>
  );
}
