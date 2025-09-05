import { create } from 'zustand'
import { User } from '../scripts/types/user'

interface IUser {
    user: User

    setUser: (user: User) => void
    cleanUser: () => void
}

const StateUser = {
    id: "",
    email: "",
    name: "",
    phone: "",
    surname: ""
}

export const useUser = create<IUser>((set) => ({
    user: StateUser,

    setUser: (user: User) => set({user: user}),
    cleanUser: () => set({user: StateUser})
}))
