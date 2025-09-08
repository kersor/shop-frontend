import React, { PropsWithChildren } from 'react'
import { Navigate } from 'react-router-dom'
import { getToken } from './token'

const PrivateRoute = ({
    children
}: PropsWithChildren) => {
    const token = getToken().isAuth
    // localStorage.getItem(`${process.env.REACT_APP_KEY_TOKEN}`)

    if (!token) {
        return <Navigate to="/" replace />
    }

    return (
        <>
        {children}
        </>
    )
}

export default PrivateRoute