export interface Toast {
    title: string
    type?: TypeOptions
}

export type TypeOptions = 'info' | 'success' | 'warning' | 'error' | 'default';