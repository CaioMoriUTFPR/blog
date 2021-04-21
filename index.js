import express, { urlencoded } from 'express';

const app = express();
const porta = 80;
const conteudoInicial =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu turpis lacinia, vehicula dolor sollicitudin, blandit felis.';

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index', {
    conteudo: conteudoInicial,
  });
});

app.post('/', (req, res) => {
  req.body;
  res.redirect('/');
});

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});
