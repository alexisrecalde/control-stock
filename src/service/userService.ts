import UserDao from "../DAO/userDAO";
import { AppDataSource } from "../data-source";
import { Users } from "../entity/User";


export const getUsers = async (): Promise<Users[]> => {
    const users = await UserDao.getUsers();
    return users;
}

//get by id
// export const getUserById = async (id: string): Promise<Users> => {
//     const user = await AppDataSource.getRepository(Users).findOne(id);
//     return user;
// }

// create user

export const createUser = async (user: Users): Promise<Users> => {
    const newUser = await UserDao.createUser(user);
    return newUser;
}