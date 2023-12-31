import React from 'react'
import { type CustomDisclosureProps } from './interface'
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

const CustomDisclosure: React.FC<CustomDisclosureProps> = ({
  company,
  role,
  children,
}) => (
  <>
    <Disclosure>
      {({ open }) => (
        <div className={`w-full rounded-xl`}>
          <Disclosure.Button
            data-open={open}
            className={`flex w-full cursor-pointer items-center justify-between space-x-4 py-5 text-left text-sm focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 ${
              open && 'border-b border-b-gray'
            }`}
          >
            <span className="text-base font-extrabold md:text-xl lg:text-2xl text-white">
              {company} - <span className="text-gray"> {role} </span>
            </span>
            <div
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl duration-500 ${
                open && '-rotate-180'
              }`}
            >
              <ChevronDownIcon />
            </div>
          </Disclosure.Button>
          <Transition
            show={open}
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 transform scale-95"
            enterTo="opacity-100 transform scale-100"
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100 transform scale-100"
            leaveTo="opacity-0 transform scale-95"
          >
            <Disclosure.Panel
              className={`pb-8 pt-4 text-sm font-extralight leading-5 md:text-base lg:text-lg`}
            >
              {children}
            </Disclosure.Panel>
          </Transition>
        </div>
      )}
    </Disclosure>
  </>
)

export default CustomDisclosure
