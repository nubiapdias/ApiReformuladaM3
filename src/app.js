import JogosRouter from './routes/jogos.routes.js';
import usuariosRouter from './routes/usuarios.routes.js';
import loginRouter from './routes/login.routes.js';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());


app.use('/jogos', JogosRouter);
app.use('/usuarios', usuariosRouter);
app.use('/login', loginRouter);

export default app;