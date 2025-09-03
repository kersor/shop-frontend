import React from 'react'
import styles from './styles.module.css'
import { formatPrice } from '../../../../scripts/utils/formatPrice'
import { Heart, RussianRuble, X } from 'lucide-react'

export const CardFavorites = () => {
  return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <div className={styles.photo}>
                    <img src="/photo/7519657.webp" alt="" />
                </div>
                <div className={styles.info}>
                    <div className={styles.name}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat laudantium cumque id dignissimos, odio deleniti adipisci placeat? Quia voluptatibus a enim praesentium rerum placeat natus dolorum delectus! Ab, itaque temporibus?</div>
                    <div className={styles.counts}>
                        <div className={styles.price}>{formatPrice("12354")}<RussianRuble size="18" strokeWidth="3px" /></div>
                    </div>
                </div>
            </div>
            <div className={styles.close}>
                <Heart color='#ff7a7a' />
            </div>
        </div>
  )
}
