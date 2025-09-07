import React, { useCallback } from 'react'
import styles from './styles.module.css'
import { CardCart } from '../../../components/cards/cardCart/CardCart'
import { useDeleteProductInCartMutation, useToggleCountProductCartMutation } from '../../../../scripts/api/cart'
import { ReqGetAllProductInCart, TypeToggleCountProductDto } from '../../../../scripts/types/cart'
import { SectionLoading } from '../../common/sectionLoading/SectionLoading'
import { CustomToast } from '../../../../scripts/utils/toast'
import { SectionTast } from '../../common/sectionTast/SectionTast'

interface Props {
  cart: ReqGetAllProductInCart[]
  isLoading: boolean
}

export const SectionCartMain = ({
  cart,
  isLoading
}: Props) => {
  const [toggleProductInCart, {isLoading: isLoadingToggleProduct}] = useToggleCountProductCartMutation()
  const [deleteProduct, {isLoading: isLoadingDeleteProduct}] = useDeleteProductInCartMutation()

  const funcToggleProductInCart = useCallback(async (productId: string, typeCount: TypeToggleCountProductDto) => {
    const payload = {
      productId,
      type: typeCount
    }
    const res = await toggleProductInCart(payload)
  }, [])

  const funcDeleteProductInCart = useCallback(async (productId: string) => {
    const payload = {
      productId,
    }
    const res = await deleteProduct(payload)
  }, [])

  return (
    <div className={styles.wrapper}>
      {
        (isLoadingToggleProduct || isLoadingDeleteProduct || isLoading) ? (
          <SectionLoading />
        ) : (
          cart.length > 0 ? (
            cart.map((car) => (
              <CardCart
                cart={car}
                funcToggleProductInCart={funcToggleProductInCart}
                funcDeleteProductInCart={funcDeleteProductInCart}
              />
            ))
          ) : (
            <SectionTast>
              Коризина пуста
            </SectionTast>
          )
        )
      }

    </div>
  )
}
