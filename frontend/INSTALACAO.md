# Guia de Instalação e Execução - Frontend

## Pré-requisitos

Antes de começar, você precisa ter instalado:
- **Node.js 16+** - https://nodejs.org/
- **npm** (vem com Node.js)
- **Git** - https://git-scm.com/

## Passo a Passo

### 1. Clone o repositório

```bash
git clone https://github.com/escarflownerpt/crm-ai.git
cd crm-ai
```

### 2. Acesse a pasta do frontend

```bash
cd frontend
```

### 3. Instale as dependências

```bash
npm install
```

Isso vai criar a pasta `node_modules/` com todas as dependências do projeto.

### 4. Inicie o servidor de desenvolvimento

```bash
npm start
```

A aplicação abrirá automaticamente em `http://localhost:3000`

Se não abrir, acesse manualmente no seu navegador.

## 📱 Testando a Aplicação

Você verá:

1. **Tela de Login** - Faça login com qualquer email e senha
2. **Dashboard** - Visão geral com métricas
3. **Clientes** - Gerencie seus clientes
4. **Tarefas** - Crie e acompanhe tarefas
5. **IA Assistant** - Chat com IA (simulado por enquanto)

## 🎨 Estrutura do Frontend

```
frontend/
├── public/
│   └── index.html          # HTML principal
├── src/
│   ├── components/         # Componentes reutilizáveis
│   │   ├── ClientsList.js
│   │   ├── TasksList.js
│   │   └── AIChat.js
│   ├── pages/              # Páginas da aplicação
│   │   ├── LoginPage.js
│   │   └── Dashboard.js
│   ├── styles/             # Arquivos CSS
│   │   ├── App.css
│   │   ├── LoginPage.css
│   │   ├── Dashboard.css
│   │   ├── ClientsList.css
│   │   ├── TasksList.css
│   │   └── AIChat.css
│   ├── App.js              # Componente principal
│   ├── index.js            # Ponto de entrada
│   └── index.css           # Estilos globais
└── package.json            # Dependências do projeto
```

## 🔍 Principais Funcionalidades Implementadas

✅ **Login/Registro** - Formulário funcional (sem backend ainda)
✅ **Dashboard** - Visão geral com cards de métricas
✅ **Gerenciamento de Clientes** - CRUD com filtros
✅ **Gerenciamento de Tarefas** - Criar, marcar como concluído
✅ **IA Chat** - Chat interativo com sugestões
✅ **Responsivo** - Funciona em mobile, tablet e desktop

## 📝 Scripts Disponíveis

```bash
npm start      # Inicia o servidor de desenvolvimento
npm build      # Cria uma build para produção
npm test       # Executa testes
npm eject      # Expõe a configuração (cuidado com isso!)
```

## 🐛 Solução de Problemas

### Porta 3000 já está em uso?
```bash
npm start -- --port 3001
```

### Erro "npm command not found"
Certifique-se que Node.js está instalado:
```bash
node --version
npm --version
```

### Carregar arquivo de cache?
```bash
rm -rf node_modules
npm install
npm start
```

## 🚀 Próximos Passos

1. **Conectar com Backend** - Integrar a API Python
2. **Autenticação Real** - Usar JWT tokens
3. **Deploy** - Fazer deploy no Vercel
4. **Melhorias de UI** - Adicionar mais estilos e animações

## 📚 Recursos Úteis

- [React Docs](https://react.dev/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Guide](https://developer.mozilla.org/en-US/docs/Web/CSS)

---

**Dúvidas? Entre em contato ou abra uma issue no GitHub!**
