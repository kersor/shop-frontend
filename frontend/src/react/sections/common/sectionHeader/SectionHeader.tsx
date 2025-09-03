import React, { useState } from 'react'
import { Conatiner } from '../../../components/container/Container'
import styles from './styles.module.css'
import { CustomInput } from '../../../components/inputs/customInput/CustomInput'
import { Heart, ShoppingBag, User } from 'lucide-react'
import { DrawerCart } from '../../../components/drawer/drawerCart/DrawerCart'
import { DrawerFavorites } from '../../../components/drawer/drawerFavorites/DrawerFavorites'
import { ModalAuth } from '../../../components/modal/modalAuth/ModalAuth'

export const SectionHeader = () => {
  const [value, setValue] = useState("")
  const [isOpenDrawerCart, setOpenDrawerCart] = useState(false)
  const [isOpenAuth, setOpenAuth] = useState(false)
  const [isOpenDrawerFavorites, setOpenDrawerFavorites] = useState(false)

  const funcOnChange = (value: string) => {
    setValue(prev => value)
  }

  return (
    <Conatiner>
      <div className={styles.header}>
        <div className={styles.logo}>logo</div>
        <div className={styles.header_section}>
          <div className={styles.header_section}>
            <CustomInput
              placeholder="Поиск товара..."
              value={value}
              onChange={funcOnChange}
            />
            <div className={styles.header_button} onClick={() => setOpenDrawerFavorites(prev => true)}>
              <Heart color='#5e5e5e' strokeWidth="1.5px" size="18px"/>
            </div>
            <div className={styles.header_button} onClick={() => setOpenDrawerCart(prev => true)}>
              <ShoppingBag color='#5e5e5e' strokeWidth="1.5px" size="18px"/>
            </div>
          </div>
          <div className={styles.header_button} onClick={() => setOpenAuth(prev => true)}>
            <User color='#5e5e5e' strokeWidth="1.5px" size="18px"/>
          </div>
        </div>
      </div>
      <ModalAuth isOpen={isOpenAuth} setOpen={setOpenAuth} />
      <DrawerCart isOpen={isOpenDrawerCart} setOpen={setOpenDrawerCart} />
      <DrawerFavorites isOpen={isOpenDrawerFavorites} setOpen={setOpenDrawerFavorites} />
    </Conatiner>
  )
}