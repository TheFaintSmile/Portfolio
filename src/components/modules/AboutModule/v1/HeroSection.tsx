import { Button, TitleHeading } from '@elements'
import Image from 'next/image'
import Link from 'next/link'
import { ALT_PIC, URL_CV, URL_PIC } from '../constant'
import { TechStack } from '../../../elements/v1'

export const HeroSection: React.FC = () => (
  <div
    className="flex flex-col items-center mx-8 relative mt-60 mb-16"
    id="about"
  >
    <div className="max-w-[1800px] flex flex-col gap-y-6 w-full items">
      <TitleHeading> About Me </TitleHeading>
      <div className="flex md:flex-row flex-col-reverse w-full gap-8">
        <div className="md:w-1/2 flex flex-col gap-y-8">
          {/* {ABOUT_DESCRIPTION} */}
          <Link href={URL_CV} target={'_blank'}>
            <Button
              className="w-full md:w-fit"
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
              Review CV{' '}
            </Button>
          </Link>
        </div>
        <div className="relative md:w-1/2 flex flex-col justify-center items-center gap-y-4">
          <Image
            src={URL_PIC}
            alt={ALT_PIC}
            width={500}
            height={500}
            className="object-cover fill-inherit rounded-2xl
                    md:w-[300px] md:h-[300px] min-[426px]:w-[400px] min-[426px]:h-[400px] w-[200px] h-[200px]"
            priority
          />
          <TechStack className="md:flex md:flex-col hidden" />
        </div>
      </div>
    </div>
    <TechStack className="md:hidden flex flex-col mt-8" />
  </div>
)
