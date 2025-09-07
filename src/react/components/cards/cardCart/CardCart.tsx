import React, { memo, useState } from 'react'
import styles from './styles.module.css'
import { formatPrice } from '../../../../scripts/utils/formatPrice'
import { SectionCount } from '../../../sections/common/sectionCount/SectionCount'
import { Heart, ShoppingBag, Trash } from 'lucide-react'
import { ReqGetAllProductInCart, TypeToggleCountProductDto } from '../../../../scripts/types/cart'

interface Props {
    cart: ReqGetAllProductInCart
    funcToggleProductInCart: (productId: string, typeCount: TypeToggleCountProductDto) => void
    funcDeleteProductInCart: (productId: string) => void
}

export const CardCart = memo(({
    cart,
    funcToggleProductInCart,
    funcDeleteProductInCart
}: Props) => {
    const [count, setCount] = useState(cart.count)

    const funcOnToggleCount = (cnt: number) => {
        if (cnt === 0) return
        if (cnt > count) {
            setCount(prev => prev + 1)
            funcToggleProductInCart(cart.productId, "increment")
        } 
        if (cnt < count) {
            setCount(prev => prev - 1)
            funcToggleProductInCart(cart.productId, "decrement")
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.photo}>
                    <img src={cart.product.photo} alt="" />
                </div>
                <div className={styles.info}>
                    <div className={styles.info_title}>{cart.product.name}</div>
                    <div className={styles.info_price}>{formatPrice(`${+cart.product.price * count}`)}</div>
                    <div className={styles.info_count}>
                        <SectionCount count={count} setCount={funcOnToggleCount} />
                    </div>
                </div>
            </div>
            <div className={styles.buttons}>
                <div className={styles.button}><Heart strokeWidth="1.5px" size="18px"/></div>
                <div onClick={() => funcDeleteProductInCart(cart.productId)} className={styles.button}><Trash strokeWidth="1.5px" size="18px"/></div>
            </div>
        </div>
    )
})