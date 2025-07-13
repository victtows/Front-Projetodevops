## 🌐 Front-Projetodevops
Este repositório contém o frontend do projeto AnonyQuest, desenvolvido para a disciplina de DevOps. O projeto é composto por três partes principais:

Frontend (este repositório)

Backend

Banco de Dados

Além disso, também foi utilizado o Vagrant para provisionamento automático de uma máquina virtual que simula o ambiente de produção.

⚠️ Aviso: A integração completa entre frontend, backend e banco não foi finalizada. No entanto, o processo de criação da VM com Vagrant foi bem-sucedido.

## 📁 Estrutura do Projeto
```bash
Front-Projetodevops/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   └── App.jsx
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
🚀 Como executar o frontend
Pré-requisitos: Node.js, npm ou yarn
```

## Clone o repositório
git clone https://github.com/victtows/Front-Projetodevops.git
cd Front-Projetodevops

## Instale as dependências
npm install
ou
yarn install

## Rode o projeto
npm run dev
ou
yarn dev
A aplicação estará disponível em http://localhost:5173 (ou porta configurada).

## 🖥️ Ambiente de Desenvolvimento com Vagrant
O ambiente completo pode ser simulado com o repositório:

🔗 Trabalho-final---Devops (Vagrant)

Esse repositório configura uma máquina virtual pronta para rodar os serviços com:

Ubuntu

Node.js

MySQL

Nginx/Apache (dependendo da configuração)

Para utilizar:

git clone https://github.com/victtows/Trabalho-final---Devops.git
cd Trabalho-final---Devops
vagrant up
🧱 Repositórios Complementares
🔙 Backend: AnonyQuest (FastAPI)

🛢️ Banco de Dados: MySQL-Projetodevops

🖥️ Ambiente com Vagrant: Trabalho-final---Devops

⚙️ Tecnologias Utilizadas
React (Vite)

JavaScript

Node.js

HTML & CSS

Vagrant (provisionamento da VM)

📌 Status do Projeto
✅ Frontend desenvolvido
✅ Provisionamento com Vagrant funcional
❌ Integração frontend ↔ backend ↔ banco não realizada

👨‍💻 Autores
@victtows – Frontend & Vagrant

@FabioPYAug – Backend (FastAPI)

@Otaviopax – Banco de Dados (MySQL)

