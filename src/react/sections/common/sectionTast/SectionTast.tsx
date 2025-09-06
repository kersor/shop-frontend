import React, { PropsWithChildren } from 'react'
import styles from './styles.module.css'

interface Props {

}

export const SectionTast = ({
    children
}: PropsWithChildren) => {
  return (
    <div className={styles.wrapper}>
        {children}
    </div>
  )
}
