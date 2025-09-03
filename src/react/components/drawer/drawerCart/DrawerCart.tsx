import React, { Dispatch, useState } from 'react'
import { CustomDrawer } from '../customDrawer/CustomDrawer'
import { CardCart } from '../../cards/cardCart/CardCart'
import styles from './styles.module.css'

interface Props {
    isOpen: boolean
    setOpen: Dispatch<React.SetStateAction<boolean>>
}

export const DrawerCart = ({
    isOpen,
    setOpen
}: Props) => {
    return (
        <CustomDrawer title="Корзина" isOpen={isOpen} onOpen={setOpen}>
            <div className={styles.wrapper}>
                <CardCart />
                <CardCart />
                <CardCart />
                <CardCart />
                <CardCart />
                <CardCart />
                <CardCart />
                <CardCart />
                <CardCart />
                <CardCart />
                <CardCart />
                <CardCart />
            </div>
            <div className={styles.btn_buy}>Купить</div>
        </CustomDrawer>
    )
}
