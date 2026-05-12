import React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";

const Navbar = ({ onOpenAI }) => {
  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box>
          <Typography variant="h6" fontWeight={700}>
            Codial IT Academy
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Frontend, Backend, Android va Grafik dizayn kurslari
          </Typography>
        </Box>
        <Button variant="contained" color="success" onClick={onOpenAI}>
          AI bilan gaplashish
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
