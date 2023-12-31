import { Button } from '@elements'
import { DESCRIPTION_TEXT } from '../constant'
import Image from 'next/image'
import { FaCircleDot } from 'react-icons/fa6'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

export const HeroSection = () => (
  <div className="flex flex-col gap-y-16">
    <div className="flex md:flex-row flex-col gap-16 w-full md:items-end items-center justify-between ">
      <div className="flex flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-white text-2xl font-bold">
            {' '}
            Hello, I&apos;m Alvaro,{' '}
          </h1>
          <h1 className="text-primary text-3xl font-bold">
            {' '}
            Full-stack Developer<span className="text-white"> and </span>
            Software Engineer{' '}
          </h1>
          <h1 className="text-white text-2xl font-bold"> from Indonesia. </h1>
        </div>
        <p className="text-justify break-all break-words">
          {' '}
          {DESCRIPTION_TEXT}{' '}
        </p>
        <Button
          icon={
            <ChevronDownIcon width={16} height={16} className="font-bold" />
          }
          onClick={() => {
            document
              .getElementById('projects')
              ?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          {' '}
          Learn More{' '}
        </Button>
      </div>
      <div className="relative flex flex-col items-center">
        <Image
          src={'/assets/images/Profile.png'}
          alt={'profile'}
          width={200}
          height={200}
          className="object-fill fill-inherit relative w-[400px] z-50"
          priority
        />
        <Image
          src={'/assets/images/ProfileDeco.svg'}
          alt={'decoration'}
          width={200}
          height={200}
          className="object-fill fill-inherit absolute top-0 left-0 w-25 h-25 z-10"
          priority
        />
        <div className="px-4 py-2 border relative border-gray justify-start items-center gap-x-4 inline-flex w-fit text-sm z-50">
          <FaCircleDot className="text-green text-xl" />
          <div>
            <span className="font-medium">Currently learning </span>
            <span className="text-white font-semibold">
              Software Architecture{' '}
            </span>
          </div>
        </div>
      </div>
    </div>
    <blockquote className="blockquote rounded-md">
      <h1>
        <span>Ralph Waldo Emerson</span> - Thinker{' '}
      </h1>
      <p>
        Do not go where the path may lead, go instead where there is no path and
        leave a trail.
      </p>
    </blockquote>
  </div>
)
