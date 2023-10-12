import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { dark } from "../theme/dark";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={dark}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
