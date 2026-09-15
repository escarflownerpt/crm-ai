# CRM com AI Integrada 🤖

Um sistema de gestão de relacionamento com clientes (CRM) com inteligência artificial integrada, escalável para pequenas, médias e grandes empresas.

## 🎯 Visão Geral

Este projeto é um CRM moderno que permite:
- ✅ Gerenciar contatos e clientes
- ✅ Rastrear histórico de interações
- ✅ Gerenciar tarefas e follow-ups
- ✅ Usar IA (ChatGPT) para resumir conversas e gerar insights
- ✅ Dashboard com métricas importantes

## 🏗️ Arquitetura

```
Frontend (React) ↔ Backend (Python) ↔ Banco de Dados (PostgreSQL)
                        ↓
                    IA (OpenAI)
```

## 📁 Estrutura do Projeto

```
crm-ai/
├── frontend/          # Aplicação React (Interface do usuário)
├── backend/           # API Python (Lógica do servidor)
├── docs/              # Documentação
└── README.md          # Este arquivo
```

## 🚀 Como Começar

### Pré-requisitos
- Node.js 16+ (para Frontend)
- Python 3.9+ (para Backend)
- PostgreSQL 12+ (Banco de dados)
- Chave de API da OpenAI

### Instalação (em desenvolvimento)

#### Frontend
```bash
cd frontend
npm install
npm start
```

#### Backend
```bash
cd backend
pip install -r requirements.txt
python app.py
```

## 📚 Roadmap MVP (Fase 1)

### Backend
- [ ] Autenticação de usuários (Login/Registro)
- [ ] CRUD de Clientes (Create, Read, Update, Delete)
- [ ] CRUD de Interações (Ligações, Emails, Mensagens)
- [ ] CRUD de Tarefas
- [ ] Integração com OpenAI para resumos
- [ ] Sistema de permissões básico

### Frontend
- [ ] Tela de Login
- [ ] Dashboard com métricas
- [ ] Lista de Clientes
- [ ] Formulário para adicionar/editar clientes
- [ ] Histórico de interações
- [ ] Chat com IA para sugestões

### Banco de Dados
- [ ] Tabela de Usuários
- [ ] Tabela de Clientes
- [ ] Tabela de Interações
- [ ] Tabela de Tarefas

## 🤝 Contribuindo

Este é um projeto em desenvolvimento. Sugestões e melhorias são bem-vindas!

## 📄 Licença

MIT

---

**Desenvolvido com ❤️ para ajudar negócios a crescer**