import { Router } from "express";
import { UsersController } from "../controllers/UsersController";
import { parse } from "node:path";

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

usersRouter.get('/change-user-status/:id/:status', (request, response) =>{
    const id = request.params.id
    const status = request.params.status === 'true' ? true : false;
    const controller = new UsersController(request, response);
    controller.changeUserStatus(parseInt(id, 10), status);
})

export default usersRouter;