import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";

const usersRoute = Router();

//get /users
usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
        const users = [{ uuid: 33, name:'John', age: 32},{uuid: 34, name:'Mary', age: 24}];
        console.log(users);
        res.sendStatus(StatusCodes.OK).send( { users } );
})

usersRoute.get('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const users = [{ userName: "Mr.User" }];
    res.sendStatus(StatusCodes.OK).send( { uuid } );
})

usersRoute.post('/users', (req: Request<{ newUser: string }>, res: Response, next: NextFunction) => {
    const newUser = req.body.newUser;
    console.log(req.body);
    res.sendStatus(StatusCodes.OK).send( newUser );
})

usersRoute.put('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const modifiedUser = req.body;
    modifiedUser.uuid = uuid;

    res.sendStatus(StatusCodes.OK).send( modifiedUser);
})

usersRoute.delete('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    res.sendStatus(StatusCodes.OK);
    console.log('registro deletado');
})
export default usersRoute;