import { Flip } from "react-toastify";
import { Toast } from "../types/toast";
import { toast } from 'react-toastify'

export const CustomToast = ({
    title,
    type = "error"
}: Toast) => {
    const method = type === "default" ? toast : toast[type as Exclude<typeof type, "default">];

    return method(title, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Flip,
    });
}