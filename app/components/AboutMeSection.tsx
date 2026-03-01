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
						I am an M.S. Computer Engineering student at Northwestern University, building on a Bachelor&apos;s degree in Computer Engineering from Purdue University. My work spans embedded systems, machine learning at the edge, PCB design, and hardware-software integration.
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
