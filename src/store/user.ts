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
    surname: "",

    countCart: 0,
}

export const useUser = create<IUser>((set, get) => ({
    user: StateUser,

    setUser: (user: User) => set({user: user}),
    cleanUser: () => set({user: StateUser}),

    updateCartCount: (count: number) => 
        set((state) => ({
            user: {
                ...state.user,
                countCart: count
            }
        }))
    
}))
