import { AppSection, FunProjects, HeroSection } from './v2'

export const ProjectModule: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-20 py-16 relative w-full">
      <HeroSection />
      <AppSection />
      <FunProjects />
    </div>
  )
}
