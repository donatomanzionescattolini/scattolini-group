import { createTheme } from "@mui/material/styles";

const FONT_CORMORANT = "'Cormorant Garamond', serif";
const FONT_MONTSERRAT = "'Montserrat', sans-serif";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0e2d2f",
      light: "#1f595a",
      dark: "#071a1b",
      contrastText: "#f2f2ed",
    },
    secondary: {
      main: "#8a6944",
      light: "#ede3d6",
      dark: "#5c4630",
      contrastText: "#ffffff",
    },
    background: {
      default: "#f2f2ed",
      paper: "#fafaf7",
    },
    text: {
      primary: "#0e2d2f",
      secondary: "#8a6944",
    },
  },
  typography: {
    fontFamily: [FONT_CORMORANT, FONT_MONTSERRAT, "Georgia", "serif"].join(","),
    h1: {
      fontFamily: FONT_MONTSERRAT,
      fontWeight: 300,
      letterSpacing: "0.05em",
    },
    h2: {
      fontFamily: FONT_MONTSERRAT,
      fontWeight: 300,
      letterSpacing: "0.05em",
    },
    h3: {
      fontFamily: FONT_MONTSERRAT,
      fontWeight: 400,
      letterSpacing: "0.03em",
    },
    h4: {
      fontFamily: FONT_MONTSERRAT,
      fontWeight: 400,
    },
    h5: {
      fontFamily: FONT_MONTSERRAT,
      fontWeight: 400,
    },
    h6: {
      fontFamily: FONT_MONTSERRAT,
      fontWeight: 500,
    },
    body1: {
      fontFamily: FONT_CORMORANT,
      fontSize: "1rem",
      lineHeight: 1.7,
    },
    body2: {
      fontFamily: FONT_CORMORANT,
      fontSize: "0.938rem",
    },
    button: {
      fontFamily: FONT_MONTSERRAT,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#f2f2ed",
          color: "#0e2d2f",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          padding: "0.6rem 1.5rem",
          fontFamily: FONT_MONTSERRAT,
          letterSpacing: "0.08em",
        },
        outlinedPrimary: {
          borderColor: "#0e2d2f",
          color: "#0e2d2f",
          "&:hover": {
            backgroundColor: "rgba(14,45,47,0.08)",
          },
        },
        outlinedSecondary: {
          borderColor: "#8a6944",
          color: "#8a6944",
          "&:hover": {
            backgroundColor: "rgba(138,105,68,0.08)",
          },
        },
        containedPrimary: {
          backgroundColor: "#0e2d2f",
          "&:hover": {
            backgroundColor: "#1f595a",
          },
        },
        containedSecondary: {
          backgroundColor: "#8a6944",
          "&:hover": {
            backgroundColor: "#5c4630",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: "#fafaf7",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: FONT_MONTSERRAT,
          fontSize: "0.85rem",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontFamily: FONT_CORMORANT,
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#8a6944",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#0e2d2f",
          },
        },
      },
    },
  },
});

export default theme;
