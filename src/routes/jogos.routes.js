import { Router } from 'express';
import JogosControllers from '../controllers/jogos.controllers.js';
import verificarIdDeJogoMiddleware from '../middlewares/verificarIdDeJogo.middleware.js';
import verificarDadosDeJogoMiddleware from '../middlewares/verificarDadosDeJogo.middleware.js';

const JogosRouter = Router();
const JogoControllers = new JogosControllers();

JogosRouter.get('/', JogoControllers.listarTodos);
JogosRouter.get(
  '/jogos/:id',
  verificarIdDeJogoMiddleware,
  JogoControllers.listarUmJogoPorId,
);
JogosRouter.post(
  '/criar-jogo',
  verificarDadosDeJogoMiddleware,
  JogoControllers.criarNovoJogo,
);
JogosRouter.put(
  '/atualizar-jogo/:id',
  verificarIdDeJogoMiddleware,
  verificarDadosDeJogoMiddleware,
  JogoControllers.atualizarJogo,
);
JogosRouter.delete(
  '/excluir-jogo/:id',
  verificarIdDeJogoMiddleware,
  JogoControllers.excluirJogo,
);

export default JogosRouter;