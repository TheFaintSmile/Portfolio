import Link from 'next/link'
import { socialMedia } from 'src/components/elements/Footer/constant'

export const ContactSection: React.FC = () => (
  <div className="flex flex-col gap-x-8 gap-y-8 relative" id="contact">
    <div className="flex gap-x-4 md:w-1/3 w-full items-center">
      <h1 className="text-white text-4xl font-bold whitespace-nowrap">
        {' '}
        Contacts{' '}
      </h1>
      <span className="border-t-2 border-blue-max w-full"> </span>
    </div>
    <div className="flex gap-8 md:flex-row flex-col">
      <p className="text-justify break-all break-words">
        {' '}
        Thank you for taking the time to explore my portfolio! I&apos;d love to
        connect and discuss opportunities further. Feel free to reach out to me
        through any of the channels on this section.
        <br /> <br />
        I&apos;m available for discussions, inquiries about potential
        collaborations, or simply to chat about all things tech. Don&apos;t
        hesitate to drop me a message or connect through any of these platforms.
        I&apos;ll do my best to get back to you promptly!
      </p>
      <div className="border border-gray flex-col justify-start items-start gap-3 inline-flex h-fit">
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
