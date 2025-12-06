"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Project {
	id: number;
	title: string;
	description: string;
	technologies: string[];
	image: string;
	link?: string;
	github?: string;
}

// Placeholder project - you can add more later
const projects: Project[] = [
	{
		id: 1,
		title: "Lorial",
		description:
			"The Hub For every Developer events For better Development Future. Lorial Is Next 16 project with the latest features integrated with posthog to track all kind of actions in website and handle error properly also made along side with features like sending booking emails from resend service and used mongoDB Atlas for database and imakgeKit cloud",
		technologies: [
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"Posthog",
			"React Query",
			"next-auth",
			"mongoDb",
		],
		image: "/lorial.jpg",
		link: "https://lorial.vercel.app", // Replace with your actual project URL
		github: "https://github.com/MohanadX/Lorial", // Replace with your GitHub URL
	},
	{
		id: 2,
		title: "Web Field",
		description:
			"Web Field is a dynamic platform designed for entrepreneurs and new startups to share their innovative ideas and gain visibility within the community. It allows users to create detailed startup pitches, including a title, description, category, image URL, and the pitch content in Markdown. By connecting like-minded individuals",
		technologies: [
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"shadcn",
			"Sentry",
			"next-auth",
			"Sanity",
		],
		image: "/web-field.jpg",
		link: "https://web-field.netlify.app", // Replace with your actual project URL
		github: "https://github.com/MohanadX/Web-Field", // Replace with your GitHub URL
	},
	{
		id: 3,
		title: "Todo-list React App",
		description:
			"A modern, accessible, and responsive Todo List application built with React and Material-UI (MUI). This project demonstrates best practices in React development, including state management with useReducer, context API for global state, localStorage caching, custom hooks, and UI accessibility (WCAG compliant).",
		technologies: [
			"React",
			"JS ECMA 6+",
			"Material UI",
			"Reducers",
			"Context",
			"Memoization",
			"Axios",
		],
		image: "/todo.jpg",
		link: "https://todo-list-react-appw.netlify.app", // Replace with your actual project URL
		github: "https://github.com/MohanadX/React-Todo-list-App", // Replace with your GitHub URL
	},
	{
		id: 4,
		title: "Weather Redux App",
		description:
			"A responsive and multilingual weather application built with React, Redux Toolkit, Axios, and Material-UI. This app fetches real-time weather data from the OpenWeatherMap API, dynamically displays weather information, and supports language switching between Arabic and English.",
		technologies: [
			"React",
			"JS ECMA 6+",
			"Material UI",
			"Redux Toolkit",
			"i18next",
			"Memoization",
			"Axios",
		],
		image: "/weather.png",
		link: "https://xweather-react-app.netlify.app", // Replace with your actual project URL
		github: "https://github.com/MohanadX/Weather-App", // Replace with your GitHub URL
	},
	{
		id: 5,
		title: "Mohanad Animations",
		description:
			"A responsive, multi‑section animations website built with semantic HTML5, modern CSS3, and vanilla JavaScript for interactivity. This project is ideal as a learning resource, a starter template.",
		technologies: ["HTML5", "CSS3", "JS ECMA 6+", "Animations", "Responsive"],
		image: "/Animation.jpg",
		link: "https://mohanadx.github.io/HTML-CSS-Project-3/", // Replace with your actual project URL
		github: "https://github.com/MohanadX/HTML-CSS-Project-3", // Replace with your GitHub URL
	},
	{
		id: 6,
		title: "3D Scene Website",
		description:
			"This project is a 3D transformations in CSS It serves as a learning exercise in using HTML, CSS (specifically CSS 3D transforms), and how to structure a minimal 3D scene for the web, without relying on external 3D libraries or WebGL.",
		technologies: ["HTML5", "CSS3", "JS ECMA 6+", "Animations", "3D"],
		image: "/3D.png",
		link: "https://mohanadx.github.io/3D/", // Replace with your actual project URL
		github: "https://github.com/MohanadX/3D", // Replace with your GitHub URL
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const cardVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
		},
	},
};

export default function Projects() {
	return (
		<section
			id="projects"
			className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
		>
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
						My Projects
					</h2>
					<p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
						A showcase of my recent work and projects
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					{projects.map((project) => (
						<motion.div
							key={project.id}
							variants={cardVariants}
							whileHover={{ y: -10 }}
							className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-xl hover:shadow-2xl transition-all duration-300"
						>
							{/* Project Image */}
							<div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-500 overflow-hidden">
								{/* Actual Project Image */}
								{project.image ? (
									<Image
										src={project.image}
										alt={project.title}
										className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
										onError={(e) => {
											// Hide image and show gradient placeholder if it fails to load
											const target = e.target as HTMLImageElement;
											target.style.display = "none";
										}}
										fill
									/>
								) : null}

								{/* Overlay */}
								<div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-300 z-10" />

								{/* Hover overlay with preview text */}
								{project.link && (
									<motion.div
										initial={{ opacity: 0, y: 20 }}
										whileHover={{ opacity: 1, y: 0 }}
										className="absolute inset-0 flex items-center justify-center"
									>
										<motion.div
											initial={{ scale: 0.8 }}
											whileHover={{ scale: 1 }}
											className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
										>
											<span className="text-white font-semibold text-sm flex items-center gap-2">
												<svg
													className="w-4 h-4"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
													/>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
													/>
												</svg>
												View Live Preview
											</span>
										</motion.div>
									</motion.div>
								)}
							</div>

							{/* Project Content */}
							<div className="p-6">
								<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
									{project.title}
								</h3>
								<p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
									{project.description}
								</p>

								{/* Technologies */}
								<div className="flex flex-wrap gap-2 mb-4">
									{project.technologies.map((tech, index) => (
										<span
											key={index}
											className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
										>
											{tech}
										</span>
									))}
								</div>

								{/* Links */}
								<div className="flex gap-3 flex-wrap">
									{project.link && (
										<motion.a
											href={project.link}
											target="_blank"
											rel="noopener noreferrer"
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
											className="group relative flex-1 min-w-[140px] px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
										>
											{/* Animated background gradient */}
											<motion.div
												className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
												initial={false}
											/>

											{/* Shimmer effect */}
											<motion.div
												className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
												style={{
													background:
														"linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
												}}
											/>

											<span className="relative flex items-center justify-center gap-2">
												<span>View Live Site</span>
												<motion.svg
													className="w-5 h-5"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
													animate={{
														x: [0, 4, 0],
													}}
													transition={{
														duration: 1.5,
														repeat: Infinity,
														repeatType: "reverse",
														ease: "easeInOut",
													}}
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
													/>
												</motion.svg>
											</span>

											{/* Glow effect */}
											<div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 blur-xl bg-blue-400 transition-opacity duration-300 -z-10" />
										</motion.a>
									)}
									{project.github && (
										<motion.a
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
											className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:shadow-lg"
										>
											<span>GitHub</span>
											<svg
												className="w-5 h-5"
												fill="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													fillRule="evenodd"
													d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
													clipRule="evenodd"
												/>
											</svg>
										</motion.a>
									)}
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
