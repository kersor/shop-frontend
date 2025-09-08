import React, { Dispatch, PropsWithChildren, useEffect } from 'react'
import styles from './styles.module.css'
import { X } from 'lucide-react'

interface Props {
    title: string
    isOpen: boolean
    onOpen: (open: boolean) => void,
    width?: string
    height?: string
}

export const CustomModal = ({
    title,
    children,
    isOpen,
    onOpen,
    width = "500px",
    height = "300px"
}: PropsWithChildren<Props>) => {
    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden"
        else document.body.style.overflow = "auto"
        
        return () => {
            document.body.style.overflow = ""
        }
    }, [isOpen])

    if (!isOpen) return null

    return (
        <div className={styles.wrapper} onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => onOpen(false)}>
            <div style={{width, height}} className={styles.modal} onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()}>
                <div className={styles.modal_header}>
                    <div className={styles.modal_header__title}>{title}</div>
                    <div onClick={() => onOpen(false)} className={styles.modal_header__close}><X /></div>
                </div>
                {children}
            </div>
        </div>
    )
}
