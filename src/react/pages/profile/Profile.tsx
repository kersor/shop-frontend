import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { PageTitle } from '../../components/ui/pageTitle/PageTitle'
import { Conatiner } from '../../components/container/Container'
import { CustomInput } from '../../components/inputs/customInput/CustomInput'
import { CustomButton } from '../../components/ui/customButton/CustomButton'
import { useUser } from '../../../store/user'
import { useUpdateUserMutation } from '../../../scripts/api/auth'
import { User } from '../../../scripts/types/user'
import { CustomToast } from '../../../scripts/utils/toast'
import { formatPhone } from '../../../scripts/utils/formatPhone'

const Profile = () => {
  const [changed, setChanged] = useState(false)
  const [updateUser] = useUpdateUserMutation()
  const {user} = useUser(state => state)

  const [profile, setProfile] = useState({
    name: user.name ?? "",
    surname: user.surname ?? "",
    email: user.email ?? "",
    phone: user.phone ?? ""
  })

  useEffect(() => {
    setProfile(prev => ({
      name: user.name ?? "",
      surname: user.surname ?? "",
      email: user.email ?? "",
      phone: user.phone ?? ""
    }))
  }, [user, setProfile])

  useEffect(() => {
    const userPhone = !!user.phone?.length ? user.phone.replace(/\D/g, "") : ""
    const profilePhone = profile.phone.replace(/\D/g, "")

    if (
      user.email !== profile.email ||
      user.surname !== profile.surname ||
      user.name !== profile.name ||
      userPhone !== profilePhone
    ) {
      setChanged(prev => true)
    }
    else {
      setChanged(prev => false)
    }
  }, [profile])


  const funcUpdateProfile = async () => {
    let phoneNumber: string = ""
    const profilePhoneNumber = profile.phone.replace(/\D/g, "").length

    if (!changed) return
    if (profilePhoneNumber > 0 && profilePhoneNumber < 11) {
      return CustomToast({title: "Введите корректный номер", type: "error"})
    }
    if (profile.phone.length === 18) phoneNumber = profile.phone.replace(/\D/g, "")
  
    const payload: User = {
      id: user.id,
      ...profile,
      phone: phoneNumber,
    }
    const {data} = await updateUser(payload)
    
    if (data) {
      return CustomToast({title: "Данные обновились", type: "success"})
    }
  }

  return (
      <div className={styles.wrapper}>
        <CustomInput
          value={profile.name}
          onChange={(value: string) => {
            setProfile(prev => ({...prev, name: value}))
          }} 
          placeholder='Введите имя'
        />
        <CustomInput
          value={profile.surname}
          onChange={(value: string) => {
            setProfile(prev => ({...prev, surname: value}))
          }} 
          placeholder='Введите фамилию'
        />
        <CustomInput
          value={profile.email}
          type="email"
          onChange={(value: string) => {
            setProfile(prev => ({...prev, email: value}))
          }} 
          placeholder='Введите почту'
        />
        <CustomInput
          value={formatPhone(profile.phone)}
          onChange={(value: string) => {
            const phone = formatPhone(value)
            setProfile(prev => ({...prev, phone: phone}))
          }} 
          placeholder='Введите номер'
        />
        <CustomButton 
          disabled={!changed}
          title="Сохранить"
          onClick={funcUpdateProfile}
        />
      </div>
  )
}

export default Profile