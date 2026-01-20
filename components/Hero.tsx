"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
	return (
		<section
			id="home"
			className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
		>
			{/* Animated background elements */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10 animate-blob" />
				<div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000" />
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10 animate-blob animation-delay-4000" />
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						className="space-y-6"
					>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2, duration: 0.6 }}
						>
							<span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
								Welcome to my Portfolio
							</span>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3, duration: 0.6 }}
							className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
						>
							Hi, I'm{" "}
							<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
								Mohanad Ayoub
							</span>
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4, duration: 0.6 }}
							className="text-xl md:text-2xl text-gray-600 dark:text-gray-300"
						>
							Next.js, React Developer
						</motion.p>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5, duration: 0.6 }}
							className="text-lg text-gray-500 dark:text-gray-400 max-w-xl"
						>
							Crafting beautiful and performant web experiences with the latest
							technologies
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6, duration: 0.6 }}
							className="flex gap-4 pt-4"
						>
							<a
								href="#projects"
								className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
							>
								View Projects
							</a>
							<a
								href="#contact"
								className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 rounded-lg font-semibold hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300"
							>
								Get In Touch
							</a>
						</motion.div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className="flex justify-center md:justify-end"
					>
						<div className="relative rotate">
							<div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-2xl opacity-50 dark:opacity-30 animate-pulse" />
							<div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
								<div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center"></div>
								<Image
									src={"/Profile.webp"}
									alt="Mohanad Ayoub"
									fill
									style={{
										objectFit: "cover",
									}}
								></Image>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
