"use client";

import PersonIcon from "@mui/icons-material/Person";
import { useEffect, useState } from "react";
// Material
import LightModeIcon from "@mui/icons-material/LightMode";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import { LinkButton, LinkProps } from "./LinkButton";

type ReservationItem = {
  displayName: string;
  onClick: () => void;
};

interface HeaderProps {
  items: ReservationItem[];
}

const ItemButton = ({ children, ...props }: LinkProps) => {
  return <LinkButton {...props}>{children}</LinkButton>;
};

export const Header = ({ items }: HeaderProps) => {
  const [opaque, setOpaque] = useState(false);

  const handleScroll = () => {
    if (window.scrollY !== 0 && opaque) setOpaque(false);
    else if (window.scrollY === 0 && !opaque) setOpaque(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const scrollHandler = () => {
      const scroll = window.scrollY;
      if (scroll > 0 && !opaque) {
        setOpaque(true);
      } else if (scroll == 0 && opaque) {
        setOpaque(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  });

  return (
    <AppBar
      position="sticky"
      color="transparent"
      sx={{
        paddingY: ".5rem",
      }}
      style={{
        backdropFilter: opaque ? "blur(7.2px)" : "unset",
        backgroundColor: opaque ? "rgba(8,25,48, 0.6)" : "unset",
      }}
      elevation={opaque ? 4 : 0}
    >
      <Toolbar variant="regular">
        <IconButton
          size="large"
          color="inherit"
          aria-label="lightmode"
          sx={{ mx: 1, ml: "auto" }}
        >
          <LightModeIcon />
        </IconButton>
        {/*         <Link href="/login">
          <IconButton
            size="large"
            color="inherit"
            aria-label="user"
            sx={{ mx: 1 }}
          >
            <PersonIcon />
          </IconButton>
        </Link> */}
      </Toolbar>
    </AppBar>
  );
};
