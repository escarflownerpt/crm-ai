# Arquitetura do CRM com AI

## Visão Geral

Este documento descreve a arquitetura técnica do projeto CRM com IA integrada.

## Stack Tecnológico

### Frontend
- **React 18** - Framework JavaScript para UI
- **Axios** - Cliente HTTP para chamadas à API
- **Context API** - Gerenciamento de estado global
- **CSS Modules** ou **Tailwind** - Estilização

### Backend
- **FastAPI** - Framework Python rápido e moderno
- **SQLAlchemy** - ORM para banco de dados
- **Pydantic** - Validação de dados
- **JWT** - Autenticação com tokens
- **OpenAI SDK** - Integração com ChatGPT

### Banco de Dados
- **PostgreSQL** - Banco de dados relacional robusto
- **Alembic** - Migração de banco de dados

### DevOps
- **Docker** - Containerização (futura)
- **GitHub Actions** - CI/CD (futura)
- **Vercel** - Deploy do Frontend
- **Railway/Render** - Deploy do Backend

## Fluxo de Dados

```
┌─────────────────────┐
│    Frontend (React) │
│   navegador web     │
└──────────┬──────────┘
           │ HTTP/HTTPS
           ↓
┌─────────────────────┐
│   Backend (FastAPI) │
│   Processa lógica   │
└──────────┬──────────┘
           │
     ┌─────┴──────┐
     ↓            ↓
┌─────────┐   ┌──────────────┐
│  BD     │   │ OpenAI API   │
│(Postgres)   │ (ChatGPT)    │
└─────────┘   └──────────────┘
```

## Modelos de Dados (Banco de Dados)

### Usuários
```
id (PK)
email (UNIQUE)
password (hash)
nome
empresa
data_criacao
```

### Clientes
```
id (PK)
usuario_id (FK)
nome
email
telefone
empresa
status (prospect, cliente, inativo)
data_criacao
data_atualizacao
```

### Interações
```
id (PK)
cliente_id (FK)
usuario_id (FK)
tipo (email, ligacao, mensagem)
descricao
data
resumo_ai (gerado por ChatGPT)
```

### Tarefas
```
id (PK)
usuario_id (FK)
cliente_id (FK)
descricao
status (pendente, concluida)
data_vencimento
prioridade
data_criacao
```

## APIs Endpoints

### Autenticação
- `POST /auth/register` - Registrar novo usuário
- `POST /auth/login` - Fazer login
- `POST /auth/logout` - Fazer logout
- `GET /auth/profile` - Obter perfil do usuário

### Clientes
- `GET /clients` - Listar todos os clientes
- `POST /clients` - Criar novo cliente
- `GET /clients/{id}` - Obter detalhes do cliente
- `PUT /clients/{id}` - Editar cliente
- `DELETE /clients/{id}` - Deletar cliente
- `GET /clients/{id}/interactions` - Histórico de interações

### Interações
- `GET /interactions` - Listar interações
- `POST /interactions` - Criar interação
- `GET /interactions/{id}` - Detalhes da interação
- `PUT /interactions/{id}` - Editar interação
- `POST /interactions/{id}/summarize` - Gerar resumo com IA

### Tarefas
- `GET /tasks` - Listar tarefas
- `POST /tasks` - Criar tarefa
- `PUT /tasks/{id}` - Editar tarefa
- `DELETE /tasks/{id}` - Deletar tarefa

### IA
- `POST /ai/summarize` - Resumir texto com ChatGPT
- `POST /ai/suggest-actions` - Sugerir próximos passos
- `POST /ai/analyze-sentiment` - Analisar sentimento (futura)

## Segurança

- Senhas com hash (bcrypt)
- Autenticação com JWT
- CORS habilitado apenas para domínios autorizados
- Validação de entrada em todos os endpoints
- Variáveis de ambiente para dados sensíveis
- HTTPS em produção

## Deployment

### Frontend (Vercel)
1. Conectar repositório GitHub
2. Deploy automático em cada push para main
3. Environment variables configuradas

### Backend (Railway/Render)
1. Conectar repositório GitHub
2. Configurar variáveis de ambiente
3. Deploy automático
4. Banco de dados PostgreSQL na nuvem

## Performance

- Cache de dados no Frontend (localStorage, sessionStorage)
- Paginação em listas de clientes
- Indexação no banco de dados
- Lazy loading de imagens
- Compressão de assets

## Monitoramento e Logs

- Logs estruturados no Backend
- Rastreamento de erros (Sentry - futura)
- Análise de performance (New Relic - futura)
- Dashboards de métricas

---

Última atualização: 2026-09-15