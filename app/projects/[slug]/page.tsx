import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProjectBySlug, getAllProjectSlugs } from '../../data/projects';

export async function generateStaticParams() {
	const slugs = getAllProjectSlugs();
	return slugs.map((slug) => ({
		slug,
	}));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const project = getProjectBySlug(slug);

	if (!project) {
		notFound();
	}

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Sticky Nav Bar */}
			<div className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-gray-200">
				<div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
					<Link
						href="/"
						className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors group"
					>
						<svg
							className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
						</svg>
						Back to Portfolio
					</Link>
					<span className="text-xs text-gray-400 font-medium hidden sm:block">{project.period}</span>
				</div>
			</div>

			{/* Hero Header */}
			<div className="bg-white border-b border-gray-200">
				<div className="max-w-4xl mx-auto px-6 py-10 space-y-4">
					<p className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Project</p>
					<h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
						{project.title}
					</h1>
					<p className="text-gray-500 text-base leading-relaxed max-w-2xl">
						{project.shortGist}
					</p>
					<div className="flex flex-wrap items-center gap-3 pt-1">
						{project.githubUrl && (
							<a
								href={project.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors"
							>
								<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
								</svg>
								View on GitHub
							</a>
						)}
						<span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-600 text-sm rounded-lg font-medium">
							<svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
							</svg>
							{project.period}
						</span>
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className="max-w-4xl mx-auto px-6 py-8 space-y-5">

				{/* Technologies */}
				<div className="bg-white rounded-xl border border-gray-200 p-6">
					<h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
						Technologies
					</h2>
					<div className="flex flex-wrap gap-2">
						{project.technologies.map((tech, index) => (
							<span
								key={index}
								className="px-3 py-1.5 text-sm bg-blue-50 text-blue-700 rounded-full ring-1 ring-blue-200 font-medium"
							>
								{tech}
							</span>
						))}
					</div>
				</div>

				{/* Full Description */}
				<div className="bg-white rounded-xl border border-gray-200 p-6">
					<h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
						Overview
					</h2>
					<div className="space-y-3">
						{project.fullDescription.split('\n\n').map((paragraph, index) => (
							<p key={index} className="text-gray-700 leading-relaxed text-sm">
								{paragraph}
							</p>
						))}
					</div>
				</div>

				{/* Additional Details */}
				{project.details && (
					<>
						{project.details.overview && (
							<div className="bg-blue-50 rounded-xl border border-blue-100 p-6">
								<h2 className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-3">
									Project Context
								</h2>
								<p className="text-gray-700 leading-relaxed text-sm">{project.details.overview}</p>
							</div>
						)}

						{project.details.keyFeatures && project.details.keyFeatures.length > 0 && (
							<div className="bg-white rounded-xl border border-gray-200 p-6">
								<h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
									Key Features
								</h2>
								<ul className="space-y-3">
									{project.details.keyFeatures.map((feature, index) => (
										<li key={index} className="flex items-start gap-3">
											<div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
												<svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
													<path
														fillRule="evenodd"
														d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
														clipRule="evenodd"
													/>
												</svg>
											</div>
											<span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
										</li>
									))}
								</ul>
							</div>
						)}

						{project.details.challenges && project.details.challenges.length > 0 && (
							<div className="bg-white rounded-xl border border-gray-200 p-6">
								<h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
									Challenges
								</h2>
								<ul className="space-y-3">
									{project.details.challenges.map((challenge, index) => (
										<li key={index} className="flex items-start gap-3">
											<div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
												<svg className="w-3 h-3 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
													<path
														fillRule="evenodd"
														d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
														clipRule="evenodd"
													/>
												</svg>
											</div>
											<span className="text-gray-700 text-sm leading-relaxed">{challenge}</span>
										</li>
									))}
								</ul>
							</div>
						)}

						{project.details.results && project.details.results.length > 0 && (
							<div className="bg-green-50 rounded-xl border border-green-100 p-6">
								<h2 className="text-xs font-semibold text-green-600 uppercase tracking-widest mb-4">
									Results
								</h2>
								<ul className="space-y-3">
									{project.details.results.map((result, index) => (
										<li key={index} className="flex items-start gap-3">
											<div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
												<svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
													<path
														fillRule="evenodd"
														d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
														clipRule="evenodd"
													/>
												</svg>
											</div>
											<span className="text-gray-700 text-sm leading-relaxed">{result}</span>
										</li>
									))}
								</ul>
							</div>
						)}
					</>
				)}
			</div>
		</div>
	);
}
