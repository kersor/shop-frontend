import React, { useState } from 'react'
import styles from './styles.module.css'
import { Copy } from 'lucide-react'
import { formatPrice } from '../../../../scripts/utils/formatPrice'

export const CardOrder = () => {
    const [orderId, setOrderId] = useState("M21655611-00005")
  return (
    <div className={styles.wrapper}>
        <div className={styles.order_id}>
            ID Заказа {orderId}
            <div className={styles.order_copy}>
                <Copy size={18} strokeWidth={1.5} />
            </div>
        </div>
        <div className={styles.order_info}>
            <div className={styles.order_info__left}>
                <div className={styles.order_info__left_list}>Пункт выдачи:</div>
                <div className={styles.order_info__left_list}>Дата заказа:</div>
            </div>
            <div className={styles.order_info__right}>
                <div className={styles.order_info__right_list}>вторник, 22 июля 2025 г., 0:07</div>
                <div className={styles.order_info__right_list}>{formatPrice("436,49")}</div>
            </div>
        </div>
        <div className={styles.order_photo}>
            <img src="/photo/7519657.webp" alt="" />
        </div>
    </div>
  )
}
