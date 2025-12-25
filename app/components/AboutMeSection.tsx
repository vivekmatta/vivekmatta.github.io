const AboutMeSection = () => {
	return (
		<div className="py-6 bg-white px-6">
			<div className="space-y-4 max-w-2xl mx-auto">
				<div>
					<h3 className="text-lg font-semibold text-gray-900 text-center md:text-left">About Me</h3>
					<div className="h-px w-full bg-gray-200 mt-2" />
				</div>

				<div className="space-y-4">
					<p className="text-sm md:text-base text-gray-600 leading-relaxed">
						I am a Purdue University graduate with a Bachelor&apos;s degree in Computer Engineering, where I gained hands-on experience in embedded systems, robotics, and hardware-software integration. Currently, I am pursuing my M.S. in Computer Engineering at Northwestern University, continuing my passion for bridging the gap between hardware and software.
					</p>

					<p className="text-sm md:text-base text-gray-600 leading-relaxed">
						When I&apos;m not coding or designing circuits, you can find me hanging out with friends, working on personal projects, or watching movies. I believe in maintaining a healthy work-life balance and finding inspiration from both technical challenges and everyday experiences.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutMeSection; 