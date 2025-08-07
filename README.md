# Sri Lakshmi Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, clean design
- 📱 Fully responsive across all devices
- ⚡ Fast and optimized performance
- 🌟 Smooth animations with Framer Motion
- 📅 Interactive interview scheduling system
- 🎯 Recruiter-focused content
- 🛠️ Built with TypeScript for better development experience

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Create React App

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Personal Portfolio
```

2. Install dependencies:
```bash
npm install

```

3. Start the development server:
```bash
npm start

```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/           # React components
│   ├── ui/              # Reusable UI components
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Experience.tsx   # Experience section
│   ├── Projects.tsx     # Projects showcase
│   ├── Skills.tsx       # Skills section
│   ├── Contact.tsx      # Contact form
│   ├── Footer.tsx       # Footer component
│   └── ScheduleInterview.tsx # Interview booking
├── lib/                 # Utility functions
├── App.tsx              # Main app component
├── index.tsx            # Entry point
└── index.css            # Global styles
```

## Customization

### Content
- Update personal information in the component files
- Modify project data in `Projects.tsx`
- Update skills in `Skills.tsx`
- Change contact information in `Contact.tsx`

### Styling
- Global styles are in `src/index.css`
- Component-specific styling uses Tailwind CSS classes
- Color scheme can be modified in the CSS custom properties

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add it to `App.tsx`
3. Add navigation link in `Header.tsx`

## Deployment

### Build for Production
```bash
npm run build
```

The build folder will contain the optimized production build.

### Deployment Options
- **Netlify**: Connect your GitHub repo for automatic deployments
- **Vercel**: Import your project for instant deployment
- **GitHub Pages**: Use `gh-pages` package for deployment
- **Traditional hosting**: Upload the build folder contents

## Contact

Sri Lakshmi - narasimhas9490@gmail.com

Project Link: [Portfolio Website](https://portfolio-url.com)