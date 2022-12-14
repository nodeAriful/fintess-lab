import { createTheme } from "@mui/material/styles";
import { gray } from "./color";

export const theme = createTheme({
  palette: {
    primary: {

      main: "#D23F57",
      dark: "#C23A55",

      light: "#FAE4E9",
      custom: '#1F2937'
    },
    secondary: {
      gray900: gray[900],
      main: gray[800],
      gray700: gray[700],
      gray600: gray[600],
      gray500: gray[500],
      gray400: gray[400],
      gray300: gray[300],
      gray200: gray[200],
      gray100: gray[100],
      gray50: gray[50],
    },
  },

  fontName: {
    barlow: "Barlow Condensed, sans-serif",
    inter: "'Inter', sans-serif;",
  },
  font: {
    interRegular14: `400 14px 'Inter', sans-serif`,
    interMedium13: `500 13px 'Inter', sans-serif`,
    interMedium14: `500 14px 'Inter', sans-serif`,
    interMedium16: `500 16px 'Inter', sans-serif`,
    interMedium18: `500 18px 'Inter', sans-serif`,
    interSemiBold16: `600 16px 'Inter', sans-serif`,
    interSemiBold20: `600 20px 'Inter', sans-serif`,
    barlowSemiBold20: `600 20px 'Barlow Condensed', sans-serif`,
    barlowSemiBold24: `600 24px 'Barlow Condensed', sans-serif`,
    barlowSemiBold48: `600 48px 'Barlow Condensed', sans-serif`,
    barlowSemiBold32: `700 32px 'Barlow Condensed', sans-serif`,
    barlowSemiBold82: `700 82px/82px 'Barlow Condensed', sans-serif`,
  },

  fontSize: {
    f32: "32px",
    f16: "16px",
    f14: "14px",
  },
});


