import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img1 from './images/img1.jpg'

export const ProductCont =({ProductDetails,Addlabel, Editlabel, OnEditClick, OnAddClick})=> {
    
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={img1}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {ProductDetails.Name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Product Name : {ProductDetails.Name}
         </Typography>
         <Typography variant="body2" color="text.secondary">
         Weight : {ProductDetails.Weight}
         </Typography>
         <Typography variant="body2" color="text.secondary">
         MRP :{ProductDetails.MRP}
         </Typography>
         <Typography variant="body2" color="text.secondary">
         Technical :{ProductDetails.Technical}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={OnEditClick} >{Editlabel}</Button>
        <Button size="small" onClick={OnAddClick} >{Addlabel}</Button>
      </CardActions>
    </Card>
  );
}
