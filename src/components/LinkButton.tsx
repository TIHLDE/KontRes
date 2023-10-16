import { Typography } from "@mui/material";
import Link from "next/Link";

export interface LinkProps {
  href: string;
  children: React.ReactNode;
  sx?: any;
}

//hydration error fordi vi nester to a tags
//ikke bruk Mui Link
export const LinkButton = ({ href, children, sx }: LinkProps) => {
  return (
    <Link style={{ textDecoration: "none", color: "inherit" }} href={href}>
      <Typography sx={sx}>{children}</Typography>
    </Link>
  );
};
