import { AppDataSource } from "../data-source";
import { Users } from "../entity/User";


namespace UserDao {
    export const getUsers = async (): Promise<Users[]> => {
        const users = await AppDataSource.getRepository(Users).find();
        return users;
    }
    
    export const createUser = async (user: Users): Promise<Users> => {
        const newUser = await AppDataSource.getRepository(Users).save(user);
        return newUser;
    }

    // get by id
    export const getUserById = async (id: string): Promise<Users> => {
        const user = await AppDataSource.getRepository(Users).findOne({ where: { id } });
        return user;
    }
}

export default UserDao;