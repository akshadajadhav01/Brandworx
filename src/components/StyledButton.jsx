import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const CustomButton = styled(Button)(() => ({
  borderRadius: "999px",
  padding: "8px 20px",
  textTransform: "none",
  fontWeight: 500,
  fontSize: "1rem",
  backgroundColor: "#fff",
  color: "#000",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
  border: "none",
}));
