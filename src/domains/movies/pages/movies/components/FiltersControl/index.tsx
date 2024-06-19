import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import {
  Autocomplete,
  Container,
  InputLabel,
  Slider,
  TextField,
} from "@mui/material";
import { GENRES } from "@/common/constants/api";
import { TMovieFilters } from "@/shared/types/api.type";
import {
  Dispatch,
  FC,
  MouseEvent,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";

const genresOptions = GENRES.map(({ name }) => ({
  label: name,
  value: name,
}));

const MIN_RATING = 0;
const MAX_RATING = 10;

const MIN_YEAR = 1990;
const MAX_YEAR = new Date().getFullYear();

type TFiltersControl = {
  onChange?: (filters: TMovieFilters) => void;
  onClick?: (filters: TMovieFilters) => void;
};

export const FiltersControl: FC<TFiltersControl> = ({ onChange, onClick }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [rating, setRating] = useState<number[]>([MIN_RATING, MAX_RATING]);
  const [year, setYear] = useState<number[]>([MIN_YEAR, MAX_YEAR]);
  const [genres, setGenres] = useState<string[]>([]);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onGenresChange = (
    event: SyntheticEvent<Element, Event>,
    value: any[]
  ) => {
    setGenres(value.map((option) => option.value));
  };

  const onSliderChange =
    (setter: Dispatch<React.SetStateAction<number[]>>) =>
    (event: Event, newValue: number | number[]) => {
      setter(newValue as number[]);
    };

  const onRatingChange = onSliderChange(setRating);
  const onYearChange = onSliderChange(setYear);

  const onApplyClick = () => {
    const filters = {
      rating: { from: rating[0], to: rating[1] },
      years: { from: year[0], to: year[1] },
      genres: genres,
    };
    onClick && onClick(filters);
  };

  useEffect(() => {
    const filters = {
      rating: { from: rating[0], to: rating[1] },
      years: { from: year[0], to: year[1] },
      genres: genres,
    };
    console.log(filters);
    onChange && onChange(filters);
  }, [rating, year, genres]);

  return (
    <>
      <Button aria-describedby={id} onClick={handleClick} size="large">
        Фильтры
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Container sx={{ padding: 2 }}>
          <Autocomplete
            multiple
            id="combo-box-demo"
            options={genresOptions}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Жанр" />}
            onChange={onGenresChange}
            value={genresOptions.filter((option) =>
              genres.includes(option.value)
            )}
          />

          <InputLabel sx={{ marginTop: 3 }}>Рейтинг</InputLabel>
          <Container style={{ padding: "12px" }}>
            <Slider
              sx={{ marginTop: 5 }}
              value={rating}
              onChange={onRatingChange}
              step={0.1}
              min={MIN_RATING}
              max={MAX_RATING}
              valueLabelDisplay="on"
              aria-label="Рейтинг"
            />
          </Container>

          <InputLabel>Год выпуска</InputLabel>
          <Container style={{ padding: "12px" }}>
            <Slider
              sx={{ marginTop: 5 }}
              value={year}
              onChange={onYearChange}
              step={1}
              min={MIN_YEAR}
              max={MAX_YEAR}
              valueLabelDisplay="on"
              aria-label="Год выпуска"
            />
          </Container>
          <Button onClick={onApplyClick} variant="contained" color="primary">
            Применить
          </Button>
        </Container>
      </Popover>
    </>
  );
};
