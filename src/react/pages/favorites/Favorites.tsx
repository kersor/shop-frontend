import React, { useCallback, useEffect, useState } from 'react'
import styles from './styles.module.css'
import { Conatiner } from '../../components/container/Container'
import { CardCatalog } from '../../components/cards/cardCatalog/CardCatalog'
import { PageTitle } from '../../components/ui/pageTitle/PageTitle'
import { useGetAllFavoritesQuery, useToggleFavoriteProductMutation } from '../../../scripts/api/favorites'
import { getToken } from '../../../scripts/utils/token'
import { ReqGetAllProductInFavorites } from '../../../scripts/types/favorites'
import { SectionTast } from '../../sections/common/sectionTast/SectionTast'
import { SectionLoading } from '../../sections/common/sectionLoading/SectionLoading'
import { useAddProductCartMutation, useDeleteProductInCartMutation, useToggleCountProductCartMutation } from '../../../scripts/api/cart'
import { TypeToggleCountProductDto } from '../../../scripts/types/cart'

const Favorites = () => {
  const [favorites, setFavorites] = useState<ReqGetAllProductInFavorites[]>([])

  const {data, isLoading, isFetching} = useGetAllFavoritesQuery({}, {
    skip: !getToken().isAuth
  })

  const [addCart] = useAddProductCartMutation()
  const [toggleFavorite] = useToggleFavoriteProductMutation()

  useEffect(() => {
    if (data) setFavorites(data)
  }, [data])

  const funcProductInFavorites = useCallback(async (productId: string) => {
    const payload = {
      productId
    }
    await toggleFavorite(payload)
  }, [])

  const funcProductInCart = useCallback(async (productId: string) => {
    const payload = {
      productId
    }
    await addCart(payload)
  }, [])


  return (
    <Conatiner>
        <div className={styles.wrapper}>
            <PageTitle title='Избранные'/>
            <div className={styles.container}>
              {
                isLoading || isFetching ? (
                  <SectionLoading />
                ) : (
                  favorites.length > 0 ? (
                    favorites.map((favorite) => {
                      return (
                        <CardCatalog
                          key={favorite.productId}
                          product={favorite.product}
                          funcProductInCart={funcProductInCart}
                          funcProductInFavorites={funcProductInFavorites}
                          favorite={favorite.isFavorite}
                          cart={favorite.product.inCart}
                      />
                      )
                    })
                  ) : (
                    <div>
                      Избранных товаров нет
                    </div>
                  )
                )
              }
            </div>
        </div>
    </Conatiner>
  )
}

export default Favorites