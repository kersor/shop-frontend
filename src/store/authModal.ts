import { create } from 'zustand'
import { User } from '../scripts/types/user'

interface IAuthModal {
    isOpen: boolean
    setOpen: (open: boolean) => void
}

const StateAuth = {
    isOpen: false,
}

export const useAuthModal = create<IAuthModal>((set, get) => ({
    ...StateAuth,
    setOpen: (open: boolean) => set({isOpen: open}),
}))
