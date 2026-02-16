# 🌐 Programação para a Web (2025.1)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-CC6699?style=flat&logo=sass&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat&logo=prisma&logoColor=white)

Este diretório contém os projetos e exercícios práticos desenvolvidos durante a disciplina de Programação Web. O curso foca tanto no **Frontend (Client-side)** com lógica de jogos, quanto no **Backend (Server-side)** com arquitetura moderna em Node.js.

---

## 🕹️ Trabalho Prático 01: Space Shooter Game
Um jogo clássico de tiro espacial desenvolvido em **JavaScript Vanilla**, focado em manipulação intensiva do **Document Object Model (DOM)**.

**Mecânicas Implementadas:**
* **Gerenciamento de Estados:** Controle total de início, pausa (`tecla P`), Game Over e Reinício.
* **Motor de Inimigos:** Implementação de discos voadores e asteroides (grandes e pequenos) com velocidades aleatórias.
* **Dificuldade Progressiva:** Aumento automático da velocidade dos obstáculos a cada minuto de jogo.
* **Sistema de Vidas e Danos:** Limite de 3 vidas com feedback visual de "nave danificada" por 5 segundos após colisões.
* **Otimização:** Remoção automática de elementos da árvore DOM quando destruídos ou fora da tela para poupar recursos.

---

## 🌐 Trabalho Prático 02: ExpTs (Web App Space Shooter)
Desenvolvimento do backend e infraestrutura para uma plataforma que hospeda o jogo, utilizando **Express**, **TypeScript** e o padrão **MVC**.

**O que foi desenvolvido (Etapa ExpTs - Exercícios 1 a 13):**
* **Arquitetura MVC:** Organização modular entre modelos, visões e controladores.
* **Template Engine:** Uso de **Handlebars** para renderização dinâmica, incluindo layouts globais e helpers customizados.
* **Segurança e Infra:**
    * Validação de variáveis de ambiente com `envalid`.
    * Middleware de `logger` customizado para registro de acessos em arquivos.
    * Integração de **SASS** para estilização avançada.
* **Persistência com Prisma ORM:** Configuração do banco de dados e criação dos modelos `Major` (Cursos), `User` (Usuários) e `GameSession` (Sessões de Jogo).
* **CRUD e Validação:** Implementação de cadastros com validação rigorosa de dados via pacote **Joi**.

---

## 📚 Ementa e Conceitos Estudados
* Fundamentos de HTML5 e CSS3 (Layouts e Semântica).
* Programação Client-side (JavaScript Moderno).
* Programação Server-side (Node.js e TypeScript).
* Mapeamento Objeto-Relacional (ORM).
* Gerenciamento de Cookies e Sessões de Usuário.

---
🚀 Parte integrante da graduação em Ciência da Computação.