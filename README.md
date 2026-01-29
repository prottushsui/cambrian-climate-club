# Cambrian Climate Club Website

The official website for the Cambrian Climate Club, a student-led environmental and sustainability organization at Cambrian School & College, Campus 2.

## About

This website serves as the digital home for the Cambrian Climate Club, providing information about our mission, projects, leadership, and achievements. The club is dedicated to promoting environmental awareness and sustainability initiatives within our school community and beyond.

## Features

- **Modern UI/UX**: Built with React and TypeScript for a smooth user experience
- **Responsive Design**: Optimized for all devices and screen sizes
- **Interactive Components**: Engaging elements to showcase club activities
- **Multiple Pages**: Home, About, Projects, Leadership, Achievements, and more
- **Dynamic Content**: Easily updateable content management

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Routing**: React Router DOM for SPA navigation
- **Styling**: Tailwind CSS with custom design system integration
- **Animations**: Framer Motion for sophisticated motion design
- **Build Tool**: Vite 6.2.0
- **Development Server**: Vite dev server
- **Analytics**: Vercel Analytics

## Project Structure

```
├── components/           # Reusable UI components
│   ├── Footer.tsx
│   ├── ImageGallery.tsx
│   ├── Lightbox.tsx
│   ├── MemberCard.tsx
│   ├── Navbar.tsx
│   ├── ProjectCard.tsx
│   └── SectionHeader.tsx
├── pages/               # Page components
│   ├── AboutPage.tsx
│   ├── AchievementsPage.tsx
│   ├── AdvisoryCommitteePage.tsx
│   ├── ExecutiveCommitteePage.tsx
│   ├── HomePage.tsx
│   ├── LeadershipPage.tsx
│   └── ProjectsPage.tsx
├── data/                # Content and data files
├── public/              # Static assets
├── App.tsx              # Main application component
├── index.html           # HTML entry point
├── index.tsx            # React entry point
├── package.json         # Project dependencies and scripts
└── tsconfig.json        # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd cambrian-climate-club-website
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start the development server:

```bash
npm run dev
```

This will start the Vite development server. Open [http://localhost:5173](http://localhost:5173) in your browser to view the website.

### Building for Production

To build the project for production:

```bash
npm run build
```

This will create a production-ready build in the `dist` folder.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Components

- **Navbar**: Navigation bar with links to different sections
- **Footer**: Site footer with additional links and information
- **MemberCard**: Displays information about club members
- **ProjectCard**: Showcases club projects
- **ImageGallery**: Displays images in a gallery format
- **Lightbox**: Provides an enlarged view of images
- **SectionHeader**: Consistent headers for different sections

## Pages

- **Home**: Main landing page with overview of the club
- **About**: Detailed information about the club's mission and goals
- **Projects**: Showcase of environmental projects and initiatives
- **Leadership**: Information about club leadership and committees
- **Achievements**: Highlights of club accomplishments
- **Advisory Committee**: Information about advisory members
- **Executive Committee**: Details about executive team members

## Contributing

We welcome contributions to improve the Cambrian Climate Club website! If you'd like to contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the terms specified in the LICENSE file.

## Contact

For questions about the Cambrian Climate Club, please reach out through the website's contact section.