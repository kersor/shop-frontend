import React from 'react'
import styles from './styles.module.css'
import { Minus, Plus } from 'lucide-react'

interface Props {
    count: number
    setCount: (count: number) => void
}

export const SectionCount = ({
    count,
    setCount
}: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
          <div onClick={() => setCount(count - 1)} className={styles.count_button}><Minus strokeWidth="1.5px" size='18px' /></div>
          <div className={styles.count_count}>{count}</div>
          <div onClick={() => setCount(count + 1)} className={styles.count_button}><Plus strokeWidth="1.5px" size='18px' /></div>
      </div>
    </div>
  )
}
