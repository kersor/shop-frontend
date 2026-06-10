import BlockTitle from '@/components/shared/blockTitle/BlockTitle'
import Product from '@/components/shared/product/Product'
import { Button } from '@/components/ui/button'
import { Copy, Heart, MessageCircle, MessageSquare, ShoppingBag, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PageHome = () => {
  return (
    <div className="ml-auto mr-auto w-full max-w-7xl px-5">
      <div className="flex justify-center items-center bg-secondary py-5 px-8 rounded-xl mt-10 gap-10">
        <div className='font-bold text-ring text-2xl max-w-1/2'>
          Получите 10% скидку на первый заказ 
        </div>
        <Button className="cursor-pointer uppercase rounded-full px-7" variant="outline" size="lg">
          first10 <Copy />
        </Button>
      </div>
      <div className="pt-10">
        <BlockTitle title="Популярные товары" />
        <div className="grid grid-cols-5 gap-5 mt-5">
          {
            [...Array(10)].map((_, i) => (
              <Product key={i} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default PageHome