import { Button, Modal } from '@elements'
import Image from 'next/image'
import { useState } from 'react'
// import { EXPERIENCE_DESCRIPTION } from '../constant'
import { ExperienceComponentProps } from '../interface'

export const ExperienceComponent: React.FC<ExperienceComponentProps> = ({
  logo,
  alt,
  job,
  workplace,
  interval,
  stack,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  function toggleModal(bool: boolean): void {
    setIsOpen(bool)
  }
  return (
    <>
      <Modal
        isOpen={isOpen}
        toggleModal={(bool: boolean) => toggleModal(bool)}
        logo={logo}
        alt={alt}
        workplace={workplace}
      >
        <></>
        {/* {(EXPERIENCE_DESCRIPTION as any)[workplace]} */}
      </Modal>
      <div className="flex gap-x-8">
        <div className="relative">
          <Image
            src={logo}
            alt={alt}
            width={40}
            height={40}
            className="object-fill fill-inherit w-[50px] h-[50px] rounded-full"
            priority
          />
        </div>
        <div className="flex md:flex-row flex-col md:justify-between w-full gap-x-8 gap-y-4">
          <div className="flex flex-col gap-y-1">
            <h1 className="md:text-3xl font-bold text-black min-[426px]:text-2xl text-xl">
              {' '}
              {job}{' '}
            </h1>
            <h2 className="text-xl text-black"> {workplace} </h2>
            <h3 className="text-description"> {interval} </h3>
            <h3 className="text-description"> Stack: {stack} </h3>
          </div>
          <Button className="h-fit" onClick={() => setIsOpen(!isOpen)}>
            {' '}
            Deskripsi{' '}
          </Button>
        </div>
      </div>
    </>
  )
}
