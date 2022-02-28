import express from 'express';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';


const app = express();

//configuração da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 
//configuração das rotas
app.use(usersRoute);
app.use(statusRoute);

//congiguração do servidor
app.listen(3000, ()=>{
    console.log('listening on port 3000');
})
