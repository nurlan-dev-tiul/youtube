import { IAuthData } from './auth.helper';
import { apiClient } from './../api';

//! Сервис для авторизации и регистрации
export const AuthService = {
    async login(email: string, password: string){
        const { data } = await apiClient.post<IAuthData>('/auth/login', {email, password});
        return data;
    },

    async register(email: string, password: string){
        const { data } = await apiClient.post<IAuthData>('/auth/register', {email, password});
        return data;
    },
}