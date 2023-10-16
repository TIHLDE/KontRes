import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { dark } from "../theme/dark";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { Box } from "@mui/material";
import { Header } from "@/components/Header";
import { getItems } from "@/apis/reservations/reservations";
import Page from "@/components/Page";

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={dark}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <Box
          sx={{
            paddingTop: 0,
          }}
        >
          <Page>
            <Component {...pageProps} />
          </Page>
        </Box>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
