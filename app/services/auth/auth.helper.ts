//! Типы для данных которые будем получать из сервера
export interface IAuthData {
    user: {
        id: number,
        email: string
    },
    accessToken: string
}