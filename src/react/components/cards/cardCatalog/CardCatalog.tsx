import React, { memo, useEffect, useState } from 'react'
import styles from './styles.module.css'
import { Heart, RussianRuble, ShoppingBag } from 'lucide-react'
import { formatPrice } from '../../../../scripts/utils/formatPrice'
import { Product } from '../../../../scripts/types/product'

interface Props {
  product: Product
  funcProductInCart: (productId: string) => void
  funcProductInFavorites: (productId: string) => void
  favorite: boolean
  cart: boolean
}

export const CardCatalog = memo(({
  product,
  funcProductInCart,
  funcProductInFavorites,
  favorite,
  cart
}: Props) => {

  
  const [isFavorite, setIsFavorite] = useState<boolean>(favorite)
  const [isCart, setIsCart] = useState<boolean>(cart)
 
  useEffect(() => {
    setIsFavorite(prev => favorite)
  }, [favorite])

  useEffect(() => {
    setIsCart(prev => cart)
  }, [cart])


  return (
    <div className={styles.wrapper}>
      <div className={styles.photo}>
        <img src={product.photo} alt="" />
        <div className={styles.card_buttons}>
          <div className={styles.card_button} onClick={() => {
            setIsFavorite(prev => !prev)
            funcProductInFavorites(product.id)
          }}>
            <Heart color={isFavorite ? "#ff7a7aff" : "#252525ff"} strokeWidth="1.5px" size="18px"/>         
          </div>
          <div className={styles.card_button} onClick={() => {
            setIsCart(prev => !prev)
            funcProductInCart(product.id)
          }}>
            <ShoppingBag color={isCart ? "#ff7a7aff" : "#252525ff"} strokeWidth="1.5px" size="18px"/>         
          </div>
        </div>
      </div>
      <div className={styles.card_info}>
        <div className={styles.card_decription}>{product.name}</div>
        <div className={styles.card_price}>{formatPrice(product.price)}</div>
      </div>
    </div>
  )
})
