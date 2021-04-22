import express, { urlencoded } from 'express';

const app = express();
const porta = 80;
const conteudoInicial = 'Lorem ipsum.';
const conteudoContato = 'dolor sit amet.';
const conteudoSobre = 'consectetur adipiscing elit.';
const postagem = [];
const tituloPost = [];

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index', {
    conteudo: conteudoInicial,
    postagem: postagem,
    titulo: tituloPost,
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

app.get('/postar', (req, res) => {
  res.render('postar');
});

app.post('/postar', (req, res) => {
  postagem.push(req.body.conteudoPost);
  tituloPost.push(req.body.tituloPost);
  res.redirect('/');
});

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});
