import { Box } from "@mui/system";
import LogoSvg from "./Logo.svg";
import Image from "next/image";
import { ComponentProps } from "react";

export default function Logo({ ...props }: ComponentProps<typeof Box>) {
  return (
    <Box
      {...props}
      sx={{
        height: "fit-content",
      }}
    >
      <Image src={LogoSvg} width={150} alt="Tihldes logo" className="invert" />
    </Box>
  );
}
