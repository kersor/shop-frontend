import { Button } from '@/components/ui/button'
import { Heart, MessageSquare, ShoppingBag, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Product = () => {
    return (
        <div>
            <Link href="/" className="flex justify-center items-center py-5 bg-secondary rounded-lg">
                <Image
                    src="https://www.regard.ru/api/site/cacheimg/goods/6220912/160"
                    width={160}
                    height={160}
                    alt="product"
                />
            </Link>
            <div className="mt-5">
                <div className="flex items-center justify-between">
                    <div className="font-bold text-lg text-primary">14.400 ₽</div>
                    <Button className="cursor-pointer uppercase" variant="ghost" size="icon">
                        <Heart strokeWidth={1} size={20} color="primary" fill="primary" />
                    </Button>
                </div>
                <Link href="/" className="text-sm line-clamp-3 font-semibold my-2 hover:text-muted-foreground transition-colors">
                    NVIDIA GeForce RTX 5070 Ti MSI OC 16GB (RTX 5070 Ti 16G GAMING TRIO OC) NVIDIA GeForce RTX 5070 Ti MSI OC 16GB (RTX 5070 Ti 16G GAMING TRIO OC)
                </Link>
                <div className="text-sm line-clamp-6 text-muted-foreground my-2">
                    внутренний SSD, M.2, 1000 ГБ, PCI-E 4.0 x4, NVMe,
                </div>
            </div>
            <div className="flex items-center justify-between mt-5">
                <div className="flex items-center gap-1">
                    <Star fill="primary" strokeWidth={1} size={20} />
                    <Star fill="primary" strokeWidth={1} size={20} />
                    <Star fill="primary" strokeWidth={1} size={20} />
                    <Star fill="primary" strokeWidth={1} size={20} />
                    <Star fill="primary" strokeWidth={1} size={20} />
                </div>
                <div className="flex items-center gap-1 text-sm font-bold text-muted-foreground">
                    <MessageSquare strokeWidth={2} size={20} />
                    <span>123</span>
                </div>
            </div>
            <div className="mt-5">
                <Button className="cursor-pointer uppercase w-full" variant="outline" size="lg">
                    В корзину <ShoppingBag strokeWidth={1} size={20} />
                </Button>
            </div>
        </div>
    )
}

export default Product