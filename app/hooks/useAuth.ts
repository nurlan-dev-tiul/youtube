import { IAuthData } from "services/auth/auth.helper";

export const useAuth = ():IAuthData => {
    return {
        user: null,
        accessToken: ''
    }
}