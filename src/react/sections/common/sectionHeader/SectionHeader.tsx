import React, { useState } from 'react'
import { Conatiner } from '../../../components/container/Container'
import styles from './styles.module.css'
import { CustomInput } from '../../../components/inputs/customInput/CustomInput'
import { Heart, ShoppingBag, User } from 'lucide-react'
import { ModalAuth } from '../../../components/modal/modalAuth/ModalAuth'
import { Link } from 'react-router-dom'

export const SectionHeader = () => {
  const [value, setValue] = useState("")
  const [isOpenAuth, setOpenAuth] = useState(false)

  const funcOnChange = (value: string) => {
    setValue(prev => value)
  }

  return (
    <Conatiner>
      <div className={styles.header}>
        <Link to="/" className={styles.logo}>logo</Link>
        <div className={styles.header_section}>
          <div className={styles.header_section}>
            <CustomInput
              placeholder="Поиск товара..."
              value={value}
              onChange={funcOnChange}
            />
            <div className={styles.header_button} >
              <Heart color='#5e5e5e' strokeWidth="1.5px" size="18px"/>
            </div>
            <div className={styles.header_button} >
              <ShoppingBag color='#5e5e5e' strokeWidth="1.5px" size="18px"/>
            </div>
          </div>
          <div className={styles.header_button} onClick={() => setOpenAuth(prev => true)}>
            <User color='#5e5e5e' strokeWidth="1.5px" size="18px"/>
          </div>
        </div>
      </div>
      <ModalAuth isOpen={isOpenAuth} setOpen={setOpenAuth} />
    </Conatiner>
  )
}