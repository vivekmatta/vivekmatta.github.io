import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="min-h-screen bg-white flex items-center justify-center px-6">
			<div className="text-center space-y-4">
				<h1 className="text-4xl font-bold text-gray-900">404</h1>
				<h2 className="text-xl text-gray-600">Project not found</h2>
				<p className="text-gray-500">The project you&apos;re looking for doesn&apos;t exist.</p>
				<Link
					href="/"
					className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors"
				>
					Back to Portfolio
				</Link>
			</div>
		</div>
	);
}

