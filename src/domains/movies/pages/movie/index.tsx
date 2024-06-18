import { useParams } from "react-router-dom";
import { MOVIE_EXEMPLAR } from "../../mock";
import { Box, Chip, Grow, Paper, Typography, useTheme } from "@mui/material";
import { Image } from "@/shared/components/Image";
import { Text } from "@/shared/ui/Text";
const movie = MOVIE_EXEMPLAR;

export const Movie = () => {
  const { id } = useParams();
  const theme = useTheme();

  const truncateAfterThirdDot = (str: string) => {
    const parts = str.split(".");
    if (parts.length <= 3) return str;
    return parts.slice(0, 3).join(".") + ".";
  };

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
};
