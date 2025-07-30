const ExperienceSection = () => {
	const experiences = [
		{
			role: 'Embedded Software Engineer',
			company: 'Cambridge Mobile Telematics',
			period: 'Jun 2025 - Present',
			highlights: 'Co-developed benchtop shake table for accelerometer testing, built Python visualization tools, developed HIL routines for firmware validation',
		},
		{
			role: 'Undergraduate Teaching Assistant',
			company: 'Purdue University',
			period: 'Jan 2025 - Jun 2025',
			highlights: 'Guided 50+ students in circuit analysis experiments, mentored in circuit design and troubleshooting, evaluated assignments and lab reports',
		},
		{
			role: 'Undergraduate Student Researcher - SoCET',
			company: 'Purdue University',
			period: 'Jan 2025 - May 2025',
			highlights: 'Designed custom test boards with eFabless and STM32 chips, developed high-performance FPGA board design, created schematics in KiCad 8',
		},
		{
			role: 'Software Engineer Intern',
			company: 'Cambridge Mobile Telematics',
			period: 'May 2024 - Aug 2024',
			highlights: 'Integrated APIs for 12,000+ SIM cards data management, built Tableau dashboards reducing response time by 50%, automated data pipelines with AWS Lambda',
		},
	];

	return (
		<div className="py-6 bg-white px-6">
			<div className="space-y-4 max-w-2xl mx-auto">
				<div>
					<h3 className="text-lg font-semibold text-gray-900 text-center md:text-left">Experience</h3>
					<div className="h-px w-full bg-gray-200 mt-2" />
				</div>

				<div className="space-y-5">
					{experiences.map((exp, index) => (
						<div key={`${exp.role}-${exp.period}-${index}`} className="relative">
							<div className="relative pl-4 border-l-2 border-gray-200">
								<div className="absolute -left-[5px] top-[10px] h-2.5 w-2.5 rounded-full bg-gray-300" />

								<div className="space-y-1">
									<div className="flex flex-col md:flex-row md:items-center md:justify-between">
										<h4 className="text-md font-medium text-gray-900">{exp.role}</h4>
										<span className="text-sm text-gray-500">{exp.period}</span>
									</div>
									<p className="text-sm font-medium text-gray-600">{exp.company}</p>
									<p className="text-sm text-gray-600 leading-relaxed">{exp.highlights}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ExperienceSection;
