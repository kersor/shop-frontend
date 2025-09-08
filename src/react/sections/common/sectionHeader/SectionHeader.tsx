import React, { useMemo, useState } from 'react'
import { Conatiner } from '../../../components/container/Container'
import styles from './styles.module.css'
import { CustomInput } from '../../../components/inputs/customInput/CustomInput'
import { Heart, ShoppingBag, User } from 'lucide-react'
import { ModalAuth } from '../../../components/modal/modalAuth/ModalAuth'
import { Link, useNavigate } from 'react-router-dom'
import { useUser } from '../../../../store/user'
import { getToken } from '../../../../scripts/utils/token'
import { useAuthModal } from '../../../../store/authModal'
import { ReqGetProductCountCartAndFavorite } from '../../../../scripts/api/cart'


interface Props {
  count?: ReqGetProductCountCartAndFavorite
}

export const SectionHeader = ({
  count = {countCart: 0, countFavorite: 0}
}: Props) => {
  const navigate = useNavigate()
  const {user} = useUser(state => state)
  const [value, setValue] = useState("")
  const {isOpen, setOpen} = useAuthModal(state => state)
  
  const Email = useMemo(() => {
    return user.email.split("")[0]
  }, [user])

  const funcOnChange = (value: string) => {
    setValue(prev => value)
  }

  const funcOnClickProfile = () => {
    if (getToken().isAuth) navigate('/personal/profile')
    else setOpen(true)
  }

  const funcOnClickLinkCart = () => {
    if (!getToken().isAuth) return setOpen(true)
    navigate('/cart')
  }

  const funcOnClickLinkFavorites = () => {
    if (!getToken().isAuth) return setOpen(true)
    navigate('/favorites')
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
            <div onClick={funcOnClickLinkFavorites} className={styles.header_button} >
              {getToken().isAuth && count.countFavorite > 0 && count.countFavorite && <div className={styles.header_button__active} />}
              <Heart color='#5e5e5e' strokeWidth="1.5px" size="18px"/>
            </div>
            <div onClick={funcOnClickLinkCart} className={styles.header_button} >
              {getToken().isAuth && count.countCart > 0 && count.countCart && <div className={styles.header_button__active} />}
              <ShoppingBag color='#5e5e5e' strokeWidth="1.5px" size="18px"/>
            </div>
          </div>
          
          <div className={`${getToken().isAuth ? styles.header_avatar : styles.header_button}`} onClick={funcOnClickProfile}>
            {
              getToken().isAuth ? `${Email}` : <User color='#5e5e5e' strokeWidth="1.5px" size="18px"/>
            }
            
          </div>
        </div>
      </div>
      <ModalAuth />
    </Conatiner>
  )
}