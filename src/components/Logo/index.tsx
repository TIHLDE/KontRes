import { Box } from "@mui/system";
import Image from "next/image";
import { ComponentProps } from "react";
import Image from "next/image";
import LogoSvg from "./Logo.svg";

export default function Logo() {
  return (
    <Box
      {...props}
      sx={{
        height: "fit-content",
      }}
    >
      {
        <Image
          src={LogoSvg}
          width={150}
          alt="Tihldes logo"
          style={{ filter: "invert(1)", marginBottom: -8 }}
        />
      }
    </Box>
  );
}
