import { useParams } from "react-router-dom";
import { Box, Chip, Grow, Typography, useTheme } from "@mui/material";
import { Image } from "@/shared/components/Image";
import { Text } from "@/shared/ui/Text";
import { useStores } from "@/common/hooks/use-stores";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { LoadingMovie } from "./components/LoadingMovie";

export const Movie = observer(() => {
  const {
    moviesStore: { getCurrentMovie, isLoading, currentMovie },
  } = useStores();
  const theme = useTheme();

  const { id } = useParams();

  useEffect(() => {
    getCurrentMovie(Number(id));
  }, [id]);

  return (
    <>
      {isLoading ? (
        <LoadingMovie />
      ) : (
        !!currentMovie && (
          <Box
            flexDirection={{ xs: "column", sm: "row" }}
            display="flex"
            justifyContent="start"
            alignItems="start"
            gap={3}
          >
            <Grow in={true} timeout={800}>
              <Box
                display="flex"
                justifyContent="center"
                width={{ xs: "100%", sm: "400px" }}
                textAlign="center"
              >
                <Image
                  alt={
                    currentMovie?.name ||
                    currentMovie?.alternativeName ||
                    "poster"
                  }
                  src={
                    currentMovie?.poster?.url ||
                    currentMovie?.poster?.previewUrl
                  }
                  sx={{
                    borderRadius: "24px",
                    overflow: "hidden",
                    minWidth: "300px",
                    minHeight: "400px"
                  }}
                />
              </Box>
            </Grow>
            <Box display="flex" flexDirection="column" gap={1}>
              {(!!currentMovie?.name || !!currentMovie?.alternativeName) && (
                <Grow in={true} timeout={500}>
                  <Typography variant={"h1"}>
                    {currentMovie?.name || currentMovie?.alternativeName}
                  </Typography>
                </Grow>
              )}
              {currentMovie?.alternativeName && currentMovie?.name && (
                <Grow in={true} timeout={600}>
                  <Typography variant={"h3"} color={theme.palette.grey[500]}>
                    {currentMovie?.alternativeName}
                  </Typography>
                </Grow>
              )}
              {currentMovie?.year && (
                <Typography variant="h4">
                  Дата выхода: {currentMovie?.year}
                </Typography>
              )}
              {currentMovie?.genres.length > 0 && (
                <Box flexDirection="row" display="flex" gap={1} flexWrap="wrap">
                  {currentMovie?.genres.map(({ name }) => (
                    <Chip variant="outlined" label={name} />
                  ))}
                </Box>
              )}
              <Box flexDirection="row" display="flex" gap={1}>
                {!!currentMovie?.rating?.imdb && (
                  <Chip label={`IMDB: ${currentMovie?.rating?.imdb}`} />
                )}
                {!!currentMovie?.rating?.kp && (
                  <Chip label={`КП: ${currentMovie?.rating?.kp}`} />
                )}
              </Box>
              {currentMovie?.description ? (
                <Text color={theme.palette.text.secondary}>
                  {currentMovie?.description}
                </Text>
              ) : (
                <Text color={theme.palette.text.secondary}>
                  {`У этого фильма нет описания :(`}
                </Text>
              )}
            </Box>
          </Box>
        )
      )}
    </>
  );
});
