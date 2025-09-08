import React, { memo, useState } from 'react'
import styles from './styles.module.css'
import { Copy } from 'lucide-react'
import { formatPrice } from '../../../../scripts/utils/formatPrice'
import { Order } from '../../../../scripts/types/order'
import { daysOfWeek } from '../../../../scripts/constants/days'
import { months } from '../../../../scripts/constants/months'

interface Props {
    order: Order
}

export const CardOrder = memo(({order}: Props) => {
    const date = new Date(order.createdAt)
    const orderDate = `
        ${daysOfWeek[date.getDay() - 1]}, 
        ${date.getDate()} 
        ${months[date.getMonth()]} 
        ${date.getFullYear()} г.,
        ${date.getHours()}:${date.getMinutes()}
    `
    // вторник, 22 июля 2025 г., 0:07
    return (
        <div className={styles.wrapper}>
            <div className={styles.order_id}>
                ID Заказа {order.id}
                <div className={styles.order_copy}>
                    <Copy size={18} strokeWidth={1.5} />
                </div>
            </div>
            <div className={styles.order_info}>
                <div className={styles.order_info__left}>
                    <div className={styles.order_info__left_list}>Дата заказа:</div>
                    <div className={styles.order_info__left_list}>Стоимость:</div>
                </div>
                <div className={styles.order_info__right}>
                    <div className={styles.order_info__right_list}>{orderDate}</div>
                    <div className={styles.order_info__right_list}>{formatPrice(`${order.total}`)}</div>
                </div>
            </div>
            <div className={styles.order_line}>
                {
                    order.products.map(or => (
                        <div className={styles.photo}>
                            <img src={or.product.photo} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
})