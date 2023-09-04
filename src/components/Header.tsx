"use client";

import React, { useEffect, useState } from "react";

// Material
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Link as MuiLink,
  Toolbar,
  useTheme,
} from "@mui/material";
import Logo from "./Logo";
import { OpenInNew, Menu } from "@mui/icons-material";

export const Header = () => {
  const [opaque, setOpaque] = useState(false);

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
    >
      <Toolbar variant="dense">
        <Logo />
      </Toolbar>
    </AppBar>
  );
};
