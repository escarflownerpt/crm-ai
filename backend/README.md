# Backend - CRM com AI

API Python com FastAPI para o CRM.

## Instalação

```bash
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

## Executar

```bash
python app.py
```

A API estará disponível em `http://localhost:8000`

## Estrutura

- `app.py` - Arquivo principal da aplicação
- `models.py` - Modelos do banco de dados
- `routes.py` - Endpoints da API
- `ai_service.py` - Integração com OpenAI
- `requirements.txt` - Dependências Python

## Variáveis de Ambiente

Crie um arquivo `.env`:

```
DATABASE_URL=postgresql://user:password@localhost/crm_ai
OPENAI_API_KEY=sk-...
SECRET_KEY=sua-chave-secreta
```

## Endpoints principais

- `POST /auth/register` - Registrar novo usuário
- `POST /auth/login` - Login
- `GET /clients` - Listar clientes
- `POST /clients` - Criar cliente
- `GET /clients/{id}` - Obter cliente
- `PUT /clients/{id}` - Editar cliente
- `DELETE /clients/{id}` - Deletar cliente