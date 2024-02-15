import express, { Request, Response, Router } from "express";
import { Users } from "../entity/User";
import { createUser, getUserById, getUsers } from "../service/userService";


const router: Router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    const users = await getUsers();
    res.status(200).json(users);
});

router.post("/create", async (req: Request, res: Response) => {
    const user: Users = req.body;
    const newUser = await createUser(user)
    res.status(200).json(newUser);
});

router.get("/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    const user = await getUserById(id);
    res.status(200).json(user);
});






export default router;
