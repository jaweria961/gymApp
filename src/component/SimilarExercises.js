import React from 'react';
import { Typography, Box, Stack } from '@mui/material';



const SimilarExercises = ({  targetExerciseDetail, equipementExerciseDetail}) => {
// print results
 console.log("rand",targetExerciseDetail)
  return(
  <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}> {targetExerciseDetail.target}</span> exercises
    </Typography>
    <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '50px', xs: '0px' } }} 
          justifyContent="flex-start" flexWrap="wrap" alignItems="center">
 {
  targetExerciseDetail?.slice(0,3).map((item) =>{
    return(
      <div>
      
      <img style={{ borderTopLeftRadius: '20px' }} src={item.gifUrl} alt={item.target} />
      <Box>
                  <Typography sx={{ fontSize: { lg: '20px', xs: '18px' } }} fontWeight={600} 
                  textTransform ="capitalize"
                  textAlign="center"
                  color="#000">
                    <h5>{item.name}</h5> 
                  </Typography>
                  
                </Box>
      </div>
    )
  })
 }
    </Stack>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
    </Typography>
    <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '50px', xs: '0px' } }} 
          justifyContent="flex-start" flexWrap="wrap" alignItems="center">
 {
  equipementExerciseDetail?.slice(-4,-1).map((item) =>{
    return(
      <div>
      
      <img style={{ borderTopLeftRadius: '20px' }} src={item.gifUrl} alt={item.equipment} />
      <Box>
                  <Typography sx={{ fontSize: { lg: '15px', xs: '18px' } }} fontWeight={600} 
                  textTransform ="capitalize"
                  textAlign="center"
                  color="#000">
                  {item.name}   <p></p>
                  </Typography>
                  
                </Box>
      </div>
    )
  })
 }
    </Stack>
  </Box>

  
  );
    }

export default SimilarExercises;
