import { DetailedReservation } from "@/apis/reservations/types";
import { formatDate } from "@/utils/date";
import { PaperProps, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { parseISO } from "date-fns";
import DetailText from "./DetailText";

interface InformationBoxProps {
  startTime: string;
  endTime: string;
  author: string;
  state: DetailedReservation["state"];
}

const InformationBox = ({
  startTime,
  endTime,
  author,
  state,
}: InformationBoxProps) => {
  return (
    <Stack
      minWidth={210}
      width={"100%"}
      px={2}
      py={3}
      gap={1}
      component={({ ...props }: PaperProps) => (
        <Paper {...props} variant="outlined" />
      )}
    >
      <Typography
        variant="h2"
        sx={{
          marginY: 0,
        }}
      >
        Detaljer
      </Typography>
      <DetailText label="Fra:" value={formatDate(parseISO(startTime))} />
      <DetailText label="Til:" value={formatDate(parseISO(endTime))} />
      <DetailText
        label="Status:"
        value={state === "CONFIRMED" ? "Innvilget" : "Venter"}
      />
      <DetailText label="Søker:" value={author} />
    </Stack>
  );
};

export default InformationBox;
