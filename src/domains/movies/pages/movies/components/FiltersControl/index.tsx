import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Autocomplete, Box, TextField } from "@mui/material";
import { GENRES } from "@/common/constants/api";

const genresOptions = GENRES.map(({ name, slug }) => ({
  label: name,
  value: slug,
}));

export default function FiltersControl() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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
        <Autocomplete
          multiple
          disablePortal
          id="combo-box-demo"
          options={genresOptions}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Жанр" />}
        />
      </Popover>
    </>
  );
}
