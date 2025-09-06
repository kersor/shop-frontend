import React, { useEffect, useState } from 'react'
import { Conatiner } from '../../components/container/Container'
import styles from './stryles.module.css'
import { SectionListCards } from '../../sections/main/sectionListCards/SectionListCards'
import { CustomDrawer } from '../../components/drawer/customDrawer/CustomDrawer'
import { useGetAllQuery } from '../../../scripts/api/categories'
import { Categories } from '../../../scripts/types/categories'

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
  const {data} = useGetAllQuery()
  const [categoryActive, setCategoryActive] = useState(0)
  const [categories, setCategories] = useState<Categories[]>([])

  useEffect(() => {
    if (data) setCategories(data)
  }, [data])

  return (
    <Conatiner>
      <div className={styles.wrapper}>
        <div className={styles.banner}>Банер</div>
        <div className={styles.categories_list}> 
          {
            categories.map((cat, index: number) => (
              <div key={index} className={`${styles.category_item} ${categoryActive === index && styles.category_item__active}`}>{cat.name}</div>
            ))
          }
        </div>
        <SectionListCards />
      </div>
    </Conatiner> 
  )
}

export default Main