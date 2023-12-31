import { SkillBox } from '@elements'
import { SKILL } from '../constant'
import Image from 'next/image'

export const SkillSection: React.FC = () => (
  <div className="flex flex-col gap-x-8 gap-y-8 relative" id="skills">
    <div className="flex gap-x-4 sm:w-1/3 w-full items-center">
      <h1 className="text-white text-4xl font-bold"> Skills </h1>
      <span className="border-t-2 border-blue-max w-full"> </span>
    </div>
    <div className="relative flex gap-16 w-full">
      <div className="relative w-1/3 hidden lg:flex flex-col items-center">
        <Image
          src={'/assets/images/BoxDot.svg'}
          alt={'dot'}
          width={30}
          height={30}
          className="object-fill fill-inherit absolute w-[60px] top-0 left-5"
          priority
        />
        <Image
          src={'/assets/images/ProfileDeco.svg'}
          alt={'decoration'}
          width={80}
          height={80}
          className="object-fill fill-inherit absolute w-[100px] bottom-0 left-7"
          priority
        />
        <Image
          src={'/assets/images/BoxDot.svg'}
          alt={'BoxDot'}
          width={30}
          height={30}
          className="object-fill fill-inherit absolute w-[60px] top-1/2 right-1/4"
          priority
        />
        <div className="w-20 h-20 border border-gray absolute right-10 top-0" />
        <div className="w-12 h-12 border border-gray absolute right-0 bottom-0" />
      </div>
      <div className="grid sm:grid-cols-2 gap-8 w-full lg:w-2/3 items-end">
        {SKILL.map(({ title, abilities }, key) => (
          <SkillBox title={title} abilities={abilities} key={key} />
        ))}
      </div>
    </div>
  </div>
)
