import express, { Application, NextFunction, Request, Response } from 'express';

const app: Application = express();
const PORT: number = 3000;

app.use(express.json());

const porteiroMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log(`📢 Requisição recebida em: ${req.url}`);
  next();
};

app.use(porteiroMiddleware);

app.get('/usuarios', (req: Request, res: Response): Response => {
  return res.status(200).json({ mensagem: 'Lista de usuários' });
});

app.post('/usuarios', (req: Request, res: Response): Response => {
  const { nome } = req.body;
  if (!nome) return res.status(400).json({ mensagem: 'Nome é obrigatório!' });
  return res.status(201).json({ mensagem: `Usuário ${nome} criado com sucesso!` });
});

app.put('/usuarios/:id', (req: Request, res: Response): Response => {
  const { id } = req.params;
  const { nome, email } = req.body;

  if (!nome || !email) {
    return res.status(400).json({ mensagem: 'PUT exige nome e email completos' });
  }

  return res.status(200).json({
    mensagem: `Usuário ${id} substituído completamente`,
    dados: { nome, email },
  });
});

app.patch('/usuarios/:id', (req: Request, res: Response): Response => {
  const { id } = req.params;
  const camposEnviados = req.body;

  if (!camposEnviados || Object.keys(camposEnviados).length === 0) {
    return res.status(400).json({ mensagem: 'Envie ao menos um campo para atualizar' });
  }

  return res.status(200).json({
    mensagem: `Usuário ${id} atualizado parcialmente`,
    camposAtualizados: camposEnviados,
  });
});

app.delete('/usuarios/:id', (req: Request, res: Response): Response => {
  const { id } = req.params;
  return res.status(204).send();
});

app.get('/meu-nome', (req: Request, res: Response): Response => {
  return res.status(200).json({ nome: 'Athos' });
});

app.use((req: Request, res: Response): Response => {
  return res.status(404) .json({ mensagem: 'Rota não encontrada!' });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction): Response => {
  console.error('💥 Erro não tratado:', err.message);
  return res.status(500).json({ mensagem: 'Erro interno no servidor' });
});

app.listen(PORT, (): void => {
  console.log(`🔥 Servidor rodando em http://localhost:${PORT}`);
});