import React, { useMemo, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Conatiner } from '../../components/container/Container'
import styles from './styles.module.css'
import { PageTitle } from '../../components/ui/pageTitle/PageTitle'

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
  }
]

const PersonalLayout = () => {
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
          </div>
          <Outlet />
        </div>
      </div>
    </Conatiner>
  )
}

export default PersonalLayout