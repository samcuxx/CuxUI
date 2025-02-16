import { LucideIcon, Home, User, Code, Mail } from "lucide-react";

interface NavItem {
  id: string;
  title: string;
  path: string;
  icon: LucideIcon;
}

const navItems: NavItem[] = [
  {
    id: "home",
    title: "Home",
    path: "/",
    icon: Home,
  },
  {
    id: "about",
    title: "About",
    path: "/about",
    icon: User,
  },
  {
    id: "components",
    title: "Components",
    path: "/components",
    icon: Code,
  },
  {
    id: "contact",
    title: "Contact",
    path: "/contact",
    icon: Mail,
  },
];

export default navItems;
