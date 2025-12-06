# Mohanad Ayoub - Portfolio Website

A modern, responsive portfolio website built with Next.js 16, featuring dark/light theme toggle, smooth scrolling navigation, and beautiful UI components.

## Features

- ✅ **Next.js 16** with App Router
- ✅ **Dark/Light Theme Toggle** with persistent storage
- ✅ **Glassy Sticky Navbar** with smooth scroll navigation
- ✅ **Hero Section** with animated background and image placeholder
- ✅ **Skills Section** showcasing Next.js 16 developer skills
- ✅ **Projects Section** with rich UI cards (ready for your projects)
- ✅ **Contact Form** with subject and details fields (ready for Gmail integration)
- ✅ **Smooth Animations** using Framer Motion
- ✅ **Fully Responsive** design
- ✅ **TypeScript** for type safety
- ✅ **Tailwind CSS** for styling

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Adding Your Image

1. Add your image to the `public` folder
2. Update the Hero component at `components/Hero.tsx` - replace the placeholder div with your image:

```tsx
<img
	src="/your-image.jpg"
	alt="Mohanad Ayoub"
	className="w-full h-full object-cover"
/>
```

### Adding Projects

Edit the `projects` array in `components/Projects.tsx`:

```tsx
const projects: Project[] = [
	{
		id: 1,
		title: "Your Project Title",
		description: "Your project description",
		technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
		image: "/project-image.jpg",
		link: "https://your-project-url.com",
		github: "https://github.com/your-username/project",
	},
	// Add more projects...
];
```

#### 6. Install Dependencies and Restart

```bash
npm install
npm run dev
```

Your contact form is now ready to send emails! The form sends emails with:

- **Subject** field
- **Details/Message** field

All emails will be sent to `mohanadayoubx@gmail.com`.

### Adding More Skills

Edit the `skills` array in `components/Skills.tsx` to add or modify skills.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and theme variables
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Main page combining all sections
├── components/
│   ├── Contact.tsx          # Contact form section
│   ├── Hero.tsx             # Hero section with name and image
│   ├── Navbar.tsx           # Sticky glassy navbar
│   ├── Projects.tsx         # Projects showcase section
│   ├── Skills.tsx           # Skills section
│   └── ThemeProvider.tsx    # Theme context and provider
├── public/                  # Static assets (add your image here)
└── package.json
```

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **React Context API** - Theme management
- **EmailJS** - Email service integration

## License

This project is open source and available for personal use.

---

Built with ❤️ by Mohanad Ayoub
