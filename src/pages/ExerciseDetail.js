import React from 'react'
import { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import {exerciseOptions , fetchData ,youtubeOptions} from '../utils/fetchData'
import Details from '../components/Details'
import ExerciseVedios from '../components/ExerciseVedios'
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideo, setExerciseVideo] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([])

  const {id} = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDBurl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailData = await fetchData(`${exerciseDBurl}/exercises/exercise/${id}`,exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,youtubeOptions);
      setExerciseVideo(exerciseVideosData.contents);

      const targetMuscleExcersieData = await fetchData(`${exerciseDBurl}/exercises/target/${exerciseDetailData.target}` , exerciseOptions);
      setTargetMuscleExercises(targetMuscleExcersieData);

      const equipmentExcersieData = await fetchData(`${exerciseDBurl}/exercises/equipment/${exerciseDetailData.equipment}` , exerciseOptions);
      setEquipmentExercises(equipmentExcersieData);

    }
    fetchExerciseData();
  } , [id]);

  return (
    <Box>
      <Details exerciseDetail={exerciseDetail}/>
      <ExerciseVedios exerciseVideo={exerciseVideo} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
    </Box>
  )
}

export default ExerciseDetail