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
						I am currently an Electrical Engineer II at Raytheon. I hold an M.S. in Computer Engineering from Northwestern University and a B.S. in Computer Engineering with a Mathematics minor from Purdue University.
					</p>

					<p className="text-sm md:text-base text-gray-600 leading-relaxed">
						My work and projects span electrical hardware, embedded systems, PCB design, edge machine learning, and hardware-software integration. Outside of engineering, I enjoy spending time with friends, developing personal projects, and watching movies.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutMeSection;
