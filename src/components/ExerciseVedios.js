import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const ExerciseVedios = ({ exerciseVideo, name }) => {
    if(!exerciseVideo.length) return 'Loading....';
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h3" mb="33px" textTransform="capitalize">
        Watch <span style={{ color: "#ff2625" }}>{name}</span> exercise videos..
      </Typography>
      <Stack
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "110px", xs: "0" },
        }}
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
      >
        {exerciseVideo?.slice(0, 6).map((item, index) => (
          <a key={index}
          className="exercise-video"
          href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
          target="_blank"
          rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title}/>
            <Box>
                <Typography variant="h4" color="green" fontWeight='bold' fontSize='20px'>
                    {item.video.title}
                </Typography>
                <Typography variant="h5" color="orange" fontWeight='bold' fontSize='15px'>
                    {item.video.channelName}
                </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVedios;
