import React, { useMemo, useState } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Conatiner } from '../../components/container/Container'
import styles from './styles.module.css'
import { PageTitle } from '../../components/ui/pageTitle/PageTitle'
import { useUser } from '../../../store/user'
import { cleanToken } from '../../../scripts/utils/token'
import { Logout } from '../../../scripts/utils/logout'

type TypePageTitle = "profile" | "order"

const pageTitle: Record<TypePageTitle, string> = {
  profile: "Личные данные",
  order: "История заказов"
}

const links = [
  {
    link: "order",
    name: "История заказов"
  },
  {
    link: "profile",
    name: "Личные данные"
  },

]

const PersonalLayout = () => {
  const navigate = useNavigate()
  const {cleanUser} = useUser(state => state)
  const pathName = useLocation()

  const pathname = useMemo(() => {
    const title = pathName.pathname.split("/")[pathName.pathname.split("/").length - 1]
    return pageTitle[title as TypePageTitle]
  }, [pathName])

  
  return (
    <Conatiner>
      <div className={styles.wrapper}>
        <PageTitle title={pathname} />
        <div className={styles.container}>
          <div className={styles.list_links}>
            {links.map((link) => (
              <Link className={`${styles.item_link} ${link.name === pathname && styles.item_link__active}`} to={link.link}>
                <span>{link.name}</span>
              </Link>
            ))}
            <div onClick={Logout} className={`${styles.item_link} ${styles.item_link__logout}`}>
              Выйти
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </Conatiner>
  )
}

export default PersonalLayout 