import { AppDataSource } from "../data-source";
import { Users } from "../entity/User";
import { EncryptedPassword, User } from '../types/userType';


namespace UserDao {

    export const getUsers = async (): Promise<User[]> => {
        const users = await AppDataSource.getRepository(Users)
            .find();
        return users;
    }
    
    export const createUser = async (user: User): Promise<Users> => {
        const newUser = await AppDataSource.getRepository(Users)
            .save(user);
        return newUser;
    }

    // get by id
    export const getUserById = async (id: string): Promise<Users> => {
        const user = await AppDataSource.getRepository(Users)
            .findOne({ where: { id } });
        return user;
    }

    // get password by email
    export const getPasswordByEmail = async (email: string): Promise<EncryptedPassword> => {
        const user = await AppDataSource.getRepository(Users)
            .findOne({ where: { email } });

        const encryptedPassword = {
            password: user.password,
        }

        return encryptedPassword
    }

    export const getUserByEmail = async (email: string): Promise<Partial<Users>> => {
        const user = await AppDataSource.getRepository(Users)
            .findOne({
                where: { email },
                select: ["id", "nombre", "apellido", "rol", "email"]
            });
        return user;
    }

    export const registerUser = async (user: User): Promise<Partial<User>> => {
        const newUser = AppDataSource
            .createQueryBuilder()
            .insert()
            .into(Users)
            .values(user)
            .returning(["id", "nombre", "apellido", "rol", "email"])
            .execute().
            then((result) => {
                return result.raw[0];
            });
        
        return newUser;
    }
}

export default UserDao;