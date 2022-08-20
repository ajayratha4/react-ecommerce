import { SvgIconComponent } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

export type SidebarSubmenu = {
  id: number;
  name: string;
  path?: string;
  icon: SvgIconComponent;
};

export type SidebarItem = {
  id: number;
  name: string;
  path?: string;
  submenu?: SidebarSubmenu[];
};

export const sidebar: SidebarItem[] = [
  { id: 3, name: "Home", path: "/" },

  {
    id: 1,
    name: "Profile",
    submenu: [
      { path: "/profile", id: 110, name: "Profile", icon: AccountCircleIcon },
      { path: "/profile", id: 110, name: "Logout", icon: LogoutIcon },
    ],
  },
  { id: 1, name: "About", path: "/about" },
];
