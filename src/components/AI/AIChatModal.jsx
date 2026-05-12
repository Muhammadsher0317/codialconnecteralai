import React, { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
  IconButton,
  TextField,
  Button,
  Stack,
  CircularProgress,
  Divider,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import { getAIResponse } from "../../services/gemini";

const AIChatModal = ({ open, onClose }) => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Salom! Men Codial AI Assistantman. Sizga kurslar va yo'nalish bo'yicha yordam berish uchun tayyorman.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (open) {
      setMessages([
        {
          role: "assistant",
          text: "Salom! Men Codial AI Assistantman. Sizga kurslar va yo'nalish bo'yicha yordam berish uchun tayyorman.",
        },
      ]);
    }
  }, [open]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    const prompt = input.trim();
    if (!prompt) return;

    setMessages((prev) => [...prev, { role: "user", text: prompt }]);
    setInput("");
    setLoading(true);

    try {
      const text = await getAIResponse(prompt);
      setMessages((prev) => [...prev, { role: "assistant", text }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text:
            error?.message ||
            "Kechirasiz, AI bilan bog'lanishda xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko'ring.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box sx={{ width: 10, height: 10, bgcolor: "success.main", borderRadius: "50%" }} />
          <Typography variant="h6">Codial AI Assistant</Typography>
        </Box>
        <IconButton onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ minHeight: 420, px: 3, pb: 2 }}>
        <Stack spacing={2}>
          {messages.map((message, index) => {
            const isUser = message.role === "user";
            return (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: isUser ? "flex-end" : "flex-start",
                }}
              >
                <Box
                  sx={{
                    maxWidth: "80%",
                    p: 1.75,
                    borderRadius: 3,
                    bgcolor: isUser ? "primary.main" : "grey.100",
                    color: isUser ? "common.white" : "text.primary",
                    boxShadow: 1,
                  }}
                >
                  <Typography variant="body2" sx={{ whiteSpace: "pre-wrap" }}>
                    {message.text}
                  </Typography>
                </Box>
              </Box>
            );
          })}
          <div ref={messagesEndRef} />
        </Stack>
      </DialogContent>

      <Divider />
      <Box sx={{ px: 3, pb: 3, pt: 2 }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <TextField
            fullWidth
            minRows={1}
            maxRows={4}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Savolingizni shu yerga yozing..."
            multiline
            disabled={loading}
          />
          <Button
            variant="contained"
            color="success"
            onClick={handleSend}
            disabled={loading || !input.trim()}
            sx={{ minWidth: 48, minHeight: 48, p: 0 }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : <SendIcon />}
          </Button>
        </Stack>
      </Box>
    </Dialog>
  );
};

export default AIChatModal;
