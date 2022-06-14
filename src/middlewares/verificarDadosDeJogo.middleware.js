const verificarDadosDeJogoMiddleware = (request, response, next) => {
    const { nome, descricao, foto, preco } = request.body;
  
    if (!nome || !descricao || !foto || !preco) {
      return response.status(422).send('Dados incompletos');
    }
  
    next();
  };
  
  export default verificarDadosDeJogoMiddleware;
  