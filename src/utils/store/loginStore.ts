import { create } from "zustand"

interface LoginState {
    email: string
    password: string
    setEmail: (emailValue: string) => void
    setPassword: (passwordValue: string) => void
}

const useLoginStore = create<LoginState>()((set) => ({
    email: "",
    password: "",
    setEmail: (emailValue) => set(() => ({ email: emailValue })),
    setPassword: (passwordValue) => set(() => ({ password: passwordValue })),
}))

export default useLoginStore
