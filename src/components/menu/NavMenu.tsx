import { IconButton } from "@mui/material";
import CAvatarMenu from "../mui/CAvatarMenu";
import Settings from "@mui/icons-material/Settings";
import Search from "@mui/icons-material/Search";
import CInputBase from "../mui/CInputBase";

export default function NavMenu() {
  return (
    <nav className="nav-menu">
      <div className="title">Main dashboard</div>
      <div className="search-container">
        <CInputBase placeholder="Search" startAdornment={<Search />} />
        <IconButton>
          <Settings />
        </IconButton>
        <IconButton>
          <Settings />
        </IconButton>
        <IconButton>
          <Settings />
        </IconButton>
        <CAvatarMenu />
      </div>
    </nav>
  );
}
