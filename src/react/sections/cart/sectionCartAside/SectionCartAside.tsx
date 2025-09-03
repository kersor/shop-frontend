import React from 'react'
import styles from './styles.module.css'
import { formatPrice } from '../../../../scripts/utils/formatPrice'

export const SectionCartAside = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.total}>
        <span>Итого к оплате</span> <span>{formatPrice("25470")}</span>
      </div>
      <div className={styles.common}>
        <span>Общая сумма</span>
        <span>{formatPrice("25470")}</span>
      </div>
      <div className={styles.checkout}>Оформить заказ</div>
    </div>
  )
}
