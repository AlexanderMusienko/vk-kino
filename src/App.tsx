import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ROUTES_MAPPING } from "./common/constants/routes";
import { PageLayout } from "./shared/layouts/PageLayout";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Movies } from "./domains/movies/pages/movies";
import { Movie } from "./domains/movies/pages/movie";
import { observer } from "mobx-react-lite";
import { useStores } from "./common/hooks/use-stores";
import { useMemo } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./styles/index.css";
import "./styles/reset.css";
import "./styles/normalize.css";

function App() {
  const {
    appStore: { currentTheme },
  } = useStores();

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: currentTheme,
        },
      }),
    [currentTheme]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Navigate to={ROUTES_MAPPING.PUBLIC.MOVIES} />}
          />
          <Route element={<PageLayout />}>
            <Route path={ROUTES_MAPPING.PUBLIC.MOVIES} element={<Movies />} />
            <Route path={ROUTES_MAPPING.PUBLIC.MOVIE} element={<Movie />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default observer(App);
