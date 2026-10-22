const express = require('express'); // Traz o pacote express para dentro do arquivo.
const app = express(); // Cria o servidor e guarda em "app".

app.use(express.json()); // Configura o servidor para entender JSON.

app.get('/', (req, res) =>{
    res.send('Gerenciador de entregas no ar!')
}); // Rota inicial: confirma que o servidor está no ar.

app.listen(3000, ()=> {
    console.log('Servidor rodando em http://localhost:3000') 
}); // Liga o servidor e espera os pedidos na porta 3000