import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import UserDao from '../DAO/userDAO';
import { User } from '../types/userType';

type DecodeToken = {
    id: string;
    iat: number;
    exp: number;
}

declare module "express-serve-static-core" {
    interface Request {
        user: User;
    }
}

export const authenticateToken = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(401)

    const userDecoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string) as DecodeToken;

    const user = await UserDao.getUserById(userDecoded.id)

    if (!user) {
        return res.sendStatus(403);
    }

    // verify role
    if (user.rol !== 'admin' && user.rol !== 'user') {
        return res.sendStatus(403);
    }

    req.user = user;
    next();
}