import { getContentType } from './../utils/api.utils';
import axios from 'axios';

export const apiClient = axios.create({
    baseURL: 'http://localhost:4000/api',
    headers: getContentType()
})