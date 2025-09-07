import React from 'react'
import styles from './styles.module.css'
import { LoaderCircle } from 'lucide-react'

export const SectionLoading = () => {
  return (
        <div className={styles.wrapper}>
            <div className={styles.circle}>
                <LoaderCircle strokeWidth={1.5} size={30} color='#474747'/>
            </div>
        </div>
  )
}
