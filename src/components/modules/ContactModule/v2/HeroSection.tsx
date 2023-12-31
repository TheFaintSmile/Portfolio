import Link from 'next/link'
import { socialMedia } from 'src/components/elements/Footer/constant'

export const HeroSection: React.FC = () => (
  <div className="flex flex-col gap-8 md:justify-end justify-center">
    <h1 className="text-white text-4xl font-bold whitespace-nowrap w-full">
      <span className="text-blue-max"> /</span>contact
    </h1>
    <p> List of my contact information. </p>
    <div className="flex gap-8 items-end md:flex-row flex-col">
      <div className="flex flex-col gap-y-4 w-full">
        <h1 className="text-white text-4xl font-bold"> Contact me! </h1>
        <p className="text-justify break-all break-words">
          Thank you for exploring my portfolio! I&apos;m excited to potentially
          work together or address any questions you may have. Your interest
          means a lot to me. I&apos;m available for discussions, inquiries about
          potential collaborations, or simply to chat about all things tech.
          Don&apos;t hesitate to drop me a message or connect through any of
          these platforms. I&apos;ll do my best to get back to you promptly!
        </p>
      </div>
      <div className="border border-gray flex-col justify-start items-start gap-3 inline-flex h-fit w-full md:w-fit">
        <div className=" px-4 pt-3 justify-start items-start inline-flex">
          <h2 className="text-white text-base font-bold"> React out to me! </h2>
        </div>
        <div className="w-full border border-gray" />
        <div className="px-4 pb-3 flex flex-col gap-4">
          {socialMedia.map(({ name, href, icon, username }, key) => (
            <div key={key} className="flex items-center space-x-2">
              {<i> {icon} </i>}
              <Link
                href={href}
                target={'_blank'}
                className="animated-underline text-xs font-semibold hover:text-white duration-200 sm:text-sm"
              >
                <span className="block md:hidden">{name}</span>
                <span className="hidden md:block">{username}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)
