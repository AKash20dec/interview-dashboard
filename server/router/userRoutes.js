import { Router } from "express";
import { addUser } from "../controller/userController.js";
import { getUsers } from "../controller/userController.js";
import { deleteUser } from "../controller/userController.js";
import { updateUser } from "../controller/userController.js";
const userRouter = Router();


userRouter
    .route('/')
    .get(getUsers);

    userRouter
    .route('/:id')
    .put(updateUser)
    .delete(deleteUser);
userRouter
    .route('/adduser')
    .post(addUser)




export default userRouter;