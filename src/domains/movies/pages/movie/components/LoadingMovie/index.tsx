import { Box, Chip, Grow, Skeleton, Typography } from "@mui/material";

export const LoadingMovie = () => {
  return (
    <Box flexDirection="row" display="flex" justifyContent="start" gap={3}>
      <Grow in={true} timeout={800}>
        <Box
          display="flex"
          justifyContent="center"
          width={"400px"}
          textAlign="center"
        >
          <Skeleton variant="rectangular" width={400} height={600} />
        </Box>
      </Grow>
      <Box display="flex" flexDirection="column" gap={1} flex={1}>
        <Grow in={true} timeout={500}>
          <Typography variant={"h1"}>
            <Skeleton />
          </Typography>
        </Grow>

        <Grow in={true} timeout={600}>
          <Typography variant={"h3"}>
            <Skeleton />
          </Typography>
        </Grow>

        <Typography variant="h4">
          <Skeleton />
        </Typography>
        <Box flexDirection="row" display="flex" gap={1}>
          <Skeleton>
            <Chip variant="outlined" label={"rate"} />
          </Skeleton>
          <Skeleton>
            <Chip variant="outlined" label={"rate"} />
          </Skeleton>
          <Skeleton>
            <Chip variant="outlined" label={"rate"} />
          </Skeleton>
        </Box>
        <Box flexDirection="row" display="flex" gap={1}>
          <Skeleton>
            <Chip variant="outlined" label={"rate"} />
          </Skeleton>
          <Skeleton>
            <Chip variant="outlined" label={"rate"} />
          </Skeleton>
        </Box>
        <Skeleton height={300} />
      </Box>
    </Box>
  );
};
