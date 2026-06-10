import React from 'react'
import Link from 'next/link'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { Heart, MapPin, ShoppingBag, TextAlignStart, User } from 'lucide-react'
import HeaderSearchProduct from './HeaderSearchProduct'
import { Button } from '@/components/ui/button'

const Header = () => {

    return (
        <header className="ml-auto mr-auto w-full max-w-7xl px-5 pb-5">
            <div className='py-2.5'>
                <Button className="cursor-pointer" variant="outline">
                    <MapPin /> Чебоксары
                </Button>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-10 flex-1'>
                    <Link className='uppercase text-2xl font-black tracking-tight text-primary' href='/'>pc Shop</Link>
                </div>
                <div className='flex items-center gap-7 text-primary'>
                    <Button variant="link" className="text-sm font-normal uppercase">
                        <Link href='/'>о компании</Link>
                    </Button>
                    <Button variant="link" className="text-sm font-normal uppercase">
                        <Link href='/'>доставка и оплата</Link>
                    </Button>
                    <Button variant="link" className="text-sm font-normal uppercase">
                        <Link href='/'>самовывоз</Link>
                    </Button>
                    <Button variant="link" className="text-sm font-normal uppercase">
                        <Link href='/'>faq</Link>
                    </Button>
                    <Button variant="link" className="text-sm font-normal uppercase">
                        <Link href='/'>контакты</Link>
                    </Button>
                </div>

                {/* <div className='flex items-center gap-5'>
                    <Link href='/cart' className='border flex justify-center items-center rounded-full p-1 w-10 h-10 bg-white'>
                        <ShoppingBag strokeWidth={1} size={20}/>
                    </Link>
                    <Link href='/profile' className='border flex justify-center items-center rounded-full p-1 w-10 h-10 bg-white'>
                        <User strokeWidth={1} size={20}/>
                    </Link>
                </div> */}
                {/* <Theme /> */}

            </div>
            <div className='flex items-center gap-5 mt-2.5'>
                <Button size='lg' className='flex justify-center items-center gap-10 text-xl px-10 py-7 cursor-pointer'>
                    Каталог
                    <TextAlignStart strokeWidth={3} size={25} />
                </Button>
                <div className='flex-1'>
                    <HeaderSearchProduct />
                </div>
                <div className='flex items-center gap-5'>
                    <Link href='/cart' className='border flex justify-center items-center rounded-full p-1 w-10 h-10 bg-white'>
                        <ShoppingBag strokeWidth={1} size={20}/>
                    </Link>
                    <Link href='/favourites' className='border flex justify-center items-center rounded-full p-1 w-10 h-10 bg-white'>
                        <Heart strokeWidth={1} size={20}/>
                    </Link>
                    <Link href='/profile' className='border flex justify-center items-center rounded-full p-1 w-10 h-10 bg-white'>
                        <User strokeWidth={1} size={20}/>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header