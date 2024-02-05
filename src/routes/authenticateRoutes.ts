import express, { Request, Response, Router } from "express";
import { AppDataSource } from "../data-source";
import { Users } from "../entity/User";
import { createUser, getUserById, getUsers } from "../service/userService";



const router: Router = express.Router();

router.post("/register", async (req: Request, res: Response) => {
    const user = req.body
    const users = await createUser(user);
    res.status(200).json(users);
});


export default router;
