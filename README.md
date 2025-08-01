# 💬 ChatGPT Clone - Node.js + React

## 🧠 Sobre o projeto

Este projeto é uma **replicação funcional do ChatGPT**, utilizando **React no front-end** e **Node.js com Express no back-end**, com integração à **API da OpenAI**.

Projeto desenvolvido como parte do desafio prático da **DIO (Digital Innovation One)** no curso ministrado por Felipe Aguiar, com personalizações e ajustes próprios.

---

## 🚀 Funcionalidades

- Interface moderna em React
- Integração com a OpenAI via API
- Histórico de conversas entre usuário e modelo
- Organização de componentes e estilos com boas práticas
- Front-end e back-end separados
- Suporte ao `.env` para segurança da chave da OpenAI

---

## 🧪 Tecnologias utilizadas

### Front-end

- React
- CSS
- JSX

### Back-end

- Node.js
- Express
- dotenv
- CORS
- OpenAI SDK

---

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/Lauren-Freitas/chatgpt-clone.git

# Acesse as pastas
cd chatgpt-clone

# Instale as dependências do back-end
cd server
npm install

# Instale as dependências do front-end
cd ../web
npm install
```

---

## 🧪 Como executar

### 1. Configure o arquivo `.env` no back-end com sua chave da OpenAI:

```env
OPENAI_API_KEY=sua-chave-aqui
```

### 2. Inicie o back-end:

```bash
cd server
npm run start
```

### 3. Em outro terminal, inicie o front-end:

```bash
cd web
npm run start
```

---

## 🌐 Acesse

Abra o navegador em: [http://localhost:3000](http://localhost:3000)

---

## 👩‍💻 Desenvolvido por

Lauren Freitas — [GitHub](https://github.com/Lauren-Freitas)

---

## 📚 Créditos e inspiração

- Desafio prático da DIO: [https://github.com/felipeAguiarCode/node-react-chatgpt-clone](https://github.com/felipeAguiarCode/node-react-chatgpt-clone)
- API da OpenAI: [https://platform.openai.com/docs](https://platform.openai.com/docs)
