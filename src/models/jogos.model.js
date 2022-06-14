import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const JogoSchema = new Schema(
  {
    nome: { type: String, required: true, unique: true },
    descricao: { type: String, required: true },
    foto: { type: String, required: true },
    preco: { type: Number, required: true },
  },
  { versionKey: false },
);

const Jogo = model('jogos', JogoSchema);

export default Jogo;