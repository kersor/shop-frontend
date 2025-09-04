import React, { useState } from 'react'
import styles from './styles.module.css'
import { PageTitle } from '../../components/ui/pageTitle/PageTitle'
import { Conatiner } from '../../components/container/Container'
import { CustomInput } from '../../components/inputs/customInput/CustomInput'
import { CustomButton } from '../../components/ui/customButton/CustomButton'

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    surname: "",
    email: "",
    phone: ""
  })

  return (
      <div className={styles.wrapper}>
        <CustomInput value={profile.name} onChange={(value: string) => setProfile(prev => ({...prev, name: value}))} placeholder='Введите имя'/>
        <CustomInput value={profile.surname} onChange={(value: string) => setProfile(prev => ({...prev, surname: value}))} placeholder='Введите фамилию'/>
        <CustomInput value={profile.email} type="email" onChange={(value: string) => setProfile(prev => ({...prev, email: value}))} placeholder='Введите почту'/>
        <CustomInput value={profile.phone} onChange={(value: string) => setProfile(prev => ({...prev, phone: value}))} placeholder='Введите номер'/>
        <CustomButton 
          title="Сохранить"
          onClick={() => {}}
        />
      </div>
  )
}

export default Profile