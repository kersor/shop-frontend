import React from 'react'
import styles from './styles.module.css'

type TypeInput = "text" | "password" | "email"

interface Props {
    value: string
    onChange: (value: string) => void
    placeholder: string
    type?: TypeInput
}

export const CustomInput = ({
    value,
    onChange,
    placeholder,
    type = "text"
}: Props) => {

    const funcOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value) 
    }

    return (
        <div className={styles.wrapper}>
            <input
                placeholder={placeholder}
                className={styles.input}
                type={type}
                value={value}
                onChange={funcOnChange} 
            />
        </div>
    )
}
