"use client";

import { Header } from "@/components/ui/21st-navbar";
import { Button } from "@/components/ui/21st-navbar";
import { ChevronLeft, Users, Award, GraduationCap } from 'lucide-react'; // Example icons

export function HeaderDemo() {
  const menuItems = [
    { text: "Home", to: "/" },
    { text: "About", to: "/about" },
    {
      text: "Services",
      items: [
        { text: "Web Design", to: "/services/design", icon: { dark: "", light: "" } }, // Add real icon paths
        { text: "Development", to: "/services/dev", icon: { dark: "", light: "" } },
      ],
    },
    { text: "Contact", to: "/contact" },
  ];

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800">
        <Header
        logo={<span className="text-xl font-bold">My Logo</span>}
        menuItems={menuItems}
        theme="light" // or "dark"
        isSticky={true}
        rightContent={
            <>
            <Button variant="default" onClick={() => alert('Action 1')}>
                Action 1
            </Button>
            <Button variant="outline" onClick={() => alert('Action 2')}>
                Action 2
            </Button>
            </>
        }
        />
        <div className="mt-20 text-center">
            <p className="text-gray-700 dark:text-gray-300">Scroll down to see the sticky header in action.</p>
            <div className="h-screen"></div> {/* Spacer for demo */}
        </div>
    </div>
  );
}
