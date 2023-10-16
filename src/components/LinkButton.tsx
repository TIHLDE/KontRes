import { Typography, TypographyProps } from "@mui/material";
import Link, { LinkProps } from "next/link";

export interface CustomLinkProps extends LinkProps {
  href: string;
  typographyProps?: TypographyProps;
  children?: React.ReactNode;
}

//hydration error fordi vi nester to a tags
//ikke bruk Mui Link
export const LinkButton = ({
  children,
  typographyProps,
  ...props
}: CustomLinkProps) => {
  return (
    <Link style={{ textDecoration: "none", color: "inherit" }} {...props}>
      <Typography {...typographyProps}>{children}</Typography>
    </Link>
  );
};
