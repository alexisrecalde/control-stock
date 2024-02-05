import { hashPassword } from '../../utils/authUtils';
import UserDao from "../DAO/userDAO";
import { Users } from "../entity/User";
import { User } from '../types/userType';


export const getUsers = async (): Promise<User[]> => {
    const users = await UserDao.getUsers();
    return users;
}

// get by id
export const getUserById = async (id: string): Promise<User> => {
    const user = await UserDao.getUserById(id);
    return user;
}

// create user

export const createUser = async (user: User): Promise<Partial<User>> => {
    const hashed = hashPassword(user.password);
    const hashedPassword = await hashed;
    const userToSave = {
        ...user,
        password: hashedPassword
    }
    const newUser = await UserDao.registerUser(userToSave);
    return newUser;
}
