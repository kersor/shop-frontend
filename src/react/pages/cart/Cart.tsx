import React from 'react'
import styles from './styles.module.css'
import { Conatiner } from '../../components/container/Container'
import { PageTitle } from '../../components/ui/pageTitle/PageTitle'
import { SectionCartMain } from '../../sections/cart/sectionCartMain/SectionCartMain'
import { SectionCartAside } from '../../sections/cart/sectionCartAside/SectionCartAside'
import { formatPrice } from '../../../scripts/utils/formatPrice'

const Cart = () => {
  return (
    <Conatiner>
      <div className={styles.wrapper}>
        <PageTitle title='Моя корзина'/>
        <div className={styles.total}>2 Изделия · {formatPrice("25470")}</div>
        <div className={styles.container}>
          <SectionCartMain />
          <SectionCartAside />
        </div>
      </div>
    </Conatiner>
  )
}

export default Cart