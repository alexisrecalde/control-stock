
import { compare, hash } from "bcryptjs";
import jwt from 'jsonwebtoken';
import UserDao from '../src/DAO/userDAO';
import { User } from '../src/types/userType';
import dotenv from 'dotenv';
dotenv.config();

export const generateToken = (payload: object) => {
    const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: 86400
    });
        return token;
}

export const comparePassword = async (password : string, hash : string) => {
    return compare(password, hash);
}

export const register = async (user: User): Promise<{ registered: boolean }> => {
    const newUser = await UserDao.registerUser(user)
    return { registered: true };
}

export const hashPassword = async (password: string) => {
    const saltRounds = 10;
    return await hash(password, saltRounds);
}



//    async register(password: string, auth_code: string): Promise<User | null> {
//         const user = await this.user.getUserByAuthCode(auth_code);
//         if (!user) {
//             return null;
//         }

//         const hashedPassword = await this.authUtils.hashPassword(password);
//         const userAuth = await this.user.register(hashedPassword, auth_code);
        
//         await this.user.deleteAuthCode(auth_code);
//         return userAuth!;
//     }
