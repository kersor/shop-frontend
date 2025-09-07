import React from 'react'
import styles from './styles.module.css'
import { formatPrice } from '../../../../scripts/utils/formatPrice'

interface Props {
  total: number
}

export const SectionCartAside = ({
  total
}: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.total}>
        <span>Итого к оплате</span> <span>{formatPrice(`${total}`)}</span>
      </div>
      <div className={styles.common}>
        <span>Общая сумма</span>
        <span>{formatPrice(`${total}`)}</span>
      </div>
      <div className={styles.checkout}>Оформить заказ</div>
    </div>
  )
}
