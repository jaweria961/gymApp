

import React from 'react'
import {
    Box,
    Stack,
    Typography,
    Button
} from '@mui/material';
import HeroBannerImage from '../assets/images/banner.jpg'

const HeroBanner = () => {
  return (
    <>
    <Box sx={{
        mt:{
            lg:'180px',
            xs:'70px'
        },
        ml:{
            sm:'50px',
            lg:'50px'
        }
    }}
    position="relative"
    p="20px"
    >
        <Typography color="#FF2625"
        fontWeight="600"
        fontSize="26px">
        Fitness Club
        </Typography>
        <Typography fontWeight={700}
        sx={{
            fontSize:{
                lg:'44px',
                xs:'40px'
            }
        }}
        mb="23px" mt="23px"
        
        >
       Sweet, Smile <br/> and respect
        </Typography>
        <Typography fontSize='22px'
        lineHeight='35px' mb={3}>
       Check out the most effective exercises
        </Typography>
        <Button variant="contained" href="#exercises"  color="error">
                Check out exercises
        </Button> 
        <Typography
        fontWeight= {600}
        color="#ff2525"
        sx={{
            opacity:0.1,
            dislay:{
                lg:'block',
                xs:'none'
            }
        }}
        fontSize = "200px"
        >
            Exercise
        </Typography>
        <img src={HeroBannerImage} 
       
        
        className="hero-banner-img"
        alt="herobannerImage" />
    </Box>
    </>
  )
}

export default HeroBanner
