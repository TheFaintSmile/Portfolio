import React from 'react'

export interface ModalProps {
  isOpen: boolean
  toggleModal: (bool: boolean) => void
  logo: string
  alt: string
  workplace: string
  children: React.ReactNode
}
