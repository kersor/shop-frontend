import React, { Dispatch, useState } from 'react'
import { CustomModal } from '../customModal/CustomModal'
import { CustomInput } from '../../inputs/customInput/CustomInput'
import styles from './styles.module.css'

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

    const [auth, setAuth] = useState({
        name: "",
        password: ""
    })

    return (
        <CustomModal title={type === "login" ? 'Вход' : "Регистрация"} isOpen={isOpen} onOpen={setOpen}>
            <div className={styles.wrapper}>
                <div className={styles.inputs}>
                    <CustomInput type="text" value={auth.name} placeholder='Введите имя' onChange={(value: string) => setAuth(prev => ({...prev, name: value}))} />
                    <CustomInput type="password" value={auth.password} placeholder='Введите пароль' onChange={(value: string) => setAuth(prev => ({...prev, password: value}))} />
                </div>
                <div className={styles.bottom}>
                    <div onClick={() => setType(prev => "register")} className={`${styles.btn} ${styles.outline}`}>{type === "login" ? "Регистрация" : "Войти"}</div>
                    <div onClick={() => setType(prev => "login")} className={styles.btn}>{type === "login" ? "Войти" : "Зарегестрироваться"}</div>
                </div>
            </div>
        </CustomModal>
    )
}
