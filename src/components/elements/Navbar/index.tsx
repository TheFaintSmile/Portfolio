import Link from 'next/link'
import Image from 'next/image'
import { MENU } from './constant'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

export const Navbar = () => {
  const router = useRouter()
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)

  useEffect(() => {
    if (isHamburgerOpen) {
      document.body.classList.add('disable-scroll')
    } else {
      document.body.classList.remove('disable-scroll')
    }
  }, [isHamburgerOpen])

  const hamburgerVariants = {
    open: { rotate: 90 },
    closed: { rotate: 0 },
  }

  const getRouterElement = (href: string, key: number, label: string) => {
    return (
      <Link
        href={href}
        key={key}
        className={`${
          href === router.asPath ? 'text-white' : 'text-gray'
        } font-bold hover:text-white hover:underline duration-300`}
      >
        {label}
      </Link>
    )
  }
  return (
    <nav className="flex flex-col items-center">
      <div className="flex justify-between items-center py-4 max-w-7xl w-full px-16">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Image
              src="/assets/images/Logo.png"
              alt="logo"
              width={50}
              height={50}
            />
          </div>
          <h1 className="font-bold text-white sm:flex hidden">
            {' '}
            Alvaro&apos;s Portfolio{' '}
          </h1>
        </div>
        <div className="md:flex gap-x-8 hidden">
          {MENU.map(({ label, href }, key) => {
            return getRouterElement(href, key, label)
          })}
        </div>
        <div className="flex gap-x-12 md:hidden">
          <motion.div
            initial="closed"
            animate={isHamburgerOpen ? 'open' : 'closed'}
            variants={hamburgerVariants}
            className="cursor-pointer text-blue-light"
            onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
          >
            {isHamburgerOpen ? (
              <XMarkIcon height={30} width={30} />
            ) : (
              <Bars3Icon height={30} width={30} />
            )}
          </motion.div>
        </div>
      </div>
      <AnimatePresence>
        {isHamburgerOpen && (
          <motion.div
            key="hamburger-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex h-screen w-full flex-col items-center gap-y-8 py-8"
          >
            {MENU.map(({ label, href }, key) => {
              return getRouterElement(href, key, label)
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
