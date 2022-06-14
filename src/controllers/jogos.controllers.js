import JogosService from '../services/jogos.services.js';

const JogoService = new JogosService();

class JogosControllers {
  async listarTodos(request, response) {
    try {
      const jogos = await JogoService.listarTodos();

      response.send(jogos);
    } catch (error) {
      response.status(error.status).send(error.message);
    }
  }

  async listarUmJogoPorId(request, response) {
    const id = request.params.id;

    const jogo = await JogoService.listarUmJogoPorId({ id });

    response.send(jogo);
  }

  async criarNovoJogo(request, response) {
    const { nome, descricao, foto, preco } = request.body;

    try {
      const novoJogo = await JogoService.criarNovoJogo({
        nome,
        descricao,
        preco,
        foto,
      });

      response.status(201).send(novoJogo);
    } catch (error) {
      if (error.code === 11000) {
        response.status(400).send('Jogo já cadastrado');
      }
    }
  }

  async atualizarJogo(request, response) {
    const { nome, descricao, foto, preco } = request.body;
    const id = request.params.id;

    try {
      const jogoAtualizado = await JogoService.atualizarJogo({
        nome,
        descricao,
        foto,
        preco,
        id,
      });

      response.send(jogoAtualizado);
    } catch (error) {
      if (error.code === 11000) {
        response.status(400).send('Jogo já cadastrado');
      }
    }
  }

  async excluirJogo(request, response) {
    const id = request.params.id;

    const jogo = await JogoService.excluirJogo({ id });

    response.status(200).send(jogo);
  }
}

export default JogosControllers;