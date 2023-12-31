// import { ChevronRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
// import Link from 'next/link'
import { getShortenedDesc } from 'src/components/utils/getShortenedDesc'
import { ProjectCardProps } from './interface'

export const ProjectCard: React.FC<ProjectCardProps> = ({
  identify,
  title,
  description,
  foto,
}) => (
  <div className="rounded-md overflow-hidden drop-shadow-lg w-[400px] ">
    <div className="relative">
      <Image
        src={foto[0]}
        alt={title}
        width={400}
        height={400}
        className="object-fill fill-inherit w-[400px] h-full rounded-md border-slate-200 border"
        priority
      />
    </div>
    <div className="px-2 py-4 flex flex-col gap-y-2">
      <h1 className="text-black font-bold text-2xl"> {title} </h1>
      <p className="text-gray-500 text-base">{getShortenedDesc(description)}</p>
      {/* <div className="flex items-center gap-x-2 my-2">
        <Link href={`/projects/${identify}`}>
          <h2 className="font-bold text-xl text-deepblue cursor-pointer">
            {' '}
            Read More{' '}
          </h2>
        </Link>
        <ChevronRightIcon width={20} height={20} className="text-deepblue" />
      </div> */}
    </div>
  </div>
)
