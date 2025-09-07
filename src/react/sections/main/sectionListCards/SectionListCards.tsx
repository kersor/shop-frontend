import React, { useCallback } from 'react'
import styles from './styles.module.css'
import { CardCatalog } from '../../../components/cards/cardCatalog/CardCatalog'
import { Product } from '../../../../scripts/types/product'
import { useAddProductCartMutation } from '../../../../scripts/api/cart'

interface Props {
  products: Product[]
}

export const SectionListCards = ({
  products
}: Props) => {
  const [addCart] = useAddProductCartMutation()

  const funcProductInCart = useCallback(async (productId: string) => {
    const payload = {
      productId
    }
    await addCart(payload)
  }, [])

  return (
    <div className={styles.wrapper}>
      {
        products.map((product: Product) => (
          <CardCatalog key={product.id} product={product} funcProductInCart={funcProductInCart}/>
        ))
      }
    </div>
  )
}
