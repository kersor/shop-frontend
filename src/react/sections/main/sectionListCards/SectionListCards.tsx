import React from 'react'
import styles from './styles.module.css'
import { CardCatalog } from '../../../components/cards/cardCatalog/CardCatalog'

export const SectionListCards = () => {
  return (
    <div className={styles.wrapper}>
        <CardCatalog />
        <CardCatalog />
        <CardCatalog />
        <CardCatalog />
        <CardCatalog />
        <CardCatalog />
        <CardCatalog />
        <CardCatalog />
        <CardCatalog />
        <CardCatalog />
    </div>
  )
}
