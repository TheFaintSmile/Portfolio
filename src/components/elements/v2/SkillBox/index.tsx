import Link from 'next/link'
import { SkillBoxProps } from './interface'

export const SkillBox: React.FC<SkillBoxProps> = ({ title, abilities }) => (
  <div className="py-3 border border-gray flex-col justify-start items-start gap-2 inline-flex">
    <div className=" px-4 justify-start items-start inline-flex">
      <h2 className="text-white text-base font-bold">{title}</h2>
    </div>
    <div className="w-full border border-gray"></div>
    <div className="px-4 flex flex-wrap justify-start items-start gap-2">
      {abilities.map(({ name, reference }, key) => (
        <Link
          href={reference}
          key={key}
          className="text-gray text-base hover:text-white hover:underline duration-300"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          {name}{' '}
        </Link>
      ))}
    </div>
  </div>
)
