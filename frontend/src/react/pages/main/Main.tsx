import React, { useState } from 'react'
import { Conatiner } from '../../components/container/Container'
import styles from './stryles.module.css'
import { SectionListCards } from '../../sections/main/sectionListCards/SectionListCards'
import { CustomDrawer } from '../../components/drawer/customDrawer/CustomDrawer'

const categor = [
  {
    name: "Все",
  },
  {
    name: "Шорты"
  },
  {
    name: "Худи"
  }
]

const Main = () => {
  const [categoryActive, setCategoryActive] = useState(0)
  const [categories, setCategories] = useState(categor)

  return (
    <Conatiner>
      <div className={styles.wrapper}>
        <div className={styles.banner}>Банер</div>
        <div className={styles.categories_list}> 
          {
            categories.map((cat, index: number) => (
              <div className={`${styles.category_item} ${categoryActive === index && styles.category_item__active}`}>{cat.name}</div>
            ))
          }
        </div>
        <SectionListCards />
      </div>
    </Conatiner> 
  )
}

export default Main