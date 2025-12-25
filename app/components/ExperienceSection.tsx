interface Experience {
	role: string;
	company: string;
	period: string;
	highlights: string[];
}

const ExperienceSection = () => {
	const experiences: Experience[] = [
		{
			role: 'Embedded Software Engineer Intern',
			company: 'Cambridge Mobile Telematics',
			period: 'June 2025 – Aug 2025',
			highlights: [
				'Co-developed a benchtop shake table for accelerometer and IoT testing, programming low-level C firmware to generate 0–3200 Hz vibration profiles for precise hardware validation',
				'Initiated and developed a Python logging tool, cutting test iteration time by 40% and improving debugging efficiency',
				'Led and managed a cross-functional team and came in 2nd place out of 45 teams at a company-wide hackathon',
				'Designed an alert system in Python, retrieving historical geolocation data from previous customer trips with SQL queries to identify and warn users upon entering high-risk event prone zones (e.g., crash, hard braking)',
			],
		},
		{
			role: 'Undergraduate Teaching Assistant',
			company: 'Purdue University',
			period: 'Jan 2025 - Jun 2025',
			highlights: [
				'Guided 50+ students in circuit analysis experiments',
				'Mentored in circuit design and troubleshooting',
				'Evaluated assignments and lab reports',
			],
		},
		{
			role: 'Undergraduate Student Researcher - SoCET',
			company: 'Purdue University',
			period: 'Jan 2025 - May 2025',
			highlights: [
				'Designed custom test boards with eFabless and STM32 chips',
				'Developed high-performance FPGA board design',
				'Created schematics in KiCad 8',
			],
		},
		{
			role: 'Software Engineer Intern',
			company: 'Cambridge Mobile Telematics',
			period: 'June 2024 – Aug 2024',
			highlights: [
				'Integrated Twilio and ConnectedU APIs to retrieve and store LTE data usage for over 12,000 SIM cards in Amazon Redshift, managing 5 GB of data daily and ensuring support for multiple SIM vendors',
				'Developed comprehensive data visualization dashboards in Tableau and implemented operational alarms, resulting in a 50% reduction in response time to anomalous data usage.',
			],
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
									<ul className="list-disc list-inside space-y-1">
										{exp.highlights.map((highlight, idx) => (
											<li key={idx} className="text-sm text-gray-600 leading-relaxed">
												{highlight}
											</li>
										))}
									</ul>
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
