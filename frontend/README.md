# Frontend - CRM com AI

Interface React para o CRM.

## Instalação

```bash
npm install
```

## Executar

```bash
npm start
```

A aplicação estará disponível em `http://localhost:3000`

## Estrutura

```
src/
├── components/    # Componentes React reutilizáveis
├── pages/        # Páginas da aplicação
├── services/     # Serviços (API calls)
├── context/      # Context API para estado global
├── App.js        # Componente raiz
└── index.js      # Ponto de entrada
```

## Scripts disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm build` - Cria build de produção
- `npm test` - Executa testes

## Componentes principais

- `LoginPage` - Tela de login/registro
- `Dashboard` - Painel principal
- `ClientsList` - Lista de clientes
- `ClientForm` - Formulário de cliente
- `InteractionsList` - Histórico de interações
- `TasksList` - Lista de tarefas