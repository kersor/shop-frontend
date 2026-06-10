import React from 'react'
import clsx from 'clsx'

interface Props {
    title: string
    className?: string
}

const BlockTitle = ({
    title,
    className
}: Props) => {
  return (
    <div className={clsx("text-2xl font-bold text-primary", className)}>
      {title}
    </div>
  )
}

export default BlockTitle