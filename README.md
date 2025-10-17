# 📝 Task Manager App

Um aplicativo web completo de gerenciamento de tarefas (CRUD) utilizando Vanilla JavaScript, HTML5, CSS3 no front-end e Node.js + Express + MongoDB no back-end. Permite criar, listar, editar, marcar como concluída e deletar tarefas com interface dinâmica e persistência de dados.

## 🚀 Funcionalidades
- Adicionar tarefas com título.
- Listar todas as tarefas existentes.
- Editar título e marcar tarefas como concluídas.
- Deletar tarefas individualmente.
- Atualização dinâmica do front-end sem recarregar a página.
- Comunicação via API RESTful.

## 🛠 Tecnologias Utilizadas
- Back-end: Node.js, Express, MongoDB (Atlas), Mongoose, CORS, dotenv
- Front-end: HTML5, CSS3, Vanilla JavaScript, Axios, Font Awesome

## ⚙️ Pré-requisitos
- Node.js instalado (https://nodejs.org/)
- Conta no MongoDB Atlas ou MongoDB local
- Editor de código (ex: VSCode)
- Live Server (opcional, para rodar o front-end)

## 📝 Instalação
1. Clone o repositório: `git clone https://github.com/seu-usuario/task-manager.git`
2. Acesse a pasta: `cd task-manager`
3. Instale as dependências do back-end: `npm install`
4. Crie um arquivo `.env` na raiz do projeto com:
   MONGO_URI=<SUA_STRING_DE_CONEXÃO_MONGO>
   PORT=3000
5. Inicie o servidor: `npm start`  
O back-end estará rodando em http://localhost:3000

## 💻 Uso
**Front-end:**
1. Abra `index.html` com Live Server ou outro servidor local.
2. Adicione tarefas usando o formulário.
3. Clique em uma tarefa para editá-la em `edit-task.html`.
4. Marque tarefas como concluídas ou delete tarefas.
5. Todas as alterações são salvas no MongoDB automaticamente.

**API RESTful (Back-end):**
- `GET /api/v1/tasks` – lista todas as tarefas
- `POST /api/v1/tasks` – cria uma nova tarefa (`{ title: "Minha tarefa" }`)
- `GET /api/v1/tasks/:id` – busca uma tarefa pelo ID
- `PATCH /api/v1/tasks/:id` – atualiza título e status (`{ title: "...", completed: true/false }`)
- `DELETE /api/v1/tasks/:id` – deleta uma tarefa

## 📂 Estrutura do Projeto
task-manager/
├─ backend/
│  ├─ db/connect.js
│  ├─ models/Task.js
│  ├─ routes/tasks.js
│  ├─ controllers/tasksController.js
│  └─ server.js
├─ frontend/
│  ├─ index.html
│  ├─ edit-task.html
│  ├─ browser-app.js
│  ├─ edit-task.js
│  ├─ main.css
│  └─ normalize.css

## 🔧 Contribuição
1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Faça commits (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## ⚠️ Observações
- Certifique-se de que o MongoDB está rodando antes de iniciar o servidor.
- Para evitar problemas de CORS, o front-end e o back-end devem estar em portas diferentes, mas o back-end precisa permitir requisições do front-end usando `cors()`.

## 📄 Licença
Este projeto está licenciado sob a MIT License.

