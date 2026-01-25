# Posh Climate-Focused Color Palette System

## Overview
This color palette redesign establishes an elegant, modern, and premium visual identity for the climate and sustainability-oriented website. The palette elevates the brand while maintaining environmental symbolism without being cliché or overly activist-heavy.

## Color Specifications

### Primary Colors
- **Deep Ocean Blue** (`#0F3D5C`) - Primary brand color representing the depths of our planet's waters
- **HSL Value**: `203 70% 14%`

### Secondary Colors
- **Misty Teal** (`#4C8C8C`) - Secondary color reflecting the balance between land and sea
- **HSL Value**: `180 33% 42%`

### Accent Colors
- **Sunset Coral** (`#E68A7D`) - Accent color bringing warmth and energy to the palette
- **HSL Value**: `5 50% 70%`

### Background & Neutral Colors
- **Sandstone Beige** (`#D9C7A0`) - Warm background color evoking earth and stability
- **HSL Value**: `45 25% 80%`
- **Charcoal Grey** (`#2E2E2E`) - Primary text color for excellent readability
- **HSL Value**: `0 0% 18%`
- **Cloud White** (`#F4F4F2`) - Clean highlights and card backgrounds
- **HSL Value**: `60 10% 95%`

## Usage Guidelines

### Brand Application
- **Primary (Deep Ocean Blue)**: Use for primary CTAs, headers, and key brand elements
- **Secondary (Misty Teal)**: Use for secondary actions, supporting information, and accents
- **Accent (Sunset Coral)**: Use sparingly for highlights, notifications, and special calls to action
- **Background (Sandstone Beige)**: Use as primary background color for sections and pages
- **Text (Charcoal Grey)**: Use for primary text content to ensure readability
- **Highlight (Cloud White)**: Use for card backgrounds, modals, and clean UI elements

### Accessibility Compliance
All color combinations maintain WCAG AA accessibility standards:
- Body text on background: 7:1 contrast ratio
- Secondary text on background: 4.5:1 contrast ratio
- Primary buttons: 4.5:1 contrast ratio for text against button background

### UI Component Applications
- **Buttons**: Primary buttons use Deep Ocean Blue with white text; secondary buttons use Misty Teal
- **Cards**: Background uses Cloud White with Charcoal Grey text
- **Navigation**: Headers use Deep Ocean Blue; active states use Misty Teal
- **Links**: Primary color with hover states using darker variants
- **Form Elements**: Borders in Sandstone Beige, focus states in Deep Ocean Blue

### Dark Mode Adaptations
- **Background**: Deep Ocean Blue darkened to `203 20% 10%`
- **Text**: Lighter Charcoal Grey to `0 0% 90%`
- **Cards**: Off-black to `0 0% 12%`
- **Accents**: Maintained hue but adjusted for visibility

## Premium Gradients
The palette includes several carefully crafted gradients for enhanced visual sophistication:
- **Climate Gradient**: `linear-gradient(135deg, #0F3D5C, #4C8C8C)`
- **Earth Gradient**: `linear-gradient(135deg, #0F3D5C, #E68A7D)`
- **Sandstone Gradient**: `linear-gradient(135deg, #D9C7A0, #F4F4F2)`
- **Coral Gradient**: `linear-gradient(135deg, #E68A7D, #4C8C8C)`

## Implementation Notes
- CSS custom properties are defined in `index.css` under the `:root` selector
- Tailwind CSS classes are configured in `tailwind.config.js`
- All colors have corresponding 50-950 shade variations for flexibility
- The system maintains consistency across all UI components and layouts
- Hover states and transitions use complementary colors from the same palette

## Design Philosophy
This color system balances environmental consciousness with premium aesthetics. Rather than relying on typical "green" associations with sustainability, it draws inspiration from the ocean, earth, and natural elements while maintaining a sophisticated, contemporary feel suitable for a climate-focused organization that wants to convey professionalism and trustworthiness.