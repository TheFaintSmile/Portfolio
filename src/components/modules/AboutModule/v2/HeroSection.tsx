import { Button } from '@elements'
import Image from 'next/image'
import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { URL_CV } from '../constant'

export const HeroSection: React.FC = () => (
  <div className="flex flex-col gap-x-8 gap-y-8 relative" id="about">
    <div className="flex md:flex-row flex-col w-full gap-8 md:items-start items-center">
      <div className="w-full flex flex-col gap-y-12">
        <h1 className="text-white text-4xl font-bold whitespace-nowrap w-full">
          <span className="text-blue-max"> /</span>about
        </h1>
        <h1 className="text-white text-4xl font-bold">
          {' '}
          <span className="italic"> Who </span> am I?{' '}
        </h1>

        <p className="text-justify break-all break-words">
          {' '}
          Hello, i&apos;m Alvaro, a student on University of Indonesia studying
          Computer Science. I&apos;m a passionate and driven software engineer
          eager to dive into the dynamic world of technology. I am currently
          seeking for opportunities to further expand my skills and contribute
          meaningfully to innovative projects. Though my professional journey is
          just beginning, I&apos;ve had the privilege of working on various
          projects during my academic years. These experiences have equipped me
          with hands-on skills in software development, project management, and
          the ability to adapt quickly to new environments.
          <br /> <br />I am eager to bring my enthusiasm, creativity, and
          technical skills to a dynamic team. I&apos;m looking for a work
          opportunity where I can not only apply my knowledge but also learn
          from seasoned professionals in the field. I am excited to contribute
          my fresh perspective while absorbing invaluable insights and
          mentorship.
        </p>
        <Link href={URL_CV} target="_blank" rel="noreferrer">
          <Button icon={<FaExternalLinkAlt className="w-3 h-3 font-bold" />}>
            {' '}
            Review CV{' '}
          </Button>
        </Link>
      </div>
      <Image
        src={'/assets/images/formal.png'}
        alt={'formal'}
        width={400}
        height={400}
        className="object-fill fill-inherit relative max-w-[350px] w-full z-50 border-b-blue border-2"
        priority
      />
    </div>
  </div>
)
