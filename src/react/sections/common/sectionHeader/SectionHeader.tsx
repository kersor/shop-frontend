import React, { useMemo, useState } from 'react'
import { Conatiner } from '../../../components/container/Container'
import styles from './styles.module.css'
import { CustomInput } from '../../../components/inputs/customInput/CustomInput'
import { Heart, ShoppingBag, User } from 'lucide-react'
import { ModalAuth } from '../../../components/modal/modalAuth/ModalAuth'
import { Link, useNavigate } from 'react-router-dom'
import { useUser } from '../../../../store/user'
import { getToken } from '../../../../scripts/utils/token'

export const SectionHeader = () => {
  const navigate = useNavigate()
  const {user} = useUser(state => state)
  const [value, setValue] = useState("")
  const [isOpenAuth, setOpenAuth] = useState(false)

  const isAuth = useMemo(() => {
    return getToken().isAuth
  }, [getToken, user])

  const Email = useMemo(() => {
    return user.email.split("")[0]
  }, [user])

  const funcOnChange = (value: string) => {
    setValue(prev => value)
  }

  const funcOnClickProfile = () => {
    if (isAuth) navigate('/personal/profile')
    else setOpenAuth(prev => true)
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
            <Link to="/favorites" className={styles.header_button} >
              <Heart color='#5e5e5e' strokeWidth="1.5px" size="18px"/>
            </Link>
            <Link to="/cart" className={styles.header_button} >
              <ShoppingBag color='#5e5e5e' strokeWidth="1.5px" size="18px"/>
            </Link>
          </div>
          
          <div className={`${isAuth ? styles.header_avatar : styles.header_button}`} onClick={funcOnClickProfile}>
            {
              isAuth ? `${Email}` : <User color='#5e5e5e' strokeWidth="1.5px" size="18px"/>
            }
            
          </div>
        </div>
      </div>
      <ModalAuth isOpen={isOpenAuth} setOpen={setOpenAuth} />
    </Conatiner>
  )
}