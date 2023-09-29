import React, { useEffect, useState } from 'react';
import ProductCard from '../Components/ProductCard';
import { Grid, Container, Button, Typography } from '@mui/material';
import axios from 'axios';

// if need to static data for check
// import {productData} from '../staticData'

  const buttonStyles = {
    width: '40%',
    backgroundColor: "purple",
    marginTop: 'auto',
  };

function Home() {

  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = 'http://localhost:5000/show-products';

    axios.get(apiUrl)
      .then((response) => {
        setProductData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container maxWidth="lg">
          <Grid
      container
      spacing={3}
      alignItems="center"
      justifyContent="center" 
      style={{ minHeight: '25vh' }}
    >
      <Typography variant='h4'>Node react Practical</Typography>
      </Grid>
      <Grid container spacing={3}>
        {productData.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard
              name={product.name}
              price={product.price}
              description={product.description}
              imageUrl={product.imageUrl}
            />
          </Grid>
        ))}
      </Grid>
    <Grid
      container
      spacing={3}
      alignItems="center"
      justifyContent="center" 
      style={{ minHeight: '25vh' }}
    >
      <Grid item xs={12} sm={6} md={4}>
        <Button variant="contained" style={buttonStyles} sx={{margin:"10px"}}>
          Previous
        </Button>
        <Button variant="contained" style={buttonStyles} sx={{margin:"10px"}}>
          Next
        </Button>
      </Grid>
    </Grid>
    </Container>
  );
}

export default Home;
