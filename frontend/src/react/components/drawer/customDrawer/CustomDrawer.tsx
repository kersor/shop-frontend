import { Dispatch, PropsWithChildren, useEffect } from 'react'
import styles from './styles.module.css'
import { X } from 'lucide-react'

interface Props {
    title: string
    isOpen: boolean
    onOpen: Dispatch<React.SetStateAction<boolean>>
}

export const CustomDrawer = ({
    title,
    children,
    isOpen,
    onOpen
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
        <div className={styles.wrapper} onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => onOpen(prev => false)}>
            <div className={styles.drawer} onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()}>
                <div className={styles.drawer_header}>
                    <div className={styles.drawer_header__title}>{title}</div>
                    <div onClick={() => onOpen(prev => false)} className={styles.drawer_header__close}><X /></div>
                </div>
                {children}
            </div>
        </div>
    )
}