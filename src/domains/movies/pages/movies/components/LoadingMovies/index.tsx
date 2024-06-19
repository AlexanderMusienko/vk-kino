import { Grid, Skeleton } from "@mui/material";

export const LoadingMovies = () => {
  return (
    <>
      {Array.from({ length: 12 }, (_, index) => (
        <Grid
          item
          xs={12}
          sm={4}
          lg={3}
          key={index}
          sx={{
            height: 450,
            display: "flex",
            flexDirection: "column",
            justifyContent: "stretch",
          }}
        >
          <Skeleton
            variant="rectangular"
            sx={{
              flexGrow: 1,
              minHeight: 0,
              borderRadius: "16px",
            }}
          />
        </Grid>
      ))}
    </>
  );
};
