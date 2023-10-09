import { getReservation } from "@/apis/reservations/reservations";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useQuery } from "react-query";

const Reservation = () => {
  const { data, isError, isFetching } = useQuery("reservation", () =>
    getReservation("238d8545-056e-4f69-b98a-e398d11aa45b")
  );

  if (isFetching) {
    return <Typography>Fetching</Typography>;
  }

  if (isError) {
    return <Typography>Something went wrong</Typography>;
  }

  console.log(data?.data);

  return (
    <Box>
      <Typography variant="h1">
        {data?.data.start_time.getFullYear()}
      </Typography>
    </Box>
  );
};

export default Reservation;
