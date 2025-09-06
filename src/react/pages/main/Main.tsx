import React, { useEffect, useState } from 'react'
import { Conatiner } from '../../components/container/Container'
import styles from './stryles.module.css'
import { SectionListCards } from '../../sections/main/sectionListCards/SectionListCards'
import { CustomDrawer } from '../../components/drawer/customDrawer/CustomDrawer'
import { useGetAllCategoriesQuery } from '../../../scripts/api/categories'
import { Categories } from '../../../scripts/types/categories'
import { useGetAllProductsQuery } from '../../../scripts/api/products'
import { Product } from '../../../scripts/types/product'
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom'

const Main = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const category: string = searchParams.get('category') ?? ""

  const {data: CategoriesData} = useGetAllCategoriesQuery()
  const {data: ProductsData} = useGetAllProductsQuery({category}, {
    skip: category === null || category === undefined 
  })

  const [categories, setCategories] = useState<Categories[]>([])
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    if (CategoriesData) setCategories(CategoriesData)
  }, [CategoriesData])

  useEffect(() => {
    if (ProductsData) setProducts(ProductsData)
  }, [ProductsData])

  if (!category) {
    return <Navigate to="/?category=all" replace />
  }

  const funcOnClickChooseCategory = (code: string) => {
    navigate(`/?category=${code}`)
  }

  return (
    <Conatiner>
      <div className={styles.wrapper}>
        <div className={styles.banner}>Банер</div>
        <div className={styles.categories_list}> 
          {
            categories.map((cat, index: number) => (
              <div  
                onClick={() => funcOnClickChooseCategory(cat.code)} 
                key={index} 
                className={`${styles.category_item} ${category === cat.code && styles.category_item__active}`}
              >
                {cat.name}
              </div>
            ))
          }
        </div>
        <SectionListCards products={products} />
      </div>
    </Conatiner> 
  )
}

export default Main