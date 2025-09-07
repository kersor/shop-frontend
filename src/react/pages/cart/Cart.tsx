import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { Conatiner } from '../../components/container/Container'
import { PageTitle } from '../../components/ui/pageTitle/PageTitle'
import { SectionCartMain } from '../../sections/cart/sectionCartMain/SectionCartMain'
import { SectionCartAside } from '../../sections/cart/sectionCartAside/SectionCartAside'
import { formatPrice } from '../../../scripts/utils/formatPrice'
import { useGetProductCartQuery } from '../../../scripts/api/cart'
import { ReqGetAllProductsInCart } from '../../../scripts/types/cart'

const Cart = () => {
  const [cart, setCart] = useState<ReqGetAllProductsInCart>({
    total: 0,
    data: []
  })
  const {data, isLoading} = useGetProductCartQuery()

  useEffect(() => {
    if (data) setCart(data)
  }, [data])

  return (
    <Conatiner>
      <div className={styles.wrapper}>
        <PageTitle title='Моя корзина'/>
        <div className={styles.total}>{cart.data.length} Изделия · {formatPrice(`${cart.total}`)}</div>
        <div className={styles.container}>
          <SectionCartMain cart={cart.data} isLoading={isLoading}/>
          <SectionCartAside total={cart.total} />
        </div>
      </div>
    </Conatiner>
  )
}

export default Cart