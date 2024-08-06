import express from 'express';
import productRoute from './router/productRoute';

const app = express();
const port = process.env.PORT || 8080;

//compatibilidade
app.use(express.json());

app.use('/', productRoute);

//rota não existente = 404
app.get('*', (req, res) => {
    return res.status(404).json({ message: 'página não encontrada' })
})

app.listen(port, () => {
    console.log('server status: on-line');
})