import { Button } from '@elements'
import Image from 'next/image'
import Link from 'next/link'
import { TECH_STACK } from '../../../modules/AboutModule/constant'
import { TechStackComponentProps } from '../../../modules/AboutModule/interface'

export const TechStack: React.FC<TechStackComponentProps> = ({ className }) => (
  <div className={`gap-y-8 ${className}`}>
    <h1 className="text-3xl font-bold text-deepblue md:text-center text-left">
      {' '}
      Tech Stack{' '}
    </h1>
    <div className="flex flex-wrap gap-x-4 gap-y-2 md:justify-center">
      {TECH_STACK.map(({ url, stackName, icon, alt }, key) => (
        <Link key={key} href={url} target={'_blank'}>
          <Button
            icon={
              <Image
                src={icon}
                alt={alt}
                width={20}
                height={20}
                className="object-fill fill-inherit
                            w-[20px] h-[20px]"
                priority
              />
            }
          >
            {' '}
            {stackName}{' '}
          </Button>
        </Link>
      ))}
    </div>
  </div>
)
