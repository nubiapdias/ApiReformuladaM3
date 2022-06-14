import Jogo from '../models/jogos.model.js';
import mongoose from 'mongoose';

const verificarIdDeJogoMiddleware = async (request, response, next) => {
  const id = request.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return response.status(400).send({ message: 'ID inválido!' });
  }

  const jogo = await Jogo.findById(id);

  if (!jogo) {
    return response.status(404).send('Jogo não encontrada!');
  }

  next();
};

export default verificarIdDeJogoMiddleware;