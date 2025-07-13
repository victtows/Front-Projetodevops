## 🌐 Front-Projetodevops
Este repositório contém o frontend do projeto AnonyQuest, desenvolvido para a disciplina de DevOps. O projeto é composto por três partes principais:

- 🎨 **Frontend (interface do usuário)** → [este repositório](https://github.com/victtows/Front-Projetodevops.git)
- ⚙️ **Backend (Laravel)** → [AnonyQuest](https://github.com/FabioPYAug/AnonyQuest.git)
- 🛢️ **Banco de Dados (MySQL)** → [MySQL-Projetodevops](https://github.com/Otaviopax/MySQL-Projetodevops.git)
- 📦 **Provisionamento completo com Vagrant e Kubernetes** → [Trabalho-final---Devops](https://github.com/victtows/Trabalho-final---Devops.git)

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
```

## Clone o repositório

git clone https://github.com/victtows/Front-Projetodevops.git

cd Front-Projetodevops


## 🖥️ Ambiente de Desenvolvimento com Vagrant

**O ambiente completo pode ser simulado com o repositório:**

[Trabalho-final---Devops](https://github.com/victtows/Trabalho-final---Devops.git)

*Esse repositório configura uma máquina virtual pronta para rodar o serviço*

**Para utilizar:**

git clone https://github.com/victtows/Trabalho-final---Devops.git

**Suba a máquina virtual:**

vagrant up

**Acesse a máquina virtual:**

ssh vagrant@<IP_DA_VM>

**Dentro da VM, execute o port-forward do serviço do frontend:**

kubectl port-forward svc/frontend-front-projetofevops --address 0.0.0.0 8000:80

**No seu navegador (fora da VM), acesse:**

http://<IP_DA_VM>:8000


## 👨‍💻 Autores
@victtows – Frontend & Vagrant

@FabioPYAug – Backend (FastAPI)

@Otaviopax – Banco de Dados (MySQL)

