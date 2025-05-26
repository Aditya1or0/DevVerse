import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  Bell,
  BarChart3,
  Folder,
  Star,
} from "lucide-react";
export const mainItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
    badge: null,
  },
  {
    title: "Experiences",
    url: "/education",
    icon: Inbox,
    badge: "12",
  },
  {
    title: "Blogs",
    url: "/blogs",
    icon: Calendar,
    badge: null,
  },
  {
    title: "Skills",
    url: "/skills",
    icon: BarChart3,
    badge: null,
  },
];

export const toolItems = [
  {
    title: "Search",
    url: "#",
    icon: Search,
    badge: null,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: Folder,
    badge: "3",
  },
  {
    title: "Favorites",
    url: "#",
    icon: Star,
    badge: null,
  },
];

export const settingsItems = [
  {
    title: "Contact Us",
    url: "/contact",
    icon: Bell,
    badge: "2",
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
    badge: null,
  },
];
