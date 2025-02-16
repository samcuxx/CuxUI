import { LucideIcon, Home, User, Code, Mail } from "lucide-react";

interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
}

const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "About",
    href: "/about",
    icon: User,
  },
  {
    title: "Components",
    href: "/components",
    icon: Code,
  },
  {
    title: "Contact",
    href: "/contact",
    icon: Mail,
  },
];

export default navItems;
