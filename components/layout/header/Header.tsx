import React from 'react'
import Link from 'next/link'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { ShoppingBag, User } from 'lucide-react'
import HeaderSearchProduct from './HeaderSearchProduct'

const Header = () => {

    return (
        <header className="ml-auto mr-auto w-full max-w-7xl px-5">
            <div className="bg-muted py-5 px-8 rounded-xl">
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-10 flex-1'>
                        <Link className='uppercase text-2xl font-black tracking-tight text-foreground' href='/'>Shop</Link>
                        <HeaderSearchProduct />
                    </div>

                    <div className='flex items-center gap-5'>
                        <Link href='/cart' className='flex justify-center items-center border rounded-full p-1 w-10 h-10 bg-white'>
                            <ShoppingBag strokeWidth={1} size={20}/>
                        </Link>
                        <Link href='/profile' className='bg-white rounded-full w-10 h-10'>
                            <Avatar className='flex justify-center items-center' size='lg'>
                                <User strokeWidth={1} size={20}/>
                            </Avatar>
                        </Link>
                    </div>
                    {/* <Theme /> */}

                </div>
            </div>
        </header>
    )
}

export default Header