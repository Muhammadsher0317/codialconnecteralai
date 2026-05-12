import React from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
} from "@mui/material";

const WelcomeModal = ({ open, onClose, onOpenAI }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogContent>
        <Box
          sx={{
            background: "rgba(255,255,255,0.16)",
            backdropFilter: "blur(18px)",
            border: "1px solid rgba(255,255,255,0.26)",
            borderRadius: 4,
            px: 3,
            py: 4,
            textAlign: "center",
          }}
        >
          <Typography variant="h5" fontWeight={700} mb={2}>
            Codial IT Academy'ga xush kelibsiz!
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={3}>
            Sizga kurslar, konsultatsiya va yo'nalish bo'yicha professional yordam
            beramiz. Biz bilan Frontend, Backend, Android va Grafik dizayn
            bo'yicha o'sishni boshlang.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            30 soniya ichida ochilgan marketing oynasi orqali bepul AI maslahat
            oling.
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "space-between", px: 3, pb: 3 }}>
        <Button variant="contained" color="success" onClick={onOpenAI}>
          Bepul maslahat olish
        </Button>
        <Button variant="outlined" onClick={onClose}>
          Yopish
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default WelcomeModal;
