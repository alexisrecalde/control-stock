import { AppDataSource } from "../data-source";
import { Users } from "../entity/User";


export const getUsers = async (): Promise<Users[]> => {
    const users = await AppDataSource.getRepository(Users).find();
    return users;
}

// create user

export const createUser = async (user: Users): Promise<Users> => {
    const newUser = await AppDataSource.getRepository(Users).save(user);
    return newUser;
}