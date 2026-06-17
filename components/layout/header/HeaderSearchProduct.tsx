"use client"

import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Spinner } from '@/components/ui/spinner'
import { debounce } from '@/lib/debounce'
import { productsApi } from '@/scripts/api/products'
import { formatPrice } from '@/scripts/helpers/formatPrice'
import { Product, ProductCategory } from '@/scripts/types/product'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useMemo, useRef, useState } from 'react'


const HeaderSearchProduct = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState<Product[]>([])
  const [isVisibleSearchBlock, setIsVisibleSearchBlock] = useState(false)
  const [value, setValue] = useState('')
  const [categories, setCategories] = useState<ProductCategory[]>([])

  const fetchProducts = async (value: string) => {
    if (!value.trim()) {
        setIsLoading(false)
        return
    };

    const params = {
      search: value,
      limit: 10
    }

    const data = await productsApi.getAll(params);
    const category = data.reduce<ProductCategory[]>((acc, product) => {
      const cat = product.category;
      if (!cat) return acc;

      if (!acc.find(c => c.id === cat.id)) {
        acc.push(cat);
      }

      return acc;
    }, []);

    setProducts(data)
    setCategories(category)


    setIsLoading(false)
  };

  const db = useMemo(
    () => debounce(fetchProducts, 500),
    []
  );

  const funcOnChange = (value: string) => {
    setIsLoading(true)
    setValue(value)
    db(value)
  }


  return (
    <div className='flex flex-col gap-5 flex-1 relative '>
      <div className='w-auto h-auto'>
      <Input 
        value={value}
        onFocus={() => {
          setIsVisibleSearchBlock(true)
          if (!!value.length) {
            setIsLoading(true)
            db(value)
          }
        }}
        onBlur={() => {
          setIsVisibleSearchBlock(false)
          setProducts([])
        }}
        onChange={(e) => funcOnChange(e.target.value)}
        className='bg-background py-7' 
        placeholder='Введите название товара...' 
      />
        {
          isVisibleSearchBlock && (
          <div className='absolute left-0 bg-card text-card-foreground border border-border rounded-sm p-4 mt-2 w-full max-h-125 flex z-100'>
            {
              !value.length && (
                <div className='flex justify-center w-full'>
                  Введите название товара
                </div>
              )
            }
            {
              !!value.length && isLoading && (
                <div className='flex justify-center w-full'>
                  <Spinner className='size-5'  />
                </div>
              )
            }
            {
              !!value.length && !isLoading && !products.length && (
                <div className='flex justify-center w-full'>Не найдены товары</div>
              )
            }
            {
              !isLoading && !!products.length && (
                <div className='w-full flex-1'>
                  <div className='flex-1 grid grid-cols-2 text-[18px] font-semibold'>
                    <div>Категории</div>
                    <div>Товары</div>
                  </div>
                  <div className='w-full h-px bg-border my-2' />
                  <div className='flex-1 grid grid-cols-2 h-[calc(100%-36px)]'>
                    <SearchProductCategories categories={categories} />
                    <SearchProductProductsList products={products} />      
                  </div>
                </div>
              )
            }
          </div>
          )
        }
      </div>
    </div>
  )
}

const SearchProductCategories = ({categories}: {categories: ProductCategory[]}) => {
  return (
    <div className='flex flex-col text-sm '>
      <ScrollArea>
        {
          categories.map(c => {
            return (
              <div key={c.id}>
                <Link className='inline-block border-b border-transparent hover:border-border' href='/'>{c.name}</Link>
              </div>
            )
          })
        }
      </ScrollArea>
    </div>
  )
}

const SearchProductProductsList = ({products}: {products: Product[]}) => {
  
  return (
    <ScrollArea className='overflow-auto'>
      {
        products.map(p => {
          const src = `http://localhost:8080${p.productPhoto[0].photo_url}`

          return (
            <Link key={p.id} href='/' className='flex bg-muted rounded-lg p-3 gap-2 mt-2'>
                <Image 
                  src={src}
                  width={70}
                  height={70}
                  alt='product'
                  className='object-contain mix-blend-darken'
                />
                <div>
                  <div className='line-clamp-1'>{p.name}</div>
                  <div className='font-semibold'>{formatPrice(p.price)}</div>
                </div>
            </Link>
          )
        })
      }
    </ScrollArea>
  )
}

export default HeaderSearchProduct