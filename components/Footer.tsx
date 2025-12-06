"use client";

import { motion } from "framer-motion";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	const socialLinks = [
		{
			name: "LinkedIn",
			url: "https://www.linkedin.com/in/mohanad-ayoub-55bb29382?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BB01lttA8ROq7sr%2F4vIfvcw%3D%3D", // Replace with your LinkedIn URL
			icon: (
				<svg
					className="w-6 h-6"
					fill="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
				</svg>
			),
		},
		{
			name: "GitHub",
			url: "https://github.com/MohanadX", // Replace with your GitHub URL
			icon: (
				<svg
					className="w-6 h-6"
					fill="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
						clipRule="evenodd"
					/>
				</svg>
			),
		},
	];

	return (
		<footer className="relative border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
			{/* Gradient background effect */}
			<div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-blue-50/50 dark:from-gray-800/50 dark:via-gray-800/50 dark:to-gray-800/50" />

			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="flex flex-col items-center justify-center space-y-6">
					{/* Social Links */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="flex items-center justify-center gap-6"
					>
						{socialLinks.map((social, index) => (
							<motion.a
								key={social.name}
								href={social.url}
								target="_blank"
								rel="noopener noreferrer"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								whileHover={{ scale: 1.1, y: -5 }}
								whileTap={{ scale: 0.95 }}
								className="group relative p-4 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
								aria-label={social.name}
							>
								{/* Glow effect on hover */}
								<div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-xl bg-blue-400 transition-opacity duration-300 -z-10" />

								{/* Icon */}
								<div className="relative z-10">{social.icon}</div>

								{/* Tooltip */}
								<span className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
									{social.name}
								</span>
							</motion.a>
						))}
					</motion.div>

					{/* CV Download Section */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="flex flex-col items-center gap-3"
					>
						<p className="text-sm text-gray-600 dark:text-gray-400 text-center">
							Want to know more about my experience? Download my CV
						</p>
						<motion.a
							href="/CV.pdf"
							download="Mohanad_Ayoub_CV.pdf"
							whileHover={{ scale: 1.05, y: -2 }}
							whileTap={{ scale: 0.95 }}
							className="group relative inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 overflow-hidden"
						>
							{/* Shimmer effect */}
							<motion.div
								className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
								style={{
									background:
										"linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
								}}
							/>
							
							{/* Download Icon */}
							<svg
								className="w-5 h-5 relative z-10"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
								/>
							</svg>
							<span className="relative z-10">Download CV</span>
							
							{/* Glow effect */}
							<div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 blur-xl bg-blue-400 transition-opacity duration-300 -z-10" />
						</motion.a>
						<p className="text-xs text-gray-500 dark:text-gray-500 text-center max-w-md">
							Click the button above to download a PDF copy of my resume
						</p>
					</motion.div>

					{/* Divider */}
					<div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent" />

					{/* Copyright */}
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className="text-center"
					>
						<p className="text-sm text-gray-600 dark:text-gray-400">
							© {currentYear}{" "}
							<span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
								Mohanad Ayoub
							</span>
							. All rights reserved.
						</p>
						<p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
							Built with Next.js, TypeScript, and Tailwind CSS
						</p>
					</motion.div>
				</div>
			</div>
		</footer>
	);
}
