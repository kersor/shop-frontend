import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { CardOrder } from '../../components/cards/cardOrder/CardOrder'
import { useGetAllOrderQuery } from '../../../scripts/api/order'
import { Order } from '../../../scripts/types/order'
import { SectionLoading } from '../../sections/common/sectionLoading/SectionLoading'
import { SectionTast } from '../../sections/common/sectionTast/SectionTast'

const Orders = () => {
  const [order, setOrder] = useState<Order[]>([])
  const {data, isLoading} = useGetAllOrderQuery()

  useEffect(() => {
    if (data) setOrder(data)
  }, [data])

  
  return (
    <div className={styles.wrapper}>
      {
        isLoading ? (
          <SectionLoading />
        ) : (
          order.length > 0 ? (
            order.length > 0 && order.map(or => (
              <CardOrder key={or.id} order={or}/>
            ))
          ) : (
            <SectionTast>
              Заказов нет
            </SectionTast>
          )
        )
      }
    </div>
  )
}

export default Orders