import { IUser } from './../../types/user.interface';
import { apiClient } from './../api';

//! Сервис для авторизации и регистрации
export const UserService = {
    async getAll(){
        const { data } = await apiClient.get<IUser[]>('/user');
        return data;
    },

    async getUser(id: number){
        const { data } = await apiClient.get<IUser>(`/user/${id}`);
        return data;
    },
}