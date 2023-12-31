import React from 'react'
import { TitleHeadingProps } from './interface'

export const TitleHeading: React.FC<TitleHeadingProps> = ({
  className,
  children,
}) => (
  <h1 className="relative text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
    {' '}
    {children}{' '}
  </h1>
)
