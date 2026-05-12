import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import "./App.css";
import Navbar from "./components/Layout/Navbar";
import WelcomeModal from "./components/Modals/WelcomeModal";
import AIChatModal from "./components/AI/AIChatModal";

function App() {
  const [showWelcome, setShowWelcome] = useState(false);
  const [showAIChat, setShowAIChat] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!showAIChat) {
        setShowWelcome(true);
      }
    }, 30000);

    return () => clearTimeout(timer);
  }, [showAIChat]);

  return (
    <Box className="app-shell">
      <Navbar onOpenAI={() => setShowAIChat(true)} />

      <Box className="hero-card">
        <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
          Codial IT Academy
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 760, lineHeight: 1.75 }}>
          Bizning yordamchimiz yordamida Frontend, Backend, Android va Grafik dizayn bo'yicha
          kurslar bilan tanishing. Bu sayt to'liq mijoz tomonda ishlaydi va AI yordamida
          tezkor maslahat beradi.
        </Typography>
        <Box className="hero-actions">
          <Button variant="contained" color="success" onClick={() => setShowAIChat(true)}>
            AI bilan gaplashish
          </Button>
          <Button variant="outlined" color="inherit" onClick={() => setShowWelcome(true)}>
            Marketing oynasini ko'rsatish
          </Button>
        </Box>
      </Box>

      <Box className="section-card">
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
          Kurslar va yo'nalishlar
        </Typography>
        <Box className="info-grid">
          <Box className="info-card">
            <Typography variant="subtitle1" fontWeight={700} mb={1}>
              Frontend Development
            </Typography>
            <Typography variant="body2" color="text.secondary">
              HTML, CSS, JavaScript, React va MUI yordamida zamonaviy interaktiv saytlar yaratish.
            </Typography>
          </Box>
          <Box className="info-card">
            <Typography variant="subtitle1" fontWeight={700} mb={1}>
              Backend Development
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Node.js, Express va ma'lumotlar bazalari bilan samarali va xavfsiz server arxitekturasi.
            </Typography>
          </Box>
          <Box className="info-card">
            <Typography variant="subtitle1" fontWeight={700} mb={1}>
              Android Dasturlash
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Kotlin va Android Studio asosida mobil ilovalar yaratish, UI/UX va App deploy qoidalari.
            </Typography>
          </Box>
          <Box className="info-card">
            <Typography variant="subtitle1" fontWeight={700} mb={1}>
              Grafik Dizayn
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Figma, Adobe Illustrator va vizual identifikatsiya orqali mustahkam dizayn ko'nikmalari.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box className="section-card">
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
          Murabbiylar va yutuqlar
        </Typography>
        <Box className="info-grid">
          <Box className="info-card">
            <Typography variant="subtitle1" fontWeight={700} mb={1}>
              Nilufar – Frontend Mentor
            </Typography>
            <Typography variant="body2" color="text.secondary">
              7 yillik tajriba, React va MUI bo'yicha amaliy loyihalar, 200+ talabani ishga joylashtirdi.
            </Typography>
          </Box>
          <Box className="info-card">
            <Typography variant="subtitle1" fontWeight={700} mb={1}>
              Rustam – Backend Murabbiy
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Node.js va server arxitekturasi bo'yicha ekspert, RESTful API va ma'lumotlar bazasi optimizatsiyasi.
            </Typography>
          </Box>
          <Box className="info-card">
            <Typography variant="subtitle1" fontWeight={700} mb={1}>
              Dilshod – Android Ustasi
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Mobil ilovalar, Play Marketga joylash va foydalanuvchi tajribasini oshirish bo'yicha qo'llanma.
            </Typography>
          </Box>
          <Box className="info-card">
            <Typography variant="subtitle1" fontWeight={700} mb={1}>
              Saida – Grafik Dizayn O'qituvchisi
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Brend dizayni, vizual storytelling va portfel yaratish bo'yicha amaliy mashg'ulotlar.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box className="stats-card">
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
          Codial IT yutuqlari
        </Typography>
        <Box className="stats-grid">
          <Box className="stat-card">
            <Typography variant="h3" color="#34d399" fontWeight={800}>
              600+
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Muvaffaqiyatli bitiruvchilar
            </Typography>
          </Box>
          <Box className="stat-card">
            <Typography variant="h3" color="#34d399" fontWeight={800}>
              95%
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Ishga joylashuv darajasi
            </Typography>
          </Box>
          <Box className="stat-card">
            <Typography variant="h3" color="#34d399" fontWeight={800}>
              4
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Xalqaro loyiha va hamkorliklar
            </Typography>
          </Box>
        </Box>
      </Box>

      <WelcomeModal
        open={showWelcome}
        onClose={() => setShowWelcome(false)}
        onOpenAI={() => {
          setShowWelcome(false);
          setShowAIChat(true);
        }}
      />

      <AIChatModal open={showAIChat} onClose={() => setShowAIChat(false)} />
    </Box>
  );
}

export default App;