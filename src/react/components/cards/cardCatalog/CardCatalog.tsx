import React, { useState } from 'react'
import styles from './styles.module.css'
import { Heart, RussianRuble, ShoppingBag } from 'lucide-react'
import { formatPrice } from '../../../../scripts/utils/formatPrice'
import { Product } from '../../../../scripts/types/product'

interface Props {
  product: Product
}

export const CardCatalog = ({
  product
}: Props) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(true)

  return (
    <div className={styles.wrapper}>
      <div className={styles.photo}>
        <img src={product.photo} alt="" />
        <div className={styles.card_button}>
          <Heart color={isFavorite ? "#ff7a7aff" : "#252525ff"} strokeWidth="1.5px" size="18px"/>         
        </div>
      </div>
      <div className={styles.card_info}>
        <div className={styles.card_decription}>{product.name}</div>
        <div className={styles.card_price}>{formatPrice(product.price)}</div>
      </div>
    </div>
  )
}
