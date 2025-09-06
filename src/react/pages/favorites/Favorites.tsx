import React from 'react'
import styles from './styles.module.css'
import { Conatiner } from '../../components/container/Container'
import { CardCatalog } from '../../components/cards/cardCatalog/CardCatalog'
import { PageTitle } from '../../components/ui/pageTitle/PageTitle'

const Favorites = () => {
  return (
    <Conatiner>
        <div className={styles.wrapper}>
            <PageTitle title='Избранные'/>
            <div className={styles.container}>
                {/* <CardCatalog /> */}
            </div>
        </div>
    </Conatiner>
  )
}

export default Favorites