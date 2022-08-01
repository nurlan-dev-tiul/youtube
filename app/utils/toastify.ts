import { toast } from "react-toastify";

export const successToast = (message: string) => {
    return toast.success(`${message}`, {
        position: toast.POSITION.BOTTOM_RIGHT
    });
}

export const errorToast = (message: string) => {
    return toast.error(`${message}`, {
        position: toast.POSITION.BOTTOM_RIGHT
    });
}