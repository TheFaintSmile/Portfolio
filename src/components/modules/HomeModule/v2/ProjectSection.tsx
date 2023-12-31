import { ProjectCardVersion2 } from '@elements'
import { PROJECT_DATA } from '../constant'
import { useWindowSize } from '@utils'
import Link from 'next/link'
import { FaArrowRightFromBracket } from 'react-icons/fa6'

export const ProjectSection = () => {
  const { width } = useWindowSize()

  return (
    <div className="flex flex-col gap-x-8 gap-y-8 relative" id="projects">
      <div className="w-full flex sm:flex-row flex-col gap-x-8 justify-between sm:items-center">
        <div className="flex gap-x-4 sm:w-3/5 w-full items-center">
          <h1 className="text-white text-4xl font-bold"> Works </h1>
          <span className="border-t-2 border-blue-max w-full"> </span>
        </div>
        <Link
          href="/works"
          className="hover:underline duration-300 flex gap-x-3 items-center sm:justify-start justify-end hover:text-white"
        >
          <span> View More </span>
          <FaArrowRightFromBracket width={16} height={16} />
        </Link>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-flow-row gap-4">
        {PROJECT_DATA.slice(0, width >= 768 ? 3 : width >= 640 ? 2 : 1).map(
          (project, key) => (
            <ProjectCardVersion2 key={key} {...project} />
          )
        )}
      </div>
    </div>
  )
}
