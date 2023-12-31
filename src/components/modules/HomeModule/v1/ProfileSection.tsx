import { Button, TitleHeading } from '@elements'
import Image from 'next/image'
import Link from 'next/link'
import { DESCRIPTION_TEXT, NAME, SOCIAL_MEDIA } from '../constant'

export const ProfileSection: React.FC = () => (
  <div className="relative font-Roboto md:top-[170px] min-[426px]:top-[140px] min-[320px]:top-[90px] top-[70px] flex flex-col items-center md:py-8 min-[426px]:py-6 min-[320px]:py-4 py-2 gap-y-4">
    <div className="text-center flex flex-col gap-y-8 px-8 max-w-7xl items-center">
      <TitleHeading className="my-0"> {NAME} </TitleHeading>
      <p className="md:text-xl min-[320px]:text-base text-xs">
        {' '}
        {DESCRIPTION_TEXT}{' '}
      </p>
      <div className="flex justify-center gap-y-4 items-center flex-col">
        <h3 className="font-bold text-xl"> See my social media: </h3>
        <div className="flex items-center justify-center gap-x-8">
          {SOCIAL_MEDIA.map(({ url, src, alt }, key) => (
            <Link href={url} target={'_blank'} key={key}>
              <div className="relative cursor-pointer">
                <Image
                  src={src}
                  alt={alt}
                  width={40}
                  height={40}
                  className="object-fill fill-inherit w-[40px] h-[40px]"
                  priority
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    <Button
      icon={
        <Image
          src={'/assets/icons/shortcut.svg'}
          alt={'shortuct'}
          width={20}
          height={20}
          className="object-fill fill-inherit
            w-[20px] h-[20px]"
          priority
        />
      }
    >
      {' '}
      Learn More{' '}
    </Button>
  </div>
)
