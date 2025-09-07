import { useUser } from "../../store/user"
import { cleanToken } from "./token"

export const Logout = () => {
    useUser.getState().cleanUser()
    cleanToken()
    window.location.replace("/");
}