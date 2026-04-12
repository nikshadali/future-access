'use client'
import { ReactNode } from 'react'

type SectionProps = {
  children: ReactNode
}

type CompoundSection = React.FC<SectionProps> & {
  Title: React.FC<{ children: ReactNode }>
  Description: React.FC<{ children: ReactNode }>
}

const Section: CompoundSection = ({ children }) => {
  return (
    <div className=" py-10 flex flex-col md:flex-row  md:items-start">
      {children}
    </div>
  )
}

Section.Title = ({ children }) => {
  return <div className="w-full md:w-[65%] pr-2">{children}</div>
}

Section.Description = ({ children }) => {
  return <div className="w-full md:w-[35%] pt-5">{children}</div>
}

export default Section