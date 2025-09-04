import React from 'react'
import styles from './styles.module.css'
import { CardOrder } from '../../components/cards/cardOrder/CardOrder'

const Orders = () => {
  return (
    <div className={styles.wrapper}>
      <CardOrder />
      <CardOrder />
      <CardOrder />
    </div>
  )
}

export default Orders