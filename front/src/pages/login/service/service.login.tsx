import { getApi } from '../../../config/axiosProvider';
import { AuthResponse } from '../../../types/auth.types';

export const login = async (email: string, password: string) : Promise<AuthResponse> => {
    return await getApi(false).post('auth/login', { email, password }).then(response => response.data);
}