import React from 'react'
import Link from 'next/link'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { ShoppingBag, User } from 'lucide-react'
import HeaderSearchProduct from './HeaderSearchProduct'
import { Button } from '@/components/ui/button'

const Header = () => {

    return (
        <header className="ml-auto mr-auto w-full max-w-7xl p-5">
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-10 flex-1'>
                    <Link className='uppercase text-2xl font-black tracking-tight text-primary' href='/'>pc Shop</Link>
                    <HeaderSearchProduct />
                </div>

                <div className='flex items-center gap-5'>
                    <Link href='/cart' className='border flex justify-center items-center rounded-full p-1 w-10 h-10 bg-white'>
                        <ShoppingBag strokeWidth={1} size={20}/>
                    </Link>
                    <Link href='/profile' className='border flex justify-center items-center rounded-full p-1 w-10 h-10 bg-white'>
                        <User strokeWidth={1} size={20}/>
                    </Link>
                </div>
                {/* <Theme /> */}

            </div>
        </header>
    )
}

export default Header