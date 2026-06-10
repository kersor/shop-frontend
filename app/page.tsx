import BlockTitle from '@/components/shared/blockTitle/BlockTitle'
import Product from '@/components/shared/product/Product'
import ProductList from '@/components/shared/product/ProductList'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Copy, Heart, MessageCircle, MessageSquare, ShoppingBag, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

const PageHome = () => {
  return (
    <div className="ml-auto mr-auto w-full max-w-7xl px-5">
        <div className="w-full h-64 mt-5 rounded-lg overflow-hidden">
          <div className="relative w-full h-full">
            <div className="absolute z-10 left-0 top-1/2 h-full w-full -translate-y-1/10 translate-x-1/20 ">
              <div className='uppercase font-black text-gray-700 text-2xl'>
                Скидка 10% на первый заказ
              </div>
              <Button className="text-secondary-foreground cursor-pointer bg-secondary uppercase rounded-full px-7 mt-2" variant="ghost" size="lg">
                first10 <Copy />
              </Button>
            </div>
            <Image 
              fill
              src="/images/discount.png"
              alt="Discount"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      
      <div className="pt-10">
        <BlockTitle title="Хиты продаж" />
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
      <div className="pt-10">
        <BlockTitle title="Сейчас актуально" />
        <Carousel
          className="w-full pt-2.5"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => {
              return (
                <CarouselItem key={index} className="basis-1/3">
                  <div className="p-1" >
                    <Card className='w-full h-50 rounded-lg bg-secondary'>
                      <CardContent className="">
                        
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="pt-10">
        <BlockTitle title="Новинки" />
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