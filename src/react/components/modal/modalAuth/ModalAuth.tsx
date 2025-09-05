import React, { Dispatch, useState } from 'react'
import { CustomModal } from '../customModal/CustomModal'
import { CustomInput } from '../../inputs/customInput/CustomInput'
import styles from './styles.module.css'
import { useRegisterMutation } from '../../../../scripts/api/auth'

type TypeAuth = "login" | "register"

interface Props {
    isOpen: boolean
    setOpen: Dispatch<React.SetStateAction<boolean>>
}

export const ModalAuth = ({
    isOpen,
    setOpen
}: Props) => {
    const [type, setType] = useState<TypeAuth>("login")
    const [register] = useRegisterMutation()

    const [auth, setAuth] = useState({
        email: "",
        password: ""
    })

    const funcOutline = async () => {
        setType(prev => prev === "login" ? "register" : "login")
    }

    const funcPrimary = async () => {
        if (type === "register") {
            const res = await register(auth)
            console.log(res)
        }
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
