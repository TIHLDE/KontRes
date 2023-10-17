import Link from "next/link";
import { NextPage } from "next";
import { Box, Typography } from "@mui/material";

const NotFoundPage: NextPage = () => {
  return (
    <Box
      sx={{
        display: "block",
        width: "fit-content",
        mx: "auto",
      }}
    >
      <Typography variant="h1">404 - Siden finnes ikke</Typography>
      <Typography variant="body1">
        Beklager, men siden du prøver å nå finnes ikke.
      </Typography>
      <Link href="/">Gå tilbake til forsiden</Link>
    </Box>
  );
};

export default NotFoundPage;
