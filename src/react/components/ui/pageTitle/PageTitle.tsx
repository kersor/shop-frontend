import React from 'react'

interface Props {
    title: string
}

export const PageTitle = ({
    title
}: Props) => {
  return (
    <h1>{title}</h1>
  )
}
