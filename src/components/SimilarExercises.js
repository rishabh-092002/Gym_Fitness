import { Box, Stack , Typography} from "@mui/material";
import React from "react";
import HorizontalScrollBar from "../components/HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
    return(
      <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
        <Typography variant="h3" mb={5}>
          Exercises that target the same muscle group...
        </Typography>
        <Stack sx={{ p: "2", position: "relative" }} direction="row">
          {targetMuscleExercises.length ?
            <HorizontalScrollBar data={targetMuscleExercises} />
            : <Loader />
          }
        </Stack>
        <Typography variant="h3" mb={5} mt={10}>
          Exercises that use the same equipment...
        </Typography>
        <Stack sx={{ p: "2", position: "relative" }} direction="row">
          {equipmentExercises.length ?
            <HorizontalScrollBar data={equipmentExercises} />
            : <Loader />
          }
        </Stack>
      </Box>
    );
};

export default SimilarExercises;
