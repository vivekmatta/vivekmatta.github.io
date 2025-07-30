import ProfileSection from './components/ProfileSection';
import AboutMeSection from './components/AboutMeSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';

export default function MinimalistPortfolio() {
	return (
		<main className="min-h-screen bg-white">
			{/* Left Column - Profile */}
			<div className="fixed top-0 left-0 h-screen w-2/5 border-r border-gray-200 bg-white z-10">
				<ProfileSection />
			</div>

			{/* Right Column - About Me, Skills, Experience, and Projects */}
			<div className="ml-0 md:ml-[40%] pl-4 md:pl-8 pr-4">
				{/* About Me Section */}
				<div>
					<AboutMeSection />
				</div>

				{/* Skills Section */}
				<div>
					<SkillsSection />
				</div>

				{/* Experience Section */}
				<div>
					<ExperienceSection />
				</div>

				{/* Projects Section */}
				<div>
					<ProjectsSection />
				</div>
			</div>
		</main>
	);
}
