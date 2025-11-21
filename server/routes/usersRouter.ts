import { Router } from "express";
import { UsersController } from "../controllers/UsersController";

const usersRouter:Router = Router();

usersRouter.get('/get-all-users', (request, response) => {
    const controller = new UsersController(request, response);
    controller.getAllUsers(); 
})

export default usersRouter;