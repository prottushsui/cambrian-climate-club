"use client";

import { MenuBar } from "@/components/ui/menu-bar";
import { Mail, MapPin, Phone, Globe } from "lucide-react"; // Using Lucide icons

const menuItems = [
  {
    icon: Mail,
    label: "Email",
  },
  {
    icon: MapPin,
    label: "Location",
  },
  {
    icon: Phone,
    label: "Phone",
  },
  {
    icon: Globe,
    label: "Website",
  },
];

export function MenuBarDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <MenuBar items={menuItems} />
    </div>
  );
}
