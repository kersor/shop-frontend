import React from 'react'
import styles from './styles.module.css'

type TypeInput = "text" | "password" | "email" | "tel"

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
        const value = e.target.value
        onChange(value) 
    }

    return (
        <div className={styles.wrapper}>
            <input
                placeholder={placeholder}
                className={styles.input}
                type={type}
                value={value}
                onChange={funcOnChange} 
                pattern="^\+?[0-9\s\-\(\)]{7,15}$"
            />
        </div>
    )
}
