// src/components/ui/icons.tsx
// Simple placeholder for Icons component.
// This avoids the large, repetitive SVG data from the original prompt.

import { type IconProps } from "lucide-react";

export type IconComponent = (props: IconProps) => JSX.Element;

// Define simple, empty functional components for the icons we need.
// These can be replaced with actual SVGs or LucideReact components later.
const PlaceholderIcon = (props: IconProps) => <svg {...props} />;

export const Icons = {
  logo: PlaceholderIcon,
  gitHub: PlaceholderIcon,
};
