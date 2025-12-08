import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProjectBySlug, getAllProjectSlugs } from '../../data/projects';

export async function generateStaticParams() {
	const slugs = getAllProjectSlugs();
	return slugs.map((slug) => ({
		slug,
	}));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
	const project = getProjectBySlug(params.slug);

	if (!project) {
		notFound();
	}

	return (
		<div className="min-h-screen bg-white">
			{/* Back Button */}
			<div className="max-w-4xl mx-auto px-6 py-6">
				<Link
					href="/"
					className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
				>
					<svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
					</svg>
					Back to Portfolio
				</Link>
			</div>

			{/* Project Content */}
			<div className="max-w-4xl mx-auto px-6 pb-12">
				<div className="space-y-6">
					{/* Header */}
					<div className="space-y-4">
						<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
							<h1 className="text-3xl md:text-4xl font-bold text-gray-900">{project.title}</h1>
							<span className="text-sm text-gray-500">{project.period}</span>
						</div>
						<div className="h-px w-full bg-gray-200" />
					</div>

					{/* Technologies */}
					<div className="flex flex-wrap gap-2">
						{project.technologies.map((tech, index) => (
							<span key={index} className="px-3 py-1.5 text-sm bg-blue-50 text-blue-700 rounded-full ring-1 ring-blue-200">
								{tech}
							</span>
						))}
					</div>

					{/* GitHub Link */}
					{project.githubUrl && (
						<div>
							<a
								href={project.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
							>
								<svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
								</svg>
								View on GitHub
							</a>
						</div>
					)}

					{/* Full Description */}
					<div className="space-y-4">
						<h2 className="text-xl font-semibold text-gray-900">Overview</h2>
						<div className="prose prose-sm max-w-none">
							{project.fullDescription.split('\n\n').map((paragraph, index) => (
								<p key={index} className="text-gray-600 leading-relaxed mb-4">
									{paragraph}
								</p>
							))}
						</div>
					</div>

					{/* Additional Details */}
					{project.details && (
						<div className="space-y-6">
							{project.details.overview && (
								<div className="space-y-3">
									<h2 className="text-xl font-semibold text-gray-900">Project Context</h2>
									<p className="text-gray-600 leading-relaxed">{project.details.overview}</p>
								</div>
							)}

							{project.details.keyFeatures && project.details.keyFeatures.length > 0 && (
								<div className="space-y-3">
									<h2 className="text-xl font-semibold text-gray-900">Key Features</h2>
									<ul className="space-y-2">
										{project.details.keyFeatures.map((feature, index) => (
											<li key={index} className="flex items-start text-gray-600">
												<svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
													<path
														fillRule="evenodd"
														d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
														clipRule="evenodd"
													/>
												</svg>
												<span>{feature}</span>
											</li>
										))}
									</ul>
								</div>
							)}

							{project.details.challenges && project.details.challenges.length > 0 && (
								<div className="space-y-3">
									<h2 className="text-xl font-semibold text-gray-900">Challenges</h2>
									<ul className="space-y-2">
										{project.details.challenges.map((challenge, index) => (
											<li key={index} className="flex items-start text-gray-600">
												<svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
													<path
														fillRule="evenodd"
														d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
														clipRule="evenodd"
													/>
												</svg>
												<span>{challenge}</span>
											</li>
										))}
									</ul>
								</div>
							)}

							{project.details.results && project.details.results.length > 0 && (
								<div className="space-y-3">
									<h2 className="text-xl font-semibold text-gray-900">Results</h2>
									<ul className="space-y-2">
										{project.details.results.map((result, index) => (
											<li key={index} className="flex items-start text-gray-600">
												<svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
													<path
														fillRule="evenodd"
														d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
														clipRule="evenodd"
													/>
												</svg>
												<span>{result}</span>
											</li>
										))}
									</ul>
								</div>
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

