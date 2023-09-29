import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

function ProductCard({ imageUrl, name, description, price }) {
  const cardStyles = {
    maxWidth: '345px',
    margin: '16px',
    display: 'inline-block', 
    verticalAlign: 'top', 
  };

  const mediaStyles = {
    height: 0,
    paddingTop: '56.25%',
  };

  const buttonStyles = {
    width: '100%',
    backgroundColor: "purple",
    marginTop: 'auto',
  };

  return (
    <Card style={cardStyles}>
      <CardMedia
        style={mediaStyles}
        image={imageUrl}
        title="Product Image"
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {price}
        </Typography>
        <Button variant="contained" color="primary" style={buttonStyles}>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;

