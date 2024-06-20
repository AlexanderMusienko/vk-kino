import { Slider, styled } from "@mui/material";

const CustomSlider = styled(Slider)({
  "& .MuiSlider-valueLabelLabel": {
    fontSize: "1rem", // Set your desired font size here
  },
});

export const S = {
  CustomSlider,
};
