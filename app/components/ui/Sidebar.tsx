import { ChevronDown, ListFilter } from "lucide-react";
import Link from "next/link";

const components = [
  {
    name: "Dropdowns",
    href: "/components/dropdowns",
    icon: <ChevronDown className="w-4 h-4" />,
  },
  {
    name: "Select",
    href: "/components/select",
    icon: <ListFilter className="w-4 h-4" />,
  },
];

export default function Sidebar() {
  return (
    <nav className="space-y-4">
      {components.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#1a2333] transition-colors"
        >
          {item.icon}
          <span>{item.name}</span>
        </Link>
      ))}
    </nav>
  );
}
