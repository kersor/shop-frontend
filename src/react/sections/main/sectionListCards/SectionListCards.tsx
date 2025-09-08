import React, { useCallback } from 'react'
import styles from './styles.module.css'
import { CardCatalog } from '../../../components/cards/cardCatalog/CardCatalog'
import { Product } from '../../../../scripts/types/product'
import { useAddProductCartMutation } from '../../../../scripts/api/cart'
import { useAuthModal } from '../../../../store/authModal'
import { getToken } from '../../../../scripts/utils/token'
import { useToggleFavoriteProductMutation } from '../../../../scripts/api/favorites'

interface Props {
  products: Product[]
}

export const SectionListCards = ({
  products
}: Props) => {
  const {isOpen, setOpen} = useAuthModal(state => state)
  const [addCart] = useAddProductCartMutation()
  const [toggleFavorite] = useToggleFavoriteProductMutation()

  const funcProductInCart = useCallback(async (productId: string) => {
    if (!getToken().isAuth) return setOpen(true)
    const payload = {
      productId
    }
    await addCart(payload)
  }, [addCart])
  
  const funcProductInFavorites = useCallback(async (productId: string) => {
    if (!getToken().isAuth) return setOpen(true)
    const payload = {
      productId
    }
    await toggleFavorite(payload)
  }, [])
  

  return (
    <div className={styles.wrapper}>
      {
        products.map((product: Product) => (
          <CardCatalog
            cart={product.inCart}
            favorite={product.isFavorite}
            key={product.id}
            product={product}
            funcProductInCart={funcProductInCart}
            funcProductInFavorites={funcProductInFavorites}
          />

        ))
      }
    </div>
  )
}
