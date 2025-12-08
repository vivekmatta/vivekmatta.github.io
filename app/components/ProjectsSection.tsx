import Link from 'next/link';
import { projects } from '../data/projects';

const ProjectsSection = () => {
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
										<Link
											href={`/projects/${project.slug}`}
											className="text-md font-medium text-gray-900 hover:text-blue-600 transition-colors cursor-pointer"
										>
											{project.title}
										</Link>
										<span className="text-sm text-gray-500">{project.period}</span>
									</div>
									<p className="text-sm text-gray-600 leading-relaxed">{project.shortGist}</p>
									<div className="flex flex-wrap gap-1.5">
										{project.technologies.slice(0, 6).map((tech, techIndex) => (
											<span key={techIndex} className="px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded-full ring-1 ring-blue-200">
												{tech}
											</span>
										))}
										{project.technologies.length > 6 && (
											<span className="px-2 py-1 text-xs bg-gray-50 text-gray-600 rounded-full ring-1 ring-gray-200">
												+{project.technologies.length - 6} more
											</span>
										)}
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