import { Transition, Dialog } from '@headlessui/react'
import Image from 'next/image'
import { Fragment } from 'react'
import { ModalProps } from './interface'
import { XMarkIcon } from '@heroicons/react/24/solid'

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  toggleModal,
  logo,
  alt,
  workplace,
  children,
}) => (
  <Transition appear show={isOpen} as={Fragment}>
    <Dialog
      as="div"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/30 py-16 font-koblenz"
      onClose={() => toggleModal(false)}
    >
      <div className="pl-4 pr-8 flex flex-col items-center">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="flex flex-col max-w-lg w-full my-8 overflow-hidden transition-all transform bg-white shadow-xl rounded-2xl">
            <Dialog.Title
              as="div"
              className="text-xl text-neutral/gray-3 font-medium flex justify-between items-center"
            >
              <h3 className="py-6 px-10"> {workplace} </h3>
              <div className="py-4 px-8">
                <button
                  onClick={() => toggleModal(false)}
                  className="hover:bg-slate-100 rounded-3xl p-2 duration-300"
                >
                  <XMarkIcon
                    className="cursor-pointer"
                    height={25}
                    width={25}
                  />
                </button>
              </div>
            </Dialog.Title>
            <Dialog.Panel as="div" className="flex flex-col items-center">
              <div className="relative">
                <Image
                  src={logo}
                  alt={alt}
                  width={200}
                  height={200}
                  className="object-fill fill-inherit w-[150px] h-[150px] rounded-full"
                  priority
                />
              </div>
              <div className="flex flex-col my-8 gap-y-5 w-4/5 text-center text-xl font-semibold">
                {children}
              </div>
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition>
)
