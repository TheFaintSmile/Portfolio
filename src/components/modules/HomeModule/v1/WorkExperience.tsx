import { TitleHeading } from '@elements'
import { WORK_EXPERIENCE } from '../constant'
import { ExperienceComponent } from './ExperienceComponent'

export const WorkExperience: React.FC = () => (
  <div className="mx-8 mb-8 flex flex-col items-center ">
    <div className="max-w-[1800px] w-full">
      <div className="flex flex-col">
        <TitleHeading> Experiences </TitleHeading>
        <div className="flex flex-col gap-y-8">
          {WORK_EXPERIENCE.map(
            ({ logo, alt, job, workplace, interval, stack }, key) => (
              <ExperienceComponent
                logo={logo}
                alt={alt}
                job={job}
                workplace={workplace}
                interval={interval}
                stack={stack}
                key={key}
              />
            )
          )}
        </div>
      </div>
    </div>
  </div>
)
