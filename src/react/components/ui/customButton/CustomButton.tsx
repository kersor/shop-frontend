import React from 'react'
import styles from './styles.module.css'

interface Props {
    title: string
    onClick: () => void
}

export const CustomButton = ({
    title,
    onClick
}: Props) => {
  return (
    <div onClick={onClick} className={styles.wrapper}>
        {title}
    </div>
  )
}
