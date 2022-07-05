

import React , {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Box} from '@mui/material';
import {exerciseOptions, fetchData, youtubeOptions} from '../utils/fetchData';
import ExerciseVideos from '../component/ExerciseVideos';
import SimilarExercises from '../component/SimilarExercises';
import Details from '../component/Details';
import SearchExercises from '../component/SearchExercises';


const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetExerciseDetail, setTargetExerciseDetail] = useState([]);
  const [equipementExerciseDetail, setEquipementExerciseDetail] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}.exercise`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);
      
      const targetMusclesExercisesData= await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetExerciseDetail(targetMusclesExercisesData);
    
      const equipementExerciseDetail= await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipementExerciseDetail(equipementExerciseDetail);
  

    };

    fetchExercisesData();
  }, [id]);

 
 
  

  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
    
      <Details exerciseDetail={exerciseDetail} />


     
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetExerciseDetail={targetExerciseDetail} equipementExerciseDetail={equipementExerciseDetail}  />
    </Box>
  );
};


export default ExerciseDetail