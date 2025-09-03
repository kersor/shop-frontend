import React, { useState } from 'react'
import styles from './styles.module.css'
import { Heart, RussianRuble, ShoppingBag } from 'lucide-react'
import { formatPrice } from '../../../../scripts/utils/formatPrice'

export const CardCatalog = () => {
  const [isFavorite, setIsFavorite] = useState<boolean>(true)

  return (
    <div className={styles.wrapper}>
      <div className={styles.photo}>
        <img src="/photo/7519657.webp" alt="" />
        <div className={styles.card_button}>
          <Heart color={isFavorite ? "#ff7a7aff" : "#252525ff"} strokeWidth="1.5px" size="18px"/>         
        </div>
      </div>
      <div className={styles.card_info}>
        <div className={styles.card_decription}>Мужская толстовка Sunset On Fuji San Hoodie</div>
        <div className={styles.card_price}>{formatPrice("12344")} <RussianRuble strokeWidth="1.5px" size="18px"/></div>
      </div>
    </div>
  )
}
