import React, { Dispatch } from 'react'
import { CustomDrawer } from '../customDrawer/CustomDrawer'
import styles from './styles.module.css'
import { CardFavorites } from '../../cards/cardFavorites/CardFavorites'

interface Props {
    isOpen: boolean
    setOpen: Dispatch<React.SetStateAction<boolean>>
}

export const DrawerFavorites = ({
    isOpen,
    setOpen
}: Props) => {
    return (
        <CustomDrawer title="Избранное" isOpen={isOpen} onOpen={setOpen}>
            <div className={styles.wrapper}>
                <CardFavorites />
                <CardFavorites />
                <CardFavorites />
                <CardFavorites />
                <CardFavorites />
                <CardFavorites />
                <CardFavorites />
                <CardFavorites />
                <CardFavorites />
                <CardFavorites />
            </div>
        </CustomDrawer>
    )
}
