import Image from 'next/image';

const ProfileSection = () => {
	return (
		<div className="w-full h-full bg-white px-6 py-8 md:py-0 md:flex md:items-center md:justify-center relative">
			{/* Full height border line */}
			<div className="hidden md:block absolute top-0 right-0 w-px h-full bg-gray-200"></div>
			<div className="space-y-8 text-center max-w-sm">
				<div className="relative w-28 md:w-40 h-28 md:h-40 mx-auto">
					<div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-gray-200">
						<Image src="/vivek.jpg" alt="Profile" fill className="object-cover" priority />
					</div>
				</div>

				<div className="space-y-3">
					<h1 className="text-2xl md:text-3xl font-bold text-gray-900">Vivek Matta</h1>
					<h2 className="text-lg md:text-xl text-gray-600">Embedded Software Engineer Intern</h2>
					<div className="h-px w-16 bg-gray-200 mx-auto my-4" />
				</div>

				<div className="space-y-4">
					{/* Contact Info */}
					<div className="flex items-center justify-center space-x-2">
						<svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
							<path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
						</svg>
						<a href="mailto:vmatta2002@gmail.com" className="text-sm text-gray-600 hover:text-gray-900">
							vmatta2002@gmail.com
						</a>
					</div>

					<div className="flex items-center justify-center space-x-2">
						<svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
							<path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
						</svg>
						<span className="text-sm text-gray-600">(781) 800-3636</span>
					</div>

					{/* Resume Button */}
					<div className="pt-2">
						<a
							href="/Vivek Matta Master's Resume New Edit.pdf"
							target="_blank"
							className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors text-sm"
						>
							<svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
								<path
									fillRule="evenodd"
									d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
									clipRule="evenodd"
								/>
								<path fillRule="evenodd" d="M8 11a1 1 0 100 2h4a1 1 0 100-2H8zm0-4a1 1 0 100 2h4a1 1 0 100-2H8z" clipRule="evenodd" />
							</svg>
							View Resume
						</a>
					</div>

					{/* Social Links */}
					<div className="flex items-center justify-center space-x-4 pt-2">
						<a href="https://github.com/vivekmatta" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 hover:text-gray-900">
							<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
								<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
							</svg>
						</a>
						<a href="https://www.linkedin.com/in/vivek-matta" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 hover:text-gray-900">
							<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
								<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileSection;
