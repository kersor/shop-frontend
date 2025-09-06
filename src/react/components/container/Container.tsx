import { PropsWithChildren } from "react"
import styls from './styles.module.css'

interface Props {
    styles?: any
}

export const Conatiner = ({
    children,
    styles
}: PropsWithChildren<Props>) => {
    return (
        <div className={styls.wrapper} style={styles}>
            {children}
        </div>
    )
}