import { Typography } from "@mui/material";
import NextLink from "next/link";
interface LinkProps {
  href: string;
  children: React.ReactNode;
  sx?: any;
}

//hydration error fordi vi nester to a tags
//ikke bruk Mui Link
export const Link = ({ href, children, sx }: LinkProps) => {
  return (
    <NextLink style={{ textDecoration: "none", color: "inherit" }} href={href}>
      <Typography sx={sx}>{children}</Typography>
    </NextLink>
  );
};
