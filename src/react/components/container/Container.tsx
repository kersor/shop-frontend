import { PropsWithChildren } from "react"
import styles from './styles.module.css'

interface Props {
    
}

export const Conatiner = ({
    children
}: PropsWithChildren<Props>) => {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}