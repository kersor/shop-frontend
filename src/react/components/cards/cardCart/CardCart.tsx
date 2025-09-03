import React from 'react'
import styles from './styles.module.css'
import { formatPrice } from '../../../../scripts/utils/formatPrice'
import { SectionCount } from '../../../sections/common/sectionCount/SectionCount'
import { Heart, ShoppingBag, Trash } from 'lucide-react'

export const CardCart = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.photo}>
                <img src="/photo/7519657.webp" alt="" />
            </div>
            <div className={styles.info}>
                <div className={styles.info_title}>Свитшот с патчем шоколадного цвета</div>
                <div className={styles.info_price}>{formatPrice("12354")}</div>
                <div className={styles.info_count}>
                    <SectionCount count={0} setCount={(count: number) => {}} />
                </div>
            </div>
        </div>
        <div className={styles.buttons}>
            <div className={styles.button}><Heart strokeWidth="1.5px" size="18px"/></div>
            <div className={styles.button}><Trash strokeWidth="1.5px" size="18px"/></div>
        </div>
    </div>
  )
}
