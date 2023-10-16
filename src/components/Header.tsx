"use client";

import PersonIcon from "@mui/icons-material/Person";
import { useEffect, useState } from "react";
// Material
import LightModeIcon from "@mui/icons-material/LightMode";
import { AppBar, IconButton, Stack, Toolbar } from "@mui/material";
import { LinkButton, CustomLinkProps } from "./LinkButton";
import Logo from "./Logo";
import { useRouter } from "next/router";

type ReservationItem = {
  displayName: string;
  href: string;
};

interface HeaderProps {
  items?: ReservationItem[];
}

const ItemButton = ({ children, ...props }: CustomLinkProps) => {
  return <LinkButton {...props}>{children}</LinkButton>;
};

export const Header = ({ items }: HeaderProps) => {
  const [opaque, setOpaque] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && !opaque) setOpaque(true);
      else if (window.scrollY === 0 && opaque) setOpaque(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <AppBar
      position="sticky"
      color="transparent"
      sx={{
        paddingY: ".5rem",
        backdropFilter: opaque ? "blur(7.2px)" : "unset",
        backgroundColor: opaque ? "rgba(8,25,48,0.6)" : "unset",
      }}
      elevation={opaque ? 4 : 0}
    >
      <Toolbar variant="regular">
        <Logo
          onClick={() => {
            router.push("/");
          }}
        />
        <Stack
          direction={"row"}
          sx={{
            ml: 6,
          }}
          gap={4}
        >
          {items?.map((item, index) => (
            <ItemButton
              href={item.href}
              typographyProps={{
                textTransform: "capitalize",
              }}
              key={index}
            >
              {item.displayName}
            </ItemButton>
          ))}
        </Stack>

        <IconButton
          size="large"
          color="inherit"
          aria-label="lightmode"
          sx={{ mx: 1, ml: "auto" }}
        >
          <LightModeIcon />
        </IconButton>
        <LinkButton href="/login">
          <IconButton
            size="large"
            color="inherit"
            aria-label="user"
            sx={{ mx: 1 }}
          >
            <PersonIcon />
          </IconButton>
        </LinkButton>
      </Toolbar>
    </AppBar>
  );
};
