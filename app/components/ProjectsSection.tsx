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

				<div className="space-y-3">
					{projects.map((project, index) => (
						<Link
							key={index}
							href={`/projects/${project.slug}`}
							className="group block rounded-xl border border-gray-200 bg-white p-4 hover:border-blue-300 hover:shadow-sm transition-all duration-150"
						>
							<div className="space-y-2.5">
								<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
									<span className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug flex items-center gap-1.5">
										{project.title}
										<svg
											className="w-3.5 h-3.5 text-gray-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
										</svg>
									</span>
									<span className="text-xs text-gray-400 shrink-0 font-medium">{project.period}</span>
								</div>

								<p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
									{project.shortGist}
								</p>

								<div className="flex flex-wrap gap-1.5">
									{project.technologies.slice(0, 5).map((tech, techIndex) => (
										<span
											key={techIndex}
											className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded-full font-medium"
										>
											{tech}
										</span>
									))}
									{project.technologies.length > 5 && (
										<span className="px-2 py-0.5 text-xs bg-gray-100 text-gray-400 rounded-full font-medium">
											+{project.technologies.length - 5} more
										</span>
									)}
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectsSection;
