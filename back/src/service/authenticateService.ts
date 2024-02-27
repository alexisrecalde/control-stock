import { comparePassword, generateToken } from '../../utils/authUtils';
import UserDao from "../DAO/userDAO";
import { AuthTokenResponse } from '../types/userType';


export const authenticate = async (email: string, password: string): Promise<AuthTokenResponse> => {
    const passwordHash = await UserDao.getPasswordByEmail(email);

    if (!passwordHash) {
        return null;
    }

    const passwordMatch = await comparePassword(password, passwordHash.password); 

    if (!passwordMatch) {
        return null;
    }

    const user = await UserDao.getUserByEmail(email);

    const token = generateToken({ id: user.id, rol: user.rol });

    const authTokenResponse = {
        access_token: token,
        user
    }

    return authTokenResponse;
}
