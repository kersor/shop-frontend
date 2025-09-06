import React from 'react'
import styles from './styles.module.css'

interface Props {
    title: string
    onClick: () => void
    disabled?: boolean
}

export const CustomButton = ({
    title,
    onClick,
    disabled = false
}: Props) => {
  return (
    <div onClick={onClick} className={`${styles.wrapper} ${disabled && styles.disabled}`} aria-disabled={disabled}>
        {title}
    </div>
  )
}
