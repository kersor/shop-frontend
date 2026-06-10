import BlockTitle from '@/components/shared/blockTitle/BlockTitle'
import Product from '@/components/shared/product/Product'
import ProductList from '@/components/shared/product/ProductList'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
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
        <Tabs defaultValue="tab1" className="w-full pt-2.5">
            <TabsList variant="line" className="flex w-full">
              <TabsTrigger value="tab1" className="cursor-pointer">Все категории</TabsTrigger>
              <TabsTrigger value="tab2" className="cursor-pointer">Процессоры</TabsTrigger>
              <TabsTrigger value="tab3" className="cursor-pointer">Видеокарты</TabsTrigger>
              <TabsTrigger value="tab4" className="cursor-pointer">Материнские платы</TabsTrigger>
              <TabsTrigger value="tab5" className="cursor-pointer">ОЗУ</TabsTrigger>
              <TabsTrigger value="tab6" className="cursor-pointer">SSD</TabsTrigger>
              <TabsTrigger value="tab7" className="cursor-pointer">Блоки питания</TabsTrigger>
              <TabsTrigger value="tab8" className="cursor-pointer">Корпуса</TabsTrigger>
              <TabsTrigger value="tab9" className="cursor-pointer">Охлаждение</TabsTrigger>
              <Button variant="link">
                <Link href='/'>Смотреть все</Link>
              </Button>
            </TabsList>

            <TabsContent value="tab1"><ProductList count={3} /></TabsContent>
            <TabsContent value="tab2"><ProductList count={4} /></TabsContent>
            <TabsContent value="tab3"><ProductList count={5} /></TabsContent>
            <TabsContent value="tab4"><ProductList count={6} /></TabsContent>
            <TabsContent value="tab5"><ProductList count={5} /></TabsContent>
            <TabsContent value="tab6"><ProductList count={4} /></TabsContent>
            <TabsContent value="tab7"><ProductList count={3} /></TabsContent>
            <TabsContent value="tab8"><ProductList count={2} /></TabsContent>
            <TabsContent value="tab9"><ProductList count={7} /></TabsContent>
        </Tabs>

      </div>
    </div>
  )
}

export default PageHome