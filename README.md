## 🌐 Front-Projetodevops
Este repositório contém o frontend do projeto AnonyQuest, desenvolvido para a disciplina de DevOps. O projeto é composto por três partes principais:

- 🎨 **Frontend (interface do usuário)** → [este repositório](https://github.com/victtows/Front-Projetodevops.git)
- ⚙️ **Backend (Laravel)** → [AnonyQuest](https://github.com/FabioPYAug/AnonyQuest.git)
- 🛢️ **Banco de Dados (MySQL)** → [MySQL-Projetodevops](https://github.com/Otaviopax/MySQL-Projetodevops.git)
- 📦 **Provisionamento completo com Vagrant e Kubernetes** → [Trabalho-final---Devops](https://github.com/victtows/Trabalho-final---Devops.git)

⚠️ Aviso: A integração completa entre frontend, backend e banco não foi finalizada. No entanto, o processo de criação da VM com Vagrant foi bem-sucedido.

## Clone o repositório

```bash
git clone https://github.com/victtows/Front-Projetodevops.git
```

```bash
cd Front-Projetodevops
```

## 🖥️ Ambiente de Desenvolvimento com Vagrant

**O ambiente completo pode ser simulado com o repositório:**

[Trabalho-final---Devops](https://github.com/victtows/Trabalho-final---Devops.git)

*Esse repositório configura uma máquina virtual pronta para rodar o serviço*

**Para utilizar:**

```bash
git clone https://github.com/victtows/Trabalho-final---Devops.git
```

## Acessar pelo navegador

**⚠️Importante:** faça os passos anteriores do repositorio acima se nao foi feito, ate chegar nessa parte 

**Suba a máquina virtual (se não tiver feito esse passo antes):**
```bash 
vagrant up
```

**Acesse a máquina virtual:**

```bash
ssh vagrant@<IP_DA_VM>
```

**Dentro da VM, execute o port-forward do serviço do frontend:**

```bash
kubectl port-forward svc/frontend-front-projetofevops --address 0.0.0.0 8000:80 --frontend
kubectl port-forward svc/frontend-front-projetofevops --address 0.0.0.0 8181:80 --backend
kubectl port-forward svc/frontend-front-projetofevops --address 0.0.0.0 8002:80 --banco mysql
```

**No seu navegador (fora da VM), acesse:**

```bash
http://<IP_DA_VM>:8000
```


## 👨‍💻 Autores

@victtows – Frontend & Vagrant
@FabioPYAug – Backend (Laravel)
@Otaviopax – Banco de Dados (MySQL)

