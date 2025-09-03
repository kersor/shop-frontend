import React from 'react'
import styles from './styles.module.css'
import { CardCart } from '../../../components/cards/cardCart/CardCart'

export const SectionCartMain = () => {
  return (
    <div className={styles.wrapper}>
      <CardCart />
      <CardCart />
      <CardCart />
    </div>
  )
}
