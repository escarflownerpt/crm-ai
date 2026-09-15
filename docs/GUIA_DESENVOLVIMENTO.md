# Guia de Desenvolvimento

## Como contribuir no projeto

### Configuração Inicial

1. **Clone o repositório**
   ```bash
   git clone https://github.com/escarflownerpt/crm-ai.git
   cd crm-ai
   ```

2. **Crie uma branch para sua feature**
   ```bash
   git checkout -b feature/sua-feature
   ```

### Desenvolvendo o Backend

1. **Crie um ambiente virtual Python**
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # Windows: venv\Scripts\activate
   ```

2. **Instale as dependências**
   ```bash
   pip install -r requirements.txt
   ```

3. **Configure variáveis de ambiente**
   ```bash
   cp .env.example .env
   # Edite o arquivo .env com seus valores
   ```

4. **Execute a aplicação**
   ```bash
   python app.py
   ```

5. **Acesse a documentação da API**
   ```
   http://localhost:8000/docs
   ```

### Desenvolvendo o Frontend

1. **Instale as dependências**
   ```bash
   cd frontend
   npm install
   ```

2. **Configure variáveis de ambiente**
   ```bash
   cp .env.example .env.local
   # Edite o arquivo com seus valores
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm start
   ```

4. **Acesse a aplicação**
   ```
   http://localhost:3000
   ```

### Git Workflow

1. **Faça commits descritivos**
   ```bash
   git add .
   git commit -m "feat: adicionar login de usuários"
   ```

   Formatos de commit:
   - `feat:` - Nova funcionalidade
   - `fix:` - Correção de bug
   - `docs:` - Documentação
   - `style:` - Formatação de código
   - `refactor:` - Refatoração
   - `test:` - Testes

2. **Faça push da sua branch**
   ```bash
   git push origin feature/sua-feature
   ```

3. **Abra um Pull Request (PR)**
   - Descreva o que você fez
   - Adicione screenshots se applicable
   - Mencione problemas resolvidos (#issue-number)

### Padrões de Código

#### Python (Backend)
- Siga PEP 8
- Use type hints
- Documente funções e classes
- Use nomes descritivos

#### JavaScript/React (Frontend)
- Use arrow functions
- Componentes funcionais com hooks
- Nomes de componentes em PascalCase
- Nomes de variáveis em camelCase
- Adicione comentários para lógica complexa

### Testando

#### Backend
```bash
pytest tests/
```

#### Frontend
```bash
npm test
```

### Enviando um Pull Request

1. Certifique-se que seu código não quebra nada
2. Adicione testes para novas funcionalidades
3. Atualize a documentação se necessário
4. Faça um rebase com a branch main antes de submeter

### Antes de fazer commit

- [ ] Código funcionando
- [ ] Sem erros de linting
- [ ] Testes passando
- [ ] Documentação atualizada
- [ ] Commit message descritiva

---

**Obrigado por contribuir! 🙌**