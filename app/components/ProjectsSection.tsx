const ProjectsSection = () => {
	const projects = [
		{
			title: 'Cambridge Mobile Telematics Innovation Lab 2025 Q3 Hackathon',
			period: 'Jun 2025 - Jul 2025',
			description: 'Led frontend development using SwiftUI and Cursor AI, creating dynamic map visualizations, analytics dashboards, and gamification features. Integrated AI for intelligent route suggestions and personalized safety insights.',
			technologies: ['SwiftUI', 'iOS Development', 'AI Integration', 'MapKit']
		},
		{
			title: 'Embedded Systems Design Lead - Notiphones',
			period: 'Jan 2025 - May 2025',
			description: 'Designed and fabricated PCB for wearable alert system with PWM-driven vibration motor, RGB LED indicators, and USB-C power circuit. Programmed ESP32-S3 in Embedded C for BLE-triggered vibration under 1s latency.',
			technologies: ['Embedded C', 'PCB Design', 'ESP32-S3', 'BLE', 'Oscilloscope']
		},
		{
			title: 'SoCET Project - System-on-Chip Design',
			period: 'Sep 2024 - Jan 2025',
			description: 'Designed PCB layouts for System-on-Chip prototypes and wrote SystemVerilog modules for RISC-V SoCs. Validated functionality using PDB debug workflows.',
			technologies: ['SystemVerilog', 'RISC-V', 'PCB Design', 'SoC']
		}
	];

	return (
		<div className="py-6 bg-white px-6">
			<div className="space-y-4 max-w-2xl mx-auto">
				<div>
					<h3 className="text-lg font-semibold text-gray-900 text-center md:text-left">Projects</h3>
					<div className="h-px w-full bg-gray-200 mt-2" />
				</div>

				<div className="space-y-5">
					{projects.map((project, index) => (
						<div key={index} className="relative">
							<div className="relative pl-4 border-l-2 border-gray-200">
								<div className="absolute -left-[5px] top-[10px] h-2.5 w-2.5 rounded-full bg-blue-400" />

								<div className="space-y-2">
									<div className="flex flex-col md:flex-row md:items-center md:justify-between">
										<h4 className="text-md font-medium text-gray-900">{project.title}</h4>
										<span className="text-sm text-gray-500">{project.period}</span>
									</div>
									<p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
									<div className="flex flex-wrap gap-1.5">
										{project.technologies.map((tech, techIndex) => (
											<span key={techIndex} className="px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded-full ring-1 ring-blue-200">
												{tech}
											</span>
										))}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectsSection; 