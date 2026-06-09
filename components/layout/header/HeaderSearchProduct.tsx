"use client"

import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Spinner } from '@/components/ui/spinner'
import { debounce } from '@/lib/debounce'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import slugify from 'slugify'

const HeaderSearchProduct = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [isVisibleSearchBlock, setIsVisibleSearchBlock] = useState(false)
  const [value, setValue] = useState('')

  const db = useMemo(() => {
    return debounce(async (value: string) => {
      const slug = slugify(value, {
        lower: true,
        strict: true
      })

      const data = await fetch(`http://localhost:8080/api/products/slug/${slug}`)
      const res = await data.json()

      setProducts(res)
      setIsLoading(false)
    }, 500)
  }, [])

  const funcOnChange = (value: string) => {
    setIsLoading(true)
    setValue(value)
    db(value)
  }


  return (
    <div className='flex flex-col gap-5 flex-1 max-w-150 relative'>
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
        className='bg-white max-w-75' 
        placeholder='Введите название товара...' 
      />
        {
          isVisibleSearchBlock && (
          <div className='absolute left-0 bg-card text-card-foreground border border-border rounded-sm p-4 mt-1 w-full max-h-125 flex'>
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
                    <SearchProductCategories />
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

const SearchProductCategories = () => {
  return (
    <div className='flex flex-col text-sm '>
      <div>
        <Link className='inline-block border-b border-transparent hover:border-border' href='/'>Капуста белокачання</Link>
      </div>
      <div>
        <Link className='inline-block border-b border-transparent hover:border-border' href='/'>Каупста броколи</Link>
      </div>
    </div>
  )
}

const SearchProductProductsList = ({products}: {products: any[]}) => {
  return (
    <ScrollArea className='overflow-auto'>
      {
        products.map(p => (
          <Link key={p.id} href='/' className='flex bg-muted rounded-lg p-3 gap-2 mt-2'>
              <Image 
                src={p.img}
                width={70}
                height={70}
                alt='product'
                className='object-contain mix-blend-darken'
              />
              <div>
                <div className='line-clamp-1'>{p.name}</div>
                <div className='font-semibold'>12.43 ₽</div>
              </div>
          </Link>
        ))
      }
    </ScrollArea>
  )
}

export default HeaderSearchProduct