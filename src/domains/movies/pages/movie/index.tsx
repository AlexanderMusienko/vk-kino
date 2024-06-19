import { useParams } from "react-router-dom";
import { MOVIE_EXEMPLAR } from "../../mock";
import {
  Box,
  Button,
  Chip,
  Grow,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import { Image } from "@/shared/components/Image";
import { Text } from "@/shared/ui/Text";
import qs from "qs";
import { useStores } from "@/common/hooks/use-stores";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
const movie = MOVIE_EXEMPLAR;

export const Movie = observer(() => {
  const { id } = useParams();
  const theme = useTheme();
  const {
    moviesStore: { currentMovie, getCurrentMovie },
  } = useStores();

  useEffect(() => {
    console.log(currentMovie);
  }, [currentMovie]);

  console.log(
    qs.stringify({ a: "bbb", b: ["123", "111"] }, { indices: false })
  );

  return (
    <Box flexDirection="row" display="flex" justifyContent="start" gap={3}>
      <Grow in={true} timeout={800}>
        <Box
          display="flex"
          justifyContent="center"
          width={"400px"}
          textAlign="center"
        >
          <Image
            alt={movie.name}
            src={movie.poster.url}
            sx={{ borderRadius: "24px", overflow: "hidden", minWidth: "320px" }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => getCurrentMovie(Number(id))}
          >
            Get movie
          </Button>
        </Box>
      </Grow>
      <Box display="flex" flexDirection="column" gap={1}>
        {movie.name && (
          <Grow in={true} timeout={500}>
            <Typography variant={"h1"}>
              {movie.name || movie.alternativeName}
            </Typography>
          </Grow>
        )}
        {movie.alternativeName && movie.name && (
          <Grow in={true} timeout={600}>
            <Typography variant={"h3"} color={theme.palette.grey[500]}>
              {movie.alternativeName}
            </Typography>
          </Grow>
        )}
        <Typography variant="h4">Дата выхода: {movie.year}</Typography>
        <Box flexDirection="row" display="flex" gap={1}>
          {movie.genres.map(({ name }) => (
            <Chip variant="outlined" label={name} />
          ))}
        </Box>
        <Box flexDirection="row" display="flex" gap={1}>
          {!!movie.rating.imdb && <Chip label={`IMDB: ${movie.rating.imdb}`} />}
          {!!movie.rating.kp && <Chip label={`КП: ${movie.rating.kp}`} />}
        </Box>
        {movie.description && (
          <Text color={theme.palette.text.secondary}>{movie.description}</Text>
        )}
      </Box>
    </Box>
  );
});
