import React from 'react'
import styles from './styles.module.css'
import { CardCatalog } from '../../../components/cards/cardCatalog/CardCatalog'
import { Product } from '../../../../scripts/types/product'

interface Props {
  products: Product[]
}

export const SectionListCards = ({
  products
}: Props) => {
  return (
    <div className={styles.wrapper}>
      {
        products.map((product: Product) => (
          <CardCatalog key={product.id} product={product}/>
        ))
      }
    </div>
  )
}
