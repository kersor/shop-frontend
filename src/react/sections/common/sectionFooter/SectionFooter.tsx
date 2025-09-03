import React from 'react'
import styles from './styles.module.css'
import { Conatiner } from '../../../components/container/Container'

export const SectionFooter = () => {
  return (
    <Conatiner>
        <div className={styles.wrapper}>
            <div>© 2025 LOGO все права защищены</div>
            <div>Telegram WhatsApp Vkontakte</div>
        </div>
    </Conatiner>
  )
}
