import React from 'react'
import { HeroHeader } from '@/components/header'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HeroHeader />
      {children}
    </>
  )
}

export default layout