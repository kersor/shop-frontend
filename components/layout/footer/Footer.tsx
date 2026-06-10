import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="ml-auto mr-auto w-full max-w-7xl mt-50 pb-1">
        <div className="flex items-start justify-between p-10 rounded-lg">
            <div className="flex flex-col gap-2">
                <div className="font-bold"> 
                    Контакты
                </div>
                <Separator />
                <div>
                    <Link href="tel:88002504158" className="font-bold text-lg">
                        8 800 250 41 58
                    </Link>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">
                    Компания
                </div>
                <Separator />
                <div className="flex flex-col gap-2">
                    <Link href="/about">
                        О компании
                    </Link>
                    <Link href="/contacts">
                        Контакты
                    </Link>
                    <Link href="/feedback">
                        Обратная связь
                    </Link>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">
                    Покупателям
                </div>
                <Separator />
                <div className="flex flex-col gap-2">
                    <Link href="/about">
                        Доставка и оплата
                    </Link>
                    <Link href="/contacts">
                        Самовывоз
                    </Link>
                    <Link href="/feedback">
                        FAQ
                    </Link>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">
                    Информация
                </div>
                <Separator />
                <div className="flex flex-col gap-2">
                    <Link href="/about">
                        Акции
                    </Link>
                    <Link href="/contacts">
                        Новости
                    </Link>
                    <Link href="/feedback">
                        Обзоры
                    </Link>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">
                    Мы в соцсетях
                </div>
                <Separator />
                <div className="flex flex-col gap-2">
                    <Link href="/about">
                        VK
                    </Link>
                    <Link href="/contacts">
                        Telegram
                    </Link>
                    <Link href="/feedback">
                        Youtube
                    </Link>
                </div>
            </div>
        </div>
        <div className="bg-secondary text-secondary-foreground rounded-lg p-5 mt-2"> 
            <Button variant="link" className="p-0">
                <Link className="font-bold" href="/privacy">Пользовательское соглашение</Link>
            </Button>
            <p className="pt-2 text-sm ">© 2026 ПИСИ ШОП. Все права защищены. Администрация сайта не несёт ответственность за полноту и достоверность размещаемых пользователями текстов, изображений, мнений и оценок, а также любых других материалов в разделах Отзывы, Обзоры, Вопрос-ответ. Мнение автора может не совпадать с мнением магазина.</p>
        </div>
    </footer>
  )
}

export default Footer