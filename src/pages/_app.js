import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { dark } from "../theme/dark";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Box } from "@mui/material";
import { Header } from "@/components/Header";

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={dark}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <>
          <Header />
          <Box
            sx={{
              paddingTop: 0,
            }}
          >
            <Component {...pageProps} />
          </Box>
        </>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
