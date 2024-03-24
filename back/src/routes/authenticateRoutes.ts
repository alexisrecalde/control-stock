import express, { Request, Response, Router } from "express";
import { AppDataSource } from "../data-source";
import { Users } from "../entity/User";
import { createUser, getUserById, getUsers } from "../service/userService";
import { authenticate } from '../service/authenticateService';



const router: Router = express.Router();

router.post("/register", async (req: Request, res: Response) => {
    
    const user = req.body
    const users = await createUser(user);
    res.status(200).json(users);
});

// user authentication
router.post("/login", async (req: Request, res: Response) => {
    const { password, email } = req.body;
    console.log(req.body);
    
    const response = await authenticate(email, password);

    if (response === null) {
        res.status(401).json({ message: 'Invalid credentials' });
    }
    
    res.status(200).json(response);
});


export default router;
