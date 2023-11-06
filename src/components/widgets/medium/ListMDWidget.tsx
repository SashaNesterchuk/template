import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import BasicWidget from "../BasicWidget";
import CIconBackground from "@/components/mui/CIconBackground/CIconBackground";
import ParaglidingIcon from "@mui/icons-material/Paragliding";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";

interface Props {
  label: string;
  description: string;
}

export default function ListMDWidget(props: Props) {
  return (
    <BasicWidget
      colSpan="4"
      sx={{ display: "flex", gap: "24px", flexDirection: "column" }}
    >
      <Box>
        <Box
          sx={{
            fontSize: "18px",
            fontWeight: "500",
            lineHeight: "24px",
          }}
        >
          {props.label}
        </Box>
        <Box
          sx={{
            fontSize: "13px",
            lineHeight: "20px",
          }}
        >
          {props.description}
        </Box>
      </Box>
      <Box display="grid" gap="18px">
        {[1, 2, 3, 4].map((el) => (
          <Box
            key={el}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <CIconBackground icon={<ParaglidingIcon />} />
            <Box sx={{ flex: 1 }}>
              <Box
                sx={{ fontSize: "15px", fontWeight: "500", lineHeight: "21px" }}
              >
                test
              </Box>
              <Box sx={{ fontSize: "13px", lineHeight: "20px" }}>
                description
              </Box>
            </Box>
            <Box sx={{ fontSize: "13px", lineHeight: "20px" }}>test</Box>
            <ParaglidingIcon />
          </Box>
        ))}
      </Box>
    </BasicWidget>
  );
}
