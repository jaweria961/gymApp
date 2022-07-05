
import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Pagination from '@mui/material/Pagination';
import { Stack, Typography,Box,Button, } from '@mui/material';

import {exerciseOptions, fetchData} from '../utils/fetchData';


 const Exercises = ({exercises, setExercises, bodyPart}) => {

  const exercisesPerPage = 9;
  

const [currentPage, setCurrentPage] = useState(1);
  
const indexOfLastExercise = currentPage * exercisesPerPage;
const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

const paginate = (event, value) => {
  setCurrentPage(value);

  window.scrollTo({ top: 1800, behavior: 'smooth' });
};
useEffect(() =>{
  const fetchExercisesData= async() =>{
    let exercisesData = [];
    if(bodyPart === 'all')

    {
      exercisesData = await 
    fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', 
     exerciseOptions); 
    }
    else{
      exercisesData = await 
    fetchData( `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, 
     exerciseOptions);
    }
    setExercises(exercisesData);
    
  }
  fetchExercisesData();
},[bodyPart]);  

  return (

    <>
    <Box id="exercises" 
    sx={{
      mt:{
        lg:'110'
      }
    }}
    mt="50px"
    p="20px"

    >
      <Typography fontSize="26px" mb="12px" textAlign="center">

   Showing results


      </Typography>
      <Stack direction= "row" sx={{
        gap:{
          lg:'110',
          xs:'50px'
        }
      }}
      flexWrap="wrap" justifyContent="center">

       {
        
       currentExercises.map ((exercise)=>
        {
          debugger;
          return(
            <Link className="exercise-card" to={`/exercise/${exercise.id}`}>

            <img src={exercise.gifUrl} alt={exercise.name} loading="lazy"/>
          <Stack direction="row">

              <Button sx= {{
                ml:'21px',
                color:'#fff',
                background:'#ffa9a9',
                fontSize:'14px',
                borderRadius:'20px',
                textTransform:'capitalize'
              }}>

                {exercise.bodyPart}
              </Button>
              <Button sx= {{
                ml:'21px',
                color:'#fff',
                background:'#fcc757',
                fontSize:'14px',
                borderRadius:'20px',
                textTransform:'capitalize'
              }}>

                {exercise.target}
              </Button>


          </Stack>
         <Typography ml='21px' color="#fcc757" fontWeight="light" m="11px"
         textAlign="center">
          {exercise.name}
         </Typography>

            
                </Link>
                
          )

          
        })
       }
      </Stack>
    
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={
              paginate
            }
            size="large"
          />
        )}
        </Stack>

    </Box>
    
    
    
    
    
    </>
  )
}
export default Exercises;
