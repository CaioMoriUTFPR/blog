import express, { urlencoded } from 'express';

const app = express();
const porta = 80;
const conteudoInicial = 'Lorem ipsum.';
const conteudoContato = 'dolor sit amet.';
const conteudoSobre = 'consectetur adipiscing elit.';

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index', {
    conteudo: conteudoInicial,
  });
});

app.get('/contato', (req, res) => {
  res.render('contato', {
    conteudo: conteudoContato,
  });
});

app.get('/sobre', (req, res) => {
  res.render('sobre', {
    conteudo: conteudoSobre,
  });
});

app.post('/', (req, res) => {
  req.body;
  res.redirect('/');
});

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});
