import React, { Dispatch, useState } from 'react'
import { CustomModal } from '../customModal/CustomModal'
import { CustomInput } from '../../inputs/customInput/CustomInput'
import styles from './styles.module.css'
import { ResponseAuth, useLoginMutation, useRegisterMutation } from '../../../../scripts/api/auth'
import { useUser } from '../../../../store/user'
import { validateEmail } from '../../../../scripts/utils/validateEmail'
import { Bounce, Flip, toast, ToastContainer } from 'react-toastify'
import { CustomToast } from '../../../../scripts/utils/toast'
import { useAuthModal } from '../../../../store/authModal'

type TypeAuth = "login" | "register"

const AuthState = {
    email: "",
    password: ""
}

export const ModalAuth = () => {
    const {isOpen, setOpen} = useAuthModal(state => state)
    const {setUser} = useUser(state => state)
    const [type, setType] = useState<TypeAuth>("login")
    const [register] = useRegisterMutation()
    const [login] = useLoginMutation()
    
    const [auth, setAuth] = useState(AuthState)

    if (!isOpen) return null

    const funcOutline = async () => {
        setType(prev => prev === "login" ? "register" : "login")
        setAuth(AuthState)
    }

    const funcPrimary = async () => {
        try {
            if (!auth.email.length || !auth.password.length) {
                return CustomToast({title: "Введите все данные", type: "error"})
            }
            if (!validateEmail(auth.email)) {
                return CustomToast({title: "Введите корректную почту", type: "error"})
            }

            if (type === "register") {
                const responce = await register(auth)

                if (responce.data !== undefined) funcSetUser(responce.data)
            }

            if (type === "login") {
                const responce = await login(auth)

                if (responce.error && "status" in responce.error && responce.error.status === 400) {
                    return CustomToast({title: "Пароль или почта не верны", type: "error"})
                }

                if (responce.data !== undefined) funcSetUser(responce.data)
            }
            
        } catch (error) {
            console.error('Error: ', error)
        }
    }
    
    const funcSetUser = (data: ResponseAuth) => {
        setUser(data.user)
        setOpen(false)
        setAuth(AuthState)
    }
    

    return (
        <CustomModal title={type === "login" ? 'Вход' : "Регистрация"} isOpen={isOpen} onOpen={setOpen}>
            <div className={styles.wrapper}>
                <div className={styles.inputs}>
                    <CustomInput type="email" value={auth.email} placeholder='Введите почту' onChange={(value: string) => setAuth(prev => ({...prev, email: value}))} />
                    <CustomInput type="password" value={auth.password} placeholder='Введите пароль' onChange={(value: string) => setAuth(prev => ({...prev, password: value}))} />
                </div>
                <div className={styles.bottom}>
                    <div onClick={funcOutline} className={`${styles.btn} ${styles.outline}`}>{type === "login" ? "Регистрация" : "Войти"}</div>
                    <div onClick={funcPrimary} className={styles.btn}>{type === "login" ? "Войти" : "Зарегестрироваться"}</div>
                </div>
            </div>
        </CustomModal>
    )
}
