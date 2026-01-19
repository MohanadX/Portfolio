"use client";

import { motion } from "framer-motion";

const skills = [
	{
		name: "TypeScript",
		icon: "📘",
		category: "Language",
		url: "https://www.typescriptlang.org/docs/",
	},
	{
		name: "HTML5",
		icon: "🌐",
		category: "Markup",
		url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
	},
	{
		name: "CSS3",
		icon: "🎨",
		category: "Styling",
		url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
	},
	{
		name: "Next JS",
		icon: "⚡",
		category: "Framework",
		url: "https://nextjs.org/docs",
	},
	{
		name: "React",
		icon: "⚛️",
		category: "Library",
		url: "https://react.dev/",
	},
	{
		name: "React Query",
		icon: "🔄",
		category: "Library",
		url: "https://tanstack.com/query/latest",
	},
	{
		name: "Redux",
		icon: "📦",
		category: "State Management",
		url: "https://redux.js.org/",
	},
	{
		name: "Node Js",
		icon: "🟢",
		category: "Runtime",
		url: "https://nodejs.org/docs/latest/api/",
	},
	{
		name: "MongoDB",
		icon: "🍃",
		category: "Database",
		url: "https://www.mongodb.com/docs/manual/",
	},
	{
		name: "Next Auth",
		icon: "🔐",
		category: "Authentication",
		url: "https://next-auth.js.org/",
	},
	{
		name: "Tailwind",
		icon: "💨",
		category: "Styling",
		url: "https://tailwindcss.com/docs",
	},
	{
		name: "Shadcn",
		icon: "🧩",
		category: "UI Components",
		url: "https://ui.shadcn.com/docs",
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
		},
	},
};

export default function Skills() {
	return (
		<section
			id="skills"
			className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
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
						Skills & Technologies
					</h2>
					<p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
						Technologies and tools I use to build modern web applications
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
				>
					{skills.map((skill, index) => (
						<motion.div
							key={index}
							variants={itemVariants}
							whileHover={{ scale: 1.05, y: -5 }}
							className="group relative"
						>
							<a
								href={skill.url}
								target="_blank"
								rel="noopener noreferrer"
								className="block h-full"
							>
								<div className="h-full p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 border-2 border-transparent group-hover:border-blue-500 dark:group-hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-2xl">
									<div className="text-4xl mb-3 text-center">{skill.icon}</div>
									<h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-1">
										{skill.name}
									</h3>
									<p className="text-sm text-gray-500 dark:text-gray-400 text-center">
										{skill.category}
									</p>
								</div>
							</a>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
