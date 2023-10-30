import { Grid } from "@mui/material";
import Day from "./Day";

//lager en grid med 24 rader og 7 kolonner + tidspunktene
//litt mye magic
import { ReactNode, RefObject } from "react";

export default function Backdrop({
  children,
  ref,
  fullSize,
}: {
  children: ReactNode;
  ref: RefObject<HTMLDivElement>;
  fullSize: boolean;
}) {
  return (
    <Grid
      columns={7}
      container
      ref={ref}
      sx={{
        position: "relative",
        my: 2,
      }}
    >
      {[...Array(7)].map((_, day) => (
        <Grid
          item
          xs={1}
          key={day}
          sx={{ position: "relative", height: "100%" }}
        >
          <Day day={day} />
        </Grid>
      ))}
      {children}
    </Grid>
  );
}
