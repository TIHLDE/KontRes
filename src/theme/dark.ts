import { createTheme } from "@mui/material/styles";

// Redefine the palette color options to include custom colors
declare module "@mui/material/styles" {
  interface PaletteColorOptions {
    main?: string;
    light?: string;
    dark?: string;
    contrastText?: string;
  }

  /*   interface Theme {
    status: {
      danger: React.CSSProperties['color'];
    };
  } */

  interface Palette {
    two: Palette["primary"];
    three: Palette["primary"];
    four: Palette["primary"];
    five: Palette["primary"];
    six: Palette["primary"];
    seven: Palette["primary"];
    eight: Palette["primary"];
  }

  interface PaletteOptions {
    two: PaletteOptions["primary"];
    three: PaletteOptions["primary"];
    four: PaletteOptions["primary"];
    five: PaletteOptions["primary"];
    six: PaletteOptions["primary"];
    seven: PaletteOptions["primary"];
    eight: PaletteOptions["primary"];
    borderColor: PaletteOptions["primary"];
  }

  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }
}

export const dark = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "rgb(28,69,138)",
      // Consider updating the color values below
      light: "#5470bb",
      dark: "#0d2339",
      contrastText: "#fff",
    },
    two: {
      main: "rgb(102,220,196)",
    },
    three: {
      main: "rgb(178,129,184)",
    },
    four: {
      main: "rgb(168,93,161)",
    },
    five: {
      main: "rgb(237,106,134)",
    },
    six: {
      main: "rgb(113,168,219)",
    },
    seven: {
      main: "rgb(155,216,247)",
    },
    eight: {
      main: "rgb(103,195,200)",
    },

    info: {
      main: "#fff",
    },
    borderColor: {
      main: "#0d2339",
    },
    background: { default: "#001328", paper: "#011830" },
    text: {
      primary: "#fff",
    },
  },
  typography: {
    fontFamily: [
      '"Roboto"',
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: {
      marginTop: "3rem",
      fontWeight: "bold",
      fontSize: "3rem",
    },
    h2: {
      fontSize: "1.7rem",
      marginTop: "2rem",
      fontWeight: "normal",
      marginBottom: "1rem",
      "@media (min-width:500px)": {
        fontSize: "2rem",
      },
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: "normal",
      marginTop: "1.5rem",
      marginBottom: "0.75rem",
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: "bold",
    },
    caption: {
      fontSize: 14,
    },
  },
  shape: { borderRadius: 16 },
  components: {
    MuiContainer: {
      defaultProps: { maxWidth: "lg" },
    },
    MuiButton: {
      styleOverrides: { root: { fontWeight: 500 } },
    },
    MuiLink: {
      styleOverrides: { root: { color: "#9ec0ff" } },
    },
    MuiAccordionSummary: {
      styleOverrides: { content: { "&.Mui-expanded": { marginBottom: 5 } } },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 730,
      lg: 900,
      xl: 1200,
    },
  },
});
