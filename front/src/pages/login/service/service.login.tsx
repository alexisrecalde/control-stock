import { AxiosResponse } from 'axios';
import { getApi } from '../../../config/axiosProvider';
import { AuthResponse } from '../../../types/auth.types';

export const login = async (email: string, password: string): Promise<AxiosResponse<AuthResponse>> => {
    return await getApi(false).post('auth/login', { email, password }).then(response => {
        return response;        
    });
}