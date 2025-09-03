import React, { useState } from 'react'
import styles from './styles.module.css'
import { formatPrice } from '../../../../scripts/utils/formatPrice'
import { RussianRuble, X } from 'lucide-react'
import { SectionCount } from '../../../sections/common/sectionCount/SectionCount'

export const CardCart = () => {
    const [count, setCount] = useState(0)
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
                        <SectionCount count={count} setCount={(count: number) => setCount(prev => count)}/>
                    </div>
                </div>
            </div>
            <div className={styles.close}>
                <X/>
            </div>
        </div>
    )
}
