import React, { useEffect, useState } from 'react'
import { Conatiner } from '../../components/container/Container'
import styles from './styles.module.css'
import { SectionListCards } from '../../sections/main/sectionListCards/SectionListCards'
import { CustomDrawer } from '../../components/drawer/customDrawer/CustomDrawer'
import { useGetAllCategoriesQuery } from '../../../scripts/api/categories'
import { Categories } from '../../../scripts/types/categories'
import { useGetAllProductsQuery } from '../../../scripts/api/products'
import { Product } from '../../../scripts/types/product'
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom'
import { SectionPagination } from '../../sections/common/sectionPagination/SectionPagination'
import { SectionTast } from '../../sections/common/sectionTast/SectionTast'

export interface IPages {
  page: number,
  remainingPages: number,
  totalPages: number
}

const sx = {
  display: "flex",
  flexDirection: "column",
  flex: 1,
  minHeight: 0,
  width: "100%"
}

const Main = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const category: string = searchParams.get('category') ?? ""
  const page: number = +(searchParams.get('page') ?? 1)

  const params = { category, page };
  
  const [categories, setCategories] = useState<Categories[]>([])
  const [products, setProducts] = useState<Product[]>([])

  const {data: CategoriesData} = useGetAllCategoriesQuery()
  const {data: ProductsData} = useGetAllProductsQuery(params, {
    skip: params.category === null || params.category === undefined,
  })

  const [pages, setPages] = useState<IPages>({
    page,
    remainingPages: 0,
    totalPages: 0,
  })

  useEffect(() => {
    if (ProductsData) {
      setProducts(ProductsData.data)
      setPages(prev => ({
        ...prev,
        totalPages: +ProductsData.totalPages,
        remainingPages: +ProductsData.remainingPages,
      }))
    }
  }, [ProductsData])

  useEffect(() => {
    if (CategoriesData) setCategories(CategoriesData)
  }, [CategoriesData])

  useEffect(() => {
    setPages(prev => ({ ...prev, page }))
  }, [page])



  if (!category) {
    return <Navigate to="/?category=all&page=1" replace />
  }

  const funcOnClickChooseCategory = (code: string) => {
    window.scrollTo({
      top: 100,
      behavior: "smooth"
    })
    const params = new URLSearchParams(searchParams)
    params.set('category', code)
    params.set('page', '1') 
    setSearchParams(params)
  }

  const funcOnClickPage = (newPage: number) => {
    window.scrollTo({
      top: 100,
      behavior: "smooth"
    })
    const params = new URLSearchParams(searchParams)
    params.set('page', String(newPage))
    setSearchParams(params)

    setPages(prev => ({
      ...prev,
      page: newPage,
      remainingPages: Math.max(0, prev.totalPages - newPage),
    }))
  }

  return (
    <Conatiner styles={sx} >
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
        
        {
          !!products.length ? (
            <React.Fragment>
              <SectionListCards products={products} />
              {
                pages.totalPages > 1 && (
                  <SectionPagination
                    pages={pages}
                    onChangePage={(p) => funcOnClickPage(p)}
                  />
                )
              }
            </React.Fragment>
          ) : (
            <div className={styles.null_wrapper}>
              <SectionTast>
                Товаров данной категории отсутсвуют
              </SectionTast>
            </div>
          )
        }

      </div>
    </Conatiner> 
  )
}

export default Main