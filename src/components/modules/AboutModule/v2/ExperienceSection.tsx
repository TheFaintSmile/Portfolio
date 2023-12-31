import { Disclosure } from '@elements'
import { WORK_EXPERIENCE } from '../constant'

export const ExperienceSection: React.FC = () => (
  <div className="flex flex-col gap-x-8 gap-y-8 relative" id="experience">
    <h1 className="text-white text-4xl font-bold">
      {' '}
      <span className="italic"> What </span> have I done?{' '}
    </h1>
    {WORK_EXPERIENCE.map(({ description, ...exp }, key) => (
      <Disclosure {...exp} key={key}>
        <div className="flex flex-col gap-y-4">
          <p className="text-lg">{description}</p>
        </div>
      </Disclosure>
    ))}
  </div>
)
