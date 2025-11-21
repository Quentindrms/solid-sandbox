import { Router } from "express";
import { UsersController } from "../controllers/UsersController";

const usersRouter:Router = Router();

usersRouter.get('/get-all-users', (request, response) => {
    const controller = new UsersController(request, response);
    console.log('Route /get-all-users');
    controller.getAllUsers(); 
})

usersRouter.get('/get-all-email', (request, response) => {
    const controller = new UsersController(request, response);
    controller.getAllUsersMail();
})

usersRouter.get('/get-all-identity', (request, response) => {
    const controller = new UsersController(request, response);
    controller.getAllUsersIdentity();
})

usersRouter.get('/get-identity-by-email/:email', (request, response) => {
    const controller = new UsersController(request, response);
    controller.getIdentityByEmail(request.params.email);
})

export default usersRouter;