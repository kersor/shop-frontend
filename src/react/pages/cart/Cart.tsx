import React, { useCallback, useEffect, useState } from 'react'
import styles from './styles.module.css'
import { Conatiner } from '../../components/container/Container'
import { PageTitle } from '../../components/ui/pageTitle/PageTitle'
import { SectionCartMain } from '../../sections/cart/sectionCartMain/SectionCartMain'
import { SectionCartAside } from '../../sections/cart/sectionCartAside/SectionCartAside'
import { formatPrice } from '../../../scripts/utils/formatPrice'
import { useGetProductCartQuery } from '../../../scripts/api/cart'
import { ReqGetAllProductsInCart } from '../../../scripts/types/cart'
import { CreateOrder } from '../../../scripts/types/order'
import { useCreateOrderMutation } from '../../../scripts/api/order'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const navigate = useNavigate()
  const [cart, setCart] = useState<ReqGetAllProductsInCart>({
    total: 0,
    data: []
  })
  const {data, isLoading} = useGetProductCartQuery()
  const [createOrder] = useCreateOrderMutation()

  useEffect(() => {
    if (data) setCart(data)
  }, [data])

  const funcCreateOrder = async () => {
    const payload: CreateOrder = {
      total: cart.total,
      products: []
    }

    cart.data.map(car => payload.products.push({
      productId: car.productId, 
      count: car.count, 
      price: +car.product.price
    }))

    await createOrder(payload)
    navigate('/personal/order')
  }

  return (
    <Conatiner>
      <div className={styles.wrapper}>
        <PageTitle title='Моя корзина'/>
        <div className={styles.total}>{cart.data.length} Изделия · {formatPrice(`${cart.total}`)}</div>
        <div className={styles.container}>
          <SectionCartMain cart={cart.data} isLoading={isLoading}/>
          <SectionCartAside total={cart.total} funcCreateOrder={funcCreateOrder}/>
        </div>
      </div>
    </Conatiner>
  )
}

export default Cart