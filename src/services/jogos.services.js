import Jogo from '../models/jogos.model.js';

class JogosService {
  async listarTodos() {
    const jogos = await Jogo.find();

    if (jogos.length === 0) {
      throw { status: 404, message: 'Nenhum jogo encontrado' };
    }

    return jogos;
  }

  async listarUmJogoPorId({ id }) {
    const jogoSelecionado = await Jogo.findById(id);

    return jogoSelecionado;
  }

  async criarNovoJogo({ nome, descricao, foto, preco }) {
    const novoJogo = {
      nome,
      descricao,
      foto,
      preco,
    };

    try {
      const jogo = await Jogo.create(novoJogo);

      return jogo;
    } catch (error) {
      throw error;
    }
  }

  async atualizarJogo({ nome, descricao, foto, preco, id }) {
    const jogoAtualizado = {
      nomr,
      descricao,
      foto,
      preco,
    };

    try {
      await Jogo.updateOne({ _id: id }, jogoAtualizado);

      const jogo = await Jogo.findById(id);

      return jogo;
    } catch (error) {
      throw error;
    }
  }

  async excluirJogo({ id }) {
    const jogo = await Jogo.findByIdAndDelete(id);

    return jogo;
  }
}

export default JogosService;