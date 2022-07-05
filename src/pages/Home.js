import React, { useState,useEffect } from 'react'
import {Box} from '@mui/material';
import HeroBanner from '../component/HeroBanner';
import SearchExercises from '../component/SearchExercises';
import Exercises from '../component/Exercises';
import {exerciseOptions, fetchData} from '../utils/fetchData';



 const Home = () => {
  
  useEffect(()=>{
    const fetchExerciseCategories  = async() =>
    {
      
      const bodyPartsDatas = await 
      fetchData('https://exercisedb.p.rapidapi.com/exercises', 
       exerciseOptions); 
       
       setExercises([...bodyPartsDatas]);
      
     
      
    }
    fetchExerciseCategories();
   
 
  },[]);
 
 
  const [bodyPart, setBodyPart] = useState([]) ;
  const [exercises, setExercises] = useState([]); 

  console.log(bodyPart);
  return (
    <>
    
    <Box>
      <HeroBanner/>
      <SearchExercises
       setExercises = {setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
   
      <Exercises 
      exercises= {exercises}
      setExercises = {setExercises}
      bodyPart= {bodyPart}
      />

    </Box>
     
    
    </>
  )
}

export default Home;
