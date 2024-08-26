//importamos o express
const express = require ("express");

//iniciamos o express
const app = express();

//parametros de rota (são obrigatórios)
app.get("/message/:id/:user", (request, response) => {
  const {id, user } = request.params;

  response.send(`Id da mensagem: ${id} - Usuário: ${user}`);
});

//parametros por consulta (não são obrigatórios)
app.get("/users", (request, response) => {
  const {page, limit} = request.query;

  response.send(`Página: ${page} - Limite: ${limit}`)
})

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));