import { IVideo } from './../../types/video.interface';
import { apiClient } from './../api';

//! Сервис для авторизации и регистрации
export const VideoService = {
    // Все видео
    async getAll(){
        const { data } = await apiClient.get<IVideo[]>('/video');
        return data;
    },

    // Конкретное одно видео
    async getVideo(id: number){
        const { data } = await apiClient.get<IVideo>(`/video/${id}`);
        return data;
    },

    // Популярные видео
    async getPopular(){
        const { data } = await apiClient.get<IVideo[]>('/video/popular');
        return data;
    },
}