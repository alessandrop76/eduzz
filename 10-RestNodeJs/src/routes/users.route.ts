import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import DatabaseError from "../errors/database.error.model";
import userRepository from "../repositories/user.repository";

const usersRoute = Router();

//get /users
usersRoute.get('/users', async (req: Request, res: Response, next: NextFunction) => {
        // const users = [{ uuid: 1, name:'John', age: 32},{uuid: 2, name:'Mary', age: 24}, {uuid: 3, name: 'Bob', age: 34}];
        const users = await userRepository.findAllUsers();
        console.log(users);
        res.status(200).send(users);
})

usersRoute.get('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    try {
        const uuid = req.params.uuid;
        // const users = [{ userName: "Mr.User" }];
        const user = await userRepository.findById(uuid);
        res.sendStatus(StatusCodes.OK).send(user);
    } catch (error) {
        console.log(error);
        next(error);
      }
   
})

usersRoute.post('/users', async (req: Request<{ newUser: string }>, res: Response, next: NextFunction) => {
    const newUser = req.body;
    console.log(req.body);
   const uuid = await userRepository.create(newUser);
    res.sendStatus(StatusCodes.OK).send(uuid);
})

usersRoute.put('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const modifiedUser = req.body;
    modifiedUser.uuid = uuid;
    await userRepository.update(modifiedUser);
    res.sendStatus(StatusCodes.OK).send( modifiedUser);
})

usersRoute.delete('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    await userRepository.remove(uuid);
    res.sendStatus(StatusCodes.OK).send("usuario deletado");
    console.log('registro deletado');
})
export default usersRoute; 